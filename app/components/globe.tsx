import { Loader } from "lucide-react"
import { useEffect, useState } from "react"

export default function GlobeComponent({ locations }: { locations: any }) {
    const [globe, setGlobe] = useState(
        <div className="flex min-h-screen items-center justify-center">
            <Loader className="h-10 w-10 animate-spin" />
        </div>,
    )

    console.log(locations)

    const gData = Object.values(locations).map((location: any) => ({
        lat: location.lat,
        lng: location.long,
        label: location.human_readable_name,
        average_deviation: location.average_deviation,
        average_total: location.average_total,
        quiet_mean_tot: location.quiet_mean_tot,
        title: "Aurora",
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
                    showGraticules={true}
                    labelsData={gData}
                    labelText="title"
                    labelSize={0.2}
                    labelDotRadius={0.4}
                    // labelDotOrientation={(d) =>
                    //     labelsTopOrientation.has(d.label) ? "top" : "bottom"
                    // }
                    labelColor={(d: any) => d.color}
                    labelLabel={(d: any) => `
                      <div><b>Aurora</b></div>
                      <div>Location: ${d.label}</div>
                      <div><b>Data:</b></div>
                      <div>Latitude: ${d.lat}</div>
                      <div>Longitude: ${d.lng}</div>
                      <div>Average deviation: ${d.average_deviation}</div>
                      <div>Average total: ${d.average_total}</div>
                      <div>Quiet mean tot: ${d.quiet_mean_tot}</div>
                    `}
                />,
            )
        })
    }, [])

    return <>{globe}</>
}
