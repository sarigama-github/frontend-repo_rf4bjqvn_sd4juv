import { ShieldCheck, Cpu, Zap, Microscope } from 'lucide-react'

export default function Technology() {
  const items = [
    { icon: ShieldCheck, title: 'Двоетапна оксидація', text: 'Комбінація активного кисню та каталізу руйнує патогени й біоплівку на молекулярному рівні.' },
    { icon: Cpu, title: 'Розумне дозування', text: 'Сенсорний моніторинг якості води і автоматичне дозування забезпечують стабільний результат.' },
    { icon: Zap, title: 'Швидкий запуск', text: 'Проєктування, монтаж, калібрування та навчання персоналу під ключ за 2–5 днів.' },
    { icon: Microscope, title: 'Лабораторний контроль', text: 'Періодичні тести підтверджують відповідність санітарним нормам для комерційних обʼєктів.' },
  ]

  return (
    <section id="technology" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Технологія без хлору, що працює для бізнесу</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">OxySPA застосовує сучасні методи окиснення, сумісні з комерційними навантаженнями та високими стандартами готельних мереж.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <i.icon className="h-6 w-6 text-emerald-700" />
              <div className="mt-3 text-lg font-semibold text-gray-900">{i.title}</div>
              <p className="mt-1.5 text-sm text-gray-600">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
