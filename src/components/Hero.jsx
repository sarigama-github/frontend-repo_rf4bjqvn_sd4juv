import { Sparkles, ShieldCheck, TrendingUp, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.18),rgba(255,255,255,0)_40%),radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.14),rgba(255,255,255,0)_35%)]" />
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-200 to-emerald-200 blur-3xl opacity-70" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-sky-200 to-blue-200 blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 bg-white/70 text-cyan-900 text-xs font-medium shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-cyan-600" /> Luxury рівень чистоти без хлору
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
              OxySPA — безхлорна дезінфекція для SPA, яка підвищує дохід і лояльність гостей
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-2xl">
              Зменшуйте витрати, усувайте запах хлору, знижуйте скарги на подразнення і підвищуйте заповнюваність. Сертифікована технологія на основі активного кисню.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold"><TrendingUp className="h-4 w-4"/>ROI 3–6 міс.</div>
                <p className="text-sm text-gray-600 mt-1">Економія на витратах і вищі тарифи завдяки преміальній якості води.</p>
              </div>
              <div className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-cyan-700 font-semibold"><ShieldCheck className="h-4 w-4"/>Сертифіковано</div>
                <p className="text-sm text-gray-600 mt-1">Відповідає вимогам безпеки для комерційних басейнів/SPA.</p>
              </div>
              <div className="rounded-2xl bg-white/80 backdrop-blur p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold"><Leaf className="h-4 w-4"/>Еко та гіпоалергенність</div>
                <p className="text-sm text-gray-600 mt-1">Без запаху, без подразнення очей і шкіри — задоволені гості.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white font-semibold shadow hover:shadow-md">
                Отримати персональну пропозицію
              </a>
              <a href="#roi" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 font-semibold hover:bg-gray-50">
                Дивитися економіку
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-white shadow-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=1400&auto=format&fit=crop" alt="OxySPA luxury water" className="h-full w-full object-cover"/>
              </div>
              <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-lg border border-gray-200 p-4 w-[85%]">
                <div className="text-sm text-gray-600">Середній NPS гостей після впровадження</div>
                <div className="mt-1 text-3xl font-semibold tracking-tight">+21 пункт</div>
                <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
