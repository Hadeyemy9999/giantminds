import Head from 'next/head';
import Layout from '../components/Layout';
import PartnerForm from '../components/PartnerForm';

export default function ContactPartner() {
  return (
    <>
      <Head>
        <title>Giant Minds Enterprise: Partner with Us</title>
      </Head>

      <Layout>
        {/* Page Header */}
        <section className="contact-hero">
          <div className="container">
            <h2>Join the GIANT MINDS Network</h2>
            <p>
              Whether you're looking to hire elite talent, provide specialized
              training, or mentor the next generation, we want to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <div className="container contact-content section">
          {/* 1. Contact Information and Why Us (Partner Focus) */}
          <div className="contact-info reveal">
            <h3>Benefits of Becoming a Spoke Partner</h3>
            <ul>
              <li>
                <i className="fas fa-handshake"></i> <strong>Employer Partners:</strong> Access
                pre-vetted candidates tailored to your specific job requirements.
              </li>
              <li>
                <i className="fas fa-certificate"></i> <strong>Training Institutions:</strong> Gain
                accreditation and feed your students directly into top job
                pipelines.
              </li>
              <li>
                <i className="fas fa-users"></i> <strong>Mentors/Experts:</strong> Leverage the GIANT
                MINDS brand to expand your industry influence and guide rising
                stars.
              </li>
            </ul>
          </div>

          {/* 2. Partner Form */}
          <PartnerForm />
        </div>

        {/* Disclaimer Section */}
        <div className="disclaimer">
          <h3>Important Payment Disclaimer</h3>
          <p>Any payment should not be made to any account except the company account as follows:</p>
          <p className="account-details">
            Account Name: Giant Minds Enterprise<br/>
            Account Number: 1311435057<br/>
            Banker: Zenith Bank
          </p>
        </div>
      </Layout>
    </>
  );
}
