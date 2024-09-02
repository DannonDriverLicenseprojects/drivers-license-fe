import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import ApplicationBody from "../../../components/layouts/admin/body/ApplicationBody"
import MetricsCard from "../../../components/admin/MetricsCard"


const Reissue = () => {


  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('Reissue')
  }, [])
  return (
    <ApplicationBody

      metricsCard={
        <MetricsCard
          title={"Total Reissue"}
          type={"reissue"}
          currentTotal={10293}
          prevTotal={8000}

        />
      }

      table={"table should be here"}
      chart={"chart should be here"}

    />
  )
}

export default Reissue