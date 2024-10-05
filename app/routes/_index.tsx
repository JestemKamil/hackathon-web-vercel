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

export default function Index() {
    return <div>test3</div>
}
