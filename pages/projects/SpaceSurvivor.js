import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SidebarMenu from '../../components/SidebarMenu';
import styles from '../../styles/Game.module.css';
import SpaceSurvivor2nd from '../../public/images/SpaceGame1.png';
import SpaceSurvivor1 from '../../public/images/SG2.png';

export default function SpaceSurvivor() {
  // State to manage language (default language is English)
  const [language, setLanguage] = useState('english');

  // Function to toggle between English and French
  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'french' : 'english');
  };

  return (
    <div className={styles.pageContainer}>
      <SidebarMenu />
      <div className={styles.centeredContent}>
        <Head>
          {/* Dynamic title and description based on language */}
          <title>
            Alexandre Bailey-Proulx&apos;s Portfolio - {language === 'english' ? 'Space Survivor' : 'Survivant de l\'espace'}
          </title>
          <meta
            name="description"
            content={
              language === 'english'
                ? "Space Survivor video game created using GameMaker software. Objective: survive the asteroids."
                : "Jeu vidéo Space Survivor sur le logiciel GameMaker. Objectif : survivre aux astéroïdes."
            }
          />
          <meta property="og:title" content={`Alexandre Bailey-Proulx's Portfolio - ${language === 'english' ? 'Space Survivor' : 'Survivant de l\'espace'}`} />
          <meta
            property="og:description"
            content={
              language === 'english'
                ? "Space Survivor video game created using GameMaker software. Objective: survive the asteroids."
                : "Jeu vidéo Space Survivor sur le logiciel GameMaker. Objectif : survivre aux astéroïdes."
            }
          />
          <meta property="og:image" content="/images/SoloGame1.PNG" />
        </Head>
        <div>
          {/* Button to toggle language */}
          <button onClick={toggleLanguage} className={styles.languageButton}>
            {language === 'english' ? 'Switch to French' : 'Switch to English'}
          </button>
        </div>
        {/* Title */}
        <h1 className={styles.titre}>{language === 'english' ? 'Space Survivor' : 'Survivant de l\'espace'}</h1>
        {/* First Image */}
        <Image src={SpaceSurvivor1} alt="Image1 SpaceSurvivor" className={styles.image} priority />
        <p className={styles.paragraphe}>
          {language === 'english' ? (
            "Space Survivor is the first game I created entirely on my own. I programmed it in C# using a software called 'GameMaker Studio 2,' which allows easy organization of sprites, objects, scripts, rooms, etc. It's a very useful software for improving programming skills."
          ) : (
            "Space Survivor est le premier jeu que j'ai créé complètement seul. J'ai programmé celui-ci en C# dans un logiciel appelé 'GameMaker Studio 2,' qui est un logiciel permettant de trier des sprites, objets, scripts, rooms, etc. très simplement et de mettre les codes bien séparés dans chacun d'entre eux. C'est un logiciel très utile pour utiliser et améliorer nos connaissances en programmation."
          )}
        </p>
        {/* Second Image */}
        <Image src={SpaceSurvivor2nd} alt="Image2 SpaceSurvivor" className={styles.image} priority />
        <p className={styles.paragraphe}>
          {language === 'english' ? (
            "In this game, I programmed everything: the control of the main spaceship allowing movement anywhere on the screen, the vehicle's firing, random possibilities for meteor size and direction, collisions of shots on enemies and the player. I also programmed damage caused by meteors, the firing delay of enemies and the boss, the player's life bar that changes according to the main spaceship's life, an automatic save function when changing levels, the complete menu with the option to go full screen or not, the button to start a new game, and a button to return to an old level that the player saved last time. Additionally, I also designed all the sprites in the game. I, of course, programmed the use of all sounds such as spaceship shots, meteor impacts, and background music."
          ) : (
            "Dans ce jeu, j'ai tout programmé : le contrôle du vaisseau principal permettant de se déplacer partout sur l'écran, le tir du véhicule, les possibilités aléatoires de la taille et de la direction des météores, les collisions des tirs sur les ennemis et sur le joueur. J'ai également programmé les dommages causés par les météores, le délai de tir des ennemis et du boss, la barre de vie du joueur qui change selon la vie du vaisseau principal, une fonction de sauvegarde automatique lors du changement de niveau, le menu complet avec l'option de mettre le jeu en plein écran ou non, le bouton pour commencer une nouvelle partie ainsi qu'un bouton qui permet de retourner à un ancien niveau que le joueur aura sauvegardé la dernière fois. De plus, j'ai aussi fait les designs de tous les sprites dans le jeu. J'ai, bien entendu, programmé l'utilisation de tous les sons comme les tirs des vaisseaux, l'impact des météores et la musique d'ambiance."
          )}
        </p>
      </div>
    </div>
  );
}
