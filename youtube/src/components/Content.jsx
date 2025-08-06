import React from "react"

const videoData= [
    {
        title: "40 Bruatal Truth i wish I knew in my 20s about coding",
        channel:"Web Development",
        views:"7.2k views",
        timeAge:"13:35",
        overlay:"you are not dumb",
        thumbnail:"https://i,ytimg.com/vi/BAmkE2Gj1ku/hqdefault.jpg"
    },
    {
        title: "Learn JavaScript in 1 Hour",
        channel: "Code Master",
        views: "1.5M views",
        timeAgo: "2 weeks ago",
        duration: "60:00",
        overlay: "Start Here",
        thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg"
    }
]

export default function Content(){
    return(
        <>
        <div className="card">
            <img src="{videoData.thumbnail}" alt="Thumbnail" />
        </div>
        </>
    )
}