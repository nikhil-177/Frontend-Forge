export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData);
    console.log(formInputData);
  };
  
  return (
    <section>
      <h2>Contact Us</h2>
      <div>
        <form action={handleFormSubmit}>
          <input type="text" placeholder="Enter name..." name="Name" required />
          <input
            type="email"
            placeholder="Enter email.."
            name="Email"
            required
          />
          <textarea placeholder="Enter message..." name="Message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};
