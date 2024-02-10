import React from 'react'
import Card1 from './Card1'
import './Card1.css'
import {motion} from 'framer-motion'


// const datas =
//     {
//     liste:[  "Jusqu'à 5 pages + page de contact",
//     "Hébergement et nom du domaine offert",
//     "Adresse de messagerie limitées",
//     "Affichage responsive"]

// }
const ServiceOffreCard = () => {
  return (
    <div >
 <p className='row justify-content-center mt-5'>
 <h2 style={{color:"#001a33"}}>La charte de travail de notre <span className='fw-bolder'> agence web</span></h2> 
      <h5  className='text-primary  mb-5'>Votre projet digital en trois étapes</h5> 
  </p>    
  <div className="w-70" style={{}}>
      <motion.div
        // animate={{ rotate: 180 }}
        // transition={{
        //   repeat: 1,
        //   repeatType: "reverse",duration: 2}}
initial={{left:'-20px'}}
whileInView={{left:'0px'}}
        animate={{  x: 2  }}
       transition={{ type: 'spring' }}
       style={{position:"relative",textAlign:"start"}} className="row justify-content-center  gap-10">
      <Card1   titre={"Votre site"} titrebold={" PAS CHER"} text={"Votre existence Web se fait à travers notre pack "} 
         list={[ "Jusqu'à 6 pages + page de contact",
         "Hébergement et nom du domaine offert",
         "Adresse de messagerie limitées","Dernière norme de codage",
         "Affichage responsive","Stockage SSD"]}
        prix={"2950 HD TH"}/>

        <Card1   titre={"Votre site"} titrebold={" PAS CHER"} text={"Votre existence Web se fait à travers notre pack "} 
        list={[ "Jusqu'à 6 pages + page de contact",
        "Hébergement et nom du domaine offert",
        "Adresse de messagerie limitées","Dernière norme de codage",
        "Affichage responsive","Stockage SSD"]}
       prix={"2950 HD TH"}
       />
       
                
        </motion.div> </div>

        {/* <Card1   titre={"Votre site"} titrebold={" PAS CHER"} text={"Votre existence Web se fait à travers notre pack "} 
         list={[ "Jusqu'à 6 pages + page de contact",
         "Hébergement et nom du domaine offert",
         "Adresse de messagerie limitées","Dernière norme de codage",
         "Affichage responsive","Stockage SSD"]}
        prix={"2950 HD TH"}
        />

        <Card1
        titre={"Votre application "} titrebold={" Prodigue"} text={"Votre application de gestion en poche "} 
        list={[  "Jusqu'à 6 pages + page de contact",
        "Hébergement et nom du domaine offert",
        "Adresse de messagerie limitées",
        "Affichage responsive"]}
        prix={"2950 HD TH"}
        /> */}
    </div>
  )
}

export default ServiceOffreCard