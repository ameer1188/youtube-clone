import React from "react"

const videoData = [
  {
    title: "40 Brutal Truths I Wish I Knew in My 20s About Coding",
    channel: "Web Development",
    views: "7.2k views",
    timeAgo: "13:35",
    overlay: "You are not dumb",
    thumbnail: "https://i.ytimg.com/vi/BAmkE2Gj1ku/hqdefault.jpg"
  },
  {
    title: "Learn JavaScript in 1 Hour",
    channel: "Code Master",
    views: "1.5M views",
    timeAgo: "2 weeks ago",
    duration: "60:00",
    overlay: "Start Here",
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg"
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

export default function Content() {
  return (
    <div className="content">
      {videoData.map((video, index) => (
        <div className="card" key={index}>
          <img src={video.thumbnail} alt="Thumbnail" />
          <h4>{video.title}</h4>
          <p>{video.channel}</p>
          <p>{video.views}</p>
          <p>{video.timeAgo || video.duration}</p>
          <span>{video.overlay}</span>
        </div>
      ))}
    </div>
  )
}
