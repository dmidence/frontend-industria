import React,{ReactElement, useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminNavbar from '../../components/Navbar/AdminNavbar'

export default function MasterAdminCursos() {
    let initialWidth = 80;
    const [fullView, setfullView] = useState<boolean>(false);
    const [width, setwidth] = useState<number>(initialWidth);
    const handleWidth = ()=>{
        if(width<100){
            setwidth(100)
            setfullView(true)
        }else{
            setwidth(initialWidth)
            setfullView(false)
        }
    }
  return (
    <div className="d-flex">
      <Sidebar width={initialWidth} fullView={fullView}></Sidebar>
      <div style={{ width: `${width}%`, transition:"width .3s" }} className="bg-gray m-0 p-0">
        <AdminNavbar handleWidth={handleWidth}></AdminNavbar>
        <div className="p-3">
          <div className="bg-white p-3" style={{minHeight:"85vh"}}>Cursos</div>
        </div>
      </div>
    </div>
  )
}