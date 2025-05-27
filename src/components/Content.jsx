import VideoCard from "../ui/VideoCard";
import { videoData } from "../data/videoData";

export default function Content() {
  return (
    <main className="min-h-screen ml-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {videoData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
}
