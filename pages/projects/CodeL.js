import Image from 'next/image';
import styles from '../../styles/Game.module.css'; // Updated import path
import CodeL1 from '../../public/images/CodeL1.png'; // Updated import path
import CodeL2 from '../../public/images/CodeL2.png'; // Updated import path
import CodeL3 from '../../public/images/CodeL3.png'; // Updated import path
import Head from "next/head";
import SidebarMenu from '../../components/SidebarMenu'; // Import SidebarMenu

export default function CodeL() {
  return (
    <div className={styles.pageContainer}> {/* Add a container for the whole page */}
      <SidebarMenu /> {/* Add the Sidebar */}
      <div className={styles.centeredContent}> {/* Updated className */}
        <Head>
          <title>Portefolio Alexandre Bailey-Proulx Code L</title>
          <meta name="description" content="Jeu vidéo Code L sur le logiciel Unity. Objectif : sortir du labyrinthe." />
          <meta property="og:title" content="Portefolio Alexandre Bailey-Proulx Code L" />
          <meta property="og:description" content="Jeu vidéo Code L sur le logiciel Unity. Objectif : sortir du labyrinthe." />
          <meta property="og:image" content="http://localhost:3000/public/img/CodeL2.PNG" />
        </Head>
        <h1 className={styles.titre}>Code L</h1>
        <Image src={CodeL1} alt="Image1 Code L" className={styles.image} priority />
       <p className={styles.paragraphe}>
          Code L est un jeu vidéo créé par moi et deux collègues de classe.
          Le jeu vidéo est écrit en C# dans le logiciel Unity, un logiciel très populaire
          pour le développement de jeux professionnels.
        </p>
        <Image src={CodeL2} alt="Image2 Code L" className={styles.image} priority />
        <p className={styles.paragraphe}>
          J&apos;ai programmé plusieurs choses durant le développement du jeu, entre autres : les mouvements possibles du personnage,
          les collisions de celui-ci avec le background ou le foreground,
          et les animations. De plus, j&apos;ai aussi programmé les changements de scènes ainsi que les énigmes présentes dans le jeu.
          J&apos;ai aussi fait le design des puzzles et des scènes. J&apos;ai également entièrement créé et programmé la page
          du menu principal. Celle-ci affiche plusieurs items : le bouton &quot;jouer&quot;, qui permet de commencer le jeu et de, bien
          entendu, jouer, le bouton &quot;quitter&quot; qui ferme le tout. J&apos;ai également donné un choix d&apos;options auquel on accède avec le bouton &quot;option&quot;,
          comprenant le choix de graphiques, la taille de l&apos;écran ainsi que le contrôle du volume.
        </p>
        <Image src={CodeL3} alt="Image3 Code L" className={styles.image} priority />
      </div>
    </div>
  );
}
