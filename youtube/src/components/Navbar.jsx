import Filterbar from "./Filterbar";
export default function Nav(props) {
  return (
    <nav className="w-screen grid grid-cols-3 items-center bg-neutral-900 text-white px-4 py-2">
      {/* left */}
      <div className="flex items-center space-x-2">
        <button className="w-auto px-4 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
	          <path fill="#fbfbfb" d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z"></path>
          </svg>
        </button>
        <button className="px-2 items-center justify-center">
          <img 
          className="w-auto"
          src="./logos_youtube.svg" 
          alt="youtube logo" />
        </button>
      </div>

      {/* center */}
      <div className="flex items-center space-x-2">
        <input className="w-100 h-10 bg-transparent border border-neutral-700 focus:outline-none px-4 py-2 rounded-l-full text-left leading-none mr-0"
        type="text"
        placeholder="Search" />
        <button className="h-10 w-15 items-center justify-center bg-neutral-800 border border-neutral-700 px-4 py-2 rounded-r-full hover:bg-neutral-700">
          <svg xmlns="http://www.w3.org/2000/svg" width={23.04} height={24} viewBox="0 0 24 25">
	          <path fill="#fbfbfb" fillRule="evenodd" d="M11.25 2.75C6.142 2.75 2 6.89 2 11.998s4.142 9.248 9.25 9.248a9.2 9.2 0 0 0 5.987-2.198l3.481 3.48a.75.75 0 1 0 1.06-1.06l-3.48-3.48a9.2 9.2 0 0 0 2.202-5.99c0-5.108-4.142-9.248-9.25-9.248M3.5 11.998a7.75 7.75 0 0 1 7.75-7.748a7.749 7.749 0 1 1 0 15.496a7.75 7.75 0 0 1-7.75-7.748" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>

      {/* right */} 
      <div className="flex items-center justify-end mr-8 space-x-4">
        <button
        className="bg-neutral-800 justify-center hover:bg-neutral-700  py-2 px-2 items-center  rounded-4xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	          <path fill="#fbfbfb" d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21z"></path>
          </svg>
        </button>
        <button
        className="flex w-30 items-center justify-center py-2 px-2 gap-2 font-bold  bg-neutral-800 rounded-3xl hover:bg-neutral-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	          <path fill="none" stroke="#fbfbfb" strokeLinecap="round" d="M12 3.5v17m8.5-8.5h-17" strokeWidth={1}></path>
          </svg>
          <span className="">Create</span>
        </button>
        <button className="relative hover:bg-neutral-700 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="#fbfbfb"
              d="M12 4.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5v1.53c-2.25.25-4 2.15-4 4.47v5.91L5.41 18h12.18L16 16.41V10.5c0-2.32-1.75-4.22-4-4.47zM11.5 3A1.5 1.5 0 0 1 13 4.5v.71c2.31.65 4 2.79 4 5.29V16l3 3H3l3-3v-5.5C6 8 7.69 5.86 10 5.21V4.5A1.5 1.5 0 0 1 11.5 3m0 19a2.5 2.5 0 0 1-2.45-2h1.04a1.495 1.495 0 0 0 2.82 0h1.04a2.5 2.5 0 0 1-2.45 2"
            />
          </svg>
          <span
            className="flex items-center justify-center absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 px-2 py-0.5 rounded-full"
          >
            9+
          </span>
        </button>
        <button className="mx-2 w-8 h-8 rounded-full overflow-hidden">
          <img 
          className="w-full h-full object-fit " 
          src={props.image.src} 
          alt={props.image.alt} />
        </button>


      </div>
    </nav>
  );
}
