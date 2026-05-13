import React, { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form Submitted!");

        setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: ""
        });
    };

    return (
        <div className="contact">
            
            <div className="contact-det">
                <h1>CONTACT</h1>
                <p>Feel free to reach out anytime.</p>
            </div>

            <div className="contact-form">
                <h1>CONTACT FORM</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Submit Message</button>
                </form>
            </div>

        </div>
    );
}

export default Contact;