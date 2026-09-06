function Projects() {
  return (
    <main className="projects-page">
      <section className="page-header">
        <p className="page-eyebrow">What I've built</p>

        <h1>Projects</h1>

        <p className="page-description">
          A collection of projects I've worked on while learning,
          experimenting, and building practical software.
        </p>
      </section>

      <section className="projects-grid">
        <div className="project-card">
          <p className="project-status">Current Project</p>

          <h2>Price Tracker</h2>

          <p>
            A product price tracking application that monitors price and stock
            changes and sends WhatsApp notifications when important changes
            happen.
          </p>

          <div className="project-tags">
            <span>Python</span>
            <span>Flask</span>
            <span>SQLite</span>
            <span>REST APIs</span>
            <span>WhatsApp API</span>
          </div>

          <div className="project-actions">
            <a href="https://github.com/nsanjay24/price-tracker"
            tracker="_blank"
            rel="noreferrer"
            className="secondary-button">
              GitHub
            </a>
            
            <button className="primary-button">
              Live Demo
            </button>
          </div>
        </div>

        <div className="project-card">
          <p className="project-status">In Development</p>

          <h2>Portfolio Website</h2>

          <p>
            A personal portfolio built with React to showcase my projects,
            skills, certifications, education, and development journey.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>Vite</span>
            <span>CSS</span>
            <span>Netlify</span>
          </div>

          <div className="project-actions">
            <button className="secondary-button">
              GitHub
            </button>

            <button className="primary-button">
              Live Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects