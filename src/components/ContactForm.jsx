function ContactForm() {
  return (
    <div className="contact-form">
      <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <input type="rating" id="rating" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" rows="4"></textarea>
      </div>
      <button type="submit">Send</button>
    </div>
  );
}

export default ContactForm;
