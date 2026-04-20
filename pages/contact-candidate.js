import Head from 'next/head';
import Layout from '../components/Layout';
import CandidateForm from '../components/CandidateForm';

export default function ContactCandidate() {
  return (
    <>
      <Head>
        <title>Giant Minds Enterprise: Apply for Career Development</title>
      </Head>

      <Layout>
        {/* Page Header */}
        <section className="contact-hero">
          <div className="container">
            <h2>Start Your Next Career Breakthrough</h2>
            <p>
              Tell us about your career goals. Our Talent Curation team will review
              your profile to match you with specialized training and exclusive
              placement opportunities.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <div className="container contact-content section">
          {/* 1. Contact Information and Why Us */}
          <div className="contact-info reveal">
            <h3>Why Join the GIANT MINDS Movement?</h3>
            <ul>
              <li>
                <i className="fas fa-search"></i> <strong>Talent Scouting:</strong> We find roles
                that match your highest potential, not just basic skills.
              </li>
              <li>
                <i className="fas fa-rocket"></i> <strong>Accelerated Growth:</strong> Access
                training institutions and expert mentors to rapidly upskill.
              </li>
              <li>
                <i className="fas fa-lock"></i> <strong>Exclusive Access:</strong> Get priority
                consideration for roles with our committed employer partners (The
                Spokes).
              </li>
            </ul>
          </div>

          {/* 2. Candidate Form */}
          <CandidateForm />
        </div>
      </Layout>
    </>
  );
}
