export default function HumanitarianSplit() {
  return (
    <section id="humanitarian" className="section">
      <div className="section-inner">
        <div className="split">
          <div className="split-text reveal">
            <div className="eyebrow-sm"><div className="el"></div><span className="et">04 · Humanitarian Intelligence</span></div>
            <h2 className="sec-h2">Cross-border identity <em>in service of protection.</em></h2>
            <p className="sec-p">The same infrastructure that surfaces risk also enables protection. CCI supports humanitarian bodies, protection agencies, and consular services in identifying separated families, confirming the identity of persons in need of protection, and preventing duplicate registrations in crisis response — all without exposing underlying case data across borders.</p>
            <ul className="feature-list">
              <li><div className="fl-dot"></div>Family reunification supported through cross-system identity match, without exposing case files</li>
              <li><div className="fl-dot"></div>Duplicate registration prevented in refugee-response operations, protecting scarce humanitarian resources</li>
              <li><div className="fl-dot"></div>Trafficked persons identified through pattern signals only visible at cross-border scale</li>
              <li><div className="fl-dot"></div>Consular services supporting citizens abroad — from crisis repatriation to identity re-issuance for nationals overseas</li>
            </ul>
          </div>
          <div className="split-panel reveal reveal--s1">
            <div className="sp-header">
              <span className="sp-header-title">Humanitarian Intelligence Request</span>
              <span className="hc-badge badge-green" style={{ fontSize: '11px' }}>MATCH — HUMANITARIAN</span>
            </div>
            <div className="sp-body">
              <div className="sp-row"><span className="sp-row-k">Signal Type</span><span className="sp-row-v">Humanitarian Match</span></div>
              <div className="sp-row"><span className="sp-row-k">Agreement Basis</span><span className="sp-row-v">Humanitarian Framework</span></div>
              <div className="sp-row"><span className="sp-row-k">Data Shared</span><span className="sp-row-v">Match Confirmation Only</span></div>
              <div className="sp-row"><span className="sp-row-k">Match Signal</span><span className="hc-badge badge-green" style={{ fontSize: '11px' }}>PROBABLE ✓</span></div>
              <div className="sp-row"><span className="sp-row-k">Raw Data Transferred</span><span className="sp-row-v">NONE ✓</span></div>
              <div className="sp-row"><span className="sp-row-k">Audit Trail</span><span className="sp-row-v">IMMUTABLE · LOGGED</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
