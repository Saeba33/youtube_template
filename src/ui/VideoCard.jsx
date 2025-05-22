import { BsThreeDotsVertical } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

export default function VideoCard({ video }) {
  return (
    <div className="flex flex-col cursor-pointer group">
      {/* Miniature video */}
      <div className="relative aspect-video mb-3 rounded-xl bg-blue-500">
        <img
          src={video.img}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        {/* Live */}
        <div className="absolute bottom-2 right-2">
          {video.live ? (
            <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
              🔴 EN DIRECT
            </span>
          ) : null}
        </div>
      </div>
      {/* Informations de la vidéo */}
      <div className="flex">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div> {video.thumbnail}</div>
        </div>
        {/* Détails de la vidéo */}
        <div className="flex-1 min-w-0">
          {/* Titre */}
          <h3 className="font-medium text-gray-900 line-clamp-2 text-sm leading-5 mb-1 group-hover:text-gray-700 ">
            {video.title}
          </h3>
          {/* Nom de la chaîne */}
          <div className="flex items-center gap-1 mb-1 cursor-pointer hover:text-gray-900 ">
            <span className="text-gray-600 text-sm">{video.creator}</span>
            {video.certified && (
              <MdVerified className="w-4 h-4 text-gray-600" />
            )}
          </div>
          {/* Vues et date */}
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>{video.views} vues</span>
            <span>•</span>
            <span>{video.time}</span>
          </div>
        </div>
        {/* Options */}
        <div className="">
          <button className="p-2  rounded-full hover:bg-gray-100">
            <BsThreeDotsVertical className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
