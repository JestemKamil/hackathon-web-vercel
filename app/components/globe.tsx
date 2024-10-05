import { Loader } from "lucide-react"
import { useEffect, useState } from "react"
import { GlobeProps } from "react-globe.gl"

export default function GlobeComponent() {
    const [globe, setGlobe] = useState(
        <div className="flex min-h-screen items-center justify-center">
            <Loader className="h-10 w-10 animate-spin" />
        </div>,
    )

    useEffect(() => {
        import("react-globe.gl").then((module) => {
            const Globe = module.default
            setGlobe(
                <Globe
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                />,
            )
        })
    }, [])

    return <>{globe}</>
}
