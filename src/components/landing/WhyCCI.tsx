import { useState } from 'react';

type Principle = {
  tag: string;
  headline: string;
  paragraph: string;
  inPractice: string;
  example: string;
};

const PRINCIPLES: Principle[] = [
  {
    tag: '01 · Sovereignty First',
    headline: 'Your data never leaves without your consent.',
    paragraph:
      'Every access pathway is governed by bilateral agreements configured by the nations involved — not by CCI. Countries retain full control over what is shared, with whom, and at what tier.',
    inPractice:
      'Every access pathway is configured by the two nations involved, not by CCI. Countries define what queries are permitted, at what tier, with what response detail, and with what audit requirements. Nothing runs against a country\u2019s records that the country has not explicitly authorised.',
    example:
      'A country may permit identity-match confirmations under a tier-one agreement, but restrict financial conduct signals to a tier-three agreement with a specific partner. Both configurations can coexist. Neither is imposed.',
  },
  {
    tag: '02 · No Raw Transfer',
    headline: 'Biometrics stay home. Only intelligence travels.',
    paragraph:
      'CCI never transmits raw biometric data across borders. Cryptographic hashes, match confirmations, and risk classifications are all that move. The underlying data stays in its origin country.',
    inPractice:
      'The biometric template, the case file, the underlying record — none of these ever leave the country of origin. The verification runs against the local record, in the local sovereign node, and only the classification or match confirmation returns across the border.',
    example:
      'When a receiving country confirms a biometric match against an origin country\u2019s records, no image, no template, and no personal identifier crosses the border. Only the confirmation, the quality score, and the hash reference travel.',
  },
  {
    tag: '03 · Full Auditability',
    headline: 'Every access, every decision, permanently recorded.',
    paragraph:
      'An immutable audit trail logs every query, result, agreement activation, and access event. Governments have full forensic visibility into how their data is used.',
    inPractice:
      'Every query is logged and attributed to the individual officer who submitted it. Every decision made on the basis of a CCI signal is logged alongside the query that informed it. Both the requesting and the responding country retain full forensic visibility into how their data was accessed and used.',
    example:
      'A country\u2019s ministry can retrieve, at any time, a complete record of every query submitted against its data, by whom, for what stated purpose, with what classification returned, and what decision was made on that basis.',
  },
  {
    tag: '04 · Agreement-Gated',
    headline: 'Access only where treaties are active.',
    paragraph:
      'No country can query another\u2019s data without an active bilateral agreement. Agreements can be created, modified, or revoked at any time with a 30-day continuity window.',
    inPractice:
      'Bilateral agreements specify which classes of query are permitted, which tiers of access are authorised, and which specific institutions within each country may participate. Agreements can be created, modified, or revoked at any time, with a mandatory continuity window to protect in-flight queries.',
    example:
      'If a country revokes an agreement, CCI honours a thirty-day continuity window for queries already in flight, then stops all further access. No exception. No override.',
  },
  {
    tag: '05 · Configurable',
    headline: 'Every country sets its own governance rules.',
    paragraph:
      'Fee structures, access tiers, application types, and country-pair requirements are all configurable per jurisdiction. CCI provides the infrastructure — each nation sets the parameters.',
    inPractice:
      'Fee structures, access tiers, query types, response detail, retention windows, and permitted institutions are all configured per jurisdiction. No two countries need to operate CCI on the same terms. The infrastructure adapts to the country\u2019s legal framework, not the other way around.',
    example:
      'A country may charge nothing for humanitarian queries, a nominal fee for standard verification queries, and a tiered fee for high-detail financial intelligence queries — all configured within the same national framework.',
  },
  {
    tag: '06 · Institution-Grade',
    headline: 'Built to government and banking security standards.',
    paragraph:
      'End-to-end encryption, row-level database security, device-level access controls, and role-based governance across every function — designed for national government requirements.',
    inPractice:
      'End-to-end encryption, row-level database security, device-level access controls, role-based governance, immutable audit logs, and network isolation across sovereign nodes. Designed to meet the operational security requirements of national governments and tier-one financial institutions.',
    example:
      'Every sovereign node runs inside its country\u2019s authorised infrastructure, isolated from other nodes at the network layer. Cross-node communication is limited to the specific signal payloads permitted under active agreements — nothing more.',
  },
];

export default function WhyCCI() {
  const [open, setOpen] = useState<number[]>([]);
  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <section id="why-cci" className="section">
      <div className="section-inner">
        <div className="why-head reveal">
          <div>
            <div className="eyebrow-sm"><div className="el"></div><span className="et">Why CCI</span></div>
            <h2 className="sec-h2">What makes CCI<br /><em>different.</em></h2>
          </div>
          <p className="sec-p">Six principles that define how CCI handles the most sensitive data in the world — identity, mobility, and risk — across sovereign borders.</p>
        </div>
        <div className="why-grid">
          {PRINCIPLES.map((p, i) => {
            const isOpen = open.includes(i);
            return (
              <div
                key={p.tag}
                className={`why-item${isOpen ? ' is-open' : ''}`}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
              >
                <span className={`why-chevron${isOpen ? ' is-open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                </span>
                <div className="why-rule"></div>
                <div className="why-tag">{p.tag}</div>
                <h3>{p.headline}</h3>
                <p>{p.paragraph}</p>
                {isOpen && (
                  <div className="why-expand">
                    <div className="why-divider"></div>
                    <p className="why-practice">{p.inPractice}</p>
                    <div className="why-example-label">Example</div>
                    <p className="why-example">{p.example}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
