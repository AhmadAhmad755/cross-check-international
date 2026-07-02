import { useState } from 'react';

type Step = {
  num: string;
  label: string;
  title: string;
  summary: string;
  detail: string;
  chips: [string, string][];
};

const STEPS: Step[] = [
  {
    num: '01',
    label: 'Query Initiated',
    title: 'Query Initiated',
    summary: 'An officer submits a verification request.',
    detail:
      'A border officer, immigration processor, or authorised institution submits a query on behalf of their agency. The query specifies the biometric or document being verified, the purpose of the check, and the requesting country. Every query is logged, attributed to the individual officer, and traceable through the audit trail.',
    chips: [
      ['QUERY TYPE', 'Cross-border verification'],
      ['ORIGIN', 'Requesting agency'],
      ['AUDIT', 'Officer identity logged'],
    ],
  },
  {
    num: '02',
    label: 'Agreement Check',
    title: 'Agreement Check',
    summary: 'CCI verifies a live bilateral agreement exists.',
    detail:
      'Before any signal is returned, CCI verifies that the requesting country and the country of origin have an active bilateral agreement covering this class of query. Agreements are configured per country pair, per access tier, and per query type. If no agreement is active — or if the requested tier exceeds what has been authorised — the query is rejected before any data is touched.',
    chips: [
      ['AGREEMENT', 'Bilateral, active'],
      ['TIER', 'Per-agreement access level'],
      ['NO AGREEMENT', 'Query rejected'],
    ],
  },
  {
    num: '03',
    label: 'Sovereign Node Check',
    title: 'Sovereign Node Check',
    summary: 'The verification happens inside the country of origin.',
    detail:
      'The query is routed to the CCI node deployed within the country of origin. That node performs the check against local records — biometrics, mobility history, financial signals, or professional records — without moving the underlying data anywhere. The record never leaves the country of origin. Only the classification, confirmation, or match signal is returned.',
    chips: [
      ['LOCATION', 'Country of origin'],
      ['DATA MOVEMENT', 'None'],
      ['PROCESSING', 'Local sovereign node'],
    ],
  },
  {
    num: '04',
    label: 'Classification Returned',
    title: 'Classification Returned',
    summary: 'A structured signal — never raw data — crosses the border.',
    detail:
      'What crosses the border is a classification, not a record. A match confirmation. A green, amber, or red risk classification. A flag. A quality score. Whatever the agreement permits and the query requested. The receiving officer sees the intelligence they need to make a decision — with no exposure to the underlying data that produced it.',
    chips: [
      ['PAYLOAD', 'Classification only'],
      ['FORMAT', 'Structured signal'],
      ['TRANSFERRED', 'No raw data'],
    ],
  },
  {
    num: '05',
    label: 'Officer Decides',
    title: 'Officer Decides',
    summary: 'The human decision-maker acts on the intelligence.',
    detail:
      'CCI does not make decisions. It provides intelligence. The officer, processor, or institutional decision-maker uses the classification to inform their own assessment — approve, review, refer, or refuse — in accordance with their own agency\u2019s rules. Every decision is logged alongside the query that informed it, creating a complete audit trail for both the requesting and the responding nations.',
    chips: [
      ['DECISION', 'Human, not automated'],
      ['AUDIT', 'Query and outcome linked'],
      ['ACCOUNTABILITY', 'Both agencies'],
    ],
  },
];

function StepDetail({ step }: { step: Step }) {
  return (
    <div className="rf-detail-inner">
      <div className="rf-detail-head">
        <span className="rf-detail-num">STEP {step.num}</span>
        <h3 className="rf-detail-title">{step.title}</h3>
      </div>
      <p className="rf-detail-p">{step.detail}</p>
      <div className="rf-chips">
        {step.chips.map(([k, v]) => (
          <span className="rf-chip" key={k}>
            <span className="rf-chip-k">{k}</span>
            <span className="rf-chip-sep">—</span>
            <span className="rf-chip-v">{v}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function RequestFlow() {
  const [active, setActive] = useState(0);

  return (
    <section id="request-flow" className="section">
      <div className="section-inner">
        <div className="rf-head reveal">
          <div className="eyebrow-sm"><div className="el"></div><span className="et">How A Request Flows</span></div>
          <h2 className="sec-h2">From query to decision. <em>In under three seconds.</em></h2>
          <p className="sec-p">Every CCI query passes through five stages. Data never leaves its country of origin — only classifications, confirmations, and match signals cross the border, governed by the bilateral agreement between the two nations.</p>
        </div>

        <div className="rf-flow">
          {STEPS.map((step, i) => (
            <div className="rf-step-wrap" key={step.num}>
              {i > 0 && <div className="rf-connector" aria-hidden="true"></div>}
              <button
                type="button"
                className={`rf-tile${i === active ? ' is-active' : ''}`}
                aria-expanded={i === active}
                onClick={() => setActive(i)}
              >
                <span className="rf-tile-num">{step.num}</span>
                <span className="rf-tile-title">{step.label}</span>
                <span className="rf-tile-summary">{step.summary}</span>
                <span className={`rf-chevron${i === active ? ' is-open' : ''}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                </span>
              </button>
              {/* Mobile-only inline accordion detail */}
              {i === active && (
                <div className="rf-detail rf-detail--inline">
                  <StepDetail step={step} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop-only shared detail panel */}
        <div className="rf-detail rf-detail--panel">
          <StepDetail step={STEPS[active]} />
        </div>

        <div className="rf-callout">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7.5V12l3 2" />
          </svg>
          <span>Typical end-to-end response: under three seconds. Guaranteed under five seconds under bilateral SLA.</span>
        </div>
      </div>
    </section>
  );
}
