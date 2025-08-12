import SideBar from "./sidebar"
import MainContent from "./MainContetn"
import Nav from "./Navbar"
export default function Main(){
    return(
        <main className="main-page">
            <Nav />
            <SideBar />
            <MainContent />
        </main>
    )
}