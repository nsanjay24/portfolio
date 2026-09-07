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
          <h2>Python Programming</h2>
          <p className="certification-issuer">
            Issued by SoloLearn
          </p>
          <p className="certification-date">
            Oct 2021
          </p>
          <p>
            Covered Python fundamentals, problem solving, functions,
            data structures, and object-oriented programming.
          </p>
          <div className="certification-tags">
            <span>Python</span>
            <span>Programming</span>
            <span>OOP</span>
          </div>
          <div className="certification-actions">
            <a href="/certificates/Python01.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-button">
              View Credential
            </a>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}
        <div className="certification-card">
          <p className="certification-type">Course</p>
          <h2>Web Development</h2>
          <p className="certification-issuer">
            Issued by Internshala
          </p>
          <p className="certification-date">
            Oct 2022
          </p>
          <p>
            Covered core web development concepts including HTML, CSS,
            JavaScript, responsive design, and building modern web pages.
          </p>
          <div className="certification-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Responsive Design</span>
          </div>
          <div className="certification-actions">
            <a href="/certificates/WebDev01.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-button">
              View Credential
            </a>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}
        <div className="certification-card">
          <p className="certification-type">Certification</p>
          <h2>PHP & MySql</h2>
          <p className="certification-issuer">
            Issued by Udemy
          </p>
          <p className="certification-date">
            July 2022
          </p>
          <p>
            Covered server-side web development with PHP and database integration
            using MySQL, including forms, CRUD operations, and dynamic web pages.
          </p>
          <div className="certification-tags">
            <span>PHP</span>
            <span>MySQL</span>
            <span>Backend</span>
          </div>
          <div className="certification-actions">
            <a
              href="/certificates/MysqlAndPhp.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-button">
              View Certificate
            </a>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}
        <div className="certification-card">
          <p className="certification-type">Certification</p>
          <h2>Cybersecurity Essentials</h2>
          <p className="certification-issuer">
            Issued by IBM
          </p>
          <p className="certification-date">
            May 2023
          </p>
          <p>
            Covered foundational cybersecurity concepts including common threats,
            vulnerabilities, security principles, risk awareness, and basic methods
            used to protect systems and data.
          </p>
          <div className="certification-tags">
            <span>Cybersecurity</span>
            <span>Network Security</span>
            <span>Threats</span>
            <span>Security Fundamentals</span>
          </div>
          <div className="certification-actions">
            <a
              href="/certificates/CyberIBM02.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-button">
              View Certificate
            </a>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */}
        {/* <div className="certification-card">
          <p className="certification-type">Certification</p>
          <h2>Certification Five</h2>
          <p className="certification-issuer">
            Issued by Organization Name
          </p>
          <p className="certification-date">
            Month Year
          </p>
          <p>
            Briefly explain what you learned and the practical skills
            gained while completing this certification.
          </p>
          <div className="certification-tags">
            <span>Skill One</span>
            <span>Skill Two</span>
            <span>Skill Three</span>
          </div>
          <div className="certification-actions">
            <a
              href="/certificates/certification-five.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-button">
              View Certificate
            </a>
          </div>
        </div> */}
{/* ------------------------------------------------------------------------------------------------------------------------- */}
      </section>
    </main>
  )
}

export default Certifications