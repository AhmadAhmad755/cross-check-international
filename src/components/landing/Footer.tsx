import { useBriefingModal } from '../../context/BriefingModalContext';

function ComingSoonLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="link-soon"
      title="Coming soon"
      aria-disabled="true"
      onClick={(e) => e.preventDefault()}
    >
      {label}
    </a>
  );
}

export default function Footer() {
  const { open } = useBriefingModal();

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src="/cci-logo.svg" alt="CrossCheck International" className="cci-logo cci-logo--footer" />
          </div>
          <p className="footer-slogan">"Where intelligence informs integrity."</p>
          <p className="footer-desc">Sovereign-grade cross-border identity intelligence for governments, institutions, and the partners that connect them.</p>
        </div>
        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#who-we-serve">For Governments</a></li>
            <li><a href="#for-institutions">For Banks &amp; Insurers</a></li>
            <li><a href="#who-we-serve">Integration Partners</a></li>
            <li><a href="#how-it-works">API Documentation</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#why-cci">About CCI</a></li>
            <li><a href="#why-cci">Our Mission</a></li>
            <li><a href="#why-cci">Security</a></li>
            <li><a href="#why-cci">Compliance</a></li>
            <li><button type="button" onClick={open}>Contact</button></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><ComingSoonLink label="Privacy Policy" /></li>
            <li><ComingSoonLink label="Terms of Use" /></li>
            <li><ComingSoonLink label="Data Governance" /></li>
            <li><ComingSoonLink label="Cookie Policy" /></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 CrossCheck International. All rights reserved.</span>
        <div className="footer-bottom-links">
          <ComingSoonLink label="Privacy" />
          <ComingSoonLink label="Terms" />
          <ComingSoonLink label="Security" />
        </div>
      </div>
    </footer>
  );
}
