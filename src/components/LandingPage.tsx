export default function LandingPage() {
  return (
    <>
<div className="hero-border">
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
        CrossCheck International gives governments, institutions, and financial bodies a secure, sovereign intelligence layer for cross-border identity verification, risk classification, and mobility intelligence.
      </p>
      <div className="hero-actions">
        <a href="#" className="btn-primary">
          Request a Briefing
          <span className="arr"><svg viewBox="0 0 13 13"><path d="M2 6.5h9M7 2l4.5 4.5L7 11"/></svg></span>
        </a>
        <a href="#" className="btn-secondary">
          View the Platform
          <span className="arr"><svg viewBox="0 0 13 13"><path d="M2 6.5h9M7 2l4.5 4.5L7 11"/></svg></span>
        </a>
      </div>
      <div className="hero-institutions">
        <div className="inst-label">Designed for</div>
        <div className="inst-tags">
          <span className="inst-tag">Governments</span>
          <span className="inst-tag">Border Agencies</span>
          <span className="inst-tag">Banks &amp; Insurers</span>
          <span className="inst-tag">Immigration Bodies</span>
          <span className="inst-tag">Law Enforcement</span>
        </div>
      </div>
    </div>

    <div className="hero-right">
      <div className="hero-card">
        <div className="hc-top">
          <span className="hc-label">Live Intelligence Request</span>
          <span className="hc-badge badge-active">● LIVE</span>
        </div>
        <div className="hc-title">Cross-Border Verification</div>
        <div style={{marginTop: '14px'}}>
          <div className="hc-row"><span className="hc-row-k">Request ID</span><span className="hc-row-v">CCI-2026-0047821</span></div>
          <div className="hc-row"><span className="hc-row-k">Requesting</span><span className="hc-row-v">United Kingdom</span></div>
          <div className="hc-row"><span className="hc-row-k">Biometric Match</span><span className="hc-row-v">CONFIRMED ✓</span></div>
          <div className="hc-row"><span className="hc-row-k">Classification</span><span className="hc-badge badge-green" style={{fontSize: '11px'}}>GREEN — CLEAR</span></div>
          <div className="hc-row"><span className="hc-row-k">Response Time</span><span className="hc-row-v">2.3s</span></div>
        </div>
      </div>
      <div className="hero-card-duo">
        <div className="hero-card">
          <div className="hc-top"><span className="hc-label">Risk Signal</span></div>
          <div className="hc-title" style={{fontSize: '13px', marginBottom: '6px'}}>Financial Check</div>
          <span className="hc-badge badge-amber">AMBER — REVIEW</span>
          <div style={{marginTop: '10px', fontSize: '12px', color: 'var(--slate)'}}>Bilateral · Tier 2 Access<br />No raw data transferred</div>
        </div>
        <div className="hero-card">
          <div className="hc-top"><span className="hc-label">System Status</span></div>
          <div className="hc-title" style={{fontSize: '13px', marginBottom: '6px'}}>Platform Health</div>
          <span className="hc-badge badge-green">ALL SYSTEMS GO</span>
          <div style={{marginTop: '10px', fontSize: '12px', color: 'var(--slate)'}}>99.8% uptime SLA<br />eu-central-1</div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="stats-strip">
  <div className="stats-inner">
    <div className="stat-item">
      <div className="stat-n">184<span>+</span></div>
      <div className="stat-l">Countries available for<br />cross-border checks</div>
    </div>
    <div className="stat-item">
      <div className="stat-n">99<span>.8%</span></div>
      <div className="stat-l">Platform uptime<br />service level agreement</div>
    </div>
    <div className="stat-item">
      <div className="stat-n">&lt;3<span>s</span></div>
      <div className="stat-l">Average cross-border<br />intelligence response</div>
    </div>
    <div className="stat-item">
      <div className="stat-n">0<span>%</span></div>
      <div className="stat-l">Raw biometric data<br />transferred across borders</div>
    </div>
  </div>
</div>


<section className="section">
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
          <svg viewBox="0 0 22 22"><path d="M11 2L20 6.5V13C20 17 16 20.5 11 22C6 20.5 2 17 2 13V6.5Z"/><path d="M7.5 11L10 13.5L14.5 8.5"/></svg>
        </div>
        <h3>Verify</h3>
        <p>Cross-border biometric verification that confirms identity across jurisdictions. Cryptographic hashing. Encrypted templates. Zero raw data transfer across any border.</p>
      </div>
      <div className="pillar">
        <div className="pillar-num">02</div>
        <div className="pillar-icon">
          <svg viewBox="0 0 22 22"><circle cx="11" cy="11" r="9"/><path d="M11 7v4l3 2"/></svg>
        </div>
        <h3>Classify</h3>
        <p>Structured risk intelligence returned as Green, Amber, or Red — calibrated per request, per country agreement, and per permitted access tier. Auditable. Defensible.</p>
      </div>
      <div className="pillar">
        <div className="pillar-num">03</div>
        <div className="pillar-icon">
          <svg viewBox="0 0 22 22"><circle cx="11" cy="8" r="4"/><path d="M4 20c0-4 3-7 7-7s7 3 7 7"/><path d="M16 13l2 2 4-4"/></svg>
        </div>
        <h3>Protect</h3>
        <p>Country-scoped data governance with bilateral agreement controls. Each nation retains full sovereignty. Access is granted only where treaties are active.</p>
      </div>
    </div>
  </div>
</section>


<section className="section section-alt">
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
          <span className="hc-badge badge-blue" style={{fontSize: '11px'}}>ACTIVE</span>
        </div>
        <div className="sp-body">
          <div className="sp-row"><span className="sp-row-k">Request ID</span><span className="sp-row-v">CCI-2026-0047821</span></div>
          <div className="sp-row"><span className="sp-row-k">Requesting Country</span><span className="sp-row-v">UNITED KINGDOM</span></div>
          <div className="sp-row"><span className="sp-row-k">Check Type</span><span className="sp-row-v">Residency Application</span></div>
          <div className="sp-row"><span className="sp-row-k">Biometric Match</span><span className="sp-row-v">CONFIRMED ✓</span></div>
          <div className="sp-row"><span className="sp-row-k">Risk Classification</span><span className="hc-badge badge-green" style={{fontSize: '11px'}}>GREEN — CLEAR</span></div>
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


<section className="section">
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
          <span className="hc-badge badge-amber" style={{fontSize: '11px'}}>REVIEW</span>
        </div>
        <div className="sp-body">
          <div className="sp-row"><span className="sp-row-k">Signal Type</span><span className="sp-row-v">Cross-Border Risk</span></div>
          <div className="sp-row"><span className="sp-row-k">Agreement Basis</span><span className="sp-row-v">Bilateral · Tier 2</span></div>
          <div className="sp-row"><span className="sp-row-k">Data Shared</span><span className="sp-row-v">Classification Only</span></div>
          <div className="sp-row"><span className="sp-row-k">Risk Signal</span><span className="hc-badge badge-amber" style={{fontSize: '11px'}}>AMBER — REVIEW</span></div>
          <div className="sp-row"><span className="sp-row-k">Raw Data Transferred</span><span className="sp-row-v">NONE ✓</span></div>
          <div className="sp-row"><span className="sp-row-k">Audit Trail</span><span className="sp-row-v">IMMUTABLE · LOGGED</span></div>
        </div>
      </div>
    </div>
  </div>
</section>


<div className="global-sec">
  <div className="global-inner">
    <div className="global-left">
      <div className="eyebrow-sm"><div className="el"></div><span className="et">Global Reach</span></div>
      <h2 className="sec-h2">Built for every region.<br /><em>Without exception.</em></h2>
      <p className="sec-p">CCI is not a Western solution deployed globally. It is neutral, sovereign-first infrastructure designed to serve governments and institutions across all regions — with governance that respects each nation's legal framework.</p>
    </div>
    <div className="region-grid">
      <div className="region-item"><div className="region-dot"></div><span className="region-name">Africa</span></div>
      <div className="region-item"><div className="region-dot"></div><span className="region-name">Asia Pacific</span></div>
      <div className="region-item"><div className="region-dot"></div><span className="region-name">Middle East</span></div>
      <div className="region-item"><div className="region-dot"></div><span className="region-name">Europe</span></div>
      <div className="region-item"><div className="region-dot"></div><span className="region-name">North America</span></div>
      <div className="region-item"><div className="region-dot"></div><span className="region-name">Latin America</span></div>
      <div className="region-item"><div className="region-dot"></div><span className="region-name">South Asia</span></div>
      <div className="region-item"><div className="region-dot"></div><span className="region-name">Caribbean</span></div>
    </div>
  </div>
</div>


<section className="section section-alt">
  <div className="section-inner">
    <div className="eyebrow-sm"><div className="el"></div><span className="et">Who CCI Serves</span></div>
    <h2 className="sec-h2" style={{maxWidth: '520px'}}>Designed for institutions that<br /><em>move people across borders.</em></h2>
    <div className="serve-grid">
      <div className="serve-card">
        <div className="serve-num">01</div>
        <h3>National Governments</h3>
        <p>Immigration ministries, home offices, and border agencies seeking structured cross-border risk intelligence to inform visa and entry decisions.</p>
      </div>
      <div className="serve-card">
        <div className="serve-num">02</div>
        <h3>Border & Immigration Agencies</h3>
        <p>Operational teams processing applications who need real-time risk classification from partner countries as part of their existing workflow.</p>
      </div>
      <div className="serve-card">
        <div className="serve-num">03</div>
        <h3>Banks & Financial Institutions</h3>
        <p>Lenders, insurers, and fintechs needing cross-border risk signals for onboarding, credit risk assessment, and AML compliance workflows.</p>
      </div>
      <div className="serve-card">
        <div className="serve-num">04</div>
        <h3>Integration Partners</h3>
        <p>Travel platforms, immigration processors, and visa agencies that want to embed CCI intelligence directly into their existing application workflows.</p>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="section-inner">
    <div className="why-head">
      <div>
        <div className="eyebrow-sm"><div className="el"></div><span className="et">Why CCI</span></div>
        <h2 className="sec-h2">What makes CCI<br /><em>different.</em></h2>
      </div>
      <p className="sec-p">Six principles that define how CCI handles the most sensitive data in the world — identity, mobility, and risk — across sovereign borders.</p>
    </div>
    <div className="why-grid">
      <div className="why-item">
        <div className="why-rule"></div>
        <div className="why-tag">01 · Sovereignty First</div>
        <h3>Your data never leaves without your consent.</h3>
        <p>Every access pathway is governed by bilateral agreements configured by the nations involved — not by CCI. Countries retain full control over what is shared, with whom, and at what tier.</p>
      </div>
      <div className="why-item">
        <div className="why-rule"></div>
        <div className="why-tag">02 · No Raw Transfer</div>
        <h3>Biometrics stay home. Only intelligence travels.</h3>
        <p>CCI never transmits raw biometric data across borders. Cryptographic hashes, match confirmations, and risk classifications are all that move. The underlying data stays in its origin country.</p>
      </div>
      <div className="why-item">
        <div className="why-rule"></div>
        <div className="why-tag">03 · Full Auditability</div>
        <h3>Every access, every decision, permanently recorded.</h3>
        <p>An immutable audit trail logs every query, result, agreement activation, and access event. Governments have full forensic visibility into how their data is used.</p>
      </div>
      <div className="why-item">
        <div className="why-rule"></div>
        <div className="why-tag">04 · Agreement-Gated</div>
        <h3>Access only where treaties are active.</h3>
        <p>No country can query another's data without an active bilateral agreement. Agreements can be created, modified, or revoked at any time with a 30-day continuity window.</p>
      </div>
      <div className="why-item">
        <div className="why-rule"></div>
        <div className="why-tag">05 · Configurable</div>
        <h3>Every country sets its own governance rules.</h3>
        <p>Fee structures, access tiers, application types, and country-pair requirements are all configurable per jurisdiction. CCI provides the infrastructure — each nation sets the parameters.</p>
      </div>
      <div className="why-item">
        <div className="why-rule"></div>
        <div className="why-tag">06 · Institution-Grade</div>
        <h3>Built to government and banking security standards.</h3>
        <p>End-to-end encryption, row-level database security, device-level access controls, and role-based governance across every function — designed for national government requirements.</p>
      </div>
    </div>
  </div>
</section>


<div className="cta-sec">
  <div className="cta-inner">
    <div className="eyebrow-sm" style={{justifyContent: 'center'}}><div className="el"></div><span className="et">Get Started</span><div className="el"></div></div>
    <h2 className="sec-h2">Ready to connect your country<br />to the <em>intelligence layer?</em></h2>
    <p className="sec-p">CCI is available to national governments, border agencies, financial institutions, and integration partners. Access is by agreement — start with a briefing.</p>
    <div className="cta-btns">
      <a href="#" className="btn-cta-dark">
        Request a Government Briefing
        <span className="arr"><svg viewBox="0 0 13 13"><path d="M2 6.5h9M7 2l4.5 4.5L7 11"/></svg></span>
      </a>
      <a href="#" className="btn-cta-outline">
        Partner with CCI
        <span className="arr"><svg viewBox="0 0 13 13"><path d="M2 6.5h9M7 2l4.5 4.5L7 11"/></svg></span>
      </a>
    </div>
  </div>
</div>


<footer>
  <div className="footer-grid">
    <div className="footer-brand">
      <div className="footer-logo-row">
        <svg width="26" height="26" viewBox="0 0 38 38" fill="none">
          <rect width="38" height="38" rx="10" fill="#132A50"/>
          <circle cx="19" cy="19" r="11.5" stroke="#1A6BD4" strokeWidth="1.2" fill="none"/>
          <ellipse cx="19" cy="19" rx="5.5" ry="11.5" stroke="#1A6BD4" strokeWidth="0.9" fill="none"/>
          <line x1="7.5" y1="19" x2="30.5" y2="19" stroke="#1A6BD4" strokeWidth="0.9"/>
          <line x1="9" y1="14" x2="29" y2="14" stroke="#1A6BD4" strokeWidth="0.9"/>
          <line x1="9" y1="24" x2="29" y2="24" stroke="#1A6BD4" strokeWidth="0.9"/>
          <path d="M19 8L25.5 11.5V19.5C25.5 23 22.5 26 19 27.5C15.5 26 12.5 23 12.5 19.5V11.5Z" fill="rgba(26,107,212,0.14)" stroke="#3B8EF0" strokeWidth="1.1" strokeLinejoin="round"/>
          <path d="M16 19.5L18.2 21.5L22 17" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="footer-cci">CROSSCHECK INTERNATIONAL</span>
      </div>
      <p className="footer-slogan">"Where intelligence informs integrity."</p>
      <p className="footer-desc">Sovereign-grade cross-border identity intelligence for governments, institutions, and the partners that connect them.</p>
    </div>
    <div className="footer-col">
      <h4>Platform</h4>
      <ul>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">For Governments</a></li>
        <li><a href="#">For Banks &amp; Insurers</a></li>
        <li><a href="#">Integration Partners</a></li>
        <li><a href="#">API Documentation</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="#">About CCI</a></li>
        <li><a href="#">Our Mission</a></li>
        <li><a href="#">Security</a></li>
        <li><a href="#">Compliance</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Legal</h4>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Data Governance</a></li>
        <li><a href="#">Cookie Policy</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <span>© 2026 CrossCheck International. All rights reserved.</span>
    <div className="footer-bottom-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Security</a>
    </div>
  </div>
</footer>


    </>
  );
}
