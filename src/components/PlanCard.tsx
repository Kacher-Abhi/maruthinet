import type { Plan } from '../data/plans'

interface Props {
  plan: Plan
  onSelect: (plan: Plan) => void
}

const typeLabels: Record<string, string> = {
  wifi: 'WiFi Only',
  entertainment: 'Entertainment Bundle',
  enterprise: 'Enterprise',
}

export default function PlanCard({ plan, onSelect }: Props) {
  const isCustom = plan.prices[12] === 0

  return (
    <div className={`plan-card ${plan.popular ? 'plan-card--popular' : ''}`}>
      {plan.popular && <span className="plan-card-badge">Most Popular</span>}
      <div className="plan-card-header">
        <h3 className="plan-card-speed">{plan.speed}</h3>
        <p className="plan-card-type">{typeLabels[plan.type] || 'Plan'}</p>
      </div>
      <div className="plan-card-price">
        {isCustom ? (
          <span className="plan-card-amount">Custom</span>
        ) : (
          <>
            <span className="plan-card-amount">₹{plan.prices[1]}*</span>
            <span className="plan-card-duration">/ month</span>
          </>
        )}
      </div>
      <ul className="plan-card-features">
        <li>📶 {plan.speed} Speed</li>
        <li>📊 {plan.data} Data</li>
        {plan.iptv && <li>📺 IPTV with 1000+ Channels</li>}
        {plan.otts.length > 0 && <li>🎬 {plan.otts.length} OTT Platforms</li>}
      </ul>
      <button className="btn btn--secondary plan-card-btn" onClick={() => onSelect(plan)}>
        {isCustom ? 'Contact Us' : 'View Details'}
      </button>
    </div>
  )
}
