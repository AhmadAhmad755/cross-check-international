import type { ReactNode } from 'react';

type Category = {
  num: string;
  name: string;
  icon: ReactNode;
  description: string;
  returns: string;
};

const CATEGORIES: Category[] = [
  {
    num: '01',
    name: 'Identity Confirmation',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2L20 5.5V11.5C20 16.5 16.5 20 12 22C7.5 20 4 16.5 4 11.5V5.5Z" />
        <path d="M8.5 12L11 14.5L15.5 9.5" />
      </svg>
    ),
    description:
      'Biometric verification confirms that the person presenting an application matches the records held in their country of origin. CCI returns a match confirmation or non-match — never the underlying template.',
    returns: 'Match confirmation, template hash verification, quality score',
  },
  {
    num: '02',
    name: 'Mobility History',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="9" r="2.6" />
        <path d="M8.5 15h7" />
        <path d="M9.5 17.5h5" />
      </svg>
    ),
    description:
      'Cross-border movement signals across participating nations — including overstay history, prior refused entries, deportation records, and prior asylum applications. Returned as classifications, not itineraries.',
    returns: 'Overstay flag, refusal history, deportation record, prior asylum',
  },
  {
    num: '03',
    name: 'Civil & Criminal Signals',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3.5v17" />
        <path d="M5 20.5h14" />
        <path d="M5 7.5h14" />
        <path d="M5 7.5l-2.5 5h5z" />
        <path d="M19 7.5l-2.5 5h5z" />
      </svg>
    ),
    description:
      'Per-country agreement determines what civil and criminal signals are surfaced. Covers the operational middle layer between an empty record and an Interpol notice — without exposing case detail.',
    returns: 'Open proceeding flag, conviction classification, sanctions match',
  },
  {
    num: '04',
    name: 'Financial Conduct',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21h18" />
        <rect x="5" y="11" width="3" height="8" />
        <rect x="10.5" y="6" width="3" height="13" />
        <rect x="16" y="14" width="3" height="5" />
      </svg>
    ),
    description:
      'Structured financial conduct signals for banks, insurers, and lenders operating across borders. Covers default history, cross-border bankruptcy, sanctions exposure, and AML watchlist hits — classified, never itemised.',
    returns: 'Default history, bankruptcy flag, sanctions exposure, AML hit',
  },
  {
    num: '05',
    name: 'Document Integrity',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M6 3h8l4 4v5" />
        <path d="M14 3v4h4" />
        <path d="M6 3v18h6" />
        <circle cx="16" cy="17" r="3" />
        <path d="M18.2 19.2L21 22" />
      </svg>
    ),
    description:
      'Detects identity documents and applications that have been forged, reused, or submitted under variant identities across jurisdictions. Strengthens application intake without replacing existing processors.',
    returns: 'Forgery indicator, document reuse, variant identity flag',
  },
  {
    num: '06',
    name: 'Pattern Signals',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="18" cy="6" r="2.2" />
        <circle cx="12" cy="18" r="2.2" />
        <path d="M8 6h8" />
        <path d="M7.7 7.6L10.6 16" />
        <path d="M16.3 7.6L13.4 16" />
      </svg>
    ),
    description:
      'Movement and identity patterns that emerge only at cross-border scale — rapid multi-jurisdiction travel, identity reuse across nations, alias indicators, and beneficial-ownership chains.',
    returns: 'Multi-jurisdiction velocity, alias indicator, BO chain link',
  },
  {
    num: '07',
    name: 'Professional Standing',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="9" r="5" />
        <path d="M9 13.5L8 22l4-2.5L16 22l-1-8.5" />
        <path d="M12 6.4l.9 1.8 2 .3-1.45 1.4.35 2L12 11.7l-1.8.95.35-2L9.1 8.5l2-.3z" />
      </svg>
    ),
    description:
      'Cross-border verification of regulated professionals — doctors, lawyers, financial advisers, directors. Surfaces licence revocations and misconduct findings when individuals move between jurisdictions to continue practising.',
    returns: 'Licence status, revocation history, regulatory finding',
  },
];

export default function IntelligenceCategories() {
  return (
    <section id="intelligence-layer" className="section">
      <div className="section-inner">
        <div className="ic-head">
          <div className="eyebrow-sm"><div className="el"></div><span className="et">The Intelligence Layer</span></div>
          <h2 className="sec-h2">Seven categories of intelligence. <em>One sovereign layer.</em></h2>
          <p className="sec-p">CCI returns structured classifications and confirmations across seven intelligence domains. Every signal is governed by bilateral agreement, scoped per access tier, and returned without transferring underlying records.</p>
        </div>
        <div className="ic-grid">
          {CATEGORIES.map((c) => (
            <div className="ic-card" key={c.num}>
              <div className="ic-card-top">
                <div className="ic-num">{c.num}</div>
                <div className="ic-icon" aria-hidden="true">{c.icon}</div>
              </div>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <div className="ic-returns">
                <div className="ic-returns-label">Returns</div>
                <div className="ic-returns-list">{c.returns}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="ic-callout">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="11" width="14" height="9" rx="1.5" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          <span>Classification only. No raw biometric, financial, or document data leaves its country of origin.</span>
        </div>
      </div>
    </section>
  );
}
