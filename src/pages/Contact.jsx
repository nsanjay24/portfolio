function Contact() {
  return (
    <main className="contact-page">
      <section className="page-header">
        <p className="page-eyebrow">Let's connect</p>

        <h1>Contact</h1>

        <p className="page-description">
          I'm always open to discussing projects, opportunities,
          collaborations, or simply connecting with other developers.
        </p>
      </section>

      <section className="contact-grid">
        <a
          className="contact-card"
          href="mailto:your@email.com"
        >
          <p className="contact-label">Email</p>
          <h2>your@email.com</h2>
          <span>Send me an email →</span>
        </a>

        <a
          className="contact-card"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <p className="contact-label">GitHub</p>
          <h2>YourUsername</h2>
          <span>View my GitHub →</span>
        </a>

        <a
          className="contact-card"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          <p className="contact-label">LinkedIn</p>
          <h2>Your Name</h2>
          <span>Connect with me →</span>
        </a>
      </section>
    </main>
  )
}

export default Contact