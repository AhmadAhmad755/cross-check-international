export default function ThreePillars() {
  return (
    <section id="solutions" className="section">
      <div className="section-inner">
        <div className="pillars-head">
          <div>
            <div className="eyebrow-sm"><div className="el"></div><span className="et">What CCI Does</span></div>
            <h2 className="sec-h2">One platform.<br /><em>Verify. Classify. Protect.</em></h2>
          </div>
          <p className="sec-p">A single secure infrastructure layer enabling sovereign nations and institutions to share, verify, and act on identity intelligence — without compromising data sovereignty or exposing sensitive records.</p>
        </div>
        <div className="pillars-grid">
          <div className="pillar">
            <div className="pillar-num">01</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 22 22"><path d="M11 2L20 6.5V13C20 17 16 20.5 11 22C6 20.5 2 17 2 13V6.5Z" /><path d="M7.5 11L10 13.5L14.5 8.5" /></svg>
            </div>
            <h3>Verify</h3>
            <p>Cross-border biometric verification that confirms identity across jurisdictions. Cryptographic hashing. Encrypted templates. Zero raw data transfer across any border.</p>
          </div>
          <div className="pillar">
            <div className="pillar-num">02</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" /><path d="M11 7v4l3 2" /></svg>
            </div>
            <h3>Classify</h3>
            <p>Structured risk intelligence returned as Green, Amber, or Red — calibrated per request, per country agreement, and per permitted access tier. Auditable. Defensible.</p>
          </div>
          <div className="pillar">
            <div className="pillar-num">03</div>
            <div className="pillar-icon">
              <svg viewBox="0 0 22 22"><circle cx="11" cy="8" r="4" /><path d="M4 20c0-4 3-7 7-7s7 3 7 7" /><path d="M16 13l2 2 4-4" /></svg>
            </div>
            <h3>Protect</h3>
            <p>Country-scoped data governance with bilateral agreement controls. Each nation retains full sovereignty. Access is granted only where treaties are active.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
