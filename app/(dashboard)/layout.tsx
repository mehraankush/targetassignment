import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";


const DashboardLayout = async({children}:{children:React.ReactNode})=>{
    
     return (
      <div className="h-full relative bg-[#F5F5F5]">
          <div className="hidden h-full md:flex md:flex-col 
              md:fixed md:w-72 md:inset-y-0 bg-[#F5F5F5]">
             <SideBar/>
          </div>
          <main className="md:pl-72">
             <Navbar/>
             {children}
          </main>
      </div>
     )
}

export default DashboardLayout;