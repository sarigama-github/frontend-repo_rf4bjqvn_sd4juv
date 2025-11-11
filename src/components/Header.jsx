import { useState } from 'react'
import { Menu, X, PhoneCall } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#roi', label: 'ROI' },
    { href: '#benefits', label: 'Переваги' },
    { href: '#social', label: 'Соціальні докази' },
    { href: '#technology', label: 'Технологія' },
    { href: '#contact', label: 'Звʼязок' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-400 to-cyan-600 shadow ring-1 ring-black/5" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight text-gray-900">OxySPA</span>
              <span className="text-xs text-gray-500">Преміальна дезінфекція без хлору</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {i.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold py-2.5 px-4 rounded-full shadow hover:shadow-md transition-all">
              <PhoneCall className="h-4 w-4" /> Запросити консультацію
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-gray-200" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((i) => (
                <a key={i.href} href={i.href} className="px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setOpen(false)}>
                  {i.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-semibold py-2.5 px-4 rounded-full">
                <PhoneCall className="h-4 w-4" /> Консультація
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
