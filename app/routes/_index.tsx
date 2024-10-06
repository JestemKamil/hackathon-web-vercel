import { ShootingStars } from "@/components/aceternity/shooting-stars"
import { StarsBackground } from "@/components/aceternity/stars-background"
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect"
import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"

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
    const words =
        "Download our mobile app to schedule notifications about cosmic events, view calendar and map about asteroids, auroras and much more!"
    return (
        <div className="relative flex min-h-screen w-full flex-col justify-center space-y-12">
            <h2 className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-2 bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:flex-row md:gap-8 md:text-5xl md:leading-tight">
                Explore space on interactive globe, map and calendar using any
                device
            </h2>
            <div className="flex justify-center">
                <Link
                    to="/globe"
                    prefetch="render"
                    className="relative z-50 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        View globe
                    </span>
                </Link>
            </div>
            <div className="flex justify-center text-center">
                <TextGenerateEffect className="max-w-5xl" words={words} />
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    )
}
