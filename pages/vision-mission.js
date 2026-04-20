import Head from 'next/head';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';

export default function VisionMission() {
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

  return (
    <>
      <Head>
        <title>Vision & Mission: Giant Minds Enterprise</title>
      </Head>

      <Layout>
        <section className="page-hero">
          <div className="container">
            <h2>Vision & Mission</h2>
            <p>
              Our guiding principles and the driving force behind everything we do at GIANT MINDS.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h3>Our Drive & Aim</h3>
            <p className="intro-text">
              Explore the core values and aspirations driving GIANT MINDS forward.
            </p>
            <Carousel slides={visionMissionSlides} />
          </div>
        </section>

        <section className="section dark-bg">
          <div className="container">
            <h3>Core Values</h3>
            <p className="intro-text">
              These principles guide every decision we make and every partnership we build.
            </p>
            <div className="features">
              <div className="feature-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-star"></i>
                </div>
                <h4>Excellence</h4>
                <p>
                  We maintain the highest standards in everything we do, from candidate vetting to employer partnerships.
                </p>
              </div>
              <div className="feature-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Integrity</h4>
                <p>
                  We operate with transparency and honesty, building trust with every candidate, employer, and partner.
                </p>
              </div>
              <div className="feature-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Innovation</h4>
                <p>
                  We continuously evolve our approach to stay ahead of market needs and emerging opportunities.
                </p>
              </div>
              <div className="feature-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Community First</h4>
                <p>
                  We believe in the power of collaboration and collective growth, where all stakeholders succeed together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="full-team">
          <div className="container">
            <h3>Our Team</h3>
            <p className="intro-text">
              Meet the visionary leaders and dedicated team members making GIANT MINDS a reality.
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image-wrapper">
                  <img src="/images/founder.jpg" alt="Idris Yusuf Snipes" className="member-image" />
                  <div className="member-overlay">
                    <div className="member-info">
                      <p className="member-bio">
                        <strong>B.O.Y. (Bonzer B. O. Y.)</strong><br/>
                        Founder & Chief Strategist, architect of the GIANT MINDS system.
                      </p>
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
          </div>
        </section>
      </Layout>
    </>
  );
}
