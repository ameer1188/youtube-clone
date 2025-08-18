import SideBar from "./sidebar"
import MainContent from "./MainContetn"
import Nav from "./Navbar"
import loginData from "../loginData"
export default function Main(){
    const user = loginData[0]
    return(
        <main className="main-page">
            <Nav
            image={user.image}
            />
            <SideBar />
            <MainContent />
        </main>
    )
}