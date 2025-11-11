import { Droplets, Sparkle, Thermometer, Eye, UserCheck, Recycle } from 'lucide-react'

export default function Benefits() {
  const items = [
    { icon: Droplets, title: 'Кришталево чиста вода', text: 'Стабільна прозорість без запаху хлору — premium-враження для гостей.' },
    { icon: UserCheck, title: 'Комфорт і безпечність', text: 'Без подразнення очей і шкіри. Підходить для чутливої шкіри та дітей.' },
    { icon: Recycle, title: 'Менше простоїв', text: 'Менше відключень на шок-хлорування, простіша експлуатація персоналом.' },
    { icon: Sparkle, title: 'Стійка дезінфекція', text: 'Активний кисень знищує патогени та біоплівку без різкого запаху.' },
    { icon: Eye, title: 'Бездоганний імідж', text: 'Покращення відгуків, рейтингів та NPS. Більше повторних візитів.' },
    { icon: Thermometer, title: 'Оптимізація витрат', text: 'До 35% економії на хімії, логістиці та сервісі обладнання.' },
  ]

  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Ключові переваги для комерційних SPA та готелів</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">Ми поєднуємо сертифіковану технологію, професійний запуск і подальший супровід, щоб забезпечити прогнозований результат та бізнес-ефект.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <i.icon className="h-6 w-6 text-cyan-600" />
              <div className="mt-3 text-lg font-semibold text-gray-900">{i.title}</div>
              <p className="mt-1.5 text-sm text-gray-600">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
