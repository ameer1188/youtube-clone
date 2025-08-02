import SideBar from "./sidebar"
import Filterbar from "./Filterbar"
export default function Main(){
    return(
        <main>
            <SideBar />
            <Filterbar />
            <div className="content"></div>
        </main>
    )
}