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
                <div>
                    <button className="notification-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.777a5.15 5.15 0 0 0 4.5 5.199A5.006 5.006 0 0 0 21 25v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Zm8-3H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .293.707L27 20.414Z"/></svg>
                        <span>9+</span>
                    </button>
                </div>
                
            </nav>
        </header>
    )
}