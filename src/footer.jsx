const socialLinks = [
    { href: "https://www.linkedin.com/in/reem-emad-b871b6341/", icon: "fa-brands fa-linkedin" },
    { href: "https://www.facebook.com/profile.php?id=100056592484317", icon: "fa-brands fa-facebook" },
    { href: "http://instagram.com/_reem_emad/", icon: "fa-brands fa-instagram" },
    { href: "https://github.com/reememad2006", icon: "fa-brands fa-github" },
]

const iconClasses = "w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 transition duration-300 hover:text-white hover:border-transparent hover:[background:linear-gradient(#0a0510,#0a0510)_padding-box,linear-gradient(45deg,#EC4899,#818CF8)_border-box]"

function Footer() {
    return (
        <footer className="bg-[#080708] border-top border-2 border-t-white/70">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mx-auto p-8 border-b border-white/10">
                <div>
                    <p className="font-bold text-white">Stay Updated</p>
                    <p className="text-sm text-gray-400">Subscribe to see my latest projects & articles.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="outline-1 outline-white/10 focus:outline-1 focus:outline-[#c99cc9]/80 focus:shadow-2xl focus:shadow-[#a659a6]/20 transition-all duration-300 rounded-full px-4 py-2 flex-1 md:w-64 text-white focus:border-[#EC4899]/60"
                    />
                    <button className="bg-gradient-to-tr from-[#c23aa0] to-[#818CF8] text-white px-5 py-2 rounded-full whitespace-nowrap transition hover:opacity-90">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto px-8 py-12">
                <div>
                    <p className="font-bold text-white mb-2">Portfolio</p>
                    <p className="text-sm text-gray-400 mb-4">
                        Front-End Developer building beautiful, responsive web experiences with modern technologies.
                    </p>
                    <div className="flex gap-3 text-gray-400">
                    {socialLinks.map((social) => (
                            <a key={social.href} target="_blank" href={social.href} className={iconClasses}>
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="font-bold text-white mb-3">Navigation</p>
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <a href="#home" className="hover:text-white transition">Home</a>
                        <a href="#skills" className="hover:text-white transition">Skills</a>
                        <a href="#projects" className="hover:text-white transition">Projects</a>
                        <a href="#contact" className="hover:text-white transition">Contact</a>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-white mb-3">What I Do</p>
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <p>Front-End Development</p>
                        <p>Responsive Web Design</p>
                        <p>React & Tailwind Projects</p>
                    </div>
                </div>
            </div>

            <p className="text-center text-xs text-gray-500 pb-6">
                © 2026 Reem. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer