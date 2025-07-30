export default function Nav(){
    return(
        <header>
            <nav>
                {/* sidebar */}
                <div className="sidebar">
                    <img className="sideBarLogo" src="/sideMenu.svg" alt="side menu bar three line" />
                </div>
                <div className="youtube-logo">
                    <img src="/logos_youtube.svg" alt="youtube logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" className="search-input" />
                    <button className="search-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="#b0b0b0" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"/></svg>
                    </button>
                </div>
                <div>
                    <button className="mic-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21z"/></svg>
                    </button>
                </div>
                <div>
                    <button className="create-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#b0b0b0" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"/></svg>
                        <span>Create</span>
                    </button>
                </div>
            </nav>
        </header>
    )
}