import { BsThreeDotsVertical } from "react-icons/bs";
import { PiCheckCircleFill } from "react-icons/pi";
import { GiVibratingBall } from "react-icons/gi";

export default function VideoCard({ ...video }) {
  return (
    <div className="flex flex-col cursor-pointer group">
      {/* Miniature video */}
      <div className="relative aspect-video mb-3 rounded-xl bg-gray-50">
        <img
          src={video.img}
          alt={video.title}
          className="w-full object-cover"
        />
        {/* Live */}
        <div className="absolute bottom-2 right-2">
          {video.live ? (
            <div className="flex gap-1 items-center bg-red-600 text-white px-2 py-1 rounded">
              <GiVibratingBall className="rotate-45"/>
              <span className=" text-xs font-semibold">EN DIRECT</span>
            </div>
          ) : (
            <span className="bg-black/60 text-white px-2 py-1 rounded text-xs font-semibold focus:">
              {video.duration}
            </span>
          )}
        </div>
      </div>
      {/* Informations de la vidéo */}
      <div className="flex">
        {/* Avatar */}
        <div className="flex-shrink-0 rounded-full w-8 h-8 mr-3 ">
          <img className="rounded-full w-8 h-8 object-cover" src={video.thumbnail} alt={video.title} />
        </div>
        {/* Détails de la vidéo */}
        <div className="flex-1 min-w-0">
          {/* Titre */}
          <h3 className="font-medium text-gray-900 line-clamp-2 text-lg leading-5 mb-1 group-hover:text-gray-700 ">
            {video.title}
          </h3>
          {/* Nom de la chaîne */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900 ">
            <span className="text-gray-600 text-sm">{video.creator}</span>
            {video.certified && (
              <PiCheckCircleFill className="w-4 h-4 text-gray-600" />
            )}
          </div>
          {/* Vues et date */}
          {video.live ? (
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <span>{video.views} spectateurs</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <span>{video.views} vues</span>
              <span>•</span>
              <span>{video.time}</span>
            </div>
          )}
          {video.live ? (
            <div className="flex gap-1 items-center bg-red-600 text-white px-1 py-[2px] w-fit rounded-xs mt-1">
              <GiVibratingBall className="rotate-45"/>
              <span className=" text-xs font-semibold">EN DIRECT</span>
            </div>
          ) : null}
        </div>
        {/* Options */}
        <div className="">
          <button className="py-2 cursor-pointer">
            <BsThreeDotsVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
