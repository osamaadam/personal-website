import React from "react";
import "../scss/contact-form.scss";

interface Props {
  reference: React.RefObject<HTMLDivElement>;
}

const ContactForm: React.FC<Props> = ({ reference }) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);

    try {
      await fetch(process.env.GATSBY_EMAIL_API!, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: data
      });
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card contact" ref={reference}>
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
            required
            dir="auto"
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
    </div>
  );
};

export default ContactForm;
