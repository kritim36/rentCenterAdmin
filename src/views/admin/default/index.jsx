import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "components/widget/Widget";

import { useEffect, useState } from "react";
import api from "http/ApiService";
import { ColorModeScript } from "@chakra-ui/system";

const Dashboard = () => {
  const [datas,setDatas] = useState({})
  

  useEffect(()=>{
    (
      async ()=>{
        const result = await api.getDatas('admin/misc/datas')
        console.log(result)
        setDatas(result)
      }
      
    )()
  },[])
  
  const totalOrderedUsers = datas && datas.allOrders?.map((order)=>{
    return {
      userId : order.user
    }
   })
  
   
   const uniqueTotalOrderedUsers = [...new Set(totalOrderedUsers?.map(user=>user.userId))]
   
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Orders"}
          subtitle={datas.orders}
        />
            <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Users"}
          subtitle={datas.users}
        />
            <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Products"}
          subtitle={datas.products}
        />
 
  
      </div>

      {/* Charts */}

  
    </div>
  );
};

export default Dashboard;