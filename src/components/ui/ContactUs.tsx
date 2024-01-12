import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact">
      <h2 className="contact_us">Contact Us</h2>
      <form>
        <div className="form-row">
          <input type="text" className="form-input" placeholder="Name" />
          <input type="text" className="form-input" placeholder="Phone No." />
        </div>
        <div className="text-row">
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
        </div>
        <div className="btn">
          <button type="submit" className="form-submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;