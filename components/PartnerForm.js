import { useState, useRef } from 'react';

export default function PartnerForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShowSuccess(false);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch('/api/submit-partner', {
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
      <h3 className="red-text" style={{ textAlign: 'center' }}>Partner Inquiry</h3>

      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Organization Information Section */}
        <fieldset className="form-fieldset">
          <legend className="form-legend">Organization Information</legend>

          <div className="form-group">
            <label htmlFor="partner_name">Your Name <span className="required">*</span></label>
            <input type="text" id="partner_name" name="name" placeholder="Jane Smith" required />
          </div>

          <div className="form-group">
            <label htmlFor="partner_company">Company / Institution Name <span className="required">*</span></label>
            <input type="text" id="partner_company" name="company" placeholder="ACME Corporation" required />
          </div>

          <div className="form-group">
            <label htmlFor="partner_email">Work Email <span className="required">*</span></label>
            <input type="email" id="partner_email" name="email" placeholder="jane@company.com" required />
          </div>
        </fieldset>

        {/* Partnership Details Section */}
        <fieldset className="form-fieldset">
          <legend className="form-legend">Partnership Details</legend>

          <div className="form-group">
            <label htmlFor="partner_type">Partner Type <span className="required">*</span></label>
            <select id="partner_type" name="partner_type" required>
              <option value="">-- Select a type --</option>
              <option value="Employer">Employer / Hiring Partner</option>
              <option value="Training">Training Institution / Academy</option>
              <option value="Mentor">Mentor / Industry Expert</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="partner_needs">Specific Needs or Inquiry <span className="required">*</span></label>
            <textarea id="partner_needs" name="needs" placeholder='e.g., "We need 5 Java Developers" or "We offer Cybersecurity training"' required></textarea>
          </div>
        </fieldset>

        {/* Document Upload Section */}
        <fieldset className="form-fieldset">
          <legend className="form-legend">Supporting Documents</legend>

          <div className="form-group">
            <label htmlFor="partner_doc">Upload Document (Optional)</label>
            <div className="file-input-wrapper">
              <input type="file" id="partner_doc" name="document" accept=".pdf,.doc,.docx,.jpg,.png" />
              <span className="file-input-label">Choose file (PDF, DOC, DOCX, JPG, PNG)</span>
            </div>
            <small className="form-hint">Maximum file size: 10MB. Include job descriptions, company profiles, or training materials.</small>
          </div>
        </fieldset>

        <button type="submit" className="submit-button">
          Submit Partnership Inquiry
        </button>
      </form>

      {/* Success Message */}
      {showSuccess && (
        <div id="success-message" style={{ display: 'block' }}>
          <i className="fas fa-check-circle"></i>
          <h4>Inquiry Received!</h4>
          <p>
            Thank you for your interest in partnering with GIANT MINDS. Our team
            will review your inquiry and be in touch shortly to discuss next
            steps.
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
