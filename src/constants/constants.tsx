import { ensei, fb, histoire, ig, linked, valeur, vision } from "../assets";

export const navLinks: Array<{
  id: string;
  title: string;
  textClr: string;
}> = [
  {
    id: "qsn",
    title: "QUI SOMMES-NOUS",
    textClr: "text-white font-semibold",
  },
  {
    id: "refs",
    title: "NOS RÉFERENCES",
    textClr: "text-white font-semibold ",
  },

  {
    id: "offre",
    title: "OFFRE INTÉGRÉE",
    textClr: "text-secondary-0 font-bold",
  },
  {
    id: "formations",
    title: "NOS FORMATION",
    textClr: "text-secondary-0 font-bold",
  },
  {
    id: "adn",
    title: "NOTRE ADN",
    textClr: "text-secondary-0 font-bold",
  },
];

export const heroContent = [
  {
    id: 1,
    title: (
      <>
        Disruptive
        <br />
        Learning
      </>
    ),
    paragraph: `Valorisez votre force de frappe Business
     via des programmes de renforcement de capacité uniques
      et une pédagogie disruptive pour briser le status quo
       et semer les graines du succès.`,
  },
  {
    id: 2,
    title: (
      <>
        Agile
        <br />
        Solutions
      </>
    ),
    paragraph: `Profitez d'une approche unique en mode open book pour
    assurer la croissance et l'optimisation pérenne de vos systèmes
    d'informations en vue de garantir la flexibilité, la qualité et la
    performance de votre entreprise.`,
  },
];

export const adn = [
  {
    id: 1,
    title: "Histoire",
    content: `Fondée par des chefs de projets provenant du secteur
     des nouvelles les technologies, des télécoms et de l'énergie
      qui opèrent dans la formation depuis plus de dix ans de manière individuelle,
       l'idée a été de structurer et standardiser le meilleur
        de notre offre pour développer une enseigne internationale
    `,
    icon: histoire,
  },
  {
    id: 2,
    title: "Vision",
    content: `Orfèvres de la formation, notre ambition est de créer de la
     valeur de maniere durable pour les entreprises. Nous construisons des
      offres sur mesure, basées sur une évaluation pragmatique des besoins de chaque client

    `,
    icon: vision,
  },
  {
    id: 3,
    title: "Valeurs",
    content: `Nous sommes avant tout proches de notre client pour lui
     apporter une vision claire, du discernement et de l'agilité.
      CLEAR, WISE, SMART. Nous construisons des offres sur mesure,
       basées sur une évaluation pragmatique des besoins de chaque entreprise
    `,
    icon: valeur,
  },
  {
    id: 4,
    title: "Enseignants",
    content: `Ils sont triés sur le volet avec rigueur et assurent 
    avec intégrité leur mission pour être le vecteur de notre vision
     pédagogique et nos valeurs. Ils justifient également d'une base
      de connaissance académique solide,
      d'une expérience pratique ainsi que des certifications en vigueur

    `,
    icon: ensei,
  },
];

export const contactInfo = {
  email: "contact@clevercouncil.com",
  phone: ["+212 520 510 215", "+212 665 141 848"],
  address: `1 Rue Abou Taour, Socrate, 4éme 
  étage N12 - Casablanca, 20370`,
  socialMedia: [
    {
      id: "facebook",
      icon: fb,
      link: "https://www.facebook.com/clevercouncil",
    },
    {
      id: "instagram",
      icon: ig,
      link: "https://www.instagram.com/clevercouncil/",
    },
    {
      id: "linkedin",
      icon: linked,
      link: "https://www.linkedin.com/company/clevercouncil",
    },
  ],
  map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13296.237779205787!2d-7.6448628!3d33.5778058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x510627aa3e56343e!2sClever%20council!5e0!3m2!1sfr!2sma!4v1653836719671!5m2!1sfr!2sma",
  location:
    "https://www.google.com/maps?ll=33.571441,-7.651677&z=14&t=m&hl=fr&gl=MA&mapclient=embed&cid=5838397579076187198",
};

export const footerLinks = [
  {
    id: "about",
    title: "Qui sommes-nous",
    subLinks: [
      { id: 1, title: "A propos", link: "" },
      { id: 2, title: "Notre ADN", link: "" },
      { id: 3, title: "Portfolio", link: "" },
      { id: 4, title: "Contact", link: "" },
    ],
  },
  {
    id: "fastaccess",
    title: "ACCÈS RAPIDE",
    subLinks: [
      { id: 1, title: "Offre intégrée", link: "" },
      { id: 2, title: "Formations", link: "" },
      { id: 3, title: "Integration SI", link: "" },
      { id: 4, title: "Transformation Digitale", link: "" },
    ],
  },
  {
    id: "offres",
    title: "Nos Offres",
    subLinks: [
      { id: 1, title: "Conseil et accompagnement", link: "" },
      { id: 2, title: "Engineering de formation", link: "" },
      { id: 3, title: "Académie d'entreprise", link: "" },
    ],
  },
];
