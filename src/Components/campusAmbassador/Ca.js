import React, { useState } from 'react';
import './Ca.css';

const CampusAmbassador = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    whyJoin: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // The URL should point to your Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwFZSB0yEOXmSUSbJ1ciVadCuLoPxybpkKgXlTkCIhxBnQjLKOgKjtAHAP1azXNkLLR/exec';
      
      // Prepare the data to be sent
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('college', formData.college);
      formDataToSend.append('year', formData.year);
      formDataToSend.append('whyJoin', formData.whyJoin);
      
      // Send data to Google Sheets via the Google Apps Script
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        console.log('Form submitted successfully to Google Sheets');
        setIsSubmitted(true);
      } else {
        throw new Error('Error submitting form');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="campus-ambassador-page">
      <div className="ca-container">
        <br/>
        <br/>
        <br/>
        <br/>
        <header className="ca-header">
          <h1>CAMPUS AMBASSADOR PROGRAM</h1>
          <div className="ca-tagline">Be the voice of SPARSH at your campus</div>
        </header>

        <div className="ca-section ca-about">
          <h2>ABOUT THE PROGRAM</h2>
          <p>
            Join our elite network of Campus Ambassadors and represent Sparsh at your institution. 
            As a Campus Ambassador, you'll be at the forefront of promoting Sparsh events, 
            coordinating campus activities, and building a community of enthusiasts.
          </p>
        </div>

        <div className="ca-section ca-benefits">
          <h2>BENEFITS</h2>
          <div className="ca-benefits-grid">
            <div className="ca-benefit-card">
              <div className="ca-benefit-icon">🏆</div>
              <h3>RECOGNITION</h3>
              <p>Official certificate and letter of recommendation</p>
            </div>
            <div className="ca-benefit-card">
              <div className="ca-benefit-icon">🚀</div>
              <h3>SKILL DEVELOPMENT</h3>
              <p>Enhance leadership, marketing, and event management skills</p>
            </div>
            <div className="ca-benefit-card">
              <div className="ca-benefit-icon">🌐</div>
              <h3>NETWORKING</h3>
              <p>Connect with industry professionals and like-minded peers</p>
            </div>
            <div className="ca-benefit-card">
              <div className="ca-benefit-icon">🎁</div>
              <h3>EXCLUSIVE PERKS</h3>
              <p>Free merchandise, exclusive goodies, and social media shoutouts.</p>
            </div>
            <div className="ca-benefit-card">
              <div className="ca-benefit-icon">📈</div>
              <h3>RESUME BOOSTER</h3>
              <p>Add valuable experience to your CV and stand out to employers</p>
            </div>
            <div className="ca-benefit-card">
              <div className="ca-benefit-icon">🏅</div>
              <h3>PRIORITY ACCESS</h3>
              <p>Special access to Sparsh Nights with premium perks.</p> 
            </div>
          </div>
        </div>

        <div className="ca-section ca-responsibilities">
          <h2>RESPONSIBILITIES</h2>
          <ul>
            <li>Promote Sparsh events on your campus</li>
            <li>Organize pre-event activities to boost participation</li>
            <li>Create awareness about Sparsh initiatives</li>
            <li>Build and manage a team of volunteers</li>
            <li>Represent your campus at Sparsh events</li>
          </ul>
        </div>

        <div className="ca-section ca-application">
          <h2>JOIN THE PROGRAM</h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="ca-form">
              <div className="ca-form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="ca-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="ca-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="ca-form-group">
                <label htmlFor="college">College/University</label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="ca-form-group">
                <label htmlFor="year">Year of Study</label>
                <select 
                  id="year" 
                  name="year" 
                  value={formData.year} 
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5">5th Year</option>
                </select>
              </div>
              
              <div className="ca-form-group">
                <label htmlFor="whyJoin">Why do you want to join the Campus Ambassador Program?</label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleChange}
                  required
                  rows="4"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="ca-submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'APPLY NOW'}
              </button>
              
              {error && <div className="ca-error-message">{error}</div>}
            </form>
          ) : (
            <div className="ca-success-message">
              <h3>Application Submitted Successfully!</h3>
              <p>Thank you for your interest in becoming a Campus Ambassador for Sparsh. We will review your application and get back to you soon.</p>
            </div>
          )}
        </div>

        <div className="ca-section ca-faq">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="ca-faq-item">
            <h3>Who can become a Campus Ambassador?</h3>
            <p>Any student currently enrolled in a college or university can apply to become a Campus Ambassador for Sparsh.</p>
          </div>
          <div className="ca-faq-item">
            <h3>How much time commitment is required?</h3>
            <p>Campus Ambassadors typically dedicate 3-5 hours per week, with increased involvement during event seasons.</p>
          </div>
          <div className="ca-faq-item">
            <h3>Is there any financial compensation?</h3>
            <p>While there is no direct monetary compensation, ambassadors receive numerous perks, incentives, and professional development opportunities.</p>
          </div>
        </div>

        <footer className="ca-footer">
          <p>For any queries, contact us at <a href="mailto:sparsh@svnit.ac.in">sparsh@svnit.ac.in</a></p>
        </footer>
      </div>
    </div>
  );
};

export default CampusAmbassador;