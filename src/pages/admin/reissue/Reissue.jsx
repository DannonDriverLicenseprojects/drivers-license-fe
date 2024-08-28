import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"


const Reissue = () => {


  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('Reissue')
  }, [])
  return (
    <div>Reissue</div>
  )
}

export default Reissue