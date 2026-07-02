import { useState } from 'react';

type Scenario = {
  num: string;
  tab: string;
  headline: string;
  narrative: [string, string];
  query: string;
  outcome: string;
  status: { text: string; cls: string };
  rows: [string, string][];
  basis: string;
};

const SCENARIOS: Scenario[] = [
  {
    num: '01',
    tab: 'Cross-Border Lending Risk',
    headline: 'A borrower relocates after default.',
    narrative: [
      'An individual applies for a business loan with a mid-sized bank in the receiving country. The application is well-documented — verified employment, valid residence permit, clean local credit file. On paper, the applicant qualifies. What the local credit file cannot show is that the same individual defaulted on two facilities in their country of origin totalling more than half a million in local currency, and left the jurisdiction shortly before enforcement proceedings were initiated.',
      'Under the bilateral financial intelligence agreement between the two countries, the bank submits a CCI query as part of its cross-border onboarding process. Within seconds, CCI returns a structured signal: prior default history exists, jurisdiction confirmed, classification amber.',
    ],
    query: 'Cross-border financial conduct check on an incoming loan applicant.',
    outcome:
      'CCI returns an amber classification indicating prior default history in the country of origin, along with a sanctions-clear confirmation. The bank does not receive the loan details or the creditor\u2019s identity — only that classified signal. The credit committee decides to proceed with a lower facility ceiling and additional guarantees, avoiding an exposure the local file would never have surfaced.',
    status: { text: 'AMBER — REVIEW', cls: 'badge-amber' },
    rows: [
      ['Identity Match', 'CONFIRMED ✓'],
      ['Prior Default History', 'CLASSIFIED'],
      ['Cross-Border Bankruptcy', 'NONE'],
      ['Sanctions Exposure', 'CLEAR'],
      ['Response Time', '2.1s'],
    ],
    basis: 'Bilateral · Financial Intelligence Tier 2',
  },
  {
    num: '02',
    tab: 'Family Reunification',
    headline: 'A separated family, identified across two systems.',
    narrative: [
      'A woman and two children arrive at a reception centre in the receiving country. She reports that her husband arrived several months earlier and is somewhere in the country\u2019s asylum system. She has no documents, no phone number, no address — only names, dates of birth, and a photograph taken before separation. The reception centre in the receiving country cannot cross-reference her account against active asylum files without a formal information-sharing basis.',
      'Under the humanitarian intelligence framework between the receiving country and the origin country\u2019s diaspora support authority, the reception centre submits a CCI query. The query returns a probable identity match to an active asylum record within the same national system, alongside case-management contact details for the responsible caseworker.',
    ],
    query: 'Humanitarian identity match to support family reunification.',
    outcome:
      'CCI returns a probable-match classification against an active asylum case in the same jurisdiction, with the responsible caseworker\u2019s contact routed through the humanitarian channel. The two case files are linked within twenty-four hours, and the family is reunited the following week. No underlying case data crosses the border — only the match signal and the routing information required to reconnect the two caseworkers.',
    status: { text: 'MATCH — HUMANITARIAN', cls: 'badge-blue' },
    rows: [
      ['Biometric Match', 'PROBABLE ✓'],
      ['Case in Same System', 'CONFIRMED'],
      ['Active Caseworker Assigned', 'YES'],
      ['Family Link Indicator', 'DEPENDENT MATCH'],
      ['Response Time', '3.4s'],
    ],
    basis: 'Humanitarian Intelligence Framework',
  },
  {
    num: '03',
    tab: 'Suspected Trafficking',
    headline: 'A pattern only cross-border data can see.',
    narrative: [
      'Border officers in the receiving country encounter a young adult travelling with an older adult who is not a family member. Documents appear valid. The younger traveller is quiet, deferential, and unable to answer basic questions about the trip\u2019s purpose or itinerary. The officer\u2019s instinct is that something is wrong, but there is no single flag on either individual\u2019s local records — no criminal history, no watchlist entry, nothing that would justify refusing entry.',
      'Under the pattern-intelligence provisions of the bilateral border agreement, the officer submits a CCI query on both individuals. The query returns pattern signals visible only at cross-border scale: the older adult has entered and exited three different jurisdictions in the previous six weeks, each time accompanied by a different young adult presenting for the first time.',
    ],
    query: 'Cross-border pattern check on two co-travelling individuals.',
    outcome:
      'CCI returns a red classification on the older adult based on multi-jurisdiction velocity and co-traveller pattern signals, alongside a protection flag on the younger traveller. The officer refers the younger traveller to the receiving country\u2019s protection unit and detains the older adult for further investigation. No underlying case files cross the border — only the pattern classifications that made the intervention possible.',
    status: { text: 'RED — PROTECTION FLAG', cls: 'badge-red' },
    rows: [
      ['Multi-Jurisdiction Velocity', 'HIGH'],
      ['Co-Traveller Pattern', 'MATCH'],
      ['Prior Refused Entries', 'NONE'],
      ['Protection Referral Indicator', 'YES'],
      ['Response Time', '2.8s'],
    ],
    basis: 'Bilateral · Pattern Intelligence Tier 3',
  },
  {
    num: '04',
    tab: 'Professional Misconduct',
    headline: 'Struck off in one country. Practising in another.',
    narrative: [
      'A national medical regulator receives an application from a physician seeking to register and practise in the receiving country. The application includes qualifications from a foreign medical school, references from a previous employer, and a certificate of good standing dated two years ago. The regulator\u2019s own records show nothing. What the regulator cannot see through normal channels is that the physician was subject to disciplinary proceedings in their country of origin eighteen months ago and had their licence revoked for serious clinical misconduct.',
      'Under the professional-standing agreement between the two regulators, CCI is queried as part of the international registration workflow. The query returns a revocation classification and the jurisdiction that issued it, without exposing the underlying case detail.',
    ],
    query: 'Cross-border professional standing check on an international registration applicant.',
    outcome:
      'CCI returns a revocation classification against the applicant\u2019s licence in the origin jurisdiction, along with the year of revocation and the regulator responsible. The receiving regulator does not receive the disciplinary file — only the classified signal. The regulator declines the registration and opens a channel to the origin regulator for the disciplinary detail through formal regulator-to-regulator process. Two years of unregistered practice under a false certificate of good standing is prevented.',
    status: { text: 'RED — REVOCATION', cls: 'badge-red' },
    rows: [
      ['Licence Status Origin', 'REVOKED'],
      ['Revocation Year', '2024'],
      ['Certificate of Good Standing', 'DISPUTED'],
      ['Sanctions Exposure', 'CLEAR'],
      ['Response Time', '2.5s'],
    ],
    basis: 'Regulator-to-Regulator · Tier 2',
  },
];

