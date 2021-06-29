import React from "react";

const Form = () => {
  return (
    <div className="formulaire">
      <h1>Vous êtes une entreprise ou un établissement ?</h1>
      <p>envoyer nous le formulaire ci-contre pour que l'on traite votre demande dans de meilleur délais.</p>
      <div id="contactForm">
        <form>
          <label>nom de l'entreprise*</label>
          <input type="text"></input>
          <label>email*</label>
          <input type="text"></input>
          <label>téléphone</label>
          <input type="text"></input>
          <label>objet*</label>
          <input type="text"></input>
          <label>message</label>
          <input id="message" type="text"></input>
          <div id="contactButton">
            <button>envoyer</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;
