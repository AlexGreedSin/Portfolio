import Head from "next/head";
import styles from '../styles/Contact.module.css';
import SidebarMenu from '../components/SidebarMenu';

export default function SystemeContacts() {
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

        <div className={styles.contactContainer}>
          <h1 className={styles.titre}>Me contacter</h1>

          <p className={styles.paragraphe}>
            Pour plus de détails, vous pouvez me contacter en utilisant le lien suivants.{" "}
            <a href="https://www.linkedin.com/in/alexandre-bailey-proulx-498291234/" className={styles.link}>linkedin</a>,{" "}
            ou à l&apos;adresse courriel <a href="mailto:alexandrebp24@gmail.com" className={styles.emailLink}>alexandrebp24@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
