import React from "react";

const Contact = () => {
  return (
    <form method="POST" target="_blank">
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div className="mb-3 pt-0">
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button type="submit">Send a message</button>
      </div>
    </form>
  );
};

export default Contact;
