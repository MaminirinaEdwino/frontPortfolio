import { useState } from "react"

export default function Parcours2({professionnel, education}) {
    const [choix, setChoix] = useState("professionnel")
    return <section className="flex flex-col p-3 m-1 justify-center items-center min-h-[50vh]">
        <h2 className="m-5 text-3xl font-bold">Mon parcours</h2>
        <div>
            <button onClick={(e)=>setChoix("education")} className={"p-2 px-4   rounded-md m-1 "+ (choix =="education" && "text-white bg-c-3")}>Mon Educatif</button>
            <button onClick={(e)=>{setChoix("professionnel")}} className={"p-2 px-4 rounded-md m-1 "+ (choix=="professionnel" && "bg-c-3 text-c-1")}>Professionnel</button>
        </div>
        {choix === "professionnel" && <div id="professionnel" className="flex gap-1">
            {professionnel.map((parcours, index)=><div className="w-56 text-center">
                <h4 className="text-2xl">{parcours["titre"]}</h4>
                <h5>{parcours['entreprise']}</h5>
                <h5>{parcours['annee']}</h5>
            </div>)}
        </div>}
        {choix === "education" && <div id="educatif" className="flex gap-1 text-center">
        {education.map((parcours, index)=><div className="p-2 w-52">
                <h4 className="text-2xl">{parcours["titre"]}</h4>
                <h5>{parcours['etablissement']}</h5>
                <h5>{parcours['annee']}</h5>
            </div>)}
        </div>}
    </section>
}