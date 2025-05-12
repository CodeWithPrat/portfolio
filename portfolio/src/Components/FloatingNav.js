import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Github, Mail, UtensilsCrossed, ChartNoAxesCombined, FolderOpenDot } from 'lucide-react';

const FloatingMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: window.innerHeight - 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const buttonRef = useRef(null);
  const navContainerRef = useRef(null);
  
  // Define the navigation links
  const navigationLinks = [
    { id: 'home', name: 'Home', path: '/' },
    { id: 'skills', name: 'Skills', path: '/skills' },
    { id: 'experience', name: 'Experience', path: '/experience' },
    { id: 'projects', name: 'Projects', path: '/projects' },
    { id: 'education', name: 'Education', path: '/education' },
    { id: 'contact', name: 'Contact', path: '/contact' },
    { id: 'github', name: 'Github', path: 'https://github.com/CodeWithPrat', external: true }
  ];

  // Define the navigation icons map
  const icons = {
    Home,
    Skills: UtensilsCrossed,
    Experience: ChartNoAxesCombined,
    Projects: FolderOpenDot,
    Education: Briefcase,
    Contact: Mail,
    Github
  };

  const handleToggle = (e) => {
    // Only toggle if it's a click and not the end of a drag
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseDown = (e) => {
    // Prevent default to avoid page scrolling/movement
    e.preventDefault();
    
    // Set initial drag state
    if (e.touches) {
      setIsDragging(true);
      setDragOffset({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    } else {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
    
    // Add a click indicator class to show active state
    if (buttonRef.current) {
      buttonRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      // Prevent default to avoid page scrolling/movement
      e.preventDefault();
      
      let newX, newY;
      
      if (e.touches) {
        newX = e.touches[0].clientX - dragOffset.x;
        newY = e.touches[0].clientY - dragOffset.y;
      } else {
        newX = e.clientX - dragOffset.x;
        newY = e.clientY - dragOffset.y;
      }
      
      // Keep the button within screen bounds
      newX = Math.max(10, Math.min(window.innerWidth - 60, newX));
      newY = Math.max(10, Math.min(window.innerHeight - 60, newY));
      
      // Update position with immediate rendering, no transition during drag
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = (e) => {
    // Only count this as a click event if the move was minimal
    const wasDragged = isDragging;
    setIsDragging(false);
    
    // Snap to edges if close enough
    let newX = position.x;
    let newY = position.y;
    
    if (position.x < 50) {
      newX = 20;
    } else if (position.x > window.innerWidth - 100) {
      newX = window.innerWidth - 70;
    }
    
    if (position.y !== newY || position.x !== newX) {
      setPosition({ x: newX, y: newY });
    }

    // Reset cursor
    if (buttonRef.current) {
      buttonRef.current.style.cursor = 'grab';
    }
    
    return wasDragged;
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the navigation is open
      if (!isOpen) return;

      // Check if the click is outside the navigation container
      if (
        navContainerRef.current && 
        !navContainerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Add the event listeners when dragging starts
  useEffect(() => {
    const handleMouseMoveEvent = (e) => handleMouseMove(e);
    const handleMouseUpEvent = (e) => handleMouseUp(e);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMoveEvent, { passive: false });
      window.addEventListener('mouseup', handleMouseUpEvent);
      window.addEventListener('touchmove', handleMouseMoveEvent, { passive: false });
      window.addEventListener('touchend', handleMouseUpEvent);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveEvent);
      window.removeEventListener('mouseup', handleMouseUpEvent);
      window.removeEventListener('touchmove', handleMouseMoveEvent);
      window.removeEventListener('touchend', handleMouseUpEvent);
    };
  }, [isDragging, position]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div 
      ref={navContainerRef}
      className="md:hidden fixed z-50"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transition: isDragging ? 'none' : 'all 0.2s ease-out',
        willChange: 'transform, left, top'
      }}
    >
      {/* The menu items in a circular layout */}
      {isOpen && (
        <div className="absolute">
          {navigationLinks.map((link, index) => {
            // Calculate positions in a circle
            const totalItems = navigationLinks.length;
            const angle = (index * (2 * Math.PI / totalItems)) - Math.PI/2;
            const radius = 100; // Distance from center
            const itemX = Math.cos(angle) * radius;
            const itemY = Math.sin(angle) * radius;
            
            const Icon = icons[link.name];
            const isActive = location.pathname === link.path;
            
            // Render link or external link
            const LinkComponent = link.external ? 'a' : Link;
            const linkProps = link.external 
              ? { 
                  href: link.path, 
                  target: '_blank', 
                  rel: 'noopener noreferrer' 
                } 
              : { to: link.path };

            return (
              <LinkComponent
                key={link.id}
                {...linkProps}
                className={`absolute flex items-center justify-center w-12 h-12 rounded-full transform transition-all duration-300 ${
                  isActive 
                    ? 'bg-indigo-800 text-white' 
                    : 'bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900/60'
                } hover:scale-110`}
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  transform: `translate(${itemX}px, ${itemY}px) scale(${isOpen ? 1 : 0})`,
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${index * 0.05}s`
                }}
              >
                <Icon size={20} />
                <span 
                  className="absolute whitespace-nowrap text-xs font-medium bg-gray-900/80 dark:bg-gray-800/90 text-white px-2 py-1 rounded-md -top-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ 
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {link.name}
                </span>
              </LinkComponent>
            );
          })}
        </div>
      )}
      
      {/* The main floating button */}
      <button
        ref={buttonRef}
        className={`w-14 h-14 rounded-full flex items-center justify-center transform transition-all ${
          isOpen 
            ? 'bg-slate-700 rotate-45' 
            : 'bg-blue-800 rotate-0 hover:bg-blue-700'
        }`}
        style={{ 
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
          cursor: 'grab',
          transition: isDragging ? 'transform 0.2s, background-color 0.3s' : 'all 0.3s ease',
          willChange: 'transform',
          touchAction: 'none'
        }}
        onClick={handleToggle}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default FloatingMobileNav;