import { RiMenuLine } from "react-icons/ri";

export default function Header2({nom, prenom}) {
    return <header className="flex justify-between p-2 sticky top-0 z-20 shadow-xl text-lg font-bold bg-white h-12 items-center">
        <span> {nom} {prenom}  </span>
        <button>
            <RiMenuLine/>
        </button>
    </header>
}