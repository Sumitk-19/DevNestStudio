"use client";

import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import SpiderWebBackground from "../components/SpiderWebBackground";

export default function Contact() {

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">

      <SpiderWebBackground/>
      {/* gradient glow */}

      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[200px] rounded-full top-20 right-0"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}

        <div>

          <h2 className="text-5xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mb-10 max-w-md">
            Have a project idea or need help building your digital product?
            Reach out and let's discuss how we can work together.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4 glass p-5 rounded-xl hover:scale-[1.02] transition">

              <FaEnvelope className="text-purple-400 text-xl" />

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">your@email.com</p>
              </div>

            </div>

            <div className="flex items-center gap-4 glass p-5 rounded-xl hover:scale-[1.02] transition">

              <FaWhatsapp className="text-green-400 text-xl" />

              <div>
                <p className="text-sm text-gray-400">WhatsApp</p>
                <p className="font-medium">Chat instantly</p>
              </div>

            </div>

            <div className="flex items-center gap-4 glass p-5 rounded-xl hover:scale-[1.02] transition">

              <FaLinkedin className="text-blue-400 text-xl" />

              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="font-medium">Connect professionally</p>
              </div>

            </div>

          </div>

        </div>

        {/* CONTACT FORM */}

        <div className="glass p-10 rounded-2xl">

          <form className="space-y-6">

            <div>
              <label className="text-sm text-gray-400">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-2 p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-2 p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Project Details
              </label>

              <textarea
                rows="4"
                placeholder="Tell me about your project"
                className="w-full mt-2 p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none"
              ></textarea>
            </div>

            <button
              className="w-full py-4 bg-purple-600 rounded-lg font-semibold hover:scale-[1.02] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}