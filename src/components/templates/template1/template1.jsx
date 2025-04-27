import {useEffect, useState} from "react";
import {FaHome, FaPhone, FaUser} from "react-icons/fa";
import {GiSkills} from "react-icons/gi";

export default function Template1({portfolio}) {
	const actual_year = new Date()
	return <>
		<div className="bg-template-1 min-h-[100vh] w-full">
			<header className="flex justify-between p-2 border-b bg-template-3/50 backdrop-blur-xl text-template-1 sticky top-0 z-20">
				<span className=" navlink font-bold">
					{
					portfolio.firstname
				}
					{
					portfolio.lastname
				}</span>
				<nav className="flex items-center gap-2">
					<a href="#home" className="navlink"><FaHome/></a>
					<a href="#aboutme" className="navlink"><FaUser/></a>
					<a href="#skills" className="navlink"><GiSkills/></a>
					<a href="#contact" className="navlink"><FaPhone/></a>
				</nav>
			</header>
			<section id="home" className="flex flex-col md:flex-row md:items-center md:justify-around">
				<div className="p-2 flex flex-col lg:max-w-[500px] mx-auto">
					<h1 className="text-2xl text-center text-white  font-bold p-1">Bienvenue sur mon portfolio</h1>
					<p className="p-2 m-5 backdrop-blur-xl text-justify rounded  text-white  ">
						{
						portfolio.lettre_introduction
					} </p>
					<a href="#aboutme" className="mx-auto w-fit bg-template-3 p-2 px-5 rounded text-white hover:text-template-4 hover:bg-template-1 hover:border hover:border-template-4 transition-all duration-100 box-border">Voir Plus</a>
				</div>
				<img className="w-[50%] lg:max-w-[500px] p-5 rounded-4xl mx-auto "
					src={
						`https://portfolioapi-d2ua.onrender.com/portfolio/photo/${
							portfolio.id
						}`
					}
					alt="image de couverture"/>
			</section>
			<section id="aboutme" className="p-5 flex flex-col items-center md:flex-row md:flex-wrap justify-center gap-5">
                <div className="presentation flex flex-col p-2 text-white backdrop-blur-2xl bg-template-4/25 m-1 w-[300px] md:min-h-[300px]">
                    <h2 className="text-2xl font-bold text-center text-white m-2 w-full">A propos de moi</h2>
                    <span>Nom: {portfolio.lastname}</span>
                    <span>Prenom: {portfolio.firstname}</span>
                    <span>Age: {portfolio.age}</span>
                    <span>Domaine: {portfolio.domaine}</span>
                    <span>Titre: {portfolio.titre}</span>
                </div>
                <div className="loisir flex flex-col p-2 text-white backdrop-blur-2xl bg-template-4/25 m-1 w-[300px] md:min-h-[300px]">
                    <h2 className="text-2xl font-bold text-center text-white m-2 w-full">Mes Loisirs</h2>
                    <ul>
                    {portfolio.loisir.map(loisir=><li key={loisir}> {loisir} </li>)}
                    </ul>
                </div>
                <div className="xp flex flex-col p-2 text-white backdrop-blur-2xl bg-template-4/25 m-1 w-[300px] md:min-h-[300px]">
                    <h2 className="text-2xl font-bold text-center text-white m-2 w-full">Mes éxperiences</h2> 
                    <div>
                    {portfolio.experience_professionnelle.map(xp=><div key={xp.titre}> <p>Titre:{xp.titre}</p><p>Date: {xp.annee}</p><p>Lieu: {xp.entreprise} </p> </div>)}
                    </div>
                </div>
                <div className="parcours flex flex-col p-2 text-white backdrop-blur-2xl bg-template-4/25 m-1 w-[300px] md:min-h-[300px]">
                    <h2 className="text-2xl font-bold text-center text-white m-2 w-full">Mon parcours</h2>
                    <div>
                        {portfolio.parcours.map(parcour=><div key={parcour.titre}><p> Diplôme: {parcour.titre} </p> <p>Année: {parcour.annee} </p><p>Etablissement: {parcour.etablissement} </p>  </div> )}
                    </div>
                </div>
            </section>
            <section id="skills" className="flex flex-col items-center p-5">
                <h2 className="text-white font-bold text-2xl m-5">Mes skills</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    {portfolio.skills.map(skill=><div key={skill.titre} className="p-2 text-white backdrop-blur-2xl bg-template-4/25" > <p>{skill.titre}</p> <p>Niveau: {skill.niveau}/5</p> </div> )}
                    {portfolio.langue.map(skill=><div className="p-2 text-white backdrop-blur-2xl bg-template-4/25" key={skill.titre}> <p>{skill.titre}</p> <p>Niveau: {skill.niveau}/5</p> </div> )}
                </div>
            </section>
            <section id="contact" className="m-5 text-white">
                <h2 className="font-bold text-2xl text-white">Contacts</h2>
                <div>
                    <p>Email: {portfolio.email}</p>
                    <p>Phone: {portfolio.phone}</p>
                    <p>Address: {portfolio.adress}</p>
                    <p>Facebook: {portfolio.facebook}</p>
                    <p>LinkedIn: {portfolio.linkedin}</p>
                </div>
            </section>
			<footer className=" p-2 flex justify-between w-full text-template-4  bg-template-3/50 backdrop-blur-xl ">
				<span className="navlink">Copyrigth © {
					actual_year.getFullYear()
				}</span>
				<a href="" className="navlink">MyPortFolio</a>
			</footer>
		</div>
	</>
}
