import { ShootingStars } from "@/components/aceternity/shooting-stars"
import { StarsBackground } from "@/components/aceternity/stars-background"
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

export default function Index() {
    return (
        <div className="relative flex min-h-screen w-full flex-col justify-center">
            <h2 className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-2 bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:flex-row md:gap-8 md:text-5xl md:leading-tight">
                <span>Shooting Star</span>
                <span className="text-lg font-thin text-white">x</span>
                <span>Star Background</span>
            </h2>
            <ShootingStars />
            <StarsBackground />
        </div>
    )
}
