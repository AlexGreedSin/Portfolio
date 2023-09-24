import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SidebarMenu from '../../components/SidebarMenu';
import styles from '../../styles/Game.module.css';
import SystemeCaisse1 from '../../public/images/SystemeCaisse1.png';
import SystemeCaisse2 from '../../public/images/SC2.png';

export default function SystemeCaisse() {
  const [language, setLanguage] = useState('english'); // Default language is English

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'french' : 'english');
  };

  return (
    <div className={styles.pageContainer}>
      <SidebarMenu />
      <div className={styles.centeredContent}>
        <Head>
          <title>Alexandre Bailey-Proulx&apos;s Portfolio - Systeme Caisse</title>
          <meta name="description" content={language === 'english' ? "Cash register software for calculating purchases of a fictional company." : "Logiciel de caisse pour calculer les achats d'une compagnie fictive."} />
          <meta property="og:title" content="Alexandre Bailey-Proulx's Portfolio - Systeme Caisse" />
          <meta property="og:description" content={language === 'english' ? "Cash register software for calculating purchases of a fictional company." : "Logiciel de caisse pour calculer les achats d'une compagnie fictive."} />
          <meta property="og:image" content="http://localhost:3000/public/img/SystemeCaisse.PNG" />
        </Head>
        <div>
          <button onClick={toggleLanguage} className={styles.languageButton}>
            {language === 'english' ? 'Switch to French' : 'Switch to English'}
          </button>
        </div>
        <h1 className={styles.titre}>Systeme Caisse</h1>
        <Image src={SystemeCaisse1} alt="Image1 SystemeCaisse" className={styles.image} priority />
        <p className={styles.paragraphe}>
          {language === 'english' ?
            "The cash register system was created, with the help of two teammates, using 'Visual Studio' software in a Winform project. 'Visual Studio' is a widely used software, often employed as a way to view and understand code. An example of professional software using 'Visual Studio' is 'Unity,' a software I mentioned in the 'Code L' game section." :
            "Le système de caisse a été créé, avec l'aide de deux coéquipiers, sur le logiciel 'Visual Studio' dans un projet Winform. 'Visual Studio' est un logiciel très courant et souvent même utilisé dans d'autres logiciels comme façon de voir et comprendre le code inscrit. Un exemple de logiciel professionnel utilisant 'Visual Studio' serait 'Unity,' un logiciel que j'ai déjà mentionné dans la section sur le jeu Code L."
          }
        </p>
        <Image src={SystemeCaisse2} alt="Image2 SystemeCaisse" className={styles.image} priority />
        <p className={styles.paragraphe}>
          {language === 'english' ?
            "This software allows the calculation of a restaurant-style bill and displays it with all purchase information. The cash register system includes a function to automatically display the current day's date and time of use. All values for drinks and pastries are reset to 0 during reset. The cost of purchased items is added to the charges and tax calculations before appearing in the total. There are buttons I programmed: 'Total' calculates everything purchased based on the entered values, 'Receipt' visually creates the receipt that would be given to the customer (listing all purchases and final cost details), 'Reset' clears the receipt, resets all values except service charges to 0, and 'Exit' closes the software." :
            "Ce logiciel permet le calcul d'une facture de type restaurant ainsi que d'afficher celle-ci avec toutes les informations d'achats. Le système de caisse inclut la fonction d'afficher l'heure et la date du jour courant de l'utilisation automatiquement. Toutes les valeurs des boissons et des pâtisseries sont mises à 0 lors de la réinitialisation, le calcul du coût des items achetés est ajouté aux frais ainsi qu'aux calculs des taxes avant de sortir dans le total. Il y a, bien entendu, les boutons que j'ai programmés : 'Total' permet de calculer tout ce qui est acheté selon les valeurs inscrites, 'Reçu' permet de créer visuellement le reçu qui serait remis au client (indique tout les achats ainsi que les détails du coût final), 'Réinitialiser' permet d'effacer le reçu, remets toute les valeurs, sauf les frais de services, à 0 et enfin 'Sortir' qui ferme le logiciel."
          }
        </p>
      </div>
    </div>
  );
}
