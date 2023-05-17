import React from 'react'
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import { contactImg} from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <img src={contactImg} className="w-full h-64 object-cover rounded-lg mb-2" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-white">Md. Ishrakul Islam</h3>
                    <p className="text-lg font-normal text-gray-400">Full Stack Developer</p>
                    <p className="text-base text-gray-400 tracking-wide">Magna eiusmod nisi velit amet incididunt pariatur id anim. Ea consequat velit sint magna dolore aliqua deserunt sint Lorem laboris magna mollit aliqua.</p>
                    <p className="text-base text-gray-400 flex items-center gap-2">Email: <span className="text-lightText">ishrakul236@gmail.com</span> </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>

                    <div className="flex gap-4">
                        <span className="bannerIcon"> <FaFacebookF /> </span>
                        <span className="bannerIcon"> <FaLinkedinIn /> </span>
                        <span className="bannerIcon"> <FaTwitter /> </span>
                    </div>

                </div>
            </div>
  )
}

export default ContactLeft