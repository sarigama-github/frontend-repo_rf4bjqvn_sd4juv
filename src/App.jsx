import Header from './components/Header'
import Hero from './components/Hero'
import ROI from './components/ROI'
import Benefits from './components/Benefits'
import SocialProof from './components/SocialProof'
import Technology from './components/Technology'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <ROI />
        <Benefits />
        <SocialProof />
        <Technology />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} OxySPA. Усі права захищено.</div>
          <div className="text-sm text-gray-500">
            Безпечна вода без хлору для комерційних SPA, готелів та wellness-комплексів.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
