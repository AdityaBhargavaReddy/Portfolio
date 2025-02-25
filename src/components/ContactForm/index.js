import React, { useState } from "react";
import "./app.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let validationErrors = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) validationErrors.message = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="x">
        <div style={{height:"20px"}}></div>
    <div className="contact-container"style={{padding:'200px'}} >
        <div style={{}}>
      <h2>Contact Me</h2>
      {submitted && <p className="success-message">Message sent successfully! ✅</p>}
      <form action="https://formsubmit.co/el/koxija" method="POST"  onSubmit={handleSubmit} className="contact-form" >
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={errors.name ? "error" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className={errors.message ? "error" : ""}
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
          
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ContactForm;
