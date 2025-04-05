import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './landing.css'; // Correct way

export default function Landing() {
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const eventDate = new Date("April 17, 2025 00:00:00").getTime();
  
  // Timeline data
  const timelineData = [
    {
      date: "17th April",
      day: "Day 1",
      events: ["SINGING NIGHT"],
      icon: "🎤",
    },
    {
      date: "18th April",
      day: "Day 2",
      events: ["DANCING NIGHT & EDM"],
      icon: "💃",
    },
    {
      date: "19th April", 
      day: "Day 3",
      events: ["CELEBRITY NIGHT"],
      icon: "🌟",
    }
  ];

  useEffect(() => {
    // Set loading to false after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Update countdown timer
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      // Calculate days, hours, minutes, seconds (removed months calculation)
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [eventDate]);

  // Apply grid background to body with mobile responsiveness
  useEffect(() => {
    // Create a grid background container
    const gridContainer = document.createElement('div');
    gridContainer.id = 'backgroundGridContainer';
    gridContainer.style.position = 'fixed';
    gridContainer.style.top = '0';
    gridContainer.style.left = '0';
    gridContainer.style.width = '100%';
    gridContainer.style.height = '100%';
    gridContainer.style.zIndex = '-1';
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = '50% 50%';
    gridContainer.style.gridTemplateRows = '50% 50%';
    
    // Create four grid items for the background images
    const images = ['body1.png', 'body2.png', 'body3.jpg', 'body4.jpg'];
    const positions = ['top left', 'top right', 'bottom left', 'bottom right'];
    
    for (let i = 0; i < 4; i++) {
      const gridItem = document.createElement('div');
      gridItem.id = `grid-item-${i}`;
      gridItem.style.backgroundImage = `url('${images[i]}')`;
      gridItem.style.backgroundSize = 'cover';
      gridItem.style.backgroundPosition = positions[i];
      gridItem.style.backgroundRepeat = 'no-repeat';
      gridContainer.appendChild(gridItem);
    }
    
    // Apply to body element
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.minHeight = "100vh";
    document.body.style.overflowX = "hidden";
    
    // Insert the grid container as the first child of the body
    if (document.body.firstChild) {
      document.body.insertBefore(gridContainer, document.body.firstChild);
    } else {
      document.body.appendChild(gridContainer);
    }
    
    // Add media query for mobile devices
    const applyMobileStyles = () => {
      if (window.innerWidth <= 768) {  // Mobile breakpoint
        // Adjust grid layout for mobile
        gridContainer.style.gridTemplateColumns = '100%';
        gridContainer.style.gridTemplateRows = '25% 25% 25% 25%';
        
        // Center all images on mobile
        const gridItems = document.querySelectorAll('[id^="grid-item-"]');
        gridItems.forEach(item => {
          item.style.backgroundPosition = 'center';
        });
        
        // Optional: Adjust other styles for better mobile display
        document.querySelectorAll('.featured-images-container').forEach(container => {
          container.style.flexDirection = 'column';
        });
        
        // Adjust other mobile-specific styles
        document.querySelectorAll('.featured-image').forEach(img => {
          img.style.width = '100%';
          img.style.margin = '5px 0';
        });
        
        document.querySelectorAll('.timeline-container, .stats-showcase').forEach(container => {
          container.style.flexDirection = 'column';
        });
        
        document.querySelectorAll('.time-circle').forEach(circle => {
          circle.style.transform = 'scale(0.8)';
        });
      } else {
        // Reset to desktop layout
        gridContainer.style.gridTemplateColumns = '50% 50%';
        gridContainer.style.gridTemplateRows = '50% 50%';
        
        // Reset background positions to original
        for (let i = 0; i < 4; i++) {
          const gridItem = document.getElementById(`grid-item-${i}`);
          if (gridItem) {
            gridItem.style.backgroundPosition = positions[i];
          }
        }
        
        // Reset other mobile-specific styles
        document.querySelectorAll('.featured-images-container').forEach(container => {
          container.style.flexDirection = 'row';
        });
        
        document.querySelectorAll('.featured-image').forEach(img => {
          img.style.width = '';
          img.style.margin = '';
        });
        
        document.querySelectorAll('.timeline-container, .stats-showcase').forEach(container => {
          container.style.flexDirection = '';
        });
        
        document.querySelectorAll('.time-circle').forEach(circle => {
          circle.style.transform = '';
        });
      }
    };
    
    // Apply mobile styles initially
    applyMobileStyles();
    
    // Add event listener for window resize
    window.addEventListener('resize', applyMobileStyles);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', applyMobileStyles);
      const gridToRemove = document.getElementById('backgroundGridContainer');
      if (gridToRemove) {
        gridToRemove.remove();
      }
      document.body.style.margin = "";
      document.body.style.padding = "";
      document.body.style.minHeight = "";
      document.body.style.overflowX = "";
    };
  }, []);

  // Updated landing container style - no background on this container
  const containerStyle = {
    fontFamily: "'Exo 2', sans-serif",
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    paddingBottom: "50px", // Add padding at the bottom to ensure all content is shown
    boxSizing: "border-box" // Include padding in the element's total width and height
  };

  // Optional overlay to ensure content readability - can be adjusted or removed as needed
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay
    zIndex: 0 // Above background but below content
  };

  // Hero section style with no background
  const heroStyle = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0)" // Transparent background
  };
  
  // Content positioning style to ensure content appears above overlay
  const contentStyle = {
    position: "relative",
    zIndex: 2
  };

  return (
    <div className="landing-container" style={containerStyle}>
      {/* Optional overlay for better content readability */}
      <div style={overlayStyle}></div>
      
      {/* Header Section */}
      <header className="header-section" style={heroStyle}>
        <motion.div 
          className="sparsh-title"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div className="letter-container neon-letters" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            {['S', 'P', 'A', 'R', 'S', 'H'].map((letter, index) => (
              <motion.span
                key={index}
                className="letter neon-letter"
                initial={{ opacity: 0, y: -50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0
                }}
                transition={{ 
                  delay: 0.2 * index,
                  duration: 0.8
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.p
            className="subtitle neon-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            South Gujarat's Largest Cultural Fest
          </motion.p>
          
          {/* Calendar Date Pages */}
          <motion.div
            className="calendar-dates"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            {[17, 18, 19].map((date, index) => (
              <motion.div 
                key={index}
                className="calendar-page"
                initial={{ opacity: 0, rotateY: index === 0 ? -90 : index === 2 ? 90 : 0 }}
                animate={{ opacity: 1, rotateY: index === 0 ? 10 : index === 2 ? -10 : 0 }}
                transition={{ delay: 2 + (index * 0.2), duration: 0.8 }}
              >
                <div className="month-bar">APRIL</div>
                <div className="date-number">{date}</div>
                <div className="calendar-corner"></div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Countdown Timer moved to hero section - reduced size and removed months */}
          <div className="countdown-timer" style={{ transform: 'scale(0.85)', margin: '0 auto' }}>
            <div className="time-unit">
            <br/>
              <motion.div 
                className="time-circle"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="number">{timeLeft.days}</div>
                <div className="label">Days</div>
              </motion.div>
            </div>
            <div className="time-unit">
            <br/>
              <motion.div 
                className="time-circle"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="number">{timeLeft.hours}</div>
                <div className="label">Hours</div>
              </motion.div>
            </div>
            <div className="time-unit">
            <br/>
              <motion.div 
                className="time-circle"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="number">{timeLeft.minutes}</div>
                <div className="label">Minutes</div>
              </motion.div>
            </div>
            <div className="time-unit">
            <br/>
              <motion.div 
                className="time-circle"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="number">{timeLeft.seconds}</div>
                <div className="label">Seconds</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </header>
      
      {/* Main Content Container */}
      <div className="main-content" style={contentStyle}>
        {/* Added space before About Sparsh section */}
        <div style={{ height: "50px" }}></div>
        
        {/* About Section */}
        <section className="about-section">
          <div className="about-content">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About SPARSH
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Sparsh, the annual cultural festival of SVNIT, Surat, is a three-day extravaganza that celebrates art, music, dance, and talent from across the country. With a massive annual footfall of over 25,000, it is one of the largest cultural fests in South Gujarat, bringing together electrifying performances, thrilling competitions, and star-studded appearances. 
            </motion.p>
            
            {/* Stats Showcase */}
            <motion.div 
              className="stats-showcase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-item">
                <div className="stat-number">25K+</div>
                <div className="stat-label">Annual Footfall</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Events</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">60+</div>
                <div className="stat-label">Awards</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/events" className="register-btn">
                Register for Events
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Theme Section */}
        <section className="about-section">
          <div className="about-content">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Theme: ASTRALIS MELODIA
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
             Astralis Melodia is a vibrant retro-futuristic theme that combines nostalgic elements with futuristic flair. Inspired by the neon-lit landscapes of the 80s, this theme transports you to a world of vintage arcade games, cassette tapes, and synthwave beats.
            </motion.p>
          </div>
        </section>
      
        {/* Timeline Section */}
        <section className="timeline-section">
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Event Timeline
          </motion.h2>
          <div className="timeline-container">
            {timelineData.map((day, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-icon">{day.icon}</div>
                <div className="timeline-content">
                  <h3>{day.date}</h3>
                  <h4>{day.day}</h4>
                  <ul>
                    {day.events.map((event, idx) => (
                      <li key={idx}>{event}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      
        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="gallery-container">
            {/* Hexagonal Gallery Grid */}
            <h1 className="neon-heading" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              <span className="neon-text">GLIMPSES OF SPARSH 2024</span>
            </h1>
            {/* Highlighted Events */}
            <motion.div 
              className="featured-events"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Singing Night Event - Two images */}
              <motion.div 
                className="featured-content"
                whileHover={{ scale: 1.02 }}
              >
                <div className="featured-text">
                  <h3>Singing Night <span className="highlight">2024</span></h3>
                  <p>Soulful melodies and powerful vocals that captivate the audience</p>
                  <div className="featured-stats">
                    <div className="stat">
                      <span className="stat-number">4K+</span>
                      <span className="stat-label">Attendees</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">25+</span>
                      <span className="stat-label">Performers</span>
                    </div>
                  </div>
                </div>
                <div className="featured-images-container">
                  <motion.img 
                    src="Singing1.png"
                    alt="Singing Night 2024 - Performance"
                    className="featured-image"
                  />
                  <motion.img 
                    src="Singing2.png"
                    alt="Singing Night 2024 - Audience"
                    className="featured-image"
                  />
                </div>
              </motion.div>
              <br/>
              <br/>
              {/* Dancing Night Event - Two images */}
              <motion.div 
                className="featured-content"
                whileHover={{ scale: 1.02 }}
              >
                <div className="featured-text">
                  <h3>Dancing Night <span className="highlight">2024</span></h3>
                  <p>High-energy showcase of mesmerizing choreography and raw talent</p>
                  <div className="featured-stats">
                    <div className="stat">
                      <span className="stat-number">6K+</span>
                      <span className="stat-label">Attendees</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">25+</span>
                      <span className="stat-label">Performers</span>
                    </div>
                  </div>
                </div>
                <div className="featured-images-container">
                  <motion.img 
                    src="dancing1.png"
                    alt="Dancing Night 2024 - Group Performance"
                    className="featured-image"
                  />
                  <motion.img 
                    src="dancing2.png"
                    alt="Dancing Night 2024 - Solo Performance"
                    className="featured-image"
                  />
                </div>
              </motion.div>
              <br/>
              <br/>
              {/* EDM Night Event - Two images */}
              <motion.div 
                className="featured-content"
                whileHover={{ scale: 1.02 }}
              >
                <div className="featured-text">
                  <h3>EDM Night <span className="highlight">2024</span></h3>
                  <p>Experience the electrifying atmosphere with our top DJ lineup</p>
                  <div className="featured-stats">
                    <div className="stat">
                      <span className="stat-number">7.5K+</span>
                      <span className="stat-label">Attendees</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">5hrs</span>
                      <span className="stat-label">Non-stop</span>
                    </div>
                  </div>
                </div>
                <div className="featured-images-container">
                  <motion.img 
                    src="edm1.png"
                    alt="EDM Night 2024 - DJ Performance"
                    className="featured-image"
                  />
                  <motion.img 
                    src="edm2.png"
                    alt="EDM Night 2024 - Crowd"
                    className="featured-image"
                  />
                </div>
              </motion.div>
              <br/>
              <br/>
              {/* Celebrity Night Event - Two images */}
              <motion.div 
                className="featured-content"
                whileHover={{ scale: 1.02 }}
              >
                <div className="featured-text">
                  <h3>Celebrity Night <span className="highlight">2024</span></h3>
                  <p>Grand finale featuring Bollywood sensations and renowned artists</p>
                  <div className="featured-stats">
                    <div className="stat">
                      <span className="stat-number">10K+</span>
                      <span className="stat-label">Attendees</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">3</span>
                      <span className="stat-label">Celebrities</span>
                    </div>
                  </div>
                </div>
                <div className="featured-images-container">
                  <motion.img 
                    src="celebrity1.png"
                    alt="Celebrity Night 2024 - Main Act"
                    className="featured-image"
                  />
                  <motion.img 
                    src="celebrity2.png"
                    alt="Celebrity Night 2024 - Stage View"
                    className="featured-image"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="map-section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Find Us
          </motion.h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7268701458107!2d72.78110871493982!3d21.16521128593158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04db12714d441%3A0x88d90e58ed3722f4!2sSardar%20Vallabhbhai%20National%20Institute%20of%20Technology%2C%20Surat!5e0!3m2!1sen!2sin!4v1668845780417!5m2!1sen!2sin&q=Sardar+Vallabhbhai+National+Institute+of+Technology,+Surat&center=21.16521128593158,72.78110871493982&markers=color:red%7C21.16521128593158,72.78110871493982&iwloc=B"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SVNIT Surat Map"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}