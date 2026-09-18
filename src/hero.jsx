import { useState, useEffect } from "react"

const roles = ["Front-End Developer", "Full-Stack Developer", "React Engineer"]

function Hero() {
    const [text, setText] = useState("")
    const [roleIndex, setRoleIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        let timeout

        if (!deleting && text.length < currentRole.length) {
            timeout = setTimeout(() => {
                setText(currentRole.slice(0, text.length + 1))
            }, 100)
        } else if (!deleting && text.length === currentRole.length) {
            timeout = setTimeout(() => {
                setDeleting(true)
            }, 1500)
        } else if (deleting && text.length > 0) {
            timeout = setTimeout(() => {
                setText(currentRole.slice(0, text.length - 1))
            }, 50)
        } else if (deleting && text.length === 0) {
            setDeleting(false)
            setRoleIndex((roleIndex + 1) % roles.length)
        }

        return () => clearTimeout(timeout)
    }, [text, deleting, roleIndex])

    return (
        <div id="home" className="relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-around 
        gap-16 px-6 md:px-16 pt-24 bg-gradient-to-b from-[#0a0510] via-black to-[#0a0510]">
            <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-[#EC4899]/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-[#818CF8]/20 rounded-full blur-3xl" />

            <div className="relative z-10 lg:-left-12">
                <div className="flex items-center gap-2 w-fit bg-white/5 border border-[#EC4899]/20 text-white/75 
                text-md px-4 py-1 rounded-full mb-4">
                    <span className="size-2.5 rounded-full bg-[#EC4899]" />
                    <span>Available for opportunities</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
                    Hi! I'm{" "}
                    <span>
                        <span className="bg-gradient-to-tr from-[#c23aa0] to-[#818CF8] bg-clip-text text-transparent">Reem Emad</span>
                        <br /> Ibrahim
                    </span>
                </h1>

                <h2 className="text-3xl md:text-5xl bg-gradient-to-r from-[hsl(300,70%,60%)] to-[#818CF8] bg-clip-text text-transparent my-6">
                    {text}
                    <span className="animate-pulse">|</span>
                </h2>

                <p className="text-gray-400 max-w-xl mb-8 text-2xl">
                    Crafting <span className="text-gray-300">beautiful, responsive web applications</span> with modern front-end technologies.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-tr from-[#c23aa0] to-[#818CF8] text-white font-semibold 
                    px-6 py-3 rounded-full transition hover:opacity-90">
                        View My Projects
                    </button>
                    <button className="border border-white/20 text-white px-6 py-3 rounded-full transition 
                    hover:border-white/40 hover:bg-white/5 hover:[background:linear-gradient(#0a0510,#0a0510)_padding-box,linear-gradient(45deg,#EC4899,#818CF8)_border-box]">
                        Get In Touch
                    </button>
                </div>
            </div>

            <div className="relative z-10">
                <span className="animate-float absolute -top-4 -right-4 bg-black/80 border border-[#EC4899]/40 text-[#EC4899] 
                text-sm font-medium px-4 py-1.5 rounded-full shadow-md z-10">
                    Front End
                </span>

                <div className="bg-[#1e1e2e] text-white rounded-xl py-6 px-5 font-mono text-sm w-[26rem] 
                shadow-[0_10px_50px_rgba(236,72,153,0.2)] border border-white/10">
                    <div className="flex items-center gap-2 mb-5">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="text-gray-400 text-sm ml-2">reem.jsx</span>
                    </div>

                    <div className="text-lg leading-8">
                        <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = {"{"}</p>
                        <p className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-green-300">"Reem"</span>,</p>
                        <p className="pl-4"><span className="text-cyan-300">role</span>: <span className="text-green-300">"Front-End Dev"</span>,</p>
                        <p className="pl-4"><span className="text-cyan-300">stack</span>: [</p>
                        <p className="pl-8"><span className="text-green-300">"HTML"</span>, <span className="text-green-300">"CSS"</span>,</p>
                        <p className="pl-8"><span className="text-green-300">"JavaScript"</span>, <span className="text-green-300">"React"</span></p>
                        <p className="pl-4">]</p>
                        <p>{"}"}</p>
                        <p className="text-purple-400 mt-3">&gt; ready_to_build() <span className="text-green-400">✓</span></p>
                    </div>
                </div>

                <span className="animate-float absolute -bottom-4 -left-4 bg-black/80 border border-[#818CF8]/40 text-[#818CF8] 
                text-sm font-medium px-4 py-1.5 rounded-full shadow-md z-10">
                    React dev
                </span>
            </div>
        </div>
    )
}
export default Hero