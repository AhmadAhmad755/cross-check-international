import { useBriefingModal } from '../../context/BriefingModalContext';
import DesignedForTags from './DesignedForTags';

export default function Hero() {
  const { open } = useBriefingModal();

  return (
    <section id="top" className="hero-border">
      <div className="hero-wrap">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="eyebrow-line"></div>
            <span className="eyebrow-text">Global Identity Intelligence</span>
          </div>
          <h1 className="hero-h1">
            Intelligence that<br />
            crosses borders.<br />
            <em>Decisions that don't.</em>
          </h1>
          <p className="hero-sub">
            CrossCheck International gives governments, institutions, and financial
            bodies a secure, sovereign intelligence layer for cross-border identity
            verification, risk classification, and mobility intelligence.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn-primary" onClick={open}>
              Request a Briefing
              <span className="arr" aria-hidden="true"><svg viewBox="0 0 13 13"><path d="M2 6.5h9M7 2l4.5 4.5L7 11" /></svg></span>
            </button>
            <a href="#how-it-works" className="btn-secondary">
              View the Platform
              <span className="arr" aria-hidden="true"><svg viewBox="0 0 13 13"><path d="M2 6.5h9M7 2l4.5 4.5L7 11" /></svg></span>
            </a>
          </div>
          <DesignedForTags />
        </div>

        <div className="hero-right">
          <div className="hero-card reveal">
            <div className="hc-top">
              <span className="hc-label">Live Intelligence Request</span>
              <span className="hc-badge badge-active">● LIVE</span>
            </div>
            <div className="hc-title">Cross-Border Verification</div>
            <div style={{ marginTop: '14px' }}>
              <div className="hc-row"><span className="hc-row-k">Request ID</span><span className="hc-row-v">CCI-2026-0047821</span></div>
              <div className="hc-row"><span className="hc-row-k">Requesting</span><span className="hc-row-v">United Kingdom</span></div>
              <div className="hc-row"><span className="hc-row-k">Biometric Match</span><span className="hc-row-v">CONFIRMED ✓</span></div>
              <div className="hc-row"><span className="hc-row-k">Classification</span><span className="hc-badge badge-green" style={{ fontSize: '11px' }}>GREEN — CLEAR</span></div>
              <div className="hc-row"><span className="hc-row-k">Response Time</span><span className="hc-row-v">2.3s</span></div>
            </div>
          </div>
          <div className="hero-card-duo reveal reveal--s1">
            <div className="hero-card">
              <div className="hc-top"><span className="hc-label">Risk Signal</span></div>
              <div className="hc-title" style={{ fontSize: '13px', marginBottom: '6px' }}>Financial Check</div>
              <span className="hc-badge badge-amber">AMBER — REVIEW</span>
              <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--slate)' }}>Bilateral · Tier 2 Access<br />No raw data transferred</div>
            </div>
            <div className="hero-card">
              <div className="hc-top"><span className="hc-label">System Status</span></div>
              <div className="hc-title" style={{ fontSize: '13px', marginBottom: '6px' }}>Platform Health</div>
              <span className="hc-badge badge-green">ALL SYSTEMS GO</span>
              <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--slate)' }}>99.8% uptime SLA<br />eu-central-1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