export default function Scenarios() {
  const [active, setActive] = useState(0);
  const s = SCENARIOS[active];

  return (
    <section id="scenarios" className="section">
      <div className="section-inner">
        <div className="sc-head reveal">
          <div className="eyebrow-sm"><div className="el"></div><span className="et">Scenarios In Practice</span></div>
          <h2 className="sec-h2">What CCI resolves. <em>Across borders.</em></h2>
          <p className="sec-p">Four illustrative cases showing how CCI intelligence surfaces at the point of decision. All scenarios are anonymised and representative. Names, dates, and jurisdictions are illustrative.</p>
        </div>

        <div className="sc-tabs" role="tablist" aria-label="Scenarios">
          {SCENARIOS.map((sc, i) => (
            <button
              key={sc.num}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`sc-tab${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="sc-tab-num">{sc.num}</span>
              <span className="sc-tab-sep">—</span>
              <span className="sc-tab-text">{sc.tab}</span>
            </button>
          ))}
        </div>

        <div className="sc-panel reveal" role="tabpanel">
          <div className="sc-left">
            <div className="sc-label">Scenario</div>
            <h3 className="sc-h3">{s.headline}</h3>
            <div className="sc-narrative">
              {s.narrative.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="sc-label">The Query</div>
            <p className="sc-line">{s.query}</p>
            <div className="sc-label">The Outcome</div>
            <p className="sc-line">{s.outcome}</p>
          </div>

          <div className="sc-right">
            <div className="sc-card">
              <div className="sc-card-top">
                <span className="sc-card-label">CCI Signals Returned</span>
                <span className={`hc-badge ${s.status.cls}`}>{s.status.text}</span>
              </div>
              <div className="sc-card-body">
                {s.rows.map(([k, v]) => (
                  <div className="sc-row" key={k}>
                    <span className="sc-row-k">{k}</span>
                    <span className="sc-row-v">{v}</span>
                  </div>
                ))}
              </div>
              <div className="sc-card-basis">
                <span className="sc-basis-label">Agreement Basis</span>
                <span className="sc-basis-val">{s.basis}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sc-callout">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5" />
            <path d="M12 8h.01" />
          </svg>
          <span>All scenarios illustrative. In every case, no raw records cross the border — only classifications and match signals authorised under the applicable bilateral or multilateral agreement.</span>
        </div>
      </div>
    </section>
  );
}
