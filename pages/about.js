import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>About Giant Minds Enterprise: Our Aim & The Engine</title>
      </Head>

      <Layout>
        <section className="page-hero">
          <div className="container">
            <h2>About Giant Minds Enterprise</h2>
            <p>
              Learn more about our mission, vision, and the team driving innovation in talent placement and career development.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h3>Our Story</h3>
            <p className="intro-text">
              Giant Minds Enterprise was founded with a simple yet powerful belief: talent and opportunity should meet seamlessly.
            </p>
            <p>
              We recognized a gap in the talent placement industry—a disconnect between qualified candidates, employers seeking top talent, 
              and institutions providing training. Our solution? A coordinated system that brings all three together.
            </p>
          </div>
        </section>

        <section className="section dark-bg">
          <div className="container">
            <h3>The System: How It Works</h3>
            <p className="intro-text">
              GIANT MINDS operates as a powerful network of interconnected "Spokes":
            </p>
            <div className="features">
              <div className="feature-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Candidates</h4>
                <p>
                  Talented individuals seeking career advancement, training, and exclusive job placements aligned with their goals.
                </p>
              </div>
              <div className="feature-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Employers</h4>
                <p>
                  Companies looking for pre-vetted talent with specific skill sets and potential for long-term success.
                </p>
              </div>
              <div className="feature-card">
                <div className="card-icon-wrapper">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Training Partners</h4>
                <p>
                  Institutions providing certified programs that equip candidates with market-ready skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h3>Our Commitment to Quality</h3>
            <p className="intro-text">
              Every candidate in our network undergoes rigorous vetting to ensure they meet the highest standards. 
              Every employer partner is committed to ethical hiring practices. Every training provider is accredited and focused on excellence.
            </p>
            <p>
              This standardization of quality across all three spokes is what makes GIANT MINDS different.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
