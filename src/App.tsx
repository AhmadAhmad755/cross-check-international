import SiteNav from './components/SiteNav';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <>
      <div className="topbar">
        <strong>New:</strong>&nbsp; CCI Cross-Border Intelligence API is now available for government and institutional partners.&nbsp;
        <a href="#">Learn more →</a>
      </div>
      <SiteNav />
      <main>
        <LandingPage />
      </main>
    </>
  );
}
