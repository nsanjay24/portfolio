function Certifications() {
  return (
    <main className="certifications-page">
      <section className="page-header">
        <p className="page-eyebrow">What I've earned</p>

        <h1>Certifications</h1>

        <p className="page-description">
          A collection of certifications and courses that reflect the skills
          I've been building across development, tools, and technology.
        </p>
      </section>

      <section className="certifications-grid">
        <div className="certification-card">
          <p className="certification-type">Certification</p>

          <h2>Certification Name</h2>

          <p className="certification-issuer">
            Issued by Organization Name
          </p>

          <p className="certification-date">
            Month Year
          </p>

          <p>
            Briefly describe what you learned or what skills this certification
            covered.
          </p>

          <div className="certification-tags">
            <span>Skill One</span>
            <span>Skill Two</span>
            <span>Skill Three</span>
          </div>

          <div className="certification-actions">
            <button className="secondary-button">
              View Credential
            </button>
          </div>
        </div>

        <div className="certification-card">
          <p className="certification-type">Course</p>

          <h2>Course Name</h2>

          <p className="certification-issuer">
            Platform / Organization
          </p>

          <p className="certification-date">
            Month Year
          </p>

          <p>
            Add a short explanation of what this course focused on and the
            practical skills you gained from it.
          </p>

          <div className="certification-tags">
            <span>Programming</span>
            <span>Development</span>
            <span>Tools</span>
          </div>

          <div className="certification-actions">
            <button className="secondary-button">
              View Credential
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Certifications