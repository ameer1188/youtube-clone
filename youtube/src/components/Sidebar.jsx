export default function SideBar(){
    return(
        <div className="side-bar">
            <div className="sidebar-top">
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>
                    </span>Home
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M12.834 3.186a3.627 3.627 0 0 1 3.627 6.282l-.74.426a3.626 3.626 0 0 1 1.935 6.766l-7.02 4.053a3.626 3.626 0 1 1-3.627-6.28l.739-.428A3.627 3.627 0 0 1 5.814 7.24z"/>
                    <path fill="currentColor" d="M13.992 11.016L11.2 9.271c-.74-.463-1.7.07-1.7.942v3.49c0 .873.96 1.405 1.7.943l2.792-1.746a1.11 1.11 0 0 0 0-1.884"/></g></svg>
                    </span>Shorts
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 8H4V6h16zm-2-6H6v2h12zm4 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2m-6 4l-6-3.27v6.53z"/></svg>
                    </span>Subscription
                </button>
                <hr/>
            </div>
            <div className="sidebar-midle">
                <h4>you<span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"/></svg>
                    </span>
                </h4>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788s-9.968 3.756-13.788-.064a9.81 9.81 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.31 8.31 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008zm6.92 2.18a.75.75 0 0 1 .75.75v3.69l2.281 2.28a.75.75 0 1 1-1.06 1.061l-2.72-2.72V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
                    </span>History
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
                    <path fill="currentColor" d="M18.875 14.118c1.654.955 2.48 1.433 2.602 2.121a1.5 1.5 0 0 1 0 .521c-.121.69-.948 1.167-2.602 2.122s-2.48 1.432-3.138 1.193a1.5 1.5 0 0 1-.451-.26c-.536-.45-.536-1.405-.536-3.315s0-2.864.536-3.314c.134-.113.287-.2.451-.26c.657-.24 1.484.238 3.138 1.192"/></svg>
                    </span>Playlists
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/></g></svg>
                    </span>Your videos
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.514 2c-1.304.129-2.182.419-2.838 1.076c-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177c1.067-1.07 1.166-2.717 1.175-5.846"/>
                    <path d="m10.526 7l1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5c1.389-.034 2.195-.198 2.883-.796c.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758c.08.06.104.172.048.255c-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17"/></g></svg>
                    </span>Your courses
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7z"/></svg>
                    </span>Watch later
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none">
                        <path fill="currentColor" d="m15 10l-.74-.123a.75.75 0 0 0 .74.873zM4 10v-.75a.75.75 0 0 0-.75.75zm16.522 2.392l.735.147zM6 20.75h11.36v-1.5H6zm12.56-11.5H15v1.5h3.56zm-2.82.873l.806-4.835l-1.48-.247l-.806 4.836zm-.92-6.873h-.214v1.5h.213zm-3.335 1.67L8.97 8.693l1.248.832l2.515-3.773zM7.93 9.25H4v1.5h3.93zM3.25 10v8h1.5v-8zm16.807 8.54l1.2-6l-1.47-.295l-1.2 6zM8.97 8.692a1.25 1.25 0 0 1-1.04.557v1.5c.92 0 1.778-.46 2.288-1.225zm7.576-3.405A1.75 1.75 0 0 0 14.82 3.25v1.5a.25.25 0 0 1 .246.291zm2.014 5.462c.79 0 1.38.722 1.226 1.495l1.471.294A2.75 2.75 0 0 0 18.56 9.25zm-1.2 10a2.75 2.75 0 0 0 2.697-2.21l-1.47-.295a1.25 1.25 0 0 1-1.227 1.005zm-2.754-17.5a3.75 3.75 0 0 0-3.12 1.67l1.247.832a2.25 2.25 0 0 1 1.873-1.002zM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75z"/><path stroke="currentColor" stroke-width="1.5" d="M8 10v10"/></g></svg>
                    </span>Liked videos
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 13a8.98 8.98 0 0 1-3.312 6.975S32.154 11 38 11c4.312 0 6.486 2.513 7.367 3.926c.305.489.036 1.084-.511 1.263C41.862 17.167 32.666 20.252 24 24c8.666 3.748 17.862 6.833 20.856 7.811c.547.179.816.774.511 1.263C44.486 34.487 42.312 37 38 37c-5.846 0-20.312-8.975-20.312-8.975a9 9 0 1 1-10.943-.332c1.187-.969 3.139-2.262 5.505-3.693c-2.366-1.431-4.318-2.724-5.506-3.693A9 9 0 1 1 21 13m-9 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6" clip-rule="evenodd"/></svg>
                    </span>Your clip
                </button>
                <hr />
            </div>
            <div className="sidebar-bottom">
                <h4>Explore</h4>
                <button className="btn">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3"/></svg>
                    </span>Shopping
                </button>
                <button className="btn">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0V6.333L18 4v11.667M8 10.333L18 8m0 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
                    </span>Music
                </button>
                <button className="btn">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048">
                        <path fill="currentColor" d="M1920 896v832q0 40-15 75t-41 61t-61 41t-75 15H320q-40 0-75-15t-61-41t-41-61t-15-75v-507q0-37 1-67t2-59t1-60t-4-67q-2-21-6-38t-8-34t-10-32t-11-38L22 541l1738-434l124 497L713 896zM681 508l-321 80l352 176l321-80zm543 129l322-81l-352-175l-322 80zm-1046 4l61 241l282-70zm1489-379l-282 71l342 171zm125 762H256v704q0 26 19 45t45 19h1408q26 0 45-19t19-45z"/></svg>
                    </span>Movie
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M4.353 4.334a.476.476 0 0 1 .673.01a.53.53 0 0 1-.011.742A6.98 6.98 0 0 0 3 10c0 1.99.83 3.786 2.164 5.06a.53.53 0 0 1 .023.753a.475.475 0 0 1-.662.02A7.98 7.98 0 0 1 2 10c0-2.214.9-4.218 2.353-5.666m10.632.752a.53.53 0 0 1-.01-.742a.476.476 0 0 1 .672-.01A7.98 7.98 0 0 1 18 10c0 2.3-.97 4.374-2.525 5.833a.475.475 0 0 1-.662-.02a.53.53 0 0 1 .023-.752A6.98 6.98 0 0 0 17 10a6.98 6.98 0 0 0-2.015-4.915M6.132 6.09a.464.464 0 0 1 .656.016c.208.208.187.55-.018.76A4.5 4.5 0 0 0 5.5 10c0 1.29.543 2.454 1.414 3.275c.22.207.25.561.035.776a.463.463 0 0 1-.638.028A5.5 5.5 0 0 1 4.5 10a5.48 5.48 0 0 1 1.632-3.91m7.098.776c-.205-.21-.226-.552-.018-.76a.464.464 0 0 1 .656-.016A5.48 5.48 0 0 1 15.5 10a5.5 5.5 0 0 1-1.81 4.08a.463.463 0 0 1-.64-.03c-.214-.214-.184-.568.036-.775A4.5 4.5 0 0 0 14.5 10a4.5 4.5 0 0 0-1.27-3.134M10 8.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg>
                    </span>Live
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1"><path d="M18.5 9.5a.5.5 0 0 1 0-1m0 1a.5.5 0 0 0 0-1M16 11a.5.5 0 0 1 0-1m0 1a.5.5 0 0 0 0-1M6.75 7.5V12M4.5 9.75H9"/>
                    <path d="m1.5 7l5-2.5L12 7l5.5-2.5l5 2.5v5.5L12 18L1.5 12.5z"/></g></svg>
                    </span>Gaming
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V3l1.675 1.675L5.325 3L7 4.675L8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3L17 4.675L18.675 3l1.65 1.675L22 3v16q0 .825-.587 1.413T20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z"/></svg>
                    </span>News
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M11 2a3 3 0 0 0-3 3H6.5A2.5 2.5 0 0 0 4 7.5v4a4.5 4.5 0 0 0 4.25 4.493A8.01 8.01 0 0 0 15 21.938V24h-3.5A3.5 3.5 0 0 0 8 27.5v1A1.5 1.5 0 0 0 9.5 30h13a1.5 1.5 0 0 0 1.5-1.5v-1a3.5 3.5 0 0 0-3.5-3.5H17v-2.062a8.01 8.01 0 0 0 6.75-5.945A4.5 4.5 0 0 0 28 11.5v-4A2.5 2.5 0 0 0 25.5 5H24a3 3 0 0 0-3-3zm13 5h1.5a.5.5 0 0 1 .5.5v4a2.5 2.5 0 0 1-2 2.45zM8 13.95a2.5 2.5 0 0 1-2-2.45v-4a.5.5 0 0 1 .5-.5H8zM10 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9a6 6 0 0 1-12 0zm0 22.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v.5H10z"/></svg>
                    </span>Sports
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.514 2c-1.304.129-2.182.419-2.838 1.076c-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177c1.067-1.07 1.166-2.717 1.175-5.846"/>
                    <path d="m10.526 7l1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5c1.389-.034 2.195-.198 2.883-.796c.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758c.08.06.104.172.048.255c-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17"/></g></svg>
                    </span>Courses
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M214.7 209.7a2 2 0 0 0-.11-.25l-45.48-96.86l20.5-32.18a2 2 0 0 0 .11-.18a16 16 0 0 0 0-16.46c-.09-.16-.2-.32-.3-.47L168 32.7V8a8 8 0 0 0-16 0v24.42L146.74 39a24 24 0 0 1-37.48 0L104 32.42V8a8 8 0 0 0-16 0v24.7L66.58 63.3c-.1.15-.21.31-.3.47a16 16 0 0 0 0 16.46a2 2 0 0 0 .11.18l20.5 32.18l-45.48 96.86a2 2 0 0 0-.11.25A16 16 0 0 0 56 232h144a16 16 0 0 0 14.71-22.3ZM80 72l16.43-23.43l.33.42a40 40 0 0 0 62.48 0l.33-.42L176 72l-20.38 32h-55.23ZM56 216l45.07-96h53.84L200 216Z"/></svg>
                    </span>Fashion & Beauty
                </button>
                <button className="btn">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M14 12c0 .74-.4 1.38-1 1.72V21c0 .55-.45 1-1 1s-1-.45-1-1v-7.28c-.6-.35-1-.98-1-1.72c0-1.1.9-2 2-2s2 .9 2 2m-3.25-5.87c-2.27.46-4.12 2.28-4.61 4.55c-.4 1.86.07 3.62 1.08 4.94c.35.45 1.03.47 1.43.07l.07-.07c.34-.34.34-.87.06-1.25c-.68-.9-.98-2.1-.66-3.37c.35-1.42 1.52-2.57 2.95-2.88A3.99 3.99 0 0 1 16 12c0 .87-.28 1.67-.76 2.32c-.3.41-.29.97.07 1.33c.44.44 1.17.37 1.54-.14c.72-.98 1.15-2.2 1.15-3.51c0-3.72-3.39-6.65-7.25-5.87m.08-4.06c-4.53.51-8.22 4.18-8.76 8.71c-.35 2.95.59 5.67 2.32 7.7c.37.43 1.03.46 1.43.06l.05-.05c.35-.35.38-.92.05-1.3a7.97 7.97 0 0 1-1.7-7.06c.7-3.01 3.18-5.39 6.22-5.97C15.53 3.18 20 7.08 20 12c0 1.96-.72 3.76-1.9 5.16a1 1 0 0 0 .05 1.35c.42.42 1.11.39 1.49-.07A9.93 9.93 0 0 0 22 12c0-5.91-5.13-10.62-11.17-9.93"/></svg>
                    </span>Podcasts
                </button>
            </div>
        </div>
    )
}