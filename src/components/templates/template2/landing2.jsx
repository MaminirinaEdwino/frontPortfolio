import { LiaFacebook, LiaGithub, LiaLinkedin } from "react-icons/lia";

export default function LandingPage2({nom, prenom, domaine, id}) {
    return <section className="flex flex-col md:flex-row p-3 ">
        <div className="bg-white p-2">
        <div className="flex text-2xl text-c-3">
                <LiaLinkedin/>
                <LiaFacebook/>
            </div>
            <h2 className="font-bold text-3xl text-c-3 ">{nom} {prenom}</h2>
            <p className="my-4 text-xl text-c-3">{domaine}</p>
            
        </div>
        <div>
            <img src={`http://${window.location.hostname}:1627/portfolio/photo/${id}`} alt={`${nom} ${prenom}`} className="rounded-full border-5 shadow-2xl border-white w-[80%] mx-auto my-auto mb-12"/>
            <div className="flex gap-2 my-3 justify-center ">
            <button className="p-2 px-4 bg-c-3/50 rounded-md  text-white ">Contact Me</button>
            <button className="border border-c-3 p-2 px-4 rounded-md text-c-3">View My skills</button>
            </div>
        </div>
    </section>
}