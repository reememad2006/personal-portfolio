import { useState } from "react"

function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitted:", formData)
    }

    const inputClasses = "bg-black/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition outline-1 outline-white/10 focus:outline-1 focus:outline-[#c99cc9]/80 focus:shadow-2xl focus:shadow-[#a659a6]/20 transition-all duration-300"

    return (
        <div id="contact" className="py-16 px-6 bg-gradient-to-br from-[#130b10] via-[#140b1f] to-[#07080f] border-top border border-t-white/10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-3">Get In Touch</h2>
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#c23aa0] to-[#818CF8] mx-auto rounded-full mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="bg-gradient-to-br border border-white/10 rounded-xl p-10
                    from-[#2c1523] via-[#201133] to-[#13162c]">
                        <p className="text-6xl mb-4"><i class="fa-solid fa-laptop text-transparent bg-gradient-to-r from-[#cf41ac] to-[#818CF8] bg-clip-text"></i></p>
                        <p className="font-bold text-2xl text-white mb-2">Reem Emad</p>
                        <p className="text-gray-400 mb-6 text-lg my-4">
                            Front-End Developer. I love building elegant, responsive web applications and am always open to new opportunities.
                        </p>
                        <div className="flex flex-col gap-3 text-md text-gray-300">
                            <p><span className="font-semibold text-white">Location:</span> Giza, Egypt</p>
                            <p><span className="font-semibold text-white">Email:</span> ereem303@gmail.com</p>
                            <p><span className="font-semibold text-white">Focus:</span> Front-End Development</p>
                        </div>
                    </div>

                    <div className="border border-white/70 rounded-xl p-8">
                        <p className="font-bold text-xl text-white mb-6">Send a Message</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone No. (optional)"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className={inputClasses}
                                style={{resize: 'none'}}
                            />
                            <button className="bg-gradient-to-tr from-[#c23aa0] to-[#818CF8] text-white 
                                font-semibold px-6 py-3 rounded-full transition hover:opacity-90" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact