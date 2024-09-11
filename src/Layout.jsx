import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Card from "./components/Card"




function Layout() {

  return (
    <>
        <Navbar />
        <Card title = "hello world" />
        <Outlet />
    </>
  )
}

export default Layout
