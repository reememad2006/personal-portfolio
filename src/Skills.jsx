import { useState, useEffect } from "react"

const skillsData = [
    { name: "HTML5", percent: 95, color: "#E34F26" },
    { name: "CSS3", percent: 90, color: "#1572B6" },
    { name: "JavaScript", percent: 85, color: "#F7DF1E" },
    { name: "React.js", percent: 85, color: "#61DAFB" },
    { name: "Tailwind", percent: 80, color: "#38BDF8" },
    { name: "Bootstrap", percent: 80, color: "#7952B3" },
]

function SkillCircle({ percent, color }) {
    const radius = 50
    const circumference = 2 * Math.PI * radius

    // start fully "empty" so the CSS transition below has something to animate from
    const [offset, setOffset] = useState(circumference)

    useEffect(() => {
        setOffset(circumference)
        const timer = setTimeout(() => {
            const targetOffset = circumference - (percent / 100) * circumference
            setOffset(targetOffset)
        }, 50)
        return () => clearTimeout(timer)
    }, [percent, circumference])

    return (
        <svg width="170" height="170" className="-rotate-90" style={{ filter: `drop-shadow(0 0 10px ${color}44)` }}>
            <circle cx="85" cy="85" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
            <circle cx="85" cy="85" r={radius} stroke={color} strokeWidth="10" fill="none"
                strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            />
        </svg>
    )
}

function Skills() {
    const [page, setPage] = useState(0)
    const [fade, setFade] = useState(true)
    const perPage = 4
    const totalPages = Math.ceil(skillsData.length / perPage)

    const visibleSkills = skillsData.slice(page * perPage, page * perPage + perPage)

    const pageDots = []
    for (let i = 0; i < totalPages; i++) {
        pageDots.push(i)
    }

    function changePage(newPage) {
        setFade(false)
        setTimeout(() => {
            setPage(newPage)
            setFade(true)
        }, 200)
    }

    function nextPage() {
        if (page === totalPages - 1) return
        changePage(page + 1)
    }

    function prevPage() {
        if (page === 0) return
        changePage(page - 1)
    }

    return (
        <div id="skills" className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 
        text-center bg-gradient-to-b from-black via-[#0a0510] to-black border-top border border-t-white/10">
            <div className="pointer-events-none absolute -top-70 -right-70 size-170 bg-[#818CF8]/10 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-70 -left-70 size-150 bg-[#EC4899]/10 rounded-full blur-3xl" />

            <p className="relative z-10 text-[#EC4899] text-sm font-semibold tracking-widest">TECHNICAL EXPERTISE</p>
            <h2 className="relative z-10 text-4xl font-bold text-white mb-2">Front-End Skills</h2>
            <p className="relative z-10 text-gray-400 max-w-lg mx-auto mb-12">
                The front-end technologies I use to build modern, responsive web experiences.
            </p>

            <div className="relative z-10 flex items-center justify-center gap-6">
                <button className="size-10 leading-7 flex items-center justify-center rounded-full text-md text-white 
                    hover:bg-white/10 transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    onClick={prevPage} disabled={page === 0}
                >
                    <i class="fa-solid fa-angle-left"></i>
                </button>

                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-opacity duration-200 
                ${fade ? "opacity-100" : "opacity-0"}`}>
                    {visibleSkills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center gap-3">
                            <div className="relative">
                                <SkillCircle percent={skill.percent} color={skill.color} />
                                <span className="absolute inset-0 flex items-center justify-center font-bold text-lg text-white">
                                    {skill.percent}%
                                </span>
                            </div>
                            <p className="font-semibold text-white">{skill.name}</p>
                        </div>
                    ))}
                </div>

                <button className="w-10 h-10 flex items-center justify-center rounded-full text-md text-white 
                hover:bg-white/10 transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                onClick={nextPage} disabled={page === totalPages - 1}>
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>

            <div className="relative z-10 flex justify-center gap-2 mt-6">
                {pageDots.map((i) => (
                    <button
                        key={i}
                        onClick={() => changePage(i)}
                        className={`w-2 h-2 rounded-full transition ${page === i ? "bg-[#EC4899]" : "bg-white/20"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
export default Skills