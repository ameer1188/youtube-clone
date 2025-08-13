import Card from "./Card"
import videoData from "./videoData"
export default function MainContent(){
    const cardElement = videoData.map((video) => {
        return <Card 
                thumbnail={video.thumbnail}
                title={video.title}
                channelName={video.channelName}
                channelAvatar={video.channelAvatar}
                views={video.views}
                uploaded={video.uploaded}
                duration={video.duration}
            />
    })
    return(
        <>
        {cardElement}
        </>
    )
}