export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData);
    // console.log(formInputData);
  };

  return (
    <section className="contact-container">
      <h2>Contact Us</h2>
      <div className="form-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            handleFormSubmit(formData);
            className = `contact-form`;
          }}
        >
          <div>
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="Name"
              id="Name"
              className="form-input"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              className="form-input"
              required
            />
          </div>
          <div>
            <label htmlFor="Message" className="form-label">
              Message
            </label>
            <textarea
              name="Message"
              id="Message"
              className="form-textarea"
              required
            />
          </div>

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
