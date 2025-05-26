import VideoCard from "../ui/VideoCard";
import { videoData } from "../data/videoData";

export default function Content() {
  return (
    <main className="min-h-screen mx-2">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {videoData.map((video) => (
          <VideoCard
            key={video.id}
            img={video.img}
            duration={video.duration}
            thumbnail={video.thumbnail}
            title={video.title}
            creator={video.creator}
            certified={video.certified}
            views={video.views}
            time={video.time}
            live={video.live}
            category={video.category}
          />
        ))}
      </div>
    </main>
  );
}
