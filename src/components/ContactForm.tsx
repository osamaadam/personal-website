import React from "react";
import useSnackbar from "../hooks/useSnackbar";
import "../scss/contact-form.scss";

const ContactForm: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/xqkyadkl", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });
      form.reset();
      useSnackbar("Email sent!", "success");
    } catch (error) {
      console.error(error);
      useSnackbar("Request failed. Please try again later.", "error");
    }
  };

  return (
    <section className="card contact" id="contact">
      <h1 className="contact__title">Contact</h1>
      <form
        action={process.env.EMAIL_API}
        onSubmit={handleSubmit}
        method="post"
        className="contact-form"
        id="contact-form"
      >
        <div className="contact-form__info">
          <div className="contact-form__container">
            <label htmlFor="email-subject">Your name</label>
            <input
              type="text"
              name="name"
              id="email-subject"
              className="contact-form__name"
              placeholder="Marie Antoinette"
              autoCapitalize="words"
              required
              dir="auto"
            />
          </div>
          <div className="contact-form__container">
            <label htmlFor="email-sender">Your email</label>
            <input
              type="email"
              name="_replyto"
              id="email-sender"
              className="contact-form__email"
              placeholder="example@domain.com"
              required
            />
          </div>
        </div>
        <div className="contact-form__text-area-div">
          <label htmlFor="email-body">Message</label>
          <textarea
            name="message"
            id="email-body"
            className="contact-form__text-area"
            placeholder="Carthago delenda est."
            autoCapitalize="sentences"
            spellCheck="true"
            dir="auto"
            required
          />
        </div>
        <div className="contact-form__button-container">
          <button
            type="submit"
            className="button--outline contact-form__button"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
