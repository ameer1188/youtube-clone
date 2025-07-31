import SideBar from "./sidebar"
export default function Main(){
    return(
        <main>
            <SideBar />
            <div className="content"></div>
        </main>
    )
}