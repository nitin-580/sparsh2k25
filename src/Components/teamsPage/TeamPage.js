import React, { useEffect } from 'react';
import './TeamPage.css'; // Import the CSS file

const TeamPage = () => {
  // Sample data - replace with your actual team members
  const chairperson = {
    name: "Dr. Manish K. Rathod",
    image: "chairperson.png",
    position: "Chairperson"
  };
  
  const coChairpersons = [
    { name: "Dr. Girirajsinh C. Jadeja", image: "co-chairperson-1.png", position: "Co-Chairperson" },
    { name: "Dr. Twinkle Singh", image: "twinkle3.png", position: "Co-Chairperson" },
    { name: "Dr. Kirti Inamdar", image: "kirti2.png", position: "Co-Chairperson" },
    { name: "Dr. Rohan Rahul Pande", image: "co-chairperson-4.png", position: "Co-Chairperson" }
  ];
  
  const culturalSecretary = {
    name: "Subodh Sathe",
    image: "/images/cultural-secretary.jpg",
    position: "Cultural Affairs Secretary"
  };
  
  const jointSecretaries = [
    { name: "Shivam Singh", image: "joint1n.png", position: "Joint Cultural Affairs Secretary" },
    { name: "Ved Patel", image: "ved.png", position: "Joint Cultural Affairs Secretary" },
    { name: "Divyanshu Mishra", image: "divyanshu2.png", position: "Joint Cultural Affairs Secretary" },
    { name: "Aditya Gowda", image: "gowda2.png", position: "Joint Cultural Affairs Secretary" },
    { name: "Aditya Gambhir", image: "gambhir2.png", position: "Joint Cultural Affairs Secretary" },
  ];
  
  const conveners = [
    { name: "Karan Singh", image: "karan2.png", position: "Convener" },
    { name: "Atif Khurshid", image: "atif4.png", position: "Convener" },
    { name: "Aman Tiwari", image: "aman4.png", position: "Convener" },
    { name: "Neelima", image: "neelima2.png", position: "Convener" },
    { name: "Harika", image: "harika3.png", position: "Convener" },
    { name: "Pallav", image: "rocky.png", position: "Convener" },
    { name: "Bhanu", image: "bhanu3.png", position: "Convener" },
    { name: "Sumit Tiwari", image: "sumit2.png", position: "Convener" },
    { name: "Abhay Dubey", image: "abhay2.png", position: "Convener" }
  ];
  
  const developer = {
    name: "Aayush Jha",
    image: "developer3.png",
    position: "Technical Lead & Developer"
  };
  
  // Add Design Leads data
  const designLeads = [
    { name: "Ritik Sharma", image: "ritik2.png", position: "Design Lead" },
    { name: "Nitin Kumar", image: "/images/design-lead-2.jpg", position: "Design Lead" }
  ];

  // Add animation to elements when they enter viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections and team members
    document.querySelectorAll('section, .team-member').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('section, .team-member').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Define a style object for the Exo 2 font
  const exoFontStyle = {
    fontFamily: "'Exo 2', sans-serif"
  };

  return (
    <div className="team-page" style={{ ...exoFontStyle }}>
      {/* Add Google Fonts import for Exo 2 */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
          
          /* Fix for body and html to ensure full coverage */
          html, body, #root {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          
          /* Animation styles */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          section, .team-member {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          
          .animate-in {
            opacity: 1;
            transform: translateY(0);
          }
          
          .team-member {
            transition-delay: 0.2s;
          }
          
          .glow-effect {
            transition: box-shadow 0.3s ease;
          }
          
          .member-image-container:hover .glow-effect {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
          }
          
          /* Updated page-title style to be plain black */
          .page-title {
            color: black;
            padding-top: 20px;
            animation: fadeIn 1.2s ease-out forwards;
          }
          
          .section-title {
            color: white;
            text-shadow: 1px 1px 5px rgba(179, 64, 23, 0.8);
          }
          
          .member-name, .member-position {
            color: white;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
          }
          
          .member-image-container {
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            position: relative;
          }
          
          .member-image {
            transition: transform 0.5s ease;
          }
          
          .member-image-container:hover .member-image {
            transform: scale(1.05);
          }
          
          /* Fixed team page styling to prevent double scrollbars */
          .team-page {
            min-height: 100vh;
            width: 100%;
            background-image: url('/teamback.jpg');
            background-size: cover;
            background-attachment: fixed;
            background-position: center;
            position: relative;
          }
          
          /* Content overlay */
          .content-overlay {
            background-color: rgba(0, 0, 0, 0);
            min-height: 100vh;
            width: 100%;
            padding: 20px 0 40px 0;
          }
          
          /* Ensure container takes up space properly */
          .container {
            padding-bottom: 40px;
          }
        `}
      </style>

      {/* Content with overlay div - simplified structure */}
      <div className="content-overlay">
        <div className="container">
          <h1 className="page-title" style={exoFontStyle}>Our Team</h1>
          
          {/* Chairperson */}
          <section className="secretary-section">
            <h2 className="section-title" style={exoFontStyle}>CHAIRPERSON</h2>
            <div className="secretary-container">
              <div className="team-member secretary">
                <div className="member-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={chairperson.image} alt={chairperson.name} className="member-image" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
                  <div className="glow-effect"></div>
                </div>
                <h3 className="member-name" style={{ textAlign: 'center', ...exoFontStyle }}>{chairperson.name}</h3>
              </div>
            </div>
          </section>
          
          {/* Co-Chairpersons */}
          <section className="joint-secretaries-section">
            <h2 className="section-title" style={exoFontStyle}>CO-CHAIRPERSONS</h2>
            <div className="joint-secretaries-container single-row">
              {coChairpersons.map((coChair, index) => (
                <div key={index} className="team-member joint-secretary" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="member-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={coChair.image} alt={coChair.name} className="member-image" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
                    <div className="glow-effect"></div>
                  </div>
                  <h3 className="member-name" style={{ textAlign: 'center', ...exoFontStyle }}>{coChair.name}</h3>
                </div>
              ))}
            </div>
          </section>
          
          {/* Cultural Affairs Secretary */}
          <section className="secretary-section">
            <h2 className="section-title" style={exoFontStyle}>CULTURAL AFFAIRS SECRETARY</h2>
            <div className="secretary-container">
              <div className="team-member secretary">
                <div className="member-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={culturalSecretary.image} alt={culturalSecretary.name} className="member-image" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
                  <div className="glow-effect"></div>
                </div>
                <h3 className="member-name" style={{ textAlign: 'center', ...exoFontStyle }}>{culturalSecretary.name}</h3>
              </div>
            </div>
          </section>
          
          {/* Joint Cultural Affairs Secretaries - Modified to 3+2 layout */}
          <section className="joint-secretaries-section">
            <h2 className="section-title" style={exoFontStyle}>JOINT CULTURAL AFFAIRS SECRETARIES</h2>
            
            {/* First row - 3 secretaries */}
            <div className="joint-secretaries-container">
              {jointSecretaries.slice(0, 3).map((secretary, index) => (
                <div key={index} className="team-member joint-secretary" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="member-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={secretary.image} alt={secretary.name} className="member-image" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
                    <div className="glow-effect"></div>
                  </div>
                  <h3 className="member-name" style={{ textAlign: 'center', ...exoFontStyle }}>{secretary.name}</h3>
                </div>
              ))}
            </div>
            
            {/* Second row - 2 secretaries, centered */}
            <div className="joint-secretaries-container" style={{ justifyContent: 'center' }}>
              {jointSecretaries.slice(3, 5).map((secretary, index) => (
                <div key={index} className="team-member joint-secretary" style={{ animationDelay: `${0.1 * (index + 3)}s` }}>
                  <div className="member-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={secretary.image} alt={secretary.name} className="member-image" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
                    <div className="glow-effect"></div>
                  </div>
                  <h3 className="member-name" style={{ textAlign: 'center', ...exoFontStyle }}>{secretary.name}</h3>
                </div>
              ))}
            </div>
          </section>
          
          {/* Conveners */}
          <section className="conveners-section">
            <h2 className="section-title" style={exoFontStyle}>CONVENERS</h2>
            <div className="conveners-container grid-3x3">
              {conveners.map((convener, index) => (
                <div key={index} className="team-member convener" style={{ animationDelay: `${0.05 * index}s` }}>
                  <div className="member-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={convener.image} alt={convener.name} className="member-image" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
                    <div className="glow-effect"></div>
                  </div>
                  <h3 className="member-name" style={{ textAlign: 'center', ...exoFontStyle }}>{convener.name}</h3>
                </div>
              ))}
            </div>
          </section>
          
          {/* Developer section */}
          <section className="secretary-section">
            <h2 className="section-title" style={exoFontStyle}>TECHNICAL LEAD & DEVELOPER</h2>
            <div className="secretary-container">
              <div className="team-member secretary">
                <div className="member-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={developer.image} alt={developer.name} className="member-image" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
                  <div className="glow-effect"></div>
                </div>
                <h3 className="member-name" style={{ textAlign: 'center', ...exoFontStyle }}>{developer.name}</h3>
              </div>
            </div>
          </section>
          
          {/* Design Leads section */}
          <section className="design-leads-section">
            <h2 className="section-title" style={exoFontStyle}>DESIGN LEADS</h2>
            <div className="joint-secretaries-container" style={{ justifyContent: 'center' }}>
              {designLeads.map((designer, index) => (
                <div key={index} className="team-member joint-secretary" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="member-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={designer.image} alt={designer.name} className="member-image" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', margin: '0 auto' }} />
                    <div className="glow-effect"></div>
                  </div>
                  <h3 className="member-name" style={{ textAlign: 'center', ...exoFontStyle }}>{designer.name}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;