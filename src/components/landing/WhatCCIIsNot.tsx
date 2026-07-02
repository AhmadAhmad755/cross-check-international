type Clarification = {
  headline: string;
  body: string;
};

const CLARIFICATIONS: Clarification[] = [
  {
    headline: 'A central database.',
    body: 'CCI holds no biometric templates, no records, no case files. Every check runs inside the country of origin, against records that never leave that country. What crosses the border is a classification or a match confirmation — never the data behind it. CCI is a routing and classification layer, not a repository.',
  },
  {
    headline: 'A decision engine.',
    body: 'CCI does not approve, refuse, or refer anyone. It surfaces the signals a human decision-maker needs — nothing more. Every outcome is a human decision, made by an authorised officer or institution, under their own agency\u2019s rules. CCI provides intelligence. Governments provide judgment.',
  },
  {
    headline: 'Optional surveillance.',
    body: 'Every access pathway is agreement-gated. No country can query another\u2019s data without an active bilateral agreement covering that specific class of query, at the specific tier authorised. Agreements are configured, modified, or revoked by the participating countries — not by CCI, and not by any third party. Access without agreement is architecturally impossible.',
  },
  {
    headline: 'A replacement for existing systems.',
    body: 'CCI does not replace visa processors, application intake systems, border management platforms, or existing bilateral channels. It sits alongside them as a complementary intelligence layer — adding structured cross-border signals to workflows that continue to run as they do today. No system rip-and-replace. No workflow disruption.',
  },
];

export default function WhatCCIIsNot() {
  return (
    <section id="clarifications" className="section section-alt">
      <div className="section-inner">
        <div className="ic-head reveal">
          <div className="eyebrow-sm"><div className="el"></div><span className="et">Clarifications</span></div>
          <h2 className="sec-h2">Four things CCI <em>is not.</em></h2>
          <p className="sec-p">Governments and institutions arrive at CCI with reasonable concerns. Rather than let them sit unstated, we answer them directly.</p>
        </div>
        <div className="not-grid">
          {CLARIFICATIONS.map((c, i) => (
            <div className={`not-card reveal${i > 0 ? ` reveal--s${i}` : ''}`} key={c.headline}>
              <div className="not-label">Not</div>
              <h3 className="not-h3">{c.headline}</h3>
              <p className="not-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
