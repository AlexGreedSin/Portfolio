import { useState } from "react"
import Head from "next/head"
import styles from 'styles/Contacts.module.css'
export default function SystemeContacts(){

    //creation de tout les const du form pour envoyer un email
    //validation du email qui est requis et doit etre valide
    const [courriel, setCourriel] = useState('');
    const handleCourrielChange = (event) =>{
        setCourriel(event.target.value)
    }
    const [erreurCourriel, setErreurCourriel] = useState('');
    const valideCourriel = () => {
        if(!courriel) {
            setErreurCourriel('Le courriel est requis');
        }
        else if(!courriel.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/i)){
            setErreurCourriel('Le courriel n\'est pas valide');
        }
        else {
            setErreurCourriel('')
        }
    }
    //validation de lobjet du email qui est obligatoire
    const [Objet, SetObjet] = useState('');
    const handleObjetChange = (event) => {
        SetObjet(event.target.value)
    }
    const [erreurObjet, setErreurObjet] = useState('');
    const valideObjet = () => {
        if(!Objet){
            setErreurObjet('L\'objet du email est necessaire')
        }
        else{
            setErreurObjet('');
            return true;
        }
    }
    //validation Du messages a envoyer qui est obligatoire et doit etre entre 8 et 800 caracteres
    const [Message, SetMessage] = useState('');
    const handleMessageChange = (event) => {
        SetMessage(event.target.value)
    }
    const [erreurMessage, setErreurMessage] = useState('');
    const valideMessage = () => {
        if(!Message){
            setErreurMessage('Le message du email est necessaire')
        }
        else if(Message.length < 8 || Message.length > 800){
            setErreurMessage('Le message doit ettre entre 8 et 800 carateres')
        }
        else{
            setErreurMessage('');
            return true;
        }
    }

    //handle pour montrer les erreurs si necessaire lors du click submit
    const handleSubmit = (event) => {
        event.preventDefault();

        let courrielValide = valideCourriel();
        let objetValide = valideObjet();
        let messageValide = valideMessage();

        if(courrielValide, objetValide, messageValide){
            let data = {
                courriel: courriel,
                objet: Objet,
                message: Message
            }

            console.log(data)
        }
    }
    return <>
        <Head>
            <title>Portefolio Alexandre Bailey-Proulx Me Contacter</title>
            <meta name="description" content="Formulaire pour Me Contacter facilement"/>

            <meta property="og:title" content="Portefolio Alexandre Bailey-Proulx Me Contacter"/>
            <meta property="og:description" content="Formulaire pour Me Contacter facilement"/>
            <meta property="og:image" content ="http://localhost:3000/public/img/Me.jpg"/>
        </Head>

        <h1 className={styles.titre}>Me contacter</h1>

        <p className={styles.paragraphe}>
            Pour plus de details, vous pouvez me contacter 
            en utilisant un des liens suivants. 
            <a href="https://www.linkedin.com/in/alexandre-bailey-proulx-498291234/"> linkedin</a>,
            à l&apos;adresse courriel alexandrebp24@gmail.com ou simplement en remplissant vos informations
            dans les cases suivantes : 
        </p>

        <form className={styles.form} noValidate onSubmit={handleSubmit}>
            <label>
                Votre Courriel:
                <input type="email" required value={courriel} onChange={handleCourrielChange} onBlur={valideCourriel}/>
            </label>
            {erreurCourriel &&
                <div className={styles.erreur}>
                    {erreurCourriel}
                </div>
            }

            <label>
                Objet:
                <input type="text" required value={Objet} onChange={handleObjetChange} onBlur={valideObjet}/>
            </label>
            {erreurObjet &&
                <div className={styles.erreur}>
                    {erreurObjet}
                </div>
            }
            
            <label className= {styles.message}>
                Message:
                <textarea className={styles.messageBox} required minLength="8" maxLength="800" value={Message} onChange={handleMessageChange} onBlur={valideMessage}/>
            </label>
            {erreurMessage &&
                <div className={styles.erreur}>
                    {erreurMessage}
                </div>
            }

            <input type="submit" value="Envoyer" />
        </form>
        
    </>
}