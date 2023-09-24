import Image from 'next/image'
import styles from '../../styles/Game.module.css';
import SystemeCaisse1 from '../../public/images/SystemeCaisse1.png';
import SystemeCaisse2 from '../../public/images/SC2.png';
import Head from "next/head"
export default function SystemeCaisse(){
    return <>
        <Head>
            <title>Portefolio Alexandre Bailey-Proulx Caisse</title>
            <meta name="description" content="logiciel de caisse pour calculer les achats d'une compagnie fictive"/>
        
            <meta property="og:title" content="Portefolio Alexandre Bailey-Proulx Caisse"/>
            <meta property="og:description" content="logiciel de caisse pour calculer les achats d'une compagnie fictive"/>
            <meta property="og:image" content ="http://localhost:3000/public/img/SystemeCaisse.PNG"/>
        </Head>
        <h1 className={styles.titre}>Systeme Caisse</h1>

        <Image src={SystemeCaisse1} alt="Image1 SystemeCaisse" className={styles.image} priority/>

        <p className={styles.paragraphe}>
            Le systeme de caisse a été créé, avec l&apos;aide de deux coéquipiers, sur le logiciel &quot;visual studio&quot; dans un Projet Winform
            &quot;Visual Studio&quot; est un logiciel très courant et souvent même utilisé dans d&apos;autres logiciels comme 
            façon de voir et comprendre le code inscrit. Un exemple de logiciel professionnel utilisant &quot;Visual Studio&quot;
            serait &quot;Unity&quot;, un logiciel que j&apos;ai déjà mentionné dans la section sur le jeu Code L. 
            </p>
        <Image src={SystemeCaisse2} alt="Image2 SystemeCaisse" className={styles.image} priority />
        <p className={styles.paragraphe}>
            Ce logiciel permet le calcul d&apos;une facture de type restaurant ainsi que d&apos;afficher celle-ci 
            avec toutes les informations d&apos;achats. Le systeme de caisse inclut la fonction d&apos;afficher l&apos;heure et la date du jour 
            courant de l&apos;utilisation automatiquement. Toutes les valeurs des boissons et des pâtisseries sont mises à 0 lors de la réinitialisation,
            le calcul du coûts des items achetés est ajouté aux frais ainsi qu&apos;aux calculs des taxes avant de sortir dans le total.
            Il y a, bien entendu, les boutons que j&apos;ai programmés : le Total permet de calculer tout ce qui est acheté selon les valeurs inscrites, 
            le bouton Reçu permet de créer visuellement le reçu qui serait remis au client (indique tout les achats ainsi que les détails du coût final), 
            le bouton Réinitialiser permet d&apos;effacer le reçu, remets toute les valeurs, sauf les frais de services, à 0 et enfin Sortir qui ferme le logiciel.
        </p>
    </>
}
