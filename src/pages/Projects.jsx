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
            
            <a href="https://price-tracker-production-f365.up.railway.app/"
            tracker="_blank"
            rel="noreferrer" 
            className="primary-button">
              Live Demo
            </a>

          </div>
        </div>

        <div className="project-card">
          <p className="project-status">In Development</p>

          <h2>Book Recommender System</h2>

          <p>
            A machine learning based recommendation system that suggests books
            based on user preferences and similarities between books.
          </p>

          <div className="project-tags">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Scikit-learn</span>
          </div>

          <div className="project-actions">
            <a href="https://github.com/nsanjay24/book-recommender"
            tracker="_blank"
            rel="noreferrer"
            className="secondary-button">
              GitHub
            </a>

            <span className="project-coming-soon">
              Live Demo Coming Soon
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects