import GlobeComponent from "@/components/globe"
import type { MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

export const meta: MetaFunction = () => {
    return [
        { title: "Hackathon Web" },
        {
            name: "description",
            content: "Web app for NASA Space Apps hackathon ",
        },
    ]
}

export async function loader() {
    const response = await fetch(
        "https://aurora.hendrikpeter.net/api/aurora_data.json",
    )
    const json = await response.json()
    return json
}

export default function GlobeRoute() {
    const data = useLoaderData<typeof loader>()
    console.log(data.locations)
    return (
        <div>
            <GlobeComponent locations={data.locations} />
        </div>
    )
}
