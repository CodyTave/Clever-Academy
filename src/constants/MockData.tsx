import {
  acaIcon,
  acaPhoto,
  defaultOffre,
  diagIcon,
  diagPhoto,
  eveIcon,
  evePhoto,
} from "../assets";
export const defaultOffer = {
  title: "Offre adaptée",
  primarybg: "bg-primary-0",
  text: (
    <span>
      Sessions spécifiques qui peuvent être organisées à l’intention, des
      organismes professionnels, des collectivités locales, des administrations
      ou des entreprises. Afin de renforcer les compétences et concrétiser les
      objectifs communs.
    </span>
  ),
  photo: defaultOffre,
};

export const Offres = [
  {
    id: 1,
    icon: diagIcon,
    title: "Diagnostic compétences",
    text: `Diagnostic des compétences conjointement avec
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
    text: `Solution intégrée clé en main d'Académie d'entreprise,
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
    text: `Evènement d'entreprise autour de la formation,
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

export const categories = [
  {
    id: 1,
    title:
      "Database, Business Intelligence, Big Data & Artificial Intelligence",
    image: "https://source.unsplash.com/500x400/?IT",
  },
  {
    id: 2,
    title: "Qualité, Lean, Référentiels SI & Tests",
    image: "https://source.unsplash.com/500x400/?technology",
  },
  {
    id: 3,
    title: "Langues & Bureautique",
    image: "https://source.unsplash.com/500x400/?teaching",
  },
  {
    id: 4,
    title: "Marketing digital, Photo Vidéo, CMS, UX Design",
    image: "https://source.unsplash.com/500x400/?marketing",
  },
  {
    id: 5,
    title: "Comptabilité Finance et Contrôle de Gestion",
    image: "https://source.unsplash.com/500x400/?accounting",
  },
  {
    id: 6,
    title: "ERP, Développment logiciel, Web et DEVOPS",
    image: "https://source.unsplash.com/500x400/?devops",
  },
  {
    id: 7,
    title: "Virtualisation OS, Réseaux, Télécom & Cloud",
    image: "https://source.unsplash.com/500x400/?network",
  },
  {
    id: 8,
    title: "Softskills, Leadership et Développement personnel",
    image: "https://source.unsplash.com/500x400/?skills",
  },
  {
    id: 9,
    title: "Industrie",
    image: "https://source.unsplash.com/500x400/?industry",
  },
  {
    id: 10,
    title: "Sécurité des SI & Risk",
    image: "https://source.unsplash.com/500x400/?cybersecurity",
  },
  {
    id: 11,
    title: "Hygiène Santé et Sécurite",
    image: "https://source.unsplash.com/500x400/?health",
  },
  {
    id: 12,
    title: "Management de Projet, Agilité et outils collaboratifs",
    image: "https://source.unsplash.com/500x400/?management",
  },
];
