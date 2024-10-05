import { Loader } from "lucide-react"
import { useEffect, useState } from "react"

export default function GlobeComponent({ locations }: { locations: any }) {
    const [globe, setGlobe] = useState(
        <div className="flex min-h-screen items-center justify-center">
            <Loader className="h-10 w-10 animate-spin" />
        </div>,
    )

    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`
    console.log(locations)

    const gData = Object.values(locations).map((location: any) => ({
        lat: location.lat,
        lng: location.long,
        size: 25,
        color: "#00ff00",
    }))
    useEffect(() => {
        import("react-globe.gl").then((module) => {
            const Globe = module.default
            setGlobe(
                <Globe
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                    backgroundColor="#0a0a0a"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    htmlElementsData={gData}
                    htmlElement={(d: any) => {
                        const el: any = document.createElement("div")
                        el.innerHTML = markerSvg
                        el.style.color = d.color
                        el.style.width = `${d.size}px`

                        el.style["pointer-events"] = "auto"
                        // el.style.cursor = "pointer"
                        // el.onclick = () =>
                        return el
                    }}
                />,
            )
        })
    }, [])

    return <>{globe}</>
}
