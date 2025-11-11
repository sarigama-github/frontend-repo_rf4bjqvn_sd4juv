import { Building2, Star, Quote } from 'lucide-react'

export default function SocialProof() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/3/30/Marriott_logo_%282016%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8c/Hyatt_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/HiltonHotelsLogo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2e/Accor_logo.svg',
  ]
  const testimonials = [
    {
      name: 'Wellness Resort Black Sea',
      text: 'Після переходу на OxySPA гості перестали скаржитися на запах і подразнення. Підвищили тариф на SPA-послуги на 7% без падіння завантаження.',
    },
    {
      name: 'City Hotel & Spa',
      text: 'Команда провела аудит і запустила систему за 3 дні. Ми знизили витрати на хімію та сервіс — економія близько 30%.',
    },
  ]

  return (
    <section id="social" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-cyan-700 font-semibold"><Building2 className="h-5 w-5"/>Нам довіряють готелі та wellness-комплекси</div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-80">
          {logos.map((src) => (
            <img key={src} src={src} alt="brand" className="h-10 object-contain mx-auto" />
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <Quote className="h-6 w-6 text-cyan-600" />
              <p className="mt-3 text-gray-700">{t.text}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex text-amber-500">{Array.from({length:5}).map((_,i)=>(<Star key={i} className="h-4 w-4 fill-current"/>))}</div>
                <div className="text-sm font-medium text-gray-900">{t.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
