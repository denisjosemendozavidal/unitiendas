export const metadata = {
  title: "Your Site Title",
  description: "A brief description of your site.",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Your Site Title",
    description: "A brief description of your site.",
    url: "https://yourwebsite.com",
    siteName: "Your Site Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "An image showing ...",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Site Title",
    description: "A brief description of your site.",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#FFFFFF",
};

const HeroSection = () => {
  return (
    <div className="heroSectionStyling">
      <h1 className="h1Styling">Bienvenidos A Unitiendas</h1>
      <p className="subTitleStyling"> Compra mas barato, misma calidad</p>
    </div>
  );
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
