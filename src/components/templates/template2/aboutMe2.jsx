export default function AboutMe2({introduction, domaine}) {
    return <section className="">
        <div className="p-4 text-c-3 ">
        <h2 className="text-2xl font-bold p-2 text-c-3">A propos de Moi </h2>
        <p className="text-justify">
            {introduction}
        </p>
        </div>
        <div className="text-xl font-bold text-c-3 p-4">Mon domaine : {domaine}</div>
    </section>
}