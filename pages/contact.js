import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import SidebarMenu from '../components/SidebarMenu';

export default function SystemeContacts() {
  // State to manage the selected language (default is English)
  const [language, setLanguage] = useState('english');

  // Function to toggle the language between English and French
  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'french' : 'english');
  };

  return (
    <div className={styles.pageContainer}>
      <SidebarMenu /> {/* Include the SidebarMenu component */}
      <div className={styles.centeredContent}>
        <Head>
          <title>Alexandre Bailey-Proulx&apos;s Portfolio - Me Contacter</title>
          {/* Set metadata for the page */}
          <meta name="description" content={language === 'english' ? "Contact form for easy contact with me." : "Formulaire pour Me Contacter facilement."} />
          <meta property="og:title" content="Alexandre Bailey-Proulx's Portfolio - Me Contacter" />
          <meta property="og:description" content={language === 'english' ? "Contact form for easy contact with me." : "Formulaire pour Me Contacter facilement."} />
          <meta property="og:image" content="http://localhost:3000/public/img/Me.jpg" />
        </Head>

        <div className={styles.contactContainer}>
          {/* Language toggle button */}
          <div>
            <button onClick={toggleLanguage} className={styles.languageButton}>
              {language === 'english' ? 'Switch to French' : 'Switch to English'}
            </button>
          </div>
          <h1 className={styles.titre}>Me contacter</h1>
          <p className={styles.paragraphe}>
            {/* Display different text based on the selected language */}
            {language === 'english' ?
              "For more details, you can contact me using the following links: " :
              "Pour plus de détails, vous pouvez me contacter en utilisant les liens suivants : "
            }
            <a href="https://www.linkedin.com/in/alexandre-bailey-proulx-498291234/" className={styles.link}>LinkedIn</a>,
            {language === 'english' ? "," : " ou "}
            {language === 'english' ?
              "or via email at " :
              "à l'adresse courriel "
            }
            <a href="mailto:alexandrebp24@gmail.com" className={styles.emailLink}>alexandrebp24@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
