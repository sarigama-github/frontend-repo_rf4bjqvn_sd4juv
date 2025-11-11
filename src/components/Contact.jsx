import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    spa_count: 1,
    current_chemicals: 'chlorine',
    monthly_chemical_cost: '',
    pain_points: '',
    message: '',
    consent: true,
  })
  const [status, setStatus] = useState({ loading: false, success: false, error: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: '' })
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, spa_count: Number(form.spa_count) || 1, monthly_chemical_cost: form.monthly_chemical_cost ? Number(form.monthly_chemical_cost) : undefined }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus({ loading: false, success: true, error: '' })
      setForm({ company_name:'', contact_name:'', email:'', phone:'', country:'', city:'', spa_count:1, current_chemicals:'chlorine', monthly_chemical_cost:'', pain_points:'', message:'', consent:true })
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Не вдалося надіслати форму. Спробуйте ще раз.' })
    }
  }

  const inputBase = 'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500'

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Запросити консультацію і розрахунок</h2>
            <p className="mt-3 text-gray-700">Залиште контакти — інженер-консультант звʼяжеться, проведе короткий аудит і підготує персональний бізнес‑кейс для вашого обʼєкта.</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Аудит існуючої системи та якості води</li>
              <li>Фінансова модель окупності з фактичними даними</li>
              <li>Комерційна пропозиція під ключ з гарантіями</li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Компанія / Обʼєкт</label>
                  <input required className={inputBase} value={form.company_name} onChange={(e)=>setForm(v=>({...v, company_name:e.target.value}))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Контактна особа</label>
                  <input required className={inputBase} value={form.contact_name} onChange={(e)=>setForm(v=>({...v, contact_name:e.target.value}))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input required type="email" className={inputBase} value={form.email} onChange={(e)=>setForm(v=>({...v, email:e.target.value}))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Телефон</label>
                  <input className={inputBase} value={form.phone} onChange={(e)=>setForm(v=>({...v, phone:e.target.value}))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Країна</label>
                  <input className={inputBase} value={form.country} onChange={(e)=>setForm(v=>({...v, country:e.target.value}))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Місто</label>
                  <input className={inputBase} value={form.city} onChange={(e)=>setForm(v=>({...v, city:e.target.value}))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Кількість СПА/басейнів</label>
                  <input type="number" min="1" className={inputBase} value={form.spa_count} onChange={(e)=>setForm(v=>({...v, spa_count:e.target.value}))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Поточна хімія</label>
                  <select className={inputBase} value={form.current_chemicals} onChange={(e)=>setForm(v=>({...v, current_chemicals:e.target.value}))}>
                    <option value="chlorine">Хлор</option>
                    <option value="bromine">Бром</option>
                    <option value="mixed">Змішана</option>
                    <option value="other">Інша</option>
                    <option value="none">Немає</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Місячні витрати на хімію (USD)</label>
                  <input type="number" min="0" className={inputBase} value={form.monthly_chemical_cost} onChange={(e)=>setForm(v=>({...v, monthly_chemical_cost:e.target.value}))} />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Ключові проблеми</label>
                  <textarea rows={3} className={inputBase} value={form.pain_points} onChange={(e)=>setForm(v=>({...v, pain_points:e.target.value}))} />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Додаткові примітки</label>
                  <textarea rows={3} className={inputBase} value={form.message} onChange={(e)=>setForm(v=>({...v, message:e.target.value}))} />
                </div>
                <label className="sm:col-span-2 inline-flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked={form.consent} onChange={(e)=>setForm(v=>({...v, consent:e.target.checked}))} /> Я погоджуюся отримувати комунікації від OxySPA.
                </label>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button type="submit" disabled={status.loading} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 disabled:opacity-60">
                  <Send className="h-4 w-4" /> Надіслати запит
                </button>
                {status.success && (
                  <div className="flex items-center gap-2 text-emerald-700 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5"/> Дякуємо! Ми звʼяжемося протягом 1 робочого дня.
                  </div>
                )}
                {status.error && (
                  <div className="text-sm text-red-600">{status.error}</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
