import { useMemo, useState } from 'react'
import { Calculator, DollarSign } from 'lucide-react'

export default function ROI() {
  const [params, setParams] = useState({
    spas: 2,
    monthlySpend: 800,
    tariffIncrease: 5,
  })

  const result = useMemo(() => {
    const savings = params.monthlySpend * 0.35 // 35% економія на хімії/логістиці
    const priceUplift = params.spas * 1200 * (params.tariffIncrease / 100) // апліфт тарифу, умовно 1200$/міс за СПА
    const monthlyROI = savings + priceUplift
    const paybackMonths = Math.max(1, Math.round( (9500 * params.spas) / Math.max(1, monthlyROI) ))
    return { savings, priceUplift, monthlyROI, paybackMonths }
  }, [params])

  const inputBase = 'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500'

  return (
    <section id="roi" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-white/70 text-emerald-900 text-xs font-medium shadow-sm">
              <Calculator className="h-3.5 w-3.5 text-emerald-600" /> Розрахунок окупності
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Економіка переходу на OxySPA</h2>
            <p className="mt-3 text-gray-700">Оцініть економіку для вашого обʼєкта: зниження постійних витрат та можливість підвищення тарифів завдяки преміальній якості води і сервісу.</p>

            <div className="mt-8 grid gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Кількість СПА/басейнів</label>
                <input type="number" min="1" value={params.spas} onChange={(e)=>setParams(v=>({...v, spas:Number(e.target.value)||1}))} className={inputBase} />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Місячні витрати на хімію (USD)</label>
                <input type="number" min="0" value={params.monthlySpend} onChange={(e)=>setParams(v=>({...v, monthlySpend:Number(e.target.value)||0}))} className={inputBase} />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Планове підвищення тарифів (%)</label>
                <input type="number" min="0" value={params.tariffIncrease} onChange={(e)=>setParams(v=>({...v, tariffIncrease:Number(e.target.value)||0}))} className={inputBase} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 text-cyan-700 font-semibold"><DollarSign className="h-5 w-5"/>Фінансові підсумки</div>
              <div className="mt-6 grid sm:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-sm text-gray-600">Щомісячна економія</div>
                  <div className="mt-1 text-3xl font-semibold tracking-tight">${result.savings.toLocaleString()}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-sm text-gray-600">Дод. дохід від підвищення тарифів</div>
                  <div className="mt-1 text-3xl font-semibold tracking-tight">${result.priceUplift.toLocaleString()}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <div className="text-sm text-gray-600">Сумарний щомісячний ROI</div>
                  <div className="mt-1 text-3xl font-semibold tracking-tight">${result.monthlyROI.toLocaleString()}</div>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-5 border border-emerald-100">
                <div className="text-sm text-gray-700">Оціночний термін окупності інвестицій</div>
                <div className="mt-1 text-4xl font-semibold tracking-tight">{result.paybackMonths} міс.</div>
                <p className="mt-2 text-xs text-gray-500">Розрахунок носить ознайомчий характер. Точний бізнес-кейс підготуємо після короткого дзвінка та аналізу вашого обʼєкта.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
