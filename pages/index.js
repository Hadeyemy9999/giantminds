import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';

export default function Home() {
  const visionMissionSlides = [
    <>
      <h4>Our Drive</h4>
      <p>
        To build a world where every talented individual has access
        to breakthrough opportunities, and every employer can find
        the perfect fit for their needs through a trusted, vetted
        network of excellence.
      </p>
    </>,
    <>
      <h4>Our Aim</h4>
      <p>
        GIANT MINDS is committed to revolutionizing talent placement
        and career development by creating seamless connections
        between candidates, employers, and training partners through
        rigorous curation and standardized quality.
      </p>
    </>,
    <>
      <h4>Our Purpose</h4>
      <p>
        We exist to unlock human potential and drive meaningful growth—for
        individuals seeking career advancement and organizations seeking
        exceptional talent to fuel their success.
      </p>
    </>,
  ];

  const testimonialSlides = [
    <>
      <p className="testimonial-text">
        "GIANT MINDS completely transformed my career journey. The personalized mentorship and access to quality job opportunities helped me land my dream role. The team's dedication to vetting candidates is unmatched!"
      </p>
      <p className="testimonial-author">— Sarah Johnson, Career Advancement Candidate</p>
    </>,
    <>
      <p className="testimonial-text">
        "As an employer, finding pre-vetted talent has been a game-changer for our hiring process. GIANT MINDS significantly reduced our recruitment timeline and we've hired exceptional candidates who are thriving in our organization."
      </p>
      <p className="testimonial-author">— Michael Chen, HR Director, Tech Company</p>
    </>,
    <>
      <p className="testimonial-text">
        "The standardization and quality control that GIANT MINDS brings to the placement process is exactly what the industry needed. Their system truly works, connecting the right people with the right opportunities."
      </p>
      <p className="testimonial-author">— Dr. Aisha Patel, Training Institution Director</p>
    </>,
  ];

  return (
    <>
      <Head>
        <title>Giant Minds Enterprise: Fueling Your Breakthrough Hire & Career</title>
      </Head>

      <Layout>
        <section id="hero" className="hero">
          <div className="container">
            <h2>Giant Minds Enterprise: Building system that works. Fueling your next breakthrough hire</h2>
            <p>
              Your strategic partner in
              <strong>Job Placement & Career Development</strong>, connecting top
              talent with leading opportunities.
            </p>
            <div className="cta-group">
              <Link href="/contact-candidate" className="cta-button primary-cta">
                Find Your Next Career Move
              </Link>
              <Link href="/contact-partner" className="cta-button secondary-cta">
                Find Your Next Top Talent
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="section dark-bg">
          <div className="container">
            <h3>At the Heart of Talent & Opportunity</h3>
            <p className="intro-text">
              GIANT MINDS coordinates the seamless flow of talent, ensuring every
              candidate meets the specific needs of employer partners. We rigorously
              vet individuals and uphold the highest standards across all our
              services.
            </p>

            <div className="features">
              <div className="feature-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Talent Curation</h4>
                <p>
                  Rigorously vetting candidates to ensure they meet specific
                  employer needs.
                </p>
              </div>
              <div className="feature-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4>Standardization of Quality</h4>
                <p>
                  Setting and maintaining high standards for training, mentorship,
                  and placement.
                </p>
              </div>
            </div>
            <div className="diagram-placeholder">
              <p>
                GIANT MINDS Coordinating the flow of talent between training
                partners and employer partners.
              </p>
            </div>
          </div>
        </section>

        <section id="vision-mission" className="section">
          <div className="container">
            <h3>Our Drive & Aim</h3>
            <p className="intro-text">
              Discover the core values and aspirations driving GIANT MINDS forward.
            </p>
            <Carousel slides={visionMissionSlides} />
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/vision-mission" className="cta-button primary-cta">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        <section id="network" className="section">
          <div className="container">
            <h3>Our Powerful Network: The Spokes</h3>
            <p className="intro-text">
              The vetted network powering our system, providing jobs, skills, and
              guidance through strategic partnerships.
            </p>

            <div className="spokes-grid">
              <div className="spoke-card">
                <i className="fas fa-building"></i>
                <h4>Employer Companies</h4>
                <p>
                  Our partners who commit to hiring our candidates and provide
                  specific job requirements.
                </p>
              </div>
              <div className="spoke-card">
                <i className="fas fa-graduation-cap"></i>
                <h4>Training Institutions</h4>
                <p>
                  Providers of specialized certification and skill development
                  programs.
                </p>
              </div>
              <div className="spoke-card">
                <i className="fas fa-user-tie"></i>
                <h4>Mentors & Experts</h4>
                <p>
                  Individuals who provide high-level career guidance and interview
                  preparation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section dark-bg">
          <div className="container">
            <h3>What Our Clients Say</h3>
            <p className="intro-text">
              Hear from candidates and employers who have experienced the GIANT MINDS difference.
            </p>
            <Carousel slides={testimonialSlides} testId={true} />
          </div>
        </section>

        <section className="section">
          <div className="container benefit-split">
            <div className="benefit-col">
              <h3 className="red-text">For Candidates: Your Path to Success</h3>
              <ul className="benefit-list">
                <li>
                  <i className="fas fa-briefcase"></i>
                  <strong>Access to Top Jobs:</strong> Connect with leading
                  companies committed to hiring.
                </li>
                <li>
                  <i className="fas fa-book-open"></i>
                  <strong>Quality Training:</strong> Access specialized programs
                  from accredited institutions.
                </li>
                <li>
                  <i className="fas fa-users"></i>
                  <strong>Expert Mentorship:</strong> Receive high-level career
                  guidance and interview prep.
                </li>
              </ul>
            </div>
            <div className="benefit-col">
              <h3 className="red-text">For Employers: Superior Talent, Simplified</h3>
              <ul className="benefit-list">
                <li>
                  <i className="fas fa-search-dollar"></i>
                  <strong>Pre-Vetted Talent:</strong> Access a rigorously screened
                  database of qualified candidates.
                </li>
                <li>
                  <i className="fas fa-tachometer-alt"></i>
                  <strong>Reduced Hiring Time:</strong> Streamline your recruitment
                  process and save valuable time.
                </li>
                <li>
                  <i className="fas fa-chart-line"></i>
                  <strong>Strategic Partnership:</strong> Become a key 'Spoke' in a
                  system that works for you.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="team" className="section dark-bg">
          <div className="container">
            <h3>Meet Our Leadership</h3>
            <p className="intro-text">
              Meet the visionary founders driving GIANT MINDS forward.
            </p>

            <div className="team-grid team-founders">
              <div className="team-member">
                <div className="member-image-wrapper">
                  <img src="/images/founder.jpg" alt="Idris Yusuf Snipes" className="member-image" />
                  <div className="member-overlay">
                    <div className="member-info">
                      <p className="member-bio"><strong>B.O.Y. (Bonzer B. O. Y.)</strong><br/><strong>Foundation:</strong> Architectural Technology<br/><strong>Key Skills:</strong> Concept & Content Generator, Team Building, Critical Decision Making, Perseverance, Initiative<br/><strong>Core Ambition:</strong> Cultivating creativity to drive ambitious business ventures<br/><br/><strong>Leadership Philosophy:</strong> Strong advocate for Team Spirit and Collaboration. Excels in building and leading groups toward shared goals, making high-quality critical decisions, embodying patience and strategic thinking, and building businesses from the ground up.<br/><br/><strong>The Grand Initiative - Jeante Movement Tower:</strong> Development of a multinational conglomerate by assembling a team of Giant Minds who share the aspiration for financial freedom.</p>
                      <div className="member-contact">
                        <a href="mailto:idris@giantminds.com"><i className="fas fa-envelope"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <h4>Idris Yusuf Snipes</h4>
                <p className="member-position">Founder & Chief Strategist and Visionary Officer</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/vision-mission#full-team" className="cta-button primary-cta">
                See More Team Members
              </Link>
            </div>
          </div>
        </section>

        <section id="testimonials-stories" className="section testimonials-section">
          <div className="container">
            <h3>Success Stories from Our Community</h3>
            <p className="intro-text">
              Hear from candidates and partners who have transformed their careers and growth through GIANT MINDS.
            </p>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="testimonial-author">
                    <h4>Chinedu Okonkwo</h4>
                    <p className="testimonial-role">Software Engineer</p>
                  </div>
                </div>
                <div className="testimonial-body">
                  <p className="testimonial-text">
                    "GIANT MINDS didn't just help me find a job—they helped me find the right fit. The vetting process was thorough, and the team genuinely cared about matching my skills with an opportunity that aligned with my career goals. Within 3 months, I'm thriving in a role I love!"
                  </p>
                  <div className="testimonial-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <div className="testimonial-author">
                    <h4>Aisha Mohammed</h4>
                    <p className="testimonial-role">HR Director, Tech Startup</p>
                  </div>
                </div>
                <div className="testimonial-body">
                  <p className="testimonial-text">
                    "We've partnered with GIANT MINDS for over a year now, and the quality of candidates they've provided has been exceptional. Their standardized vetting process ensures we're getting pre-qualified talent. It's transformed our hiring process and saved us significant time and resources."
                  </p>
                  <div className="testimonial-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <i className="fas fa-user-check"></i>
                  </div>
                  <div className="testimonial-author">
                    <h4>Tunde Oluwaseun</h4>
                    <p className="testimonial-role">Product Manager</p>
                  </div>
                </div>
                <div className="testimonial-body">
                  <p className="testimonial-text">
                    "The training and mentorship I received through GIANT MINDS's Chief Learning Officer was invaluable. They prepared me not just with technical skills, but with the right mindset for success. I landed my dream role and feel equipped to excel. Highly recommend!"
                  </p>
                  <div className="testimonial-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-ctas" className="final-cta-section">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Join the GIANT MINDS movement today.</p>
            <div className="cta-group">
              <Link href="/contact-candidate" className="cta-button primary-cta">
                Find Your Next Career Move
              </Link>
              <Link href="/contact-partner" className="cta-button secondary-cta">
                Find Your Next Top Talent
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
