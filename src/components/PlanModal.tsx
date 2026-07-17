import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Plan } from '../data/plans'
import { entertainmentPlans } from '../data/plans'

interface Props {
  plan: Plan
  onClose: () => void
}

const typeLabels: Record<string, string> = {
  wifi: 'WiFi Only Plan',
  entertainment: 'Entertainment Bundle Plan',
  enterprise: 'Enterprise Plan',
}

function getSpeedNumber(speed: string): number {
  return parseInt(speed, 10) || 0
}

function findMatchingEntertainment(wifiPlan: Plan): Plan | undefined {
  const speedNum = getSpeedNumber(wifiPlan.speed)
  return entertainmentPlans.find(p => getSpeedNumber(p.speed) === speedNum)
}

function PlanDetails({ plan, selectedDuration }: { plan: Plan; selectedDuration: 1 | 3 | 6 | 12 | null }) {
  return (
    <>
      <table className="modal-table">
        <tbody>
          <tr><td>Plan Validity</td><td>12 Months</td></tr>
          <tr><td>Bill Cycle</td><td>Monthly / Quarterly / Yearly</td></tr>
          <tr><td>Speed</td><td>Upto {plan.speed}</td></tr>
          <tr><td>Data</td><td>{plan.data}</td></tr>
          {plan.iptv && <tr><td>On-demand TV</td><td>1000+ TV Channels</td></tr>}
        </tbody>
      </table>

      {plan.otts.length > 0 && (
        <div className="modal-otts">
          <h3 className="modal-section-title">Subscriptions</h3>
          <div className="modal-ott-list">
            {plan.otts.map(ott => (
                  <span key={ott} className="modal-ott-item">{ott}</span>
                ))}
              </div>
            </div>
          )}

          {plan.notes.length > 0 && (
        <div className="modal-notes">
          <h3 className="modal-section-title">Notes</h3>
          <ul>
            {plan.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

function ComparisonView({
  wifiPlan,
  entPlan,
  duration,
}: {
  wifiPlan: Plan
  entPlan: Plan
  duration: 1 | 3 | 6 | 12
}) {
  const diff = entPlan.prices[duration] - wifiPlan.prices[duration]

  return (
    <div className="modal-body">
      <div className="compare-section">
        <div className="compare-badge">Recommended Upgrade</div>
        <div className="compare-grid">
          <div className="compare-col compare-col--current">
            <div className="compare-label">You Selected</div>
            <h3 className="compare-title">{wifiPlan.speed} WiFi Only</h3>
            <div className="compare-price">₹{wifiPlan.prices[duration]}*</div>
            <div className="compare-duration">/ month</div>
            <ul className="compare-features">
              <li>📶 {wifiPlan.speed} Speed</li>
              <li>📊 {wifiPlan.data} Data</li>
            </ul>
          </div>

          <div className="compare-vs">
            <span className="compare-vs-icon">VS</span>
            <div className="compare-diff">
              <span className="compare-diff-label">Pay</span>
              <span className="compare-diff-amount">₹{diff}</span>
              <span className="compare-diff-label">more / month</span>
            </div>
          </div>

          <div className="compare-col compare-col--upgrade">
            <div className="compare-label">Upgrade To</div>
            <h3 className="compare-title">{entPlan.speed} Entertainment</h3>
            <div className="compare-price">₹{entPlan.prices[duration]}*</div>
            <div className="compare-duration">/ month</div>
            <ul className="compare-features">
              <li>📶 {entPlan.speed} Speed</li>
              <li>📊 {entPlan.data} Data</li>
              <li>📺 IPTV with 1000+ Channels</li>
              <li>🎬 {entPlan.otts.length} OTT Platforms</li>
            </ul>
          </div>
        </div>

        <div className="compare-ott-row">
          {entPlan.otts.slice(0, 8).map(ott => (
            <span key={ott} className="modal-ott-item">{ott}</span>
          ))}
          {entPlan.otts.length > 8 && (
            <span className="modal-ott-item">+{entPlan.otts.length - 8} more</span>
          )}
        </div>
        <p className="modal-gst-note">* Exclusive of GST</p>
      </div>
    </div>
  )
}

export default function PlanModal({ plan, onClose }: Props) {
  const isCustom = plan.prices[12] === 0
  const [selectedDuration, setSelectedDuration] = useState<1 | 3 | 6 | 12 | null>(null)
  const [showComparison, setShowComparison] = useState(false)

  const isWifiPlan = plan.type === 'wifi'
  const matchingEnt = isWifiPlan ? findMatchingEntertainment(plan) : undefined

  const handleDurationSelect = (d: 1 | 3 | 6 | 12) => {
    setSelectedDuration(d)
    if (isWifiPlan && matchingEnt) {
      setShowComparison(true)
    }
  }

  const handleBack = () => {
    setShowComparison(false)
  }

  const isCompareView = showComparison && isWifiPlan && matchingEnt && selectedDuration

  const waiver = isCustom
    ? 'Contact us for a custom quote'
    : selectedDuration
      ? `Hi! I'm interested in the ${plan.speed} ${plan.type} plan (₹${plan.prices[selectedDuration]} / ${selectedDuration} ${selectedDuration === 1 ? 'month' : 'months'}).`
      : ''

  const waUrl = waiver
    ? `https://wa.me/919206635453?text=${encodeURIComponent(waiver)}`
    : ''

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal ${isCompareView ? 'modal--compare' : ''}`} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        {isCompareView ? (
          <>
            <div className="modal-header">
              <div>
                <button className="btn btn--back" onClick={handleBack}>← Back</button>
                <h2 className="modal-title">Upgrade to Entertainment Bundle</h2>
                <p className="modal-subtitle">Get more value with OTT & IPTV included</p>
              </div>
            </div>
            <ComparisonView
              wifiPlan={plan}
              entPlan={matchingEnt!}
              duration={selectedDuration!}
            />
            <div className="modal-footer">
              <a
                href={`https://wa.me/919206635453?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.speed} WiFi Only plan (₹${plan.prices[selectedDuration!]} / ${selectedDuration!} ${selectedDuration! === 1 ? 'month' : 'months'}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                Enquire WiFi Only
              </a>
              <a
                href={`https://wa.me/919206635453?text=${encodeURIComponent(`Hi! I'm interested in the ${matchingEnt!.speed} Entertainment Bundle plan (₹${matchingEnt!.prices[selectedDuration!]} / ${selectedDuration!} ${selectedDuration! === 1 ? 'month' : 'months'}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Enquire Entertainment
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="modal-header">
              <div>
                <h2 className="modal-title">{plan.speed} Plan</h2>
                <p className="modal-subtitle">{typeLabels[plan.type] || 'Plan'}</p>
              </div>
              {!isCustom && (
                <div className="modal-price-block">
                  <p className="modal-price">₹{plan.prices[1]}*</p>
                  <p className="modal-price-desc">/ month</p>
                </div>
              )}
            </div>

            <div className="modal-body">
              <div className="modal-details">
                <h3 className="modal-section-title">Plan Details</h3>
                <PlanDetails plan={plan} selectedDuration={selectedDuration} />

                {!isCustom && (
                  <div className="modal-prices">
                    <h3 className="modal-section-title">All Durations</h3>
                    <p className="modal-prices-hint">Select a duration to continue</p>
                    <div className="modal-price-grid">
                      {([1, 3, 6, 12] as const).map(d => (
                        <button
                          key={d}
                          className={`modal-price-item ${selectedDuration === d ? 'modal-price-item--selected' : ''}`}
                          onClick={() => handleDurationSelect(d)}
                        >
                          <span className="modal-price-item-amount">₹{plan.prices[d]}*</span>
                          <span className="modal-price-item-duration">{d} {d === 1 ? 'Month' : 'Months'}</span>
                        </button>
                      ))}
                    </div>
                    <p className="modal-gst-note">* Exclusive of GST</p>
                  </div>
                )}
              </div>
            </div>

            {(!isWifiPlan) && (
              <div className="modal-footer">
                {isCustom || selectedDuration ? (
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                    Enquire on WhatsApp
                  </a>
                ) : (
                  <button className="btn btn--primary" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                    Select a duration first
                  </button>
                )}
                <Link to="/contact" className="btn btn--outline" onClick={onClose}>Contact Us</Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
