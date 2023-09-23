import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import SidebarMenu from '../components/SidebarMenu';
import styles from '../styles/Home.module.css';

function About() {
  return (
    <Layout>
      <div className="flex">
        <SidebarMenu />
        <div className="flex-grow">
          <Head>
            <title>Portefolio Alexandre Bailey-Proulx Accueil</title>
            <meta name="description" content="Page pour savoir toutes les informations sur Alexandre" />
            <meta property="og:title" content="Portefolio Alexandre Bailey-Proulx Accueil" />
            <meta property="og:description" content="Page pour savoir toutes les informations sur Alexandre" />
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/Me.jpg`} />
          </Head>
          <div className={styles.centerScreen}>
            <p className={styles.sousTitre}>Sur mon Portfolio, vous allez en savoir plus sur moi-même ainsi que mes connaissances et certains projets que j&apos;ai déjà faits.</p>
            <p className={styles.sousTitre}>Bien sûr, si vous désirez avoir plus de détails, n&apos;hésitez pas à me contacter. Toutes les informations pour me contacter seront dans la section &ldquo;Contact&ldquo; de mon Portfolio.</p>
            <h1 className={styles.titre}>À propos de moi :</h1>
            <p className={styles.sousTitre}>
              Bonjour, Je m&apos;appelle Alexandre Bailey-Proulx, j&apos;ai 19 ans et j&apos;ai toujours eu une grande passion pour la création de jeux vidéos et logiciels. Je suis un programmeur informatique,
              j&apos;ai étudié au collège La Cité à Ottawa pendant 2 ans dans le programme Programmation informatique.
              Je connais plusieurs langues de programmation de base comme le C#, Java, HTML, CSS ainsi que des connaissances en réseautique et bases de données.
            </p>
            <p className={styles.sousTitre}>
              Je suis une personne bien organisée ainsi que ponctuelle en plus d&apos;une grande attention au détail. Très grand fan de jeux vidéos de tous genres et
              j&apos;espère trouver des personnes agréables sur des grands projets ambitieux.
            </p>
            <Image className={styles.image} src="/images/Me.jpg" alt="A picture of my Face" width={200} height={200} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;

About.metadata = {
  title: 'Portfolio-About',
  description: 'Generated by Alexandre Bailey-Proulx',
};