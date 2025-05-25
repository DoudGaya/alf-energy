"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

// Define the project type
interface Project {
  id: number
  community: string
  localGovt: string
  latitude: number
  longitude: number
  capacity: number
  batch?: number
}

interface ProjectMapProps {
  projects: Project[]
}

// Define an interface for the Google Maps API
interface GoogleMapWindow extends Window {
  google?: {
    maps: {
      Map: any
      LatLngBounds: any
      LatLng: any
      Marker: any
      InfoWindow: any
      SymbolPath: any
      Animation: any
    }
  }
  initializeMap?: (containerId: string) => void
}

declare const window: GoogleMapWindow

export default function ProjectMap({ projects }: ProjectMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapInitializedRef = useRef(false)
  const containerId = useRef(`map-container-${Math.random().toString(36).substr(2, 9)}`).current

  useEffect(() => {
    // Skip if map is already initialized for this component instance
    if (mapInitializedRef.current) return
    
    const mapContainer = mapRef.current
    if (!mapContainer) return

    // Set the container ID
    mapContainer.id = containerId
    
    // Define the function to initialize the map
    const initializeMap = () => {
      if (mapInitializedRef.current || !window.google) return
      mapInitializedRef.current = true
      
      try {
        const { maps } = window.google
        
        // Create bounds and add all project locations
        const bounds = new maps.LatLngBounds()
        projects.forEach(project => {
          bounds.extend(new maps.LatLng(project.latitude, project.longitude))
        })
        
        // Create the map
        const map = new maps.Map(mapContainer, {
          center: bounds.isEmpty() ? { lat: 9.082, lng: 8.6753 } : bounds.getCenter(), // Default to Nigeria's center if no projects
          zoom: 10,
          styles: [
            { featureType: "administrative", elementType: "all", stylers: [{ saturation: -100 }] },
            { featureType: "administrative.province", elementType: "all", stylers: [{ visibility: "off" }] },
            { featureType: "landscape", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 65 }, { visibility: "on" }] },
            { featureType: "poi", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 50 }, { visibility: "simplified" }] },
            { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }] },
            { featureType: "road.highway", elementType: "all", stylers: [{ visibility: "simplified" }] },
            { featureType: "road.arterial", elementType: "all", stylers: [{ lightness: 30 }] },
            { featureType: "road.local", elementType: "all", stylers: [{ lightness: 40 }] },
            { featureType: "transit", elementType: "all", stylers: [{ saturation: -100 }, { visibility: "simplified" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ hue: "#ffff00" }, { lightness: -25 }, { saturation: -97 }] },
            { featureType: "water", elementType: "labels", stylers: [{ lightness: -25 }, { saturation: -100 }] }
          ]
        })
        
        // Fit the map to show all markers if we have projects
        if (!bounds.isEmpty()) {
          map.fitBounds(bounds)
        }
        
        // Create one InfoWindow to reuse
        const infoWindow = new maps.InfoWindow()
        
        // Add markers for each project
        projects.forEach(project => {
          // Determine marker color based on capacity
          let markerColor = "#4CAF50" // orange for small capacity
          if (project.capacity > 200) {
            markerColor = "#F44336" // Red for large capacity
          } else if (project.capacity > 100) {
            markerColor = "#FF9800" // Orange for medium capacity
          }
          
          // Create the marker
          const marker = new maps.Marker({
            position: { lat: project.latitude, lng: project.longitude },
            map,
            title: project.community,
            icon: {
              path: maps.SymbolPath.CIRCLE,
              fillColor: markerColor,
              fillOpacity: 0.9,
              strokeWeight: 2,
              strokeColor: "#FFFFFF",
              scale: 10,
            },
            animation: maps.Animation.DROP
          })
          
          // Add click listener to show info
          marker.addListener("click", () => {
            const content = `
              <div class="p-3">
                <h3 class="font-bold text-lg">${project.community}</h3>
                <p class="text-sm text-gray-600">Local Govt: ${project.localGovt}</p>
                <p class="text-sm text-gray-600">Capacity: ${project.capacity} MWp</p>
                <p class="text-sm text-gray-600">Batch: ${project.batch || 1}</p>
                <p class="text-sm text-gray-600">Coordinates: ${project.latitude.toFixed(6)}, ${project.longitude.toFixed(6)}</p>
              </div>
            `
            infoWindow.setContent(content)
            infoWindow.open(map, marker)
          })
        })
        
        setMapLoaded(true)
      } catch (error) {
        console.error("Error initializing map:", error)
      }
    }

    // Function to load Google Maps only once
    const loadGoogleMapsOnce = () => {
      // Check if Maps API is already loaded
      if (window.google?.maps) {
        initializeMap()
        return
      }
      
      // If we already have a script tag for Google Maps, wait for it to load
      const existingScript = document.getElementById("google-maps-script")
      if (existingScript) {
        const checkGoogleMapsLoaded = setInterval(() => {
          if (window.google?.maps) {
            clearInterval(checkGoogleMapsLoaded)
            initializeMap()
          }
        }, 100)
        
        setTimeout(() => {
          clearInterval(checkGoogleMapsLoaded)
        }, 10000)
        
        return
      }
      
      // Create a unique callback name for this script load
      const callbackName = `googleMapsInitialize_${Math.random().toString(36).substr(2, 9)}`
      
      // Add the callback to window
      window[callbackName] = () => {
        initializeMap()
        // Clean up the callback
        delete window[callbackName]
      }
      
      // Create and append the script element
      const script = document.createElement("script")
      script.id = "google-maps-script"
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}&callback=${callbackName}`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
    
    loadGoogleMapsOnce()
    
    return () => {
      // No need to remove the script tag since we might reuse it,
      // but we'll clean up any callbacks specific to this component instance
      if (window[containerId]) {
        delete window[containerId]
      }
    }
  }, [projects, containerId])

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full"></div>
      
      {/* Fallback/loading content */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
          <Zap className="h-12 w-12 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Map Loading...</h3>
          <p className="text-muted-foreground text-center max-w-md px-4">
            The interactive map of our solar mini grid projects is loading. If it doesn't appear, please check your
            internet connection or try again later.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.slice(0, 6).map((project) => (
              <Card key={project.id} className="p-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Badge variant="outline">{project.capacity} KWp</Badge>
                  </div>
                  <div>
                    <h4 className="font-bold">{project.community}</h4>
                    <p className="text-sm text-muted-foreground">{project.localGovt}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Extend the Window interface
declare global {
  interface Window {
    [key: string]: any
  }
}
