import "./sponsors.css";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DotLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

// Updated sponsors array with proper organization by tier
const sponsorsData = [
  // Original images from the first version are used with Google Drive links
  {
    id: 1,
    img: "sbi.jpg",
    name: "SBI",
    tier: "title"
  },
  {
    id: 2,
    img: "ubi.png",
    name: "Union Bank",
    tier: "co-title"
  },
  {
    id: 3,
    img: "redbull.jpg",
    name: "Red Bull",
    tier: "co-title"
  },
  {
    id: 4,
    img: "honda.jpg",
    name: "Honda",
    tier: "regular"
  },
  {
    id: 5,
    img: "geetha.png",
    name: "Geetha",
    tier: "regular"
  },
  {
    id: 6,
    img: "royalenfield.jpg",
    name: "Royal Enfield",
    tier: "regular"
  },
  {
    id: 7,
    img: "jk.png",
    name: "JK",
    tier: "regular"
  },
  {
    id: 8,
    img: "beardo.jpg",
    name: "Beardo",
    tier: "regular"
  },
  {
    id: 9,
    img: "westside.webp",
    name: "Westside",
    tier: "regular"
  },
  {
    id: 10,
    img: "vr.jpg",
    name: "VR",
    tier: "regular"
  },
  {
    id: 11,
    img: "myfm.webp",
    name: "My FM",
    tier: "regular"
  },
  {
    id: 12,
    img: "skippi.webp",
    name: "Skippi",
    tier: "regular"
  }
];

export default function Sponsors() {
  const matches = useMediaQuery("(max-width: 720px)");
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  useEffect(() => {
    // Load Lottie script dynamically
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
    
    // Set a timeout as a fallback in case images don't load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      // Only remove the script if we added it
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  const handleImageLoad = () => {
    setImagesLoaded(prev => {
      const newCount = prev + 1;
      // Once at least half of the images are loaded, show the content
      if (newCount >= sponsorsData.length / 2) {
        setLoading(false);
      }
      return newCount;
    });
  };

  // Filter sponsors by tier
  const titleSponsor = sponsorsData.find(sponsor => sponsor.tier === "title");
  const coTitleSponsors = sponsorsData.filter(sponsor => sponsor.tier === "co-title");
  const regularSponsors = sponsorsData.filter(sponsor => sponsor.tier === "regular");

  // Animation variants for sponsors
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 25px rgba(101, 255, 163, 0.6)",
      transition: { duration: 0.4 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {loading && (
        <div
          style={{
            backgroundColor: "#050A30",
            height: "100vh",
            position: "fixed",
            width: "100%",
            zIndex: 999, // Higher z-index for loader
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DotLoader color="#65FFA3" />
        </div>
      )}
      
      {/* Animated Background Container */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundColor: "#050A30",
          overflow: "hidden"
        }}
      >
        {/* Multiple Animation Elements */}
        <div style={{ 
          position: "absolute", 
          top: "0%", 
          left: "0%", 
          width: "100%", 
          height: "100%", 
          opacity: 0.6, 
          pointerEvents: "none" 
        }}>
          <dotlottie-player 
            src="https://lottie.host/9b7a5920-9ca2-4ad0-93f0-b41ea332ac70/jnXrVocylx.lottie" 
            background="transparent" 
            speed="0.7" 
            style={{ width: "100%", height: "100%" }} 
            loop 
            autoplay
          ></dotlottie-player>
        </div>
        
        <div style={{ 
          position: "absolute", 
          top: "-50%", 
          left: "0%", 
          width: "100%", 
          height: "100%", 
          opacity: 0.6, 
          pointerEvents: "none",
          transform: "scale(1.2)"
        }}>
          <dotlottie-player 
            src="https://lottie.host/9b7a5920-9ca2-4ad0-93f0-b41ea332ac70/jnXrVocylx.lottie" 
            background="transparent" 
            speed="0.6" 
            style={{ width: "100%", height: "100%" }} 
            loop 
            autoplay
          ></dotlottie-player>
        </div>
        
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "0%", 
          width: "100%", 
          height: "100%", 
          opacity: 0.6, 
          pointerEvents: "none",
          transform: "scale(1.1) rotate(15deg)"
        }}>
          <dotlottie-player 
            src="https://lottie.host/9b7a5920-9ca2-4ad0-93f0-b41ea332ac70/jnXrVocylx.lottie" 
            background="transparent" 
            speed="0.65" 
            style={{ width: "100%", height: "100%" }} 
            loop 
            autoplay
          ></dotlottie-player>
        </div>
      </div>
      
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "transparent", // Changed to transparent to show animations
          paddingTop: "140px",
          paddingBottom: "50px",
          color: "white",
          position: "relative",
          overflow: "hidden",
          zIndex: 1, // Above the animation but below navbar
        }}
        className="sponsors-container"
      >
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "60px",
            position: "relative",
            zIndex: 2 // Above background
          }}
        >
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              paddingTop: "8px",
              color: "rgba(23, 232, 228, 0.9)",
              fontSize: "3rem",
              margin: 0,
              textShadow: "0 0 15px rgba(23, 232, 228, 0.6)" // Add glow
            }}
          >
            Our Sponsors
          </motion.h1>
        </div>

        {/* Sponsors sections layout */}
        <motion.div 
          className="sponsors-layout"
          style={{ 
            position: "relative", 
            zIndex: 2, // Above background
            padding: "0 5%"
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title Sponsor */}
          {titleSponsor && (
            <div className="title-sponsor-section">
              <motion.h2 
                className="sponsor-tier-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ 
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#65FFA3",
                  textShadow: "0 0 10px rgba(101, 255, 163, 0.5)"
                }}
              >
                Title Sponsor
              </motion.h2>
              <motion.div 
                className="title-sponsor"
                variants={itemVariants}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "50px"
                }}
              >
                <motion.div 
                  className="sponsor-image-container"
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)", // Slightly more opaque
                    borderRadius: "10px",
                    padding: "20px",
                    width: matches ? "70%" : "35%",
                    boxShadow: "0 0 15px rgba(101, 255, 163, 0.3)",
                    overflow: "hidden"
                  }}
                >
                  <img 
                    src={titleSponsor.img} 
                    alt={titleSponsor.name} 
                    onLoad={handleImageLoad}
                    onError={handleImageLoad}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </motion.div>
              </motion.div>
            </div>
          )}
          
          {/* Co-Title Sponsors */}
          {coTitleSponsors.length > 0 && (
            <div className="co-title-sponsors-section">
              <motion.h2 
                className="sponsor-tier-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ 
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#65FFA3",
                  textShadow: "0 0 10px rgba(101, 255, 163, 0.5)"
                }}
              >
                Co-Title Sponsors
              </motion.h2>
              <div 
                className="co-title-sponsors"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "30px",
                  marginBottom: "50px"
                }}
              >
                {coTitleSponsors.map((sponsor) => (
                  <motion.div 
                    key={sponsor.id}
                    className="sponsor-image-container"
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)", // Slightly more opaque
                      borderRadius: "10px",
                      padding: "15px",
                      width: matches ? "70%" : "25%",
                      boxShadow: "0 0 15px rgba(101, 255, 163, 0.3)",
                      overflow: "hidden"
                    }}
                  >
                    <img 
                      src={sponsor.img} 
                      alt={sponsor.name} 
                      onLoad={handleImageLoad}
                      onError={handleImageLoad}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Regular Sponsors Grid - MODIFIED TO SHOW 3 PER ROW WITH SMALLER BOXES AND EVEN SPACING */}
          {regularSponsors.length > 0 && (
            <div className="regular-sponsors-section">
              <motion.h2 
                className="sponsor-tier-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ 
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#65FFA3",
                  textShadow: "0 0 10px rgba(101, 255, 163, 0.5)"
                }}
              >
                Associate Sponsors
              </motion.h2>
              <div 
                className="regular-sponsors-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: matches ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                  gap: "40px",
                  justifyContent: "center",
                  margin: "0 auto 30px auto",
                  maxWidth: matches ? "90%" : "80%"
                }}
              >
                {regularSponsors.map((sponsor) => (
                  <motion.div 
                    key={sponsor.id}
                    className="sponsor-image-container"
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)", // Slightly more opaque
                      borderRadius: "8px",
                      padding: "10px",
                      boxShadow: "0 0 10px rgba(101, 255, 163, 0.3)",
                      aspectRatio: "1",
                      overflow: "hidden",
                      maxWidth: "85%",
                      margin: "0 auto"
                    }}
                  >
                    <img 
                      src={sponsor.img} 
                      alt={sponsor.name} 
                      onLoad={handleImageLoad}
                      onError={handleImageLoad}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
}