import React, { useEffect, useRef, useState } from 'react';
import './EventPlanner.css';
import Footer from './Footer';

const EventPlanner = () => {
    const observerRef = useRef(null);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDarkTheme(savedTheme === 'dark');
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    
                    // Add specific animation classes based on data attributes
                    const animationType = entry.target.dataset.animation;
                    if (animationType) {
                        entry.target.classList.add(`animate-${animationType}`);
                    }
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll('[data-animation]');
        animatableElements.forEach((el) => {
            observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            setShowScrollTop(scrolled > 300);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Check initial scroll position
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkTheme ? 'light' : 'dark';
        setIsDarkTheme(!isDarkTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Theme Toggle Button */}
            <button className="theme-toggle" onClick={toggleTheme}>
                <span style={{fontSize: '1.2rem'}}>{isDarkTheme ? '☀️' : '🌙'}</span>
                <span>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            {/* Scroll to Top Button */}
            <button 
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                style={{ display: 'flex' }}
            >
                ⬆
            </button>

            <div className="event-planner-container">
                <header>
                    <h1 data-animation="fade-up">Welcome to Event Planner</h1>
                </header>
                
                <section className="description" data-animation="scale">
                    <p>
                        Plan and organize your events effortlessly with Event Planner. From
                        birthdays to corporate meetings, we've got you covered.
                    </p>
                    <button className='get-started-button'>Get Started</button>
                </section>
                
                <section className='events_categories'>
                    <ul data-animation="slide-left">
                        <h2>Social Events</h2>
                        <li>Birthday parties</li>
                        <li>Anniversary celebrations</li>
                        <li>Wedding receptions</li>
                        <li>Baby showers</li>
                        <li>Graduation parties</li>
                        <li>Family reunions</li>
                    </ul>
                    <ul data-animation="fade-up">
                        <h2>Entertainment Events</h2>
                        <li>Concerts</li>
                        <li>Music festivals</li>
                        <li>Film screenings</li>
                        <li>Comedy shows</li>
                        <li>Art exhibitions</li>
                        <li>Cultural events</li>
                    </ul>
                    <ul data-animation="slide-right">
                        <h2>Community Events</h2>
                        <li>Fundraising events</li>
                        <li>Charity galas</li>
                        <li>Volunteer drives</li>
                        <li>Neighborhood block parties</li>
                        <li>Community festivals</li>
                        <li>Cultural celebrations</li>
                    </ul>
                </section>
                
                <section className='features' data-animation="scale">
                    <h2>Features</h2>
                    <ul>
                        <li>Easy event creation and management</li>
                        <li>Customizable event templates</li>
                        <li>Guest list management</li>
                        <li>Real-time collaboration</li>
                        <li>Reminders and notifications</li>
                    </ul>
                </section>
                
                <section className='testimonials'>
                    <h2 data-animation="fade-up">Testimonials</h2>
                    <div className='testimonials-grid'>
                        <div className='testimonial' data-animation="slide-left">
                            <p>"Event Planner made organizing my wedding a breeze! Highly recommend!"</p>
                            <p className='author'>Yash</p>
                        </div>
                        <div className='testimonial' data-animation="slide-right">
                            <p>"The best event planning tool I've ever used. Simple and effective!"</p>
                            <p className='author'>Alok</p>
                        </div>
                    </div>
                </section>
                
                <section className='contact' data-animation="fade-up">
                    <h2>Contact Us</h2>
                    <form>
                        <input type='text' placeholder='Name' required />
                        <input type='email' placeholder='Email' required />
                        <textarea placeholder='Message' required></textarea>
                        <button type='submit' className='submit-button'>Send Message</button>
                    </form>
                </section>
                
                <Footer />
            </div>
        </>
    );
};

export default EventPlanner;
