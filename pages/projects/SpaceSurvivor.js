import Image from 'next/image';
import styles from '../../styles/Game.module.css';
import SpaceSurvivor2nd from '../../public/images/SpaceGame1.png'; // Updated import
import SpaceSurvivor1 from '../../public/images/SG2.png'; // Updated import
import Head from "next/head";
import SidebarMenu from '../../components/SidebarMenu'; // Import SidebarMenu

export default function SpaceSurvivor() {
  return (
    <div className={styles.pageContainer}>
      <SidebarMenu /> {/* Add the Sidebar */}
      <div className={styles.centeredContent}>
        <Head>
          <title>Portefolio Alexandre Bailey-Proulx Space Survivor</title>
          <meta name="description" content="Jeu vidéo Space Survivor sur le logiciel GameMaker. Objectif : survivre aux astéroïdes." />

          <meta property="og:title" content="Portefolio Alexandre Bailey-Proulx Space Survivor" />
          <meta property="og:description" content="Jeu vidéo Space Survivor sur le logiciel GameMaker. Objectif : survivre aux astéroïdes." />
          <meta property="og:image" content="/images/SoloGame1.PNG" /> {/* Use relative path */}
        </Head>
        <h1 className={styles.titre}>Space Survivor</h1>

        <Image src={SpaceSurvivor1} alt="Image1 SpaceSurvivor" className={styles.image} priority />

        <p className={styles.paragraphe}>Space Survivor est un jeu que j&apos;ai créé complètement seul. J&apos;ai programmé celui-ci en C# 
        dans un logiciel appelé &quot;GameMaker Studio 2&quot;, qui est un logiciel permettant de trier des sprites, objets, scripts, rooms, etc. 
        très simplement et de mettre les codes bien séparés dans chacun d&apos;entre eux. C&apos;est un logiciel très utile pour utiliser et améliorer nos connaissances en programmation.
        </p>

        <Image src={SpaceSurvivor2nd} alt="Image2 SpaceSurvivor" className={styles.image} priority />

      <p className={styles.paragraphe}>
        Dans ce jeu, j&apos;ai tout programmé : le contrôle du vaisseau principal permettant de se déplacer partout sur l&apos;écran, 
        le tir du véhicule, les possibilités aléatoires de la taille et de la direction des météores, les collisions des tirs sur les ennemis 
        et sur le joueur. J&apos;ai également programmé les dommages causés par les météores, le délai de tir des ennemis et du boss, 
        la barre de vie du joueur qui change selon la vie du vaisseau principal, une fonction de sauvegarde automatique lors du changement de niveau, 
        le menu complet avec l&apos;option de mettre le jeu en plein écran ou non, le bouton pour commencer une nouvelle partie ainsi qu&apos;un bouton qui permet de 
        retourner à un ancien niveau que le joueur aura sauvegardé la dernière fois. De plus, j&apos;ai aussi fait les designs de tous les sprites dans le jeu.
        J&apos;ai, bien entendu, programmé l&apos;utilisation de tous les sons comme les tirs des vaisseaux, l&apos;impact des météores et la musique d&apos;ambiance.            
      </p>
      </div>
    </div>
  );
}
