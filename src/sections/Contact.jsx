"use client";

import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import SpiderWebBackground from "../components/SpiderWebBackground";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Contact() {

  const [loading,setLoading] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {

  e.preventDefault();

  setLoading(true);

  emailjs
    .sendForm(
      "service_xxxxx",
      "template_xxxxx",
      formRef.current,
      "public_key_xxxxx"
    )
    .then(() => {

      toast.success("Message sent successfully!");

      formRef.current.reset();

    })
    .catch(() => {

      toast.error("Something went wrong.");

    })
    .finally(()=>{
      setLoading(false);
    });

};

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">

      <SpiderWebBackground/>

      <Toaster
         position="top-center"
         toastOptions={{
         style:{
               background:"#0f0f0f",
               color:"#fff",
               border:"1px solid #333"
          }
     }}
      />

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

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

            <div>
              <label className="text-sm text-gray-400">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full mt-2 p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full mt-2 p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Project Details
              </label>

              <textarea
                rows="4"
                name="message"
                placeholder="Tell me about your project"
                required
                className="w-full mt-2 p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none"
              ></textarea>
            </div>

            <button
             type="submit"
             disabled={loading}
             className="w-full py-4 bg-purple-600 rounded-lg font-semibold hover:scale-[1.02] transition disabled:opacity-50"
            >
            {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}