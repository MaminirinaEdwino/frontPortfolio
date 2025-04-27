import { FaCopyright } from "react-icons/fa";
import HeaderComponents from "./header";
import { MdLabelImportant } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function DefaultPage() {

    return <>
    <HeaderComponents/>
    <section className="flex flex-col justify-center items-center h-[100vh] text-c-4 max-w-[360px] mx-auto box-border p-5">
        <h1 className="text-center p-3 text-4xl ">Bievenue sur <span className="text-5xl font-bold">MyPortFolio</span></h1>
        <p className="text-md font-light text-center p-3">La platforme qui facilite votre vie et la création de vos portfolio selon vos besions</p>

        
        
    </section>
    <footer className="flex fixed bottom-0 items-center gap-2 justify-center h-10 w-[100vw] bg-c-4 text-c-2 ">
        MyPortFolio <FaCopyright/> Copyright 2025
    </footer>
    </>
}