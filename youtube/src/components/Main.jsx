import SideBar from "./sidebar"
import Filterbar from "./Filterbar"
import MainContent from "./MainContetn"
export default function Main(){
    return(
        <main>
            <SideBar />
            <Filterbar />
            <MainContent />
        </main>
    )
}