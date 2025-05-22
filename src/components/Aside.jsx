import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import { GrHistory } from "react-icons/gr";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { GiTrophyCup } from "react-icons/gi";
import { GoLightBulb } from "react-icons/go";
import { FaShoppingBag } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuMessageSquareWarning } from "react-icons/lu";

export default function Aside() {
  return (
    <aside className="flex flex-col max-w-60">
      <div className="flex flex-col border-b border-gray-200">
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <IoMdHome className="w-7 h-7" />
          <div>Accueil</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <SiYoutubeshorts className="w-7 h-7" />
          <div>Shorts</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <MdOutlineSubscriptions className="w-7 h-7" />
          <div>Abonnements</div>
        </div>
      </div>

      <div className="flex flex-col border-b border-gray-200">
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <LuCircleUser className="w-7 h-7" />
          <div>Vous</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <GrHistory className="w-7 h-7" />
          <div>Historique</div>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 border-b border-gray-200">
        <p>
          Connectez-vous à YouTube pour cliquer sur "J'aime", ajouter un
          commentaire et vous abonner.
        </p>
        <div className="flex gap-2 items-center text-blue-600 border border-gray-200 rounded-full w-fit px-3 py-2 hover:bg-blue-50 hover:border-transparent">
          <div>
            <LuCircleUser className="w-6 h-6 font-light" />
          </div>
          <div className="font-semibold">Se connecter</div>
        </div>
      </div>

      <div className="flex flex-col border-b border-gray-200">
        <div className="font-semibold text-lg">Explorer</div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <FaFireFlameCurved className="w-7 h-7" />
          <div>Tendances</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <IoMusicalNotesOutline className="w-7 h-7" />
          <div>Music</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <BiMoviePlay className="w-7 h-7" />
          <div>Films et séries TV</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <CgMediaLive className="w-7 h-7" />
          <div>Direct</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <MdOutlineVideogameAsset className="w-7 h-7" />
          <div>Jeux vidéo</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <ImNewspaper className="w-7 h-7" />
          <div>Actualités</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <GiTrophyCup className="w-7 h-7" />
          <div>Sport</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <GoLightBulb className="w-7 h-7" />
          <div>Savoirs & Cultures</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <FaShoppingBag className="w-7 h-7" />
          <div>Mode et beauté</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <FaPodcast className="w-7 h-7" />
          <div>Podcasts</div>
        </div>
      </div>

      <div className="flex flex-col border-b border-gray-200">
        <div className="font-semibold text-lg">Autres contenus YouTube</div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <IoLogoYoutube className="w-7 h-7 text-red-500" />
          <div>Youtube Prenium</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <SiYoutubemusic className="w-7 h-7 text-red-500" />
          <div>Youtube Music</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <SiYoutubekids className="w-7 h-7 text-red-500" />
          <div>Youtube Kids</div>
        </div>
      </div>

      <div className="flex flex-col border-b border-gray-200">
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <CiSettings className="w-7 h-7" />
          <div>Paramètres</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <CiFlag1 className="w-7 h-7" />
          <div>Historique des signalements</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <IoMdHelpCircleOutline className="w-7 h-7" />
          <div>Aide</div>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 hover:rounded-lg p-2 w-fit pr-16 hover:font-semibold">
          <LuMessageSquareWarning className="w-7 h-7" />
          <div>Envoyer des commentaires</div>
        </div>
      </div>

      <footer>
        <ul className=" text-sm font-medium text-gray-600">
          <li>Présentation</li>
          <li>Presse</li>
          <li>Droits d'auteur</li>
          <li>Nous contacter</li>
          <li>Créateurs</li>
          <li>Publicité</li>
          <li>Développeurs</li>
          <li>Résilier vos abonnements</li>
          <li>Conditions d'utilisation</li>
          <li>Confidentialité</li>
          <li>Règles et sécurité</li>
          <li>Premiers pas sur YouTube</li>
          <li>Tester de nouvelles fonctionnalités</li>
        </ul>
        <p>2025 Google LLC</p>
      </footer>
    </aside>
  );
}
