import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const Payments = () => {

  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('Payment')
  }, [])

  return (
    <div>Payments</div>
  )
}

export default Payments