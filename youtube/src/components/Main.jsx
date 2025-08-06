import SideBar from "./sidebar"
import Filterbar from "./Filterbar"
import Content from "./Content"
export default function Main(){
    return(
        <main>
            <SideBar />
            <Filterbar />
            <Content />
        </main>
    )
}