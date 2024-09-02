import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import ApplicationBody from "../../../components/layouts/admin/body/ApplicationBody"
import MetricsCard from "../../../components/admin/MetricsCard"

const Renewal = () => {



  const { setPageName } = useOutletContext()

  useEffect(() => {
    setPageName('Renewal')
  }, [])


  return (
    <ApplicationBody

      metricsCard={
        <MetricsCard
          title={"Total Renewal"}
          type={"renewal"}
          currentTotal={89000}
          prevTotal={100000}

        />
      }

      table={"table should be here"}
      chart={"chart should be here"}

    />
  )
}

export default Renewal