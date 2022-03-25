import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

// initialize the values of the state

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Set up the error catching
  const [errorMessage, setErrorMessage] = useState("");

  // Deconstruct the formState
  const { name, email, message } = formState;

  // Check for changes in the form
  function handleChange(e) {
    // validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      //console.log("isValid ", isValid);
      //Email not valid
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      //Problem with message or name
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        // everything checks out
        setErrorMessage("");
      }
    }
    // without the spread operator ..., the formState object would be
    // overwritten to only contain the name:value pair
    // [e.target.name]  lets us DRY, so we can reuse setFormState
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      // console.log("State updated!");
    }
  }
  // placed outside the handleChange function because setFormState is asynchronous.
  // We will update this later once we learn how
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(formState);
  }

  // Have to use htmlFor because it is a keyword reserved for javascript.
  // same with for
  // Return ContactForm html
  return (
    <section className="flex-column">
      <h1>
        Contact me -- Please use another method as I currently do not have a
        server to store this data.
      </h1>
      <form id="contact-form" className="flex-column" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>

        <div className="flex-column">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit" className="my-2">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
