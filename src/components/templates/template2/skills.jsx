import { useState } from "react"

export default function Skills2({skills, lang, loisires}) {
    const [choix, setChoix] = useState("skills")
    return <section className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold ">Mes Skills, Langue et Loisires</h1>
        <div className="">
            <button className={"border-2 p-2 px-4 m-1 rounded-md "+(choix==="skills" && "bg-c-3 text-white")} onClick={(e=>setChoix("skills"))}>Skills</button>
            <button className={"border-2 p-2 px-4 m-1 rounded-md "+(choix==="lang" && "bg-c-3 text-white")} onClick={(e=>setChoix("lang"))}>Langues</button>
            <button className={"border-2 p-2 px-4 m-1 rounded-md "+(choix==="loisires" && "bg-c-3 text-white")} onClick={(e=>setChoix("loisires")) }>Loisires</button>
        </div>
       {
        choix === "skills" && <div className="flex flex-wrap gap-3 p-2">
            {skills.map((skill, index)=><div className="border w-40 p-2 text-center rounded-md">
                <h2 className="text-xl font-bold">{skill["titre"]}</h2>
                <span className="font-thin">Niveau: {skill["niveau"]}</span>
            </div>)}
        </div>
       }
       {choix === "lang" && <div className="flex flex-wrap gap-3 p-2">
            {lang.map((lan, index)=><div className="border w-40 p-2 text-center rounded-md">
                <h2 className="text-xl font-bold">{lan["titre"]}</h2>
                <h4 className="font-thin">Niveau: {lan["niveau"]}</h4>
            </div>)}
       </div> }
       { choix ==="loisires" && <div className="flex flex-col gap-3 p-3">
            {loisires.map((loisir, index)=><div className="font-bold">
                {loisir}
            </div>)}
        </div>}
    </section>   
}