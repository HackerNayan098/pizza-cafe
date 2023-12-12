import "../styles/contact.scss";
import PizzaBg from "../assets/pizzaLeft.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="left-side"
        style={{ backgroundImage: `url(${PizzaBg})` }}
      ></div>
      <div className="right-side">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <input name="name" placeholder="Enter full name..." type="text" />
          <input name="email" placeholder="Enter email..." type="email" />
          <textarea
            rows="6"
            placeholder="Enter your feedback..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
