export default function IntelligenceLayerSplit() {
  return (
    <section id="how-it-works" className="section section-alt">
      <div className="section-inner">
        <div className="split">
          <div className="split-text">
            <div className="eyebrow-sm"><div className="el"></div><span className="et">01 · Intelligence Layer</span></div>
            <h2 className="sec-h2">The gap between processing and intelligence — <em>filled.</em></h2>
            <p className="sec-p">VFS Global and TLS Contact process applications. Interpol and Europol share alerts. CCI operates in the space between — providing the structured risk intelligence that neither currently offers at scale.</p>
            <ul className="feature-list">
              <li><div className="fl-dot"></div>Cross-border risk classification shared securely between requesting and responding nations</li>
              <li><div className="fl-dot"></div>Intelligence usable by banks, insurers, and ETA-equivalent border systems</li>
              <li><div className="fl-dot"></div>Designed to integrate alongside existing visa and travel processing workflows</li>
              <li><div className="fl-dot"></div>No replacement of existing infrastructure — a complementary intelligence layer</li>
            </ul>
          </div>
          <div className="split-panel">
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
