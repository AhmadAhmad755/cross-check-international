export default function IntelligenceLayerSplit() {
  return (
    <section id="how-it-works" className="section section-alt">
      <div className="section-inner">
        <div className="split">
          <div className="split-text reveal">
            <div className="eyebrow-sm"><div className="el"></div><span className="et">01 · Intelligence Layer</span></div>
            <h2 className="sec-h2">The gap between processing and intelligence — <em>filled.</em></h2>
            <p className="sec-p">Application processing agencies handle intake — biometric enrolment, document verification, and administrative processing of visa, residency, and citizenship applications. International law enforcement channels handle the high-severity end — active red notices, extradition requests, and serious transnational crime. Between them sits the operational middle layer: overstay history, cross-border defaults, prior refusals, revoked professional licences, open investigations and active proceedings in participating jurisdictions, and pattern signals only visible across borders. Neither layer surfaces this today. CCI is the structured intelligence layer that does.</p>
            <ul className="feature-list">
              <li><div className="fl-dot"></div>Application processors move applications forward. CCI adds the cross-border risk classification they cannot see.</li>
              <li><div className="fl-dot"></div>International law enforcement covers the severe end. CCI covers the operational middle — the signals that inform routine border, banking, and regulatory decisions.</li>
              <li><div className="fl-dot"></div>No replacement of existing infrastructure. CCI is a complementary intelligence layer that runs alongside the systems agencies already use.</li>
              <li><div className="fl-dot"></div>Every signal is agreement-gated, classification-only, and delivered without transferring underlying records.</li>
            </ul>
          </div>
          <div className="split-panel reveal reveal--s1">
            <div className="sp-header">
              <span className="sp-header-title">Cross-Border Intelligence Request</span>
              <span className="hc-badge badge-blue" style={{ fontSize: '11px' }}>ACTIVE</span>
            </div>
            <div className="sp-body">
              <div className="sp-row"><span className="sp-row-k">Request ID</span><span className="sp-row-v">CCI-2026-0047821</span></div>
              <div className="sp-row"><span className="sp-row-k">Requesting Country</span><span className="sp-row-v">UNITED KINGDOM</span></div>
              <div className="sp-row"><span className="sp-row-k">Check Type</span><span className="sp-row-v">Residency Application</span></div>
              <div className="sp-row"><span className="sp-row-k">Biometric Match</span><span className="sp-row-v">CONFIRMED ✓</span></div>
              <div className="sp-row"><span className="sp-row-k">Risk Classification</span><span className="hc-badge badge-green" style={{ fontSize: '11px' }}>GREEN — CLEAR</span></div>
              <div className="sp-row"><span className="sp-row-k">Response Time</span><span className="sp-row-v">2.3 seconds</span></div>
              <div className="sp-row"><span className="sp-row-k">Raw Data Transferred</span><span className="sp-row-v">NONE ✓</span></div>
            </div>
            <div className="sp-stat-row">
              <div className="sp-stat">
                <div className="sp-stat-n">184</div>
                <div className="sp-stat-l">Countries Active</div>
              </div>
              <div className="sp-stat">
                <div className="sp-stat-n">99.8%</div>
                <div className="sp-stat-l">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
