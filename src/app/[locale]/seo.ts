import {
  addressCountry,
  addressLocality,
  CEO,
  email,
  facebook,
  fax,
  foundingDate,
  geoLocation,
  instagram,
  metaData,
  phone,
  streetAddress,
  telegram,
  whatsApp,
} from "@/lib/contents";
import { Metadata } from "next";
import { Organization, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
  openGraph: {
    type: "website",
    url: metaData.url,
    title: metaData.title,
    description: metaData.description,
    siteName: metaData.title,
    images: [
      {
        url: `${metaData.url}/assets/images/logo-hd.png`,
        alt: "Company logo",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: metaData.url,
    title: metaData.title,
    description: metaData.description,
    creator: metaData.title,
    images: {
      url: `${metaData.url}/assets/images/logo-hd.png`,
      alt: "Company logo",
    },
  },
};

export const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: metaData.title,
  url: metaData.url,
  email: email,
  logo: `${metaData.url}/assets/images/logo-hd.png`,
  faxNumber: fax,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: phone,
    contactType: "Офис",
    areaServed: "KG",
    availableLanguage: ["Russian", "Kyrgyz"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: streetAddress,
    addressLocality: addressLocality,
    addressCountry: addressCountry,
  },
  sameAs: [facebook, instagram, whatsApp, telegram],
  description: metaData.description,
  foundingDate: foundingDate,
  employee: [
    {
      "@type": "Person",
      name: CEO,
      jobTitle: "Руководитель",
      telephone: "+996772578562",
      email: "zhismailova@tsb.kg",
    },
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Ассоциация экспедиторов Кыргызстана",
    },
    {
      "@type": "Organization",
      name: "Международная федерация экспедиторских ассоциаций FIATA",
    },
    {
      "@type": "Organization",
      name: "Торгово-Промышленная Палата Кыргызской Республики",
    },
  ],
  award: [
    "Победители конкурса «Выбор года» 2004",
    "Победители конкурса «Выбор года» 2005",
    "Победители конкурса «Выбор года» 2011",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "​Транспортно-логистическая компания",
        areaServed: ["Кыргызстан", "СНГ", "Балтия"],
        description:
          "Мы предоставляем услуги железнодорожных перевозок по территориям стран СНГ и Балтии, мультимодальные перевозки, доставку легковых автомобилей и дополнительные транспортно-экспедиторские услуги.",
      },
    },
  ],
  location: {
    "@type": "Place",
    name: "Офис ОсОО «Транссистема-Бишкек»",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Раззакова, д. 15",
      addressLocality: "г. Бишкек",
      addressCountry: "Кыргызстан",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.8746",
      longitude: "74.6122",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasMap: geoLocation,
  },
};
