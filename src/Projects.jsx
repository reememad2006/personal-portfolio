import { useState } from "react"
import cafe from './assets/cafe.jpg';
import radiance from './assets/makeup.jpg';
import kroma from './assets/kroma.jpg';
import bookShop from './assets/book.jpg';
import portfolio from './assets/portfolio.jpg';

const projectsData = [
    { title: "Coffee Shop Landing Page", tags: ["HTML", "CSS"], category: "Web Apps", image: cafe, github: "https://github.com/reememad2006/cafe-app" },
    { title: "Radiance Makeup Store", tags: ["HTML5", "CSS3"], category: "Web Apps", image: radiance, github: "https://github.com/reememad2006/radiance-online-store" },
    { title: "Kroma Graphic Design Platform", tags: ["HTML5", "Tailwind"], category: "Web Apps", image: kroma, github: "https://github.com/reememad2006/Kroma-tailwind" },
    { title: "Online Book Shop", tags: ["HTML5", "Tailwind", "JavaScript"], category: "Web Apps", image: bookShop, github: "https://github.com/wizardru2006/book-shop" },
    { title: "Personal Portfolio", tags: ["HTML5", "Tailwind", "React"], category: "Portfolio", image: portfolio, github: "https://github.com/reememad2006/personal-portfolio" },
]

const categories = ["All Projects", "Web Apps", "Portfolio"]

function ProjectCard({ title, tags, image, github }) {
    return (
        <div className="bg-[#0e0c0c] border border-white/10 rounded-xl overflow-hidden group 
        hover:shadow-2xl hover:shadow-[#a659a6]/20 hover:border-[#c99cc9]/80 transition-all duration-300">
            <div className="relative overflow-hidden">
                <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-300" />
                <span className="absolute top-3 left-3 bg-indigo-500/70 border border-indigo-500 font-bold text-white text-xs px-3 py-1 rounded-full">
                    Completed
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <a href={github} target="_blank">
                        <button className="bg-gradient-to-tr from-[#c23aa0] to-[#818CF8] text-white px-5 py-2 rounded-full">
                            View Project
                        </button>
                    </a>

                </div>
            </div>
            <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => (
                        <span key={tag} className="bg-white/10 text-gray-200 text-xs px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Projects() {
    const [activeCategory, setActiveCategory] = useState("All Projects")

    const filteredProjects = activeCategory === "All Projects"
        ? projectsData
        : projectsData.filter((project) => project.category === activeCategory)

    return (
        <div id="projects" className="py-16 px-6 bg-gradient-to-br from-black via-black/98 to-black/97 border-top border border-t-white/10">
            <div className="text-center mb-8">
                <p className="text-[#EC4899] text-sm font-semibold tracking-widest">MY WORK</p>
                <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
                <p className="text-gray-400 max-w-lg mx-auto">
                    Real-world applications built with modern technologies and best practices.
                </p>
            </div>

            <div className="flex justify-center gap-2 mb-12 border border-white/70 rounded-1 rounded-full w-fit 
            m-auto p-1.5 bg-gray-950">
                {categories.map((cat) => (
                    <button key={cat} onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm transition hover:cursor-pointer ${activeCategory === cat
                            ? "bg-gradient-to-tr from-[#c23aa0] to-[#818CF8] text-white"
                            : " text-gray-300 hover:border-white/40"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    )
}
export default Projects