import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PageNotFound from "./PageNotFound"
import Template1 from "./templates/template1/template1"

export default function Portfolio() {
    const {lien_portfolio} = useParams()
    const [state, setState] = useState(false)
    const [portfolio, setPortfolio] = useState(null)
    const listeTemplate = [
        <Template1 portfolio={portfolio}/>
    ]
    useEffect( () => {
       fetch(`http://${window.location.hostname}:8008/${lien_portfolio}`)
      .then(res=>res.json())
      .then(res=>{
        if (res.detail){
            console.log(true)
            setState(true)
        }else{
            setPortfolio(res)
            console.log(res)
        }
      })
      .catch(err=>console.error(err))
    }, [])
    
    return <>
    {!state ? (portfolio != null ? listeTemplate[portfolio.template] : <div>wait</div> ): <PageNotFound/>}
    </>
}