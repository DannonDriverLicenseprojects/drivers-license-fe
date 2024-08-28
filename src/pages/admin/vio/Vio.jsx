import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"




const Vio = () => {


  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('VIO Screen')
  }, [])

  return (
    <div>Vio</div>
  )
}

export default Vio