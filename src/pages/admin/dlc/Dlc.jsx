import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"




const Dlc = () => {

  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('DLC Records')
  }, [])

  return (
    <div>Dlc</div>
  )
}

export default Dlc