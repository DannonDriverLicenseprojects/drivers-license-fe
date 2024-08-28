

import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"






const Dssp = () => {
  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('DSSP Request')
  }, [])

  return (
    <div>Dssp</div>
  )
}

export default Dssp