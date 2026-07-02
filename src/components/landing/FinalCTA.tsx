import { useBriefingModal } from '../../context/BriefingModalContext';

export default function FinalCTA() {
  const { open } = useBriefingModal();

  return (
    <section id="get-started" className="cta-sec">
      <div className="cta-inner reveal">
        <div className="eyebrow-sm" style={{ justifyContent: 'center' }}><div className="el"></div><span className="et">Get Started</span><div className="el"></div></div>
        <h2 className="sec-h2">Ready to connect your country<br />to the <em>intelligence layer?</em></h2>
        <p className="sec-p">CCI is available to national governments, border agencies, financial institutions, and integration partners. Access is by agreement — start with a briefing.</p>
        <div className="cta-btns">
          <button type="button" className="btn-cta-dark" onClick={open}>
            Request a Government Briefing
            <span className="arr" aria-hidden="true"><svg viewBox="0 0 13 13"><path d="M2 6.5h9M7 2l4.5 4.5L7 11" /></svg></span>
          </button>
          <button type="button" className="btn-cta-outline" onClick={open}>
            Partner with CCI
            <span className="arr" aria-hidden="true"><svg viewBox="0 0 13 13"><path d="M2 6.5h9M7 2l4.5 4.5L7 11" /></svg></span>
          </button>
        </div>
      </div>
    </section>
  );
}
