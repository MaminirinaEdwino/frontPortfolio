import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Template1 from "./templates/template1/template1"
import DefaultPage from "./DefaultPage"

export default function Portfolio() {
    const {lien_portfolio} = useParams()
    const [state, setState] = useState(false)
    const [portfolio, setPortfolio] = useState(null)
    const listeTemplate = [
        <Template1 portfolio={portfolio}/>
    ]
    useEffect( () => {
       fetch(`https://portfolioapi-d2ua.onrender.com/${lien_portfolio}`)
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
    {!state ? (portfolio != null && listeTemplate[portfolio.template]  ): <PageNotFound/>}
    </>
}