import { useState } from "react"
import "./App.css"

function App() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L9.83 10.17L8.42 11.58L12 15.16L22.59 4.58L21 9ZM11 20.5C11 21.3 10.3 22 9.5 22S8 21.3 8 20.5 8.7 19 9.5 19 11 19.7 11 20.5ZM13 20.5C13 21.3 12.3 22 11.5 22S10 21.3 10 20.5 10.7 19 11.5 19 13 19.7 13 20.5Z"/>
        </svg>
      ),
      title: "AI Chatbot",
      titleHe: "צ'אט בוט AI",
      description: "Voice-enabled smart assistant",
      descriptionHe: "עוזר חכם עם תמיכה קולית"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 15H9C9 16.08 10.37 17 12 17S15 16.08 15 15H17C17 17.21 14.76 19 12 19S7 17.21 7 15ZM12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2ZM12 7C15.31 7 18 9.69 18 13H20C20 8.58 16.42 5 12 5S4 8.58 4 13H6C6 9.69 8.69 7 12 7Z"/>
        </svg>
      ),
      title: "Dynamic Pricing", 
      titleHe: "תמחור דינמי",
      description: "Stripe integration",
      descriptionHe: "אינטגרציה עם Stripe"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C17.52 2 22 6.48 22 12S17.52 22 12 22 2 17.52 2 12 6.48 2 12 2ZM6.23 7.75C5.68 8.3 5.24 8.94 4.93 9.64C6.23 10.13 7.5 11.3 8.4 12.8C8.61 13.11 8.78 13.43 8.93 13.75C9.27 14.33 9.54 14.86 9.77 15.36C10.75 14.09 11.81 13.05 13.05 12.19C13.27 11.95 13.5 11.71 13.73 11.46C13.73 11.46 13.73 11.46 13.73 11.46C12.67 8.72 9.39 7.5 6.23 7.75ZM17.77 16.25C18.32 15.7 18.76 15.06 19.07 14.36C17.77 13.87 16.5 12.7 15.6 11.2C15.39 10.89 15.22 10.57 15.07 10.25C14.73 9.67 14.46 9.14 14.23 8.64C13.25 9.91 12.19 10.95 10.95 11.81C10.73 12.05 10.5 12.29 10.27 12.54C10.27 12.54 10.27 12.54 10.27 12.54C11.33 15.28 14.61 16.5 17.77 16.25Z"/>
        </svg>
      ),
      title: "Multi-Language",
      titleHe: "רב לשוני",
      description: "Hebrew RTL support",
      descriptionHe: "תמיכה בעברית RTL"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"/>
        </svg>
      ),
      title: "A/B Testing",
      titleHe: "בדיקות A/B", 
      description: "Data-driven optimization",
      descriptionHe: "אופטימיזציה מונעת נתונים"
    }
  ]

  const [isHebrew, setIsHebrew] = useState(false)

  return (
    <div className={`min-h-screen`} dir={isHebrew ? "rtl" : "ltr"}>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className={`absolute top-6 z-20 ${isHebrew ? "left-6" : "right-6"}`}>
          <button
            onClick={() => setIsHebrew(!isHebrew)}
            className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg text-white hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            {isHebrew ? "English" : "עברית"}
          </button>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className={`text-center mb-12 relative z-10 ${isHebrew ? "text-right" : ""}`}>
          <div className="mb-6 transform hover:scale-105 transition-transform duration-300 text-center">
            <span className="text-6xl animate-bounce">⭐✨⚡</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
            {isHebrew ? "פלטפורמת AI SaaS" : "AI SaaS Platform"}
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl animate-fade-in">
            {isHebrew ? "פתרון SaaS מושלם מבוסס AI מוכן לשימוש!" : "Complete AI-powered SaaS solution is ready!"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-6xl relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500"></div>
              
              <div className={`relative z-10 ${isHebrew ? "text-right" : ""}`}>
                <div className={`text-blue-300 mb-4 transform group-hover:scale-110 group-hover:text-white transition-all duration-300 ${isHebrew ? "flex justify-end" : "flex justify-start"}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  {isHebrew ? feature.titleHe : feature.title}
                </h3>
                <p className="text-blue-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {isHebrew ? feature.descriptionHe : feature.description}
                </p>
              </div>
              
              <div className={`absolute top-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500 ${isHebrew ? "left-2" : "right-2"}`}></div>
            </div>
          ))}
        </div>

        <div className="relative z-10">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 transform-gpu overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            
            <span className="relative z-10 flex items-center gap-3">
              <span className="text-2xl">⭐✨⚡</span>
              {isHebrew ? "בואו נתחיל" : "Get Started"}
            </span>
            
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500 scale-150"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
