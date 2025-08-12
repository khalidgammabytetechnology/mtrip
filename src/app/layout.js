import 'bootstrap/dist/css/bootstrap.min.css'
import TopBar from "./Components/TopBar";
import NavBar from "./Components/NavBar";
import WhatsAppButton from './Components/WhatsAppButton';

export const metadata = {
  title: "MTrip Hotels – Exceptional Hospitality & Travel Solutions",
  description:
    "Since 2015, MTrip Hotels delivers affordable luxury and seamless travel—top hotels, personalized cabs, and exceptional service.",
  keywords: [
    "MTrip Hotels",
    "affordable hotels",
    "affordable travel",
    "business travel",
    "cab services India",
    "corporate travel solutions",
    "tour packages",
    "hospitality services",
    "hotel solutions"
  ],
  icons: {
    icon: "/favicon.ico"
  },
};

export default function Layout({ children }) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MTrip Hotels",
    "url": "https://mtriphotels.com",
    "logo": "https://mtriphotels.com/Assets/logo.png",
    "description": "Since 2015, MTrip Hotels delivers affordable luxury and seamless travel—top hotels, personalized cabs, and exceptional service.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@mtriphotels.com",
        "phone": "+918949412005",
        "areaServed": ["IN"],
        "availableLanguage": ["English"]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>MTrip Hotels – Exceptional Hospitality & Travel Solutions</title>
        <meta name="description" content="Since 2015, MTrip Hotels delivers affordable luxury and seamless travel—top hotels, personalized cabs, and exceptional service." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MTrip Hotels" />
        <meta name="copyright" content="© 2025 MTrip Hotels. All Rights Reserved." />
        <meta httpEquiv="Content-Language" content="en-US" />

        {/* Canonical */}
        <link rel="canonical" href="https://mtriphotels.com/" />


        <meta property="og:description" content="Since 2015, MTrip Hotels delivers affordable luxury and seamless travel—top hotels, personalized cabs, and exceptional service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mtriphotels.com/" />
        <meta property="og:site_name" content="MTrip Hotels" />
        <meta property="og:locale" content="en_US" />

      </head>

      <body>
        <TopBar />
        <NavBar />
        {children}
        <WhatsAppButton/>
      </body>
    </html>
  );
}
