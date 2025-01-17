import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section id="register" className="register-form">
      <h2>Свяжитесь со мной</h2>
      <form>
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Ваш email" required />
        {/* <input type="password" placeholder="Ваш пароль" required /> */}
        <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section>

  );
};

export default ContactForm;


{/* <section id="contact" className="contact-form">
      <h2>Свяжитесь со мной</h2>
      <form>
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Ваш email" required />
        <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section> */}