import React, { useState } from 'react';
import Navbar from './comm/Navbar';
import Footer from './comm/Footer';

function Appointment() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
    });

    const services = [
        'Suit',
        'Shirt',
        'Pants',
        'Blazer',
        'Jodhpuri',
        'Modi Jacket',
        'Kurta',
        'Pathani Kurta',
        'Shervani',
        'Indo-Western',
        'Safari',
        'Waistcoat',
    ];

    const timeSlots = [
        '10:00 AM', '11:00 AM', '12:00 PM',
        '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment booked:', formData);
        alert('Appointment request submitted successfully!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            date: '',
            time: '',
            notes: ''
        });
    };

    return (
        <>
            <Navbar />

            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="appointment-title">Book Your Appointment</h2>
                    <div className="appointment-underline mx-auto"></div>
                </div>
            </section>

            <section className="py-4">
                <div className="appointment-container">
                    <div className="form-container">
                        <div className="form-header">
                            <h2 className="form-title">Personalized Fitting Session</h2>
                            <p className="form-subtitle">
                                Complete the form below to request an appointment. We'll confirm your booking within 12 hours.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="appointment-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number*</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Service*</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="date">Preferred Date*</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Preferred Time*</label>
                                    <select
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a time</option>
                                        {timeSlots.map((time, index) => (
                                            <option key={index} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="notes">Special Requests</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Any specific requirements or details about your appointment..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Request Appointment
                            </button>
                        </form>
                    </div>

                    <div className="appointment-info">
                        <h3 className="info-title">Atelier Information</h3>
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>123 Tailor Street, Fashion District, Mumbai 400001</p>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-phone-alt"></i>
                            <p>+91 98765 43210</p>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <p>appointments@tailorsatelier.com</p>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <p>Monday - Saturday: 10AM - 7PM<br />Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Appointment;