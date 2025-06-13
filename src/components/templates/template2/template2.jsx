import { useEffect, useState } from "react"
import Header2 from "./header2"
import LandingPage2 from "./landing2"
import AboutMe2 from "./aboutMe2"
import Parcours2 from "./parcours2"
import Skills2 from "./skills"

export default function Template2({lien_portfolio}) {

    const actual_year = new Date()
        const [portfolio,setPortfolio] = useState({
            "username": "edwino",
            "firstname": "Mamirina",
            "lastname": "Edwino",
            "email": "edwinomaminirina@gmail.com",
            "phone": "0343434434",
            "adress": "Antsirabe",
            "age": 22,
            "facebook": "Edwino RAFITOARISOA",
            "linkedin": "Edwino Maminirina",
            "template": 0,
            "titre": "testet",
            "loisir": [
              "sfdg",
              "sfdg"
            ],
            "parcours": [
              {
                "titre": "teste",
                "annee": "teste",
                "etablissement": "teste"
              }
            ],
            "nombre_visite": 0,
            "langue": [
              {
                "titre": "qdsfqs",
                "niveau": 2
              }
            ],
            "lien_portfolio": "edwinotestet",
            "id": 8,
            "lettre_introduction": "teste",
            "domaine": "teste",
            "experience_professionnelle": [
              {
                "titre": "teste",
                "annee": "teste",
                "entreprise": "teste"
              }
            ],
            "skills": [
              {
                "titre": "qsdf",
                "niveau": 1
              }
            ]
          })
        const fecthPortfolio = async (e)=>{
            await fetch(`http://${window.location.hostname}:1627/${lien_portfolio}`)
            .then(res=>res.json())
            .then(res=>{
              if (res.detail){
                  console.log(true)
              }else{
                  setPortfolio(res)
                  console.log(res)
              }
            })
            .catch(err=>console.error(err))
        }
        useEffect( () => {
           fecthPortfolio()
        }, [])

    return <>
        <Header2 nom={portfolio.firstname} prenom={portfolio.lastname}/>
        <LandingPage2 nom={portfolio.firstname} prenom={portfolio.lastname}  domaine={portfolio.titre} photo={portfolio.photo} id={portfolio.id}/>
        <AboutMe2 introduction={portfolio.lettre_introduction} domaine={portfolio.domaine}/>
        <div className="md:grid md:grid-cols-2">
        <Parcours2 professionnel={portfolio.experience_professionnelle} education={portfolio.parcours}/>
        <Skills2 lang={portfolio.langue} loisires={portfolio.loisir} skills={portfolio.skills}></Skills2>
        </div>
    </>
}