import "../styles/ContactPage.css";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    mail: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "lastname") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.slice(0, 30).toUpperCase(),
      }));
    } else if (name === "firstname") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value.slice(0, 30).charAt(0).toUpperCase() + value.slice(1),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      lastname: "",
      firstname: "",
      mail: "",
      message: "",
    });
  };

  return (
    <>
      <img src="./src/assets/images/logo.svg" alt="Logo Cocktail Club" />
      <section className="contact-form-container">
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit}>
          <article className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Enter your lastname"
              required
            />
          </article>
          <article className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Enter your firstname"
              required
            />
          </article>
          <article className="form-group">
            <label htmlFor="mail">Mail:</label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </article>
          <article className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
          </article>
          <button className="formButton" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
