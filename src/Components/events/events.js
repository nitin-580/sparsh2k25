import React, { useState, useEffect } from 'react';
import './events.css';

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    rollNumber: '',
    department: '',
    year: '',
    contactNumber: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  // List of events with closed registrations
  const closedRegistrationEvents = [
    "VOICE OF COSMOS", 
    "GALACTIC LYRE", 
    "BINARY BEATS", 
    "STELLAR SYMPHONY",
    "ORBIT ODYSSEY",
    "TWIN COMETS", 
    "GALACTIC RHYTHMS", 
    "THE COSMIC SHOWDOWN"
  ];

  // Sample event data
  useEffect(() => {
    // In a real application, this would likely come from an API
    try {
      const sampleEvents = [
        {
          id: 1,
          name: "CURSE OF THE BLACK PEARL",
          category: "day",
          image: "curse.jpg",
          description: "Let your creativity flow through paintings on given themes.",
          prizes: "₹50,000",
          date: "April 15, 2025",
          venue: "Main Auditorium",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 2,
          name: "SVNIT'S GOT TALENT",
          category: "day",
          image: "talent.jpg",
          description: "Express yourself through various dance styles in this high-energy competition.",
          prizes: "₹30,000",
          date: "April 16, 2025",
          venue: "Open Air Theatre",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 3,
          name: "SPARSH CHEF",
          category: "day",
          image: "chef.jpg",
          description: "Engage in stimulating debates on contemporary topics and showcase your oratory skills.",
          prizes: "₹20,000",
          date: "April 15, 2025",
          venue: "Conference Hall",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 4,
          name: "SU CHE",
          category: "day",
          image: "su.jpg",
          description: "Let your creativity flow through paintings on given themes.",
          prizes: "₹15,000",
          date: "April 17, 2025",
          venue: "Art Gallery",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 5,
          name: "ESCAPE ROOM",
          category: "day",
          image: "escape.png",
          description: "Solve complex programming challenges within time constraints.",
          prizes: "₹40,000",
          date: "April 16, 2025",
          venue: "Computer Lab",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 6,
          name: "VALORANT BLITZ",
          category: "esports",
          image: "valorant1.png",
          description: "Showcase innovative fashion designs on the ramp.",
          prizes: "₹35,000",
          date: "April 17, 2025",
          venue: "Main Stage",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 7,
          name: "FLASH MOB",
          category: "pre",
          image: "flash.jpg",
          description: "Capture moments that tell a story within the given theme.",
          prizes: "₹10,000",
          date: "April 18, 2025",
          venue: "Exhibition Hall",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 8,
          name: "CARNIVAL WALK",
          category: "day",
          image: "carnival.jpg",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 9,
          name: "COSMIC CROWN",
          category: "night",
          image: "cosmic.png",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 10,
          name: "CULTURAL WALK",
          category: "night",
          image: "cultural.png",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 11,
          name: "BATTLE OF BANDS",
          category: "day",
          image: "band.png",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 12,
          name: "VOICE OF COSMOS",
          category: "night",
          image: "voice.jpg",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 13,
          name: "GALACTIC LYRE",
          category: "night",
          image: "galactic.jpg",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 14,
          name: "BINARY BEATS",
          category: "night",
          image: "binary.png",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 15,
          name: "STELLAR SYMPHONY",
          category: "night",
          image: "stellar.jpg",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 16,
          name: "ORBIT ODYSSEY",
          category: "night",
          image: "orbit.png",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 17,
          name: "TWIN COMETS",
          category: "night",
          image: "twin.png",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 18,
          name: "GALACTIC RHYTHMS",
          category: "night",
          image: "rythm.png",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 19,
          name: "THE COSMIC SHOWDOWN",
          category: "night",
          image: "showdown.png",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        },
        {
          id: 20,
          name: "FUN STREET",
          category: "fun",
          image: "funstreet.png",
          description: "Navigate through clues across campus to find hidden treasures.",
          prizes: "₹15,000",
          date: "April 18, 2025",
          venue: "Entire Campus",
          sheetURL: "https://script.google.com/macros/s/AKfycby4tmYnD3caN3M_G59P4DgEtfYKtgn65YBdH_r6rJcK_1wM1SNGWAKIqRiVg0lusL3l/exec"
        }
      ];

      setEvents(sampleEvents);
      setFilteredEvents(sampleEvents);
      setLoading(false);
    } catch (err) {
      console.error("Error loading events:", err);
      setError("Failed to load events. Please try again later.");
      setLoading(false);
    }
  }, []);

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'day', name: 'Day Events' },
    { id: 'night', name: 'Night Events' },
    { id: 'fun', name: 'Fun Street' },
    { id: 'pre', name: 'Pre Events' },
    { id: 'esports', name: 'E-Sports' }
  ];

  // Filter events based on category and search term
  useEffect(() => {
    let result = events;
    
    if (activeCategory !== 'all') {
      result = result.filter(event => event.category === activeCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(event => 
        event.name.toLowerCase().includes(term) || 
        event.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredEvents(result);
  }, [activeCategory, searchTerm, events]);

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle image error - now uses square fallback image
  const handleImageError = (e) => {
    e.target.src = "/api/placeholder/400/400"; // Square fallback image
  };

  // Open registration form or show closed message
  const handleRegistrationClick = (event) => {
    if (closedRegistrationEvents.includes(event.name)) {
      // Create a custom closed registration modal
      setSelectedEvent({
        ...event,
        registrationClosed: true
      });
    } else {
      // Open regular registration form
      setSelectedEvent(event);
      setFormSubmitted(false);
      setFormError(null);
      setRegistrationForm({
        name: '',
        rollNumber: '',
        department: '',
        year: '',
        contactNumber: '',
        email: '',
      });
    }
  };

  // Close registration form
  const closeRegistrationForm = () => {
    setSelectedEvent(null);
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setRegistrationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission with Google Apps Script
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      // Create form data object
      const formData = {
        ...registrationForm,
        eventName: selectedEvent.name,
        eventId: selectedEvent.id,
        submittedAt: new Date().toISOString()
      };
      
      // For Google Apps Script, we need to use JSONP approach (callback-based)
      // Create a unique callback name
      const callbackName = 'googleScript_' + new Date().getTime();
      
      // Create a promise that will resolve when our callback is called
      const scriptPromise = new Promise((resolve, reject) => {
        // Define the callback function
        window[callbackName] = (response) => {
          if (response.result === 'success') {
            resolve(response);
          } else {
            reject(new Error(response.error || 'Unknown error'));
          }
          // Clean up
          delete window[callbackName];
          document.body.removeChild(script);
        };
        
        // Set a timeout in case the script doesn't respond
        setTimeout(() => {
          if (window[callbackName]) {
            delete window[callbackName];
            document.body.removeChild(script);
            reject(new Error('Request timed out'));
          }
        }, 30000); // 30 seconds timeout
      });
      
      // Build the URL with parameters
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value);
      });
      params.append('callback', callbackName);
      
      const scriptUrl = `${selectedEvent.sheetURL}?${params.toString()}`;
      
      // Create and append script element
      const script = document.createElement('script');
      script.src = scriptUrl;
      document.body.appendChild(script);
      
      // Wait for the script to load and callback to execute
      await scriptPromise;
      
      // If we get here, it means success
      setFormSubmitted(true);
      console.log("Form submitted successfully!");
      
    } catch (error) {
      console.error('Registration error:', error);
      setFormError(`Submission error: ${error.message}. Please try again or contact support.`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="events-container">
      <div className="events-header">
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Events</h1>
        <p>Participate in Sparsh's exciting competitions and showcase your talent</p>
      </div>
      
      <div className="events-filters">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search events..." 
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category.id}
              className={activeCategory === category.id ? 'active' : ''}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div className="event-card" key={event.id}>
              <div className="event-image square">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  onError={handleImageError}
                />
              </div>
              <div className="event-details">
                <h3>{event.name}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-info">
                  <p><strong>Prizes:</strong> {event.prizes}</p>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                </div>
                <div className="event-actions">
                  <button 
                    className="register-btn"
                    onClick={() => handleRegistrationClick(event)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-events">
            <p>No events match your search criteria.</p>
          </div>
        )}
      </div>

      {/* Registration modal */}
      {selectedEvent && (
        <div className="registration-modal">
          <div className="registration-modal-content">
            <span className="close-button" onClick={closeRegistrationForm}>&times;</span>
            <h2>Register for {selectedEvent.name}</h2>
            
            {selectedEvent.registrationClosed ? (
              <div className="closed-registration-message">
                <h3>Registrations Closed!</h3>
                <p>We're sorry, but registrations for this event are no longer available.</p>
                <button onClick={closeRegistrationForm} className="close-success-btn">Close</button>
              </div>
            ) : !formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="registration-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={registrationForm.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="rollNumber">Roll Number</label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    value={registrationForm.rollNumber}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={registrationForm.department}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="year">Year of Study</label>
                  <select 
                    id="year" 
                    name="year" 
                    value={registrationForm.year} 
                    onChange={handleFormChange}
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
                
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={registrationForm.contactNumber}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={registrationForm.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REGISTRATION'}
                </button>
                
                {formError && <div className="error-message">{formError}</div>}
              </form>
            ) : (
              <div className="success-message">
                <h3>Registration Submitted Successfully!</h3>
                <p>Thank you for registering for {selectedEvent.name}. Your information has been submitted to our database. We look forward to your participation!</p>
                <button onClick={closeRegistrationForm} className="close-success-btn">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;