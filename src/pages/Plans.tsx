import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { wifiPlans, entertainmentPlans, enterprisePlans } from '../data/plans'
import type { Plan } from '../data/plans'
import PlanCard from '../components/PlanCard'
import PlanModal from '../components/PlanModal'

type Tab = 'wifi' | 'entertainment' | 'enterprise'

interface Props {
  homeView?: boolean
}

const tabs: { key: Tab; label: string }[] = [
  { key: 'wifi', label: 'WiFi Only' },
  { key: 'entertainment', label: 'Entertainment Bundle' },
  { key: 'enterprise', label: 'Enterprise' },
]

export default function Plans({ homeView }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlTab = searchParams.get('tab') as Tab | null

  const [tab, setTab] = useState<Tab>(urlTab && ['wifi', 'entertainment', 'enterprise'].includes(urlTab) ? urlTab : 'wifi')
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)

  useEffect(() => {
    if (urlTab && ['wifi', 'entertainment', 'enterprise'].includes(urlTab)) {
      setTab(urlTab)
    }
  }, [urlTab])

  const handleTabChange = (t: Tab) => {
    setTab(t)
    if (!homeView) {
      setSearchParams(t === 'wifi' ? {} : { tab: t })
    }
  }

  const planMap: Record<Tab, Plan[]> = {
    wifi: wifiPlans,
    entertainment: entertainmentPlans,
    enterprise: enterprisePlans,
  }

  const plans = planMap[tab]
  const displayedPlans = homeView && tab !== 'enterprise' ? plans.slice(0, 3) : plans
  const isEnterprise = tab === 'enterprise'

  const content = (
    <>
      {!homeView && (
        <div className="plan-controls">
          <div className="plan-tabs">
            {tabs.map(t => (
              <button
                key={t.key}
                className={`plan-tab ${tab === t.key ? 'plan-tab--active' : ''}`}
                onClick={() => handleTabChange(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={`plan-grid ${isEnterprise ? 'plan-grid--enterprise' : ''}`}>
        {displayedPlans.map(plan => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onSelect={setSelectedPlan}
          />
        ))}
      </div>
      <p className="plan-gst-note">* Exclusive of GST</p>

      {homeView && (
        <div className="plan-view-all">
          <Link to="/plans" className="btn btn--outline btn--lg">View All Plans</Link>
        </div>
      )}

      {selectedPlan && (
        <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
    </>
  )

  if (homeView) return content

  return (
    <section className="section plans-page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="highlight">Plans</span></h2>
          <p className="section-desc">Choose the perfect plan for your home or business. Flexible durations and blazing fast speeds.</p>
        </div>
        {content}
      </div>
    </section>
  )
}
