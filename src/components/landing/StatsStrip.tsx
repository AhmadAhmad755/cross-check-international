export default function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="stats-inner">
        <div className="stat-item">
          <div className="stat-n">184<span>+</span></div>
          <div className="stat-l">Countries available for<br />cross-border checks</div>
        </div>
        <div className="stat-item">
          <div className="stat-n">99<span>.8%</span></div>
          <div className="stat-l">Platform uptime<br />service level agreement</div>
        </div>
        <div className="stat-item">
          <div className="stat-n">&lt;3<span>s</span></div>
          <div className="stat-l">Average cross-border<br />intelligence response</div>
        </div>
        <div className="stat-item">
          <div className="stat-n">0<span>%</span></div>
          <div className="stat-l">Raw biometric data<br />transferred across borders</div>
        </div>
      </div>
    </section>
  );
}
