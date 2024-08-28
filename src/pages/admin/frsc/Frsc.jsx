import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"




const Frsc = () => {

  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('FRSC')
  }, [])


  return (
    <div>Frsc</div>
  )
}

export default Frsc