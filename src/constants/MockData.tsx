import {
  acaIcon,
  acaPhoto,
  diagIcon,
  diagPhoto,
  eveIcon,
  evePhoto,
} from "../assets";
export const Offres = [
  {
    id: 1,
    icon: diagIcon,
    title: "Diagnostic compétences",
    spoiler: `Diagnostic des compétences conjointement avec
       les entités métier et les Ressources Humaines afin d'évaluer
        la capitalisation du savoir-faire à date, ainsi que le gap
         à combler, puis accompagnement en vue de con-tribuer
          à un alignement stratégique avec la vision Corporate

        `,
    color: "bg-[#d8d9ff]",
    primarybg: "bg-secondary-0",
    primaryText: "text-secondary-0",
    width: "w-8",
    photo: diagPhoto,
  },
  {
    id: 2,
    icon: acaIcon,
    title: "académie d'entreprise",
    spoiler: `Solution intégrée clé en main d'Académie d'entreprise,
       basée sur une approche ergonomique permettant aux employés
        de s'auto-former de manière sereine sur des modules universels ou métier.
         Tailoring du bouquet de formation inhouse, pour des cursus prédéfinis.
          Statistiques d'utilisation et du retour sur investissement.`,
    color: "bg-[#ddcfff]",
    primarybg: "bg-secondary-1",
    primaryText: "text-secondary-1",
    width: "w-14",
    photo: acaPhoto,
  },
  {
    id: 3,
    icon: eveIcon,
    title: "Evènement d'entreprise",
    spoiler: `Evènement d'entreprise autour de la formation,
      de l'intégration des talents et pour favoriser le travail
      en équipe tels que les team buildings à forte valeur ajoutée.
      Campagnes de Micro-formation pour des sujets spots liés notamment
      à la santé, la sécurité informatique, l'ergonomie, la qualité
      `,
    color: "bg-[#d3f2ff]",
    primarybg: "bg-primary-0",
    primaryText: "text-primary-0",
    width: "w-8",
    photo: evePhoto,
  },
];
