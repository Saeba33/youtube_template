import VideoCard from "../ui/VideoCard";
import { videoData } from "../data/videoData";

export default function Content() {
  return (
    <main className="bg-red-200 min-h-screen">
        <div className="w-[500px]" >
          {videoData.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
    </main>
  );
}
