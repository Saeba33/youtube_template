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

export const sidebarData = {
  mainSection: [
    {
      id: "home",
      icon: IoMdHome,
      title: "Accueil",
      isActive: true,
    },
    {
      id: "shorts",
      icon: SiYoutubeshorts,
      title: "Shorts",
    },
    {
      id: "subscriptions",
      icon: MdOutlineSubscriptions,
      title: "Abonnements",
    },
  ],

  userSection: [
    {
      id: "you",
      icon: LuCircleUser,
      title: "Vous",
    },
    {
      id: "history",
      icon: GrHistory,
      title: "Historique",
    },
  ],

  explorerSection: {
    title: "Explorer",
    items: [
      {
        id: "trending",
        icon: FaFireFlameCurved,
        title: "Tendances",
      },
      {
        id: "music",
        icon: IoMusicalNotesOutline,
        title: "Music",
      },
      {
        id: "movies",
        icon: BiMoviePlay,
        title: "Films et séries TV",
      },
      {
        id: "live",
        icon: CgMediaLive,
        title: "Direct",
      },
      {
        id: "gaming",
        icon: MdOutlineVideogameAsset,
        title: "Jeux vidéo",
      },
      {
        id: "news",
        icon: ImNewspaper,
        title: "Actualités",
      },
      {
        id: "sports",
        icon: GiTrophyCup,
        title: "Sport",
      },
      {
        id: "learning",
        icon: GoLightBulb,
        title: "Savoirs & Cultures",
      },
      {
        id: "fashion",
        icon: FaShoppingBag,
        title: "Mode et beauté",
      },
      {
        id: "podcasts",
        icon: FaPodcast,
        title: "Podcasts",
      },
    ],
  },

  youtubeSection: {
    title: "Autres contenus YouTube",
    items: [
      {
        id: "premium",
        icon: IoLogoYoutube,
        title: "YouTube Premium",
        textColor: "text-red-500",
      },
      {
        id: "music-service",
        icon: SiYoutubemusic,
        title: "YouTube Music",
        textColor: "text-red-500",
      },
      {
        id: "kids",
        icon: SiYoutubekids,
        title: "YouTube Kids",
        textColor: "text-red-500",
      },
    ],
  },

  settingsSection: [
    {
      id: "settings",
      icon: CiSettings,
      title: "Paramètres",
    },
    {
      id: "report-history",
      icon: CiFlag1,
      title: "Historique des signalements",
    },
    {
      id: "help",
      icon: IoMdHelpCircleOutline,
      title: "Aide",
    },
    {
      id: "feedback",
      icon: LuMessageSquareWarning,
      title: "Envoyer des commentaires",
    },
  ],

  footerLinks: [
    "Présentation",
    "Presse",
    "Droits d'auteur",
    "Nous contacter",
    "Créateurs",
    "Publicité",
    "Développeurs",
    "Résilier vos abonnements",
    "Conditions d'utilisation",
    "Confidentialité",
    "Règles et sécurité",
    "Premiers pas sur YouTube",
    "Tester de nouvelles fonctionnalités",
  ],
};
