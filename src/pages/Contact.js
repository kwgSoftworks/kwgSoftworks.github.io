import React from 'react'
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <Navigation />
            <div className="contact-header">
                <div className="contact-header__container">
                    <h1>Let's Talk</h1>
                    <p>Do you have a problem that we can help you with? Do you want to talk schedule some time to talk through the problem your organization is facing? complete the contact form below and tell us as much information as you have</p>
                </div>
            </div>
            <ContactForm />
            <SocialMedia />
            <Footer />
        </div>
    )
}
