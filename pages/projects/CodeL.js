import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SidebarMenu from '../../components/SidebarMenu';
import styles from '../../styles/Game.module.css';
import CodeL1 from '../../public/images/1.png';
import CodeL2 from '../../public/images/Projet2.png';
import CodeL3 from '../../public/images/3.png';

export default function CodeL() {
  const [language, setLanguage] = useState('english'); // Default language is English

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'french' : 'english');
  };

  return (
    <div className={styles.pageContainer}>
      <SidebarMenu />
      <div className={styles.centeredContent}>
        <Head>
          <title>Alexandre Bailey-Proulx&Apos;s Portfolio - Code L</title>
          <meta name="description" content={language === 'english' ? "Code L video game created using Unity software. Objective: escape from the labyrinth." : "Jeu vidéo Code L sur le logiciel Unity. Objectif : sortir du labyrinthe."} />
          <meta property="og:title" content="Alexandre Bailey-Proulx's Portfolio - Code L" />
          <meta property="og:description" content={language === 'english' ? "Code L video game created using Unity software. Objective: escape from the labyrinth." : "Jeu vidéo Code L sur le logiciel Unity. Objectif : sortir du labyrinthe."} />
          <meta property="og:image" content="http://localhost:3000/public/img/CodeL2.PNG" />
        </Head>
        <div>
          <button onClick={toggleLanguage} className={styles.languageButton}>
            {language === 'english' ? 'Switch to French' : 'Switch to English'}
          </button>
        </div>
        <h1 className={styles.titre}>Code L</h1>
        <Image src={CodeL1} alt="Image1 Code L" className={styles.image} priority />
        <p className={styles.paragraphe}>
          {language === 'english' ? 
            'Code L is a video game I created. The video game is written in C# using Unity, a highly popular software for developing professional games.' :
            'Code L est un jeu vidéo que j\'ai créé. Le jeu vidéo est écrit en C# avec Unity, un logiciel très populaire pour le développement de jeux professionnels.'
          }
        </p>
        <Image src={CodeL2} alt="Image2 Code L" className={styles.image} priority />
        <p className={styles.paragraphe}>
          {language === 'english' ?
            'During the game\'s development, I programmed various aspects, including the character\'s possible movements, collisions with the background and foreground, and animations. Additionally, I programmed scene transitions and puzzles within the game. I also designed the puzzles and scenes. I completely created and programmed the main menu page. It includes several items: the "play" button to start the game and, of course, play, the "quit" button to exit, and an "options" button for graphic settings, screen size, and volume control.' :
            'Pendant le développement du jeu, j\'ai programmé divers aspects, notamment les mouvements possibles du personnage, les collisions avec le fond et le premier plan, et les animations. De plus, j\'ai programmé les transitions de scène et les énigmes du jeu. J\'ai également conçu les énigmes et les scènes. J\'ai entièrement créé et programmé la page du menu principal. Elle comprend plusieurs éléments : le bouton "jouer" pour démarrer le jeu et, bien sûr, jouer, le bouton "quitter" pour sortir et un bouton "options" pour les paramètres graphiques, la taille de lécran et le contrôle du volume.'
          }
        </p>
        <Image src={CodeL3} alt="Image3 Code L" className={styles.image} priority />
      </div>
    </div>
  );
}
