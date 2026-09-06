function Home() {
  return (
    <main className="home-page">
      <section className="home-intro">
        <p className="home-eyebrow">Hello, I'm</p>

        <h1> Netipalli Sanjay</h1>

        <h2>Computer Science Graduate</h2>

        <p className="home-description">
          I enjoy building practical software, learning new technologies,
          and turning ideas into real-world projects.
        </p>
      </section>

      <section className="detail-grid">

        <div className="detail-card">
          <p className="detail-label">Currently Building</p>

          <h3>Price Tracker</h3>

          <p>
            A product price tracking application with WhatsApp integration
            for price and stock alerts.
          </p>
        </div>

        <div className="detail-card">
          <p className="detail-label">Interested In</p>

          <h3>Development & Automation</h3>

          <div className="detail-tags">
            <span>Web Development</span>
            <span>Backend</span>
            <span>APIs</span>
            <span>Automation</span>
            <span>Cloud</span>
          </div>
        </div>

        <div className="detail-card">
          <p className="detail-label">Current Focus</p>

          <h3>Learning & Building</h3>

          <div className="detail-tags">
            <span>React</span>
            <span>REST APIs</span>
            <span>Databases</span>
            <span>Git & GitHub</span>
            <span>Deployment</span>
          </div>
        </div>

        <div className="detail-card">
          <p className="detail-label">Open To</p>

          <h3>Opportunities</h3>

          <div className="detail-tags">
            <span>Projects</span>
            <span>Entry-Level Roles</span>
            <span>Collaboration</span>
            <span>Learning</span>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Home