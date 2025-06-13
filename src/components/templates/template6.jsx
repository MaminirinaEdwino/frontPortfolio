import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { MdEmail, MdFacebook, MdHome, MdPhone } from "react-icons/md"
import { FaLinkedinIn } from "react-icons/fa"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Progress } from "../ui/progress"
import { Circle } from "lucide-react"
import { RiCircleFill } from "react-icons/ri"
import bg from "../../assets/bg2.jpg"

export default function Template6({lien_portfolio}) {
    const [choix, setCHoix] = useState("skill")
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
    return <div className="text-white">
    <img src={bg} alt=""  className="fixed -z-10 h-full blur-sm "/>
        <header className="flex gap-2 justify-between p-2 px-6 shadow-2xl bg-whute/25 backdrop-blur-2xl sticky top-0">
            <p className="text-xl font-bold">{portfolio.firstname} {portfolio.lastname}</p>
            <nav>
                <Dialog className="bg-black">
                    <DialogTrigger className="text-base text-balance  hover:border-b border-white transition-all duration-100 ">Contacts</DialogTrigger>
                    <DialogContent className={"bg-none"}>
                        <DialogHeader className={"bg-none"}>
                            <DialogTitle>Contacts</DialogTitle>
                            <DialogDescription>Voici mes Contacts</DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center gap-2">
                        <MdEmail></MdEmail> {portfolio.email}    
                        </div> 
                        <div className="flex items-center gap-2">
                        <MdPhone></MdPhone> {portfolio.phone}    
                        </div> 
                        <div className="flex items-center gap-2">
                        <MdHome></MdHome> {portfolio.adress}    
                        </div> 
                        <div className="flex items-center gap-2">
                        <MdFacebook></MdFacebook> {portfolio.facebook}    
                        </div> 
                        <div className="flex items-center gap-2">
                        <FaLinkedinIn></FaLinkedinIn> {portfolio.facebook}    
                        </div> 
                    </DialogContent>
                </Dialog>
            </nav>
        </header>
        <section className="md:flex p-4 max-h-[100vh]">
        <div className="md:w-1/2">
                <img src={`http://${window.location.hostname}:1627/portfolio/photo/${portfolio.id}`} alt={portfolio.firstname+" "+portfolio.lastname}  className="w-3/4 mx-auto rounded-full "/>
            </div>
            <div className="md:w-1/2 p-4 text-justify md:flex flex-col">
                <h2 className="text-4xl m-2 ">{portfolio.firstname} {portfolio.lastname}</h2>
                <h3 className="text-xl m-2">Domaine : {portfolio.domaine}</h3>
                <h3 className="p-2">{portfolio.lettre_introduction}</h3>

                <div className="flex p-2 gap-2 ">
                <Sheet>
                    <SheetTrigger className="boutonTmp3">Mon Parcour scolaire</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                Mon Parcour Scolaire
                            </SheetTitle>
                            <SheetDescription>
                                Mon Parcour scolaire
                            </SheetDescription>
                        </SheetHeader>
                        <div className="h-full overflow-scroll">
                        <div className="p-2 border-l-2 m-3 border-primary">
                            
                            {portfolio.parcours.map((parcour, index)=><div className="p-2">
                                <RiCircleFill className="relative -left-6 top-6 "></RiCircleFill>
                                <p className="text-xl font-bold text-pretty">
                                {parcour.titre}
                                </p>
                                <p>
                                    {parcour.etablissement}
                                </p>
                                <p>
                                    {parcour.annee}
                                </p>
                            </div>)}
                        </div>
                        </div>
                    </SheetContent>
                </Sheet>
                <Sheet>
                    <SheetTrigger className="boutonTmp3sansBg">
                        Mon parcour professionnel
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Mon Parcour professionnel</SheetTitle>
                        </SheetHeader>
                        <div className="h-full overflow-hidden">
                            <div className="p-2">
                                {portfolio.experience_professionnelle.map((exp, index)=><div className="p-2">
                                    <p className="text-xl font-bold text-primary">{exp.titre}</p>
                                    <p className="text-lg">{exp.entreprise}</p>
                                    <p className="">{exp.annee}</p>
                                </div>)}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
                <Sheet>
                    <SheetTrigger className="boutonTmp3sansBg">
                        Skills et Loisirs
                    </SheetTrigger>
                    <SheetContent className={"overflow-scroll"}>
                        <SheetHeader>
                            <SheetTitle>
                            Mes Skills et loisirs
                            </SheetTitle>
                        </SheetHeader>
                        <div className="flex justify-center gap-2">
                        <h2 className={"text-center text-xl font-bold p-2 px-4 transition-all duration-200"+` ${choix == "skill" && "border border-primary  rounded-2xl"}`} onClick={(e)=>setCHoix("skill")}>Mes Skills</h2>
                        <h2 className={"text-center transition-all duration-200 text-xl font-bold p-2 px-4"+` ${choix == "loisir" && "border border-primary  rounded-2xl"}`} onClick={(e)=>setCHoix("loisir")}>Mes Loisirs</h2>
                        </div>
                        {choix == "skill" && <div className="p-2">
                            
                            <div >
                                {portfolio.skills.map((skill, index)=><div className={"m-1"}>
                                    <p className="font-bold">{skill.titre}</p>
                                   
                                    <span className="text-xs">Niveau </span> <Progress className="h-4"value={skill.niveau*10}></Progress>
                                </div>)}
                            </div>
                        </div>}
                        {choix == "loisir" && <div className="p-2 flex gap-3 flex-wrap">
                            {portfolio.loisir.map((l, index)=><>
                            <p className={"text-xl m-1 border w-fit border-primary p-2 px-4  rounded-2xl "}>{l}</p>
                            </>)}
                        </div>}
                    </SheetContent>
                </Sheet>
                </div>
            </div>
           
        </section>
    </div>
}