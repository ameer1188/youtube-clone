
export default function Card(props){
  return (
    <div class="card">
      <div class="thumbnail">
        <img src={props.thumbnail}/>
      </div>
      <div class="video-info">
        <div class="text-info">
          <img src={props.channelAvatar} alt="" />
          <h3 class="video-title">{props.title}</h3>
          <p class="channel-name">{props.channel}</p>
          <p class="views-date">{props.views}</p>
        </div>
      </div>
    </div>
  )
}









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


