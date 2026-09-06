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
          href="mailto:sanjaynetipalli@gmail.com"
        >
          <p className="contact-label">Email</p>
          <h2>sanjaynetipalli@gmail.com</h2>
          <span>Send me an email →</span>
        </a>

        <a
          className="contact-card"
          href="https://github.com/nsanjay24"
          target="_blank"
          rel="noreferrer"
        >
          <p className="contact-label">GitHub</p>
          <h2>nsanjay24</h2>
          <span>View my GitHub →</span>
        </a>

        <a
          className="contact-card"
          href="https://in.linkedin.com/in/sanjaynetipalli"
          target="_blank"
          rel="noreferrer"
        >
          <p className="contact-label">LinkedIn</p>
          <h2>Sanjay Netipalli</h2>
          <span>Connect with me →</span>
        </a>

        <a
          className="contact-card"
          href="YOUR_DISCORD_INVITE_LINK"
          target="_blank"
          rel="noreferrer"
        >
          <p className="contact-label">Discord</p>

          <h2>UID : xnj24</h2>

          <span>Connect on Discord →</span>
        </a>
      </section>
    </main>
  )
}

export default Contact