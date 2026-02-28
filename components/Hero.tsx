import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Download,
  User,
  Mail,
  Phone,
  X,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const formRef = useRef<HTMLFormElement>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setStatus("idle");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Send to EmailJS
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey,
      );

      setStatus("success");

      // Trigger the actual download
      const link = document.createElement("a");
      link.href = "/dramantram_academy_brochure.pdf"; // Ensure this file is in your /public folder
      link.download = "dramantram_academy_brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden bg-black text-white">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#FF0000]/25 blur-[140px] rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full z-10 text-center">
        <h1 className="oswald text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[1.1] tracking-tighter mb-8">
          Turn Your <br />
          <span className="text-[#FF0000]">Creativity</span> <br />
          Into a Career
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="/admissions"
            className="w-full sm:w-auto px-12 py-5 bg-[#FF0000] font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 group"
          >
            Apply Now{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <button
            onClick={handleOpenModal}
            className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 font-bold uppercase tracking-widest rounded-xl hover:text-[#FFD700] hover:border-[#FFD700] transition-all flex items-center justify-center gap-3 group"
          >
            <Download
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
            Get Brochure
          </button>
        </div>
      </div>

      {/* --- BROCHURE MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="gloss-card w-full max-w-lg relative z-10 bg-black border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white"
            >
              <X size={24} />
            </button>

            {status === "success" ? (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                <CheckCircle2
                  className="text-green-500 mx-auto mb-6"
                  size={80}
                />
                <h2 className="oswald text-3xl font-black uppercase mb-2">
                  File <span className="text-green-500">Ready!</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Your brochure is downloading. Please check your downloads
                  folder.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-10 py-3 border border-white/20 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="oswald text-3xl font-black uppercase mb-2">
                  Download <span className="text-[#FF0000]">Brochure</span>
                </h2>
                <p className="text-gray-500 mb-8 font-medium">
                  Enter your details to receive the 2026 studio guide.
                </p>

                <form
                  ref={formRef}
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  {/* EmailJS Hidden Fields */}
                  <input
                    type="hidden"
                    name="registration_type"
                    value="Brochure Request"
                  />
                  <input
                    type="hidden"
                    name="selected_course"
                    value="Digital Brochure"
                  />

                  <div className="space-y-4">
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={18}
                      />
                      <input
                        name="user_name"
                        required
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF0000] outline-none"
                      />
                    </div>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={18}
                      />
                      <input
                        name="user_email"
                        required
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF0000] outline-none"
                      />
                    </div>
                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        size={18}
                      />
                      <input
                        name="user_phone"
                        required
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF0000] outline-none"
                      />
                    </div>
                  </div>

                  <button
                    disabled={status === "sending"}
                    type="submit"
                    className="w-full py-5 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-[#FFD700] transition-colors flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Download Now"
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-center text-xs font-bold mt-2">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
