import { useState } from "react";
import Head from "next/head";
import styles from '../styles/Contact.module.css';
import SidebarMenu from '../components/SidebarMenu';

export default function SystemeContacts() {
  const [courriel, setCourriel] = useState('');
  const [erreurCourriel, setErreurCourriel] = useState('');

  const handleCourrielChange = (event) => {
    const newValue = event.target.value;
    setCourriel(newValue);
    valideCourriel(newValue);
  };

  const valideCourriel = (value) => {
    if (!value) {
      setErreurCourriel('Le courriel est requis');
    } else if (!value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/i)) {
      setErreurCourriel('Le courriel n\'est pas valide');
    } else {
      setErreurCourriel('');
    }
  };

  const [objet, setObjet] = useState(''); // Consistent naming
  const handleObjetChange = (event) => {
    setObjet(event.target.value); // Consistent naming
  };

  const [erreurObjet, setErreurObjet] = useState('');

  const valideObjet = () => {
    if (!objet) {
      setErreurObjet('L\'objet du email est nécessaire'); // Consistent message
    } else {
      setErreurObjet('');
      return true;
    }
  };

  const [message, setMessage] = useState(''); // Consistent naming
  const handleMessageChange = (event) => {
    setMessage(event.target.value); // Consistent naming
  };

  const [erreurMessage, setErreurMessage] = useState('');

  const valideMessage = () => {
    if (!message) {
      setErreurMessage('Le message du email est nécessaire');
    } else if (message.length < 8 || message.length > 800) {
      setErreurMessage('Le message doit être entre 8 et 800 caractères'); // Consistent message
    } else {
      setErreurMessage('');
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let courrielValide = valideCourriel();
    let objetValide = valideObjet();
    let messageValide = valideMessage();

    if (courrielValide && objetValide && messageValide) {
      let data = {
        courriel: courriel,
        objet: objet,
        message: message,
      };

      console.log(data);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <SidebarMenu />
      <div className={styles.centeredContent}>
        <Head>
          <title>Portefolio Alexandre Bailey-Proulx Me Contacter</title>
          <meta name="description" content="Formulaire pour Me Contacter facilement" />
          <meta property="og:title" content="Portefolio Alexandre Bailey-Proulx Me Contacter" />
          <meta property="og:description" content="Formulaire pour Me Contacter facilement" />
          <meta property="og:image" content="http://localhost:3000/public/img/Me.jpg" />
        </Head>

        <h1 className={styles.titre}>Me contacter</h1>

        <p className={styles.paragraphe}>
          Pour plus de détails, vous pouvez me contacter en utilisant un des liens suivants.{" "}
          <a href="https://www.linkedin.com/in/alexandre-bailey-proulx-498291234/">linkedin</a>,{" "}
          à l&apos;adresse courriel alexandrebp24@gmail.com ou simplement en remplissant vos informations
          dans les cases suivantes :
        </p>

        <form className={styles.form} noValidate onSubmit={handleSubmit}>
          <div className={styles.formElement}>
            <label htmlFor="courriel">Votre Courriel:</label>
            <input
              type="email"
              id="courriel"
              required
              value={courriel}
              onChange={handleCourrielChange}
              onBlur={() => valideCourriel(courriel)}
              aria-invalid={erreurCourriel ? "true" : "false"}
              aria-describedby={erreurCourriel ? "erreurCourriel" : null}
            />
            {erreurCourriel && (
              <div id="erreurCourriel" className={styles.erreur}>
                {erreurCourriel}
              </div>
            )}
          </div>

          <div className={styles.formElement}>
            <label htmlFor="objet">Objet:</label>
            <input
              type="text"
              id="objet"
              required
              value={objet}
              onChange={handleObjetChange}
              onBlur={() => valideObjet(objet)}
              aria-invalid={erreurObjet ? "true" : "false"}
              aria-describedby={erreurObjet ? "erreurObjet" : null}
            />
            {erreurObjet && (
              <div id="erreurObjet" className={styles.erreur}>
                {erreurObjet}
              </div>
            )}
          </div>

          <div className={`${styles.formElement} ${styles.message}`}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              className={styles.messageBox}
              required
              minLength="8"
              maxLength="800"
              value={message}
              onChange={handleMessageChange}
              onBlur={() => valideMessage(message)}
              aria-invalid={erreurMessage ? "true" : "false"}
              aria-describedby={erreurMessage ? "erreurMessage" : null}
            />
            {erreurMessage && (
              <div id="erreurMessage" className={styles.erreur}>
                {erreurMessage}
              </div>
            )}
          </div>

          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
}