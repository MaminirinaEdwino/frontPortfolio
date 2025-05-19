import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Template1 from "./templates/template1/template1"
import DefaultPage from "./DefaultPage"
import PageNotFound from "./PageNotFound"

export default function Portfolio() {
    const { lien_portfolio } = useParams()
    const [state, setState] = useState(0)
    const [portfolio, setPortfolio] = useState(null)
    const listeTemplate = [
        <Template1 lien={lien_portfolio}/>
    ]
    async function fetchTemplate(lien) {
        await fetch(`http://${window.location.hostname}:1627/portfolio/template/${lien}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.detail) {
        
                } else {
                    setState(res)
                }
            })
            .catch(err => console.error(err))
            
        }
    
    useEffect(() => {
        console.log(lien_portfolio)
    }, [])
    return <>
    {recupererTemplate(state, lien_portfolio)}
    </>
}



function recupererTemplate(template, lien){
    console.log(template)
    switch(template){
        case 0:
            return <Template1 lien_portfolio={lien}/>
        default:
            return <DefaultPage/>
    }
}
