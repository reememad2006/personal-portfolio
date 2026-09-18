import { useState, useEffect } from "react"

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
]

const socialLinks = [
    { href: "https://www.linkedin.com/in/reem-emad-b871b6341/", icon: "fa-brands fa-linkedin" },
    { href: "https://www.facebook.com/profile.php?id=100056592484317", icon: "fa-brands fa-facebook" },
    { href: "http://instagram.com/_reem_emad/", icon: "fa-brands fa-instagram" },
    { href: "https://github.com/reememad2006", icon: "fa-brands fa-github" },
]

const linkClasses = "text-gray-400 transition duration-300 text-lg hover:text-white focus:outline-none"
const iconClasses = "size-9 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 transition duration-300 hover:text-white hover:border-transparent hover:[background:linear-gradient(#0a0510,#0a0510)_padding-box,linear-gradient(45deg,#EC4899,#818CF8)_border-box]"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <header
                className={`flex items-center justify-between px-6 lg:px-16 py-4 transition-all duration-500 ${
                    scrolled
                        ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50"
                        : "bg-transparent border-b border-transparent"
                }`}
            >
                <div className="flex items-center gap-2 text-white font-bold">
                    <span className="size-2.5 rounded-full bg-[#EC4899]"/>
                    <span className="text-xl pl-1">Portfolio</span>
                </div>

                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={linkClasses}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <a key={social.href} target="_blank" href={social.href} className={iconClasses}>
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>

                    <button className="hidden md:inline-block bg-gradient-to-tr from-[#c23aa0] to-[#818CF8] 
                    text-white font-semibold px-4 py-2 rounded-full transition hover:opacity-90 shadow-lg shadow-white/10">
                        Let's Connect
                    </button>

                    <button
                        className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-black/90 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={linkClasses}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Header