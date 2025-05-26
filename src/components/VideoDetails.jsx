import { CiBookmark } from "react-icons/ci";
import { PiShareFat } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

export default function VideoDetails() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col w-full mx-5">
        <div className="w-[500px] h-[80px]">
          <img className="cover" src="../images/minia.webp" alt="miniature" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-lg font-semibold">Titre de la video</div>
          <div className="flex gap-3">
            <div className="flex-shrink-0 rounded-full w-8 h-8 ">
              <img
                className="rounded-full w-8 h-8 object-cover"
                src="../images/Itachi.webp"
                alt="minia"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-medium">Nom de la chaine</div>

              <div className="text-gray-400 text-xs">Nb abonnés</div>
            </div>
            <button className="py-2 px-5 ml-3 bg-black text-white rounded-full text-sm font-medium">
              S'abonner
            </button>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-full text-sm">
              <BiLike />
              <div className="font-medium pr-2 border-r border-gray-300">
                {" "}
                nb like
              </div>
              <BiDislike />
              <div className="font-medium"></div>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-full text-sm">
              <PiShareFat />
              <div className="font-medium">Partager</div>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-full text-sm">
              <CiBookmark />
              <div className="font-medium">Enregistrer</div>
            </div>
            <div className="bg-gray-100 rounded-full self-center w-8 h-8 flex items-center justify-center">
              <BsThreeDots />
            </div>
          </div>
          <div className="p-2 rounded-lg bg-gray-100">
            <div className="flex gap-2 font-medium">
              <div className="">nombre de vues</div>
              <div className="date">date</div>
            </div>
            <div className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              voluptas voluptatum odio dolore quasi tempora porro velit odit nam
              in, illo impedit eveniet magni soluta voluptate corrupti saepe
              ipsam quibusdam. Explicabo doloribus voluptates libero ducimus,
              adipisci veritatis minima quia necessitatibus nulla laboriosam!
              Culpa quibusdam odit temporibus odio, exercitationem maiores vitae
              architecto asperiores blanditiis alias minima non dolor dicta
              perspiciatis aperiam!
              <span className="font-medium">...afficher plus</span>
            </div>
          </div>
        </div>
        <div className="mt-5">Ajouter un display grid responsive avec des suggestions de vidéos</div>
      </div>
    </section>
  );
}
