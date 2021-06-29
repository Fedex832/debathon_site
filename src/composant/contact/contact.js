import React from "react";
import Form from "./form";

const Contact = () => {
  return (
    <div className="contactPage">
      <h2>contactez-nous</h2>
      <p>vous avez besoins d'aide ?</p>
      <p>une remarque ?</p>
      <p>une question ?</p>
      <p>n'hésitez pas a nous contacter</p>
      <div id="formSpace">
        <Form />
      </div>
      <div id='mailBar'>
        <h3>contactez-nous par mail</h3>
        <p>debathon.info@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact;
