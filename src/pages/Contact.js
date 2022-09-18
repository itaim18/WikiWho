import React from "react";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className="centered">
        <form
          className={styles.form}
          action="mailto:itaim148@gmail.com"
          method="POST"
          enctype="text/plain"
        >
          <h1>Send me a message</h1>
          <div className={styles.box}>
            <label>Name:</label>
            <br />
            <input type="text" placeholder="Your name" name="name" required />
          </div>
          <div className={styles.box}>
            <label>Email:</label>
            <br />
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div className={styles.box}>
            <label>Your Message:</label>
            <br />
            <textarea
              placeholder="Write your message..."
              name="message"
              required
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
