import { useState, useRef } from 'react';

export default function CandidateForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);

  const validateFileSize = (file, maxSizeMB) => {
    if (file && file.size / (1024 * 1024) > maxSizeMB) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShowSuccess(false);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch('/api/submit-candidate', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        setError(text || 'Submission failed.');
        return;
      }

      setShowSuccess(true);
      formRef.current.reset();
    } catch (err) {
      setError(err.message || 'Submission failed.');
    }
  };

  return (
    <div className="contact-form-container reveal">
      <h3 className="red-text" style={{ textAlign: 'center' }}>
        Candidate Application
      </h3>

      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <fieldset className="form-fieldset">
          <legend className="form-legend">Personal Information</legend>

          <div className="form-group">
            <label htmlFor="candidate_name">Full Name <span className="required">*</span></label>
            <input type="text" id="candidate_name" name="name" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="candidate_email">Email Address <span className="required">*</span></label>
            <input type="email" id="candidate_email" name="email" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="candidate_phone">Phone Number</label>
            <input type="tel" id="candidate_phone" name="phone" placeholder="+1 (555) 123-4567" />
          </div>
        </fieldset>

        {/* Career Information Section */}
        <fieldset className="form-fieldset">
          <legend className="form-legend">Career Information</legend>

          <div className="form-group">
            <label htmlFor="career_field">Desired Career Field <span className="required">*</span></label>
            <select id="career_field" name="career_field" required>
              <option value="">-- Select a field --</option>
              <option value="Tech">Technology / Software</option>
              <option value="Finance">Finance / Accounting</option>
              <option value="Marketing">Marketing / Sales</option>
              <option value="Healthcare">Healthcare / Medical</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="career_goals">Career Goal <span className="required">*</span></label>
            <textarea id="career_goals" name="career_goals" placeholder="Tell us about your career aspirations..." required></textarea>
          </div>
        </fieldset>

        {/* Resume Submission Section */}
        <fieldset className="form-fieldset">
          <legend className="form-legend">Submit Your Resume</legend>
          <div className="form-group">
            <p style={{ color: '#666', marginBottom: '15px' }}>
              <strong>To submit your resume/CV:</strong> Please send it directly to{' '}
              <a href="mailto:giantminds3@gmail.com" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none' }}>
                giantminds3@gmail.com
              </a>
            </p>
            <p style={{ color: '#999', fontSize: '0.95em', margin: '0' }}>
              <i className="fas fa-info-circle"></i> Include your name in the email subject line so we can match it to your application.
            </p>
          </div>
        </fieldset>

        <button type="submit" className="submit-button">
          Submit Your Profile
        </button>
      </form>

      {/* Success Message */}
      {showSuccess && (
        <div id="success-message" style={{ display: 'block' }}>
          <i className="fas fa-check-circle"></i>
          <h4>Application Received!</h4>
          <p>
            Thank you for submitting your profile to GIANT MINDS. Our team will
            review your information and be in touch within 2-3 business days.
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div style={{
          display: 'block',
          textAlign: 'center',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#ffe6e6',
          color: '#7a1a1a',
          border: '1px solid #ff9999',
          marginTop: '20px'
        }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
