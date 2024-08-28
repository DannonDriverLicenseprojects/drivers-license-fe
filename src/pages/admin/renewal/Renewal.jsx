import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

const Renewal = () => {



  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('Renewal')
  }, [])


  return (
    <div>Renewal</div>
  )
}

export default Renewal