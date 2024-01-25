import Eesidnav from "@/components/Eesidnav"
import Dashnav from "@/components/dashnav"
import Echart from "@/components/entreprneur"


const Edashboard = () => {
  return (
    <div>
        
        <div className="flex">
            <div className="w-1/3"><Eesidnav/></div>
            <div className="w-2/3">
              <div className="">
                <div className=""><Echart/></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Edashboard