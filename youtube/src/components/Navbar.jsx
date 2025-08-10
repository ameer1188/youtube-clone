import '../main.css'
import Filterbar from "./Filterbar";
export default function Nav() {
  return (
    <header>
      <nav className="nav">
        {/* Group 1: Sidebar + Logo */}
        <div className="group-1">
          <div className="sidebar-toggle">
            <img
              className="side-bar-logo"
              src="/sideMenu.svg"
              alt="side menu"
            />
          </div>
          <div className="youtube-logo">
            <img src="/logos_youtube.svg" alt="YouTube logo" />
          </div>
        </div>

        {/* Group 2: Search bar */}
        <div className="group-2">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              aria-label="Search"
            />
            <button className="search-btn" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#b0b0b0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
                />
              </svg>
            </button>
          </div>
          <div>
            <button className="mic-btn" aria-label="Voice Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Group 3: Create, Notification, Profile */}
        <div className="group-3">
          <div>
            <button className="create-btn" aria-label="Create">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#b0b0b0"
                  d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"
                />
              </svg>
              <span>Create</span>
            </button>
          </div>
          <div>
            <button className="notification-btn" aria-label="Notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.777a5.15 5.15 0 0 0 4.5 5.199A5.006 5.006 0 0 0 21 25v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Zm8-3H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .293.707L27 20.414Z"
                />
              </svg>
              <span>9+</span>
            </button>
          </div>
          <div>
            <button className="profile" aria-label="Profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Filterbar className="filterbar" />
    </header>
  );
}
