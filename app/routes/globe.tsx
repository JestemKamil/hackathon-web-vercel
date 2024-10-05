import GlobeComponent from "@/components/globe"
import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [
        { title: "Hackathon Web" },
        {
            name: "description",
            content: "Web app for NASA Space Apps hackathon ",
        },
    ]
}

export default function GlobeRoute() {
    return (
        <div>
            <GlobeComponent />
        </div>
    )
}
