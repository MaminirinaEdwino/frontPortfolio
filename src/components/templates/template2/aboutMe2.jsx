export default function AboutMe2({introduction, domaine}) {
    return <section className="md:w-1/2 md:mx-auto">
        <div className="p-4 text-c-3 ">
        <h2 className="text-2xl font-bold p-2 text-c-3">A propos de Moi </h2>
        <div className="text-xl font-bold text-c-3 p-4">Mon domaine : {domaine}</div>
        <p className="text-justify">
            {introduction}
        </p>
        </div>
        
    </section>
}