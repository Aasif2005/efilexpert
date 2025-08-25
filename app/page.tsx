"use client"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function ComingSoonPage() {
  const [currentKeyPoint, setCurrentKeyPoint] = useState(0)

  const keyPoints = [
    {
      title: "Expert Tax Filing",
      description: "Professional GST, ITR, VAT, and Corporate Tax services with seamless digital processing",
    },
    {
      title: "India & UAE Coverage",
      description: "Complete tax compliance solutions for both Indian and UAE markets with local expertise",
    },
    {
      title: "Business Registration",
      description: "Simplified company setup for Private Limited, LLP, and offshore entities with minimal paperwork",
    },
    {
      title: "Secure & Reliable",
      description: "Bank-grade security with automated reminders and deadline tracking for peace of mind",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, clear pricing structure with professional support throughout your journey",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyPoint((prev) => (prev + 1) % keyPoints.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [keyPoints.length])

  return (
    <div className="min-h-screen relative overflow-hidden overscroll-none touch-pan-y">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover filter blur-sm">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/y2mate--Cool-black-Background_1080-LZUObOc2ESdRFe92DYAhRdrxX0YIvQ.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-blue-900/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.png"
                alt="E File Xpert Logo"
                width={150}
                height={100}
                className="transition-all duration-300 drop-shadow-2xl hover:scale-105"
                priority
              />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight animate-slide-up drop-shadow-2xl">
              Seamless Tax Solutions Across India & UAE
            </h1>
            <p className="text-base md:text-lg text-blue-100 font-medium animate-slide-up-delay-2 max-w-2xl mx-auto drop-shadow-lg">
              From GST & ITR to VAT & Corporate Tax — Expert Registration & Hassle-Free Filing for Individuals and
              Businesses.
            </p>
          </div>

          <div className="animate-slide-up-delay-3 space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <h3 className="font-engravers text-4xl md:text-6xl font-normal text-white drop-shadow-2xl tracking-[0.3em] relative z-10 transition-all duration-500 hover:tracking-[0.4em]">
                  COMING SOON
                </h3>
                <div className="absolute inset-0 font-engravers text-4xl md:text-6xl font-normal text-blue-400 blur-sm tracking-[0.3em] opacity-50">
                  COMING SOON
                </div>
              </div>
            </div>

            <Card className="p-6 md:p-8 bg-slate-900/90 backdrop-blur-md border border-blue-500/30 shadow-2xl min-h-[160px] flex items-center justify-center transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-2xl hover:bg-slate-800/95 hover:scale-[1.02] hover:border-blue-400/50">
              <div className="text-center space-y-3 transition-all duration-1000 ease-in-out">
                <h4 className="text-xl md:text-2xl font-bold text-blue-400 transform transition-all duration-500">
                  {keyPoints[currentKeyPoint].title}
                </h4>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-xl mx-auto transform transition-all duration-500">
                  {keyPoints[currentKeyPoint].description}
                </p>
              </div>
            </Card>

            <div className="flex justify-center space-x-2">
              {keyPoints.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentKeyPoint(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentKeyPoint
                      ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                      : "bg-white/60 hover:bg-blue-300 shadow-md"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="animate-slide-up-delay-4">
            <Card className="p-6 md:p-8 bg-slate-900/95 backdrop-blur-md border border-blue-500/30 shadow-2xl transition-all duration-500 hover:shadow-blue-500/20 hover:shadow-2xl hover:bg-slate-800/98 hover:border-blue-400/50">
              <div className="space-y-5 text-left">
                <h3 className="text-xl md:text-2xl font-bold text-blue-300 text-center mb-6">
                  Complete Digital Tax Solution
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 transition-all duration-300 hover:transform hover:scale-[1.02] p-4 rounded-lg hover:bg-blue-900/20 hover:shadow-lg">
                    <h4 className="text-lg font-semibold text-blue-400">Digital Tax Filing</h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      Our platform provides a complete digital solution for tax compliance and business registration.
                      File Income Tax Returns, GST, and Corporate Taxes through a smooth, guided process without
                      complicated forms or confusing steps.
                    </p>
                  </div>

                  <div className="space-y-3 transition-all duration-300 hover:transform hover:scale-[1.02] p-4 rounded-lg hover:bg-blue-900/20 hover:shadow-lg">
                    <h4 className="text-lg font-semibold text-blue-400">Cross-Border Expertise</h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      Built to work seamlessly in both India and the UAE, helping businesses handle VAT registration and
                      compliance challenges. Direct integration with official government portals ensures reliable,
                      accurate, and time-saving processes.
                    </p>
                  </div>

                  <div className="space-y-3 transition-all duration-300 hover:transform hover:scale-[1.02] p-4 rounded-lg hover:bg-blue-900/20 hover:shadow-lg">
                    <h4 className="text-lg font-semibold text-blue-400">Business Setup</h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      Simplify company registrations for private limited companies, LLPs, or offshore entities. Our
                      digital journey saves time and reduces paperwork for entrepreneurs and organizations.
                    </p>
                  </div>

                  <div className="space-y-3 transition-all duration-300 hover:transform hover:scale-[1.02] p-4 rounded-lg hover:bg-blue-900/20 hover:shadow-lg">
                    <h4 className="text-lg font-semibold text-blue-400">Trusted Platform</h4>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      Strong encryption standards protect all user data. Easy-to-use dashboard helps track filings,
                      monitor deadlines, and receive automated reminders so no compliance date is missed.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-blue-500/30">
                  <p className="text-base text-blue-200 font-medium">
                    Professional expertise, transparent pricing, and smart technology—your trusted bridge for tax
                    compliance and business setup.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <footer className="absolute bottom-4 left-0 right-0 text-center mb-4">
          <p className="text-sm text-blue-200/80 drop-shadow-md">© 2025 E File Xpert. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}
