export default function WhoCCIServes() {
  return (
    <section id="who-we-serve" className="section section-alt">
      <div className="section-inner">
        <div className="eyebrow-sm"><div className="el"></div><span className="et">Who CCI Serves</span></div>
        <h2 className="sec-h2" style={{ maxWidth: '520px' }}>Designed for institutions that<br /><em>move people across borders.</em></h2>
        <div className="serve-grid">
          <div className="serve-card">
            <div className="serve-num">01</div>
            <h3>National Governments</h3>
            <p>Immigration ministries, home offices, and border agencies seeking structured cross-border risk intelligence to inform visa and entry decisions.</p>
          </div>
          <div className="serve-card">
            <div className="serve-num">02</div>
            <h3>Border &amp; Immigration Agencies</h3>
            <p>Operational teams processing applications who need real-time risk classification from partner countries as part of their existing workflow.</p>
          </div>
          <div className="serve-card">
            <div className="serve-num">03</div>
            <h3>Banks &amp; Financial Institutions</h3>
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
  );
}
