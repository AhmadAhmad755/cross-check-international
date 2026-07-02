type Stage = {
  num: string;
  title: string;
  description: string;
  duration: string;
};

const STAGES: Stage[] = [
  {
    num: '01',
    title: 'Briefing',
    description:
      'A confidential technical and policy briefing with the CCI team, covering the platform, the sovereignty model, and the bilateral framework.',
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Bilateral Framework',
    description:
      'Drafting and negotiation of the bilateral agreement, covering scope, access tiers, permitted query types, and governance.',
    duration: '3–6 months',
  },
  {
    num: '03',
    title: 'Sovereign Deployment',
    description:
      'Deployment of the CCI sovereign node inside the country\u2019s authorised infrastructure, on the country\u2019s terms, under the country\u2019s operational control.',
    duration: '6–12 weeks',
  },
  {
    num: '04',
    title: 'Workflow Integration',
    description:
      'Integration of CCI intelligence into existing intake, verification, and decision workflows — alongside, never replacing, existing systems.',
    duration: '8–16 weeks',
  },
  {
    num: '05',
    title: 'Activation',
    description:
      'Live activation under the bilateral agreement, with monitored ramp-up, joint audit review, and continuous governance oversight by both nations.',
    duration: 'Ongoing',
  },
];

export default function JoiningCCI() {
  return (
    <section id="joining" className="section">
      <div className="section-inner">
        <div className="jc-head reveal">
          <div className="eyebrow-sm"><div className="el"></div><span className="et">Joining CCI</span></div>
          <h2 className="sec-h2">From first conversation to live intelligence. <em>In five stages.</em></h2>
          <p className="sec-p">Adoption is structured, bilateral, and paced by the joining country. No off-the-shelf deployment. No obligations before agreement.</p>
        </div>

        <div className="jc-timeline">
          <div className="jc-line" aria-hidden="true"></div>
          {STAGES.map((s, i) => (
            <div className={`jc-step reveal${i > 0 ? ` reveal--s${i}` : ''}`} key={s.num}>
              <div className="jc-badge">{s.num}</div>
              <div className="jc-body">
                <h3 className="jc-title">{s.title}</h3>
                <p className="jc-desc">{s.description}</p>
                <div className="jc-duration">
                  <span className="jc-duration-label">Typical Duration</span>
                  <span className="jc-duration-val">{s.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="jc-callout">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3h8l4 4v14H6z" />
            <path d="M14 3v4h4" />
            <path d="M9 14l2 2 4-4" />
          </svg>
          <span>Adoption pace is set by the joining country. Every stage is reversible until activation. No commitments before agreement.</span>
        </div>
      </div>
    </section>
  );
}
