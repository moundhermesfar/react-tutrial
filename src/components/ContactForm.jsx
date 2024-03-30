function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" rows="4"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
