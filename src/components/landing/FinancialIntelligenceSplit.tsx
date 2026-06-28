export default function FinancialIntelligenceSplit() {
  return (
    <section id="for-institutions" className="section">
      <div className="section-inner">
        <div className="split flip">
          <div className="split-text">
            <div className="eyebrow-sm"><div className="el"></div><span className="et">02 · Financial Intelligence</span></div>
            <h2 className="sec-h2">Risk signals banks and insurers can <em>act on.</em></h2>
            <p className="sec-p">CCI delivers structured risk signals that financial institutions can integrate into onboarding, lending, and cross-border transaction workflows — through a secure API governed by country-level data agreements.</p>
            <ul className="feature-list">
              <li><div className="fl-dot"></div>Risk classification signals available to banks and insurers via bilateral agreement</li>
              <li><div className="fl-dot"></div>Cross-border financial obligation intelligence for participating countries</li>
              <li><div className="fl-dot"></div>Structured data feeds for AML, KYC, and credit risk workflows</li>
              <li><div className="fl-dot"></div>No raw personal data transmitted — classification and match signals only</li>
            </ul>
          </div>
          <div className="split-panel">
            <div className="sp-header">
              <span className="sp-header-title">Financial Risk Signal</span>
              <span className="hc-badge badge-amber" style={{ fontSize: '11px' }}>REVIEW</span>
            </div>
            <div className="sp-body">
              <div className="sp-row"><span className="sp-row-k">Signal Type</span><span className="sp-row-v">Cross-Border Risk</span></div>
              <div className="sp-row"><span className="sp-row-k">Agreement Basis</span><span className="sp-row-v">Bilateral · Tier 2</span></div>
              <div className="sp-row"><span className="sp-row-k">Data Shared</span><span className="sp-row-v">Classification Only</span></div>
              <div className="sp-row"><span className="sp-row-k">Risk Signal</span><span className="hc-badge badge-amber" style={{ fontSize: '11px' }}>AMBER — REVIEW</span></div>
              <div className="sp-row"><span className="sp-row-k">Raw Data Transferred</span><span className="sp-row-v">NONE ✓</span></div>
              <div className="sp-row"><span className="sp-row-k">Audit Trail</span><span className="sp-row-v">IMMUTABLE · LOGGED</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
