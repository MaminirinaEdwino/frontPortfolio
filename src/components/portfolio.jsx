import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Template1 from "./templates/template1/template1"
import DefaultPage from "./DefaultPage"
import PageNotFound from "./PageNotFound"
import Template2 from "./templates/template2/template2"
import Template3 from "./templates/template3"
import Template4 from "./templates/template4"
import Template5 from "./templates/template5"
import Template6 from "./templates/template6"
import Template7 from "./templates/template7"

export default function Portfolio() {
    const { lien_portfolio } = useParams()
    const [state, setState] = useState(0)

    async function fetchTemplate(lien) {
        await fetch(`http://${window.location.hostname}:1627/portfolio/template/${lien}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.detail) {
                    console.log("result")
                    setState(-1)
                } else {
                    setState(res)
                }
            })
            .catch(err => console.error(err))
            
        }
    
    useEffect(() => {
        fetchTemplate(lien_portfolio)
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
        case 1:
            return <Template2 lien_portfolio={lien}/>
        case 2:
            return <Template3 lien_portfolio={lien}/>
        case 3:
            return <Template4 lien_portfolio={lien}/>
        case 4:
            return <Template5 lien_portfolio={lien}/>
        case 5:
            return <Template6 lien_portfolio={lien}/>
        
        case 6:
            return <Template7 lien_portfolio={lien}/>
        
        default:
            return <PageNotFound/>
    }
}
