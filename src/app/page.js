import "../styles/globals.css";
import "../styles/homePage.css";

export const metadata = {
  title: "UniTiendas",
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
    <section className="heroSectionWrapper">
      <div className="heroSectionContent">
        <h1 className="h1Styling">Bienvenidos A Unitiendas</h1>
        <p className="subTitleStyling"> Compra mas barato, misma calidad!</p>
        <div class="nav-button-wrapper">
          <button class="button">
            Contactanos{" "}
            <img
              className="whatsappSVGInButton"
              src="../assets/whatsappSVG.svg"
              alt="Whatsapp Logo"
            />
          </button>
        </div>
      </div>
      <img
        src="../assets/images/placeholderGift.gif"
        alt="Placeholder Gift"
        className="heroSectionBG"
      />
    </section>
  );
};

const WhoWeAre = () => {
  return (
    <section className="OverallSectionStyling">
      <h2 className="h2Styling">
        Descripción Breve: Explicar que Unitiendas es una plataforma que sirve
        como intermediario entre tenderos y proveedores.
      </h2>
      <p className="">
        {" "}
        Puntos Clave: Conexión directa con productores y mayoristas. Acceso a
        una amplia gama de productos. Plataforma fácil de usar.
      </p>
    </section>
  );
};

const Benefits = () => {
  return (
    <section className="OverallSectionStyling">
      <h2 className="h2Styling">
        Los Beneficios que tienes trabajando con nosotros
      </h2>
      <p className="">
        {" "}
        Mejores Precios: Acceso a precios mayoristas competitivos. Variedad de
        Productos: Amplio catálogo de productos esenciales. Comodidad: Pedidos
        en línea y entregas rápidas. Soporte Dedicado: Asistencia personalizada
        cuando la necesites.
      </p>
      <p className="">
        {" "}
        Iconos e Imágenes: Utilizar iconos representativos para cada beneficio.
      </p>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="OverallSectionStyling">
      <h2 className="h2Styling">Como Funciona</h2>
      <p className="">
        {" "}
        Paso 1: Regístrate en nuestra plataforma. Paso 2: Explora y selecciona
        los productos que necesitas. Paso 3: Realiza tu pedido y programa la
        entrega. Paso 4: Recibe tus productos y abastece tu tienda. Elementos
        Visuales: Infografía o ilustraciones que representen cada paso.
      </p>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="OverallSectionStyling">
      <h2 className="h2Styling">Sobre nosotros</h2>
      <p className="">
        {" "}
        Nuestra Misión: Empoderar a los tenderos locales y fortalecer las
        comunidades. Nuestra Visión: Ser la red más confiable entre proveedores
        y tenderos en el país. Valores: Transparencia, compromiso y servicio
        comunitario. Imagen de Equipo: Foto del equipo detrás de Unitiendas o
        imágenes que reflejen comunidad. Objetivo: Humanizar la iniciativa y
        construir confianza mostrando quiénes están detrás del proyecto.
      </p>
    </section>
  );
};

export default function HomePage() {
  return (
    <main className="globalPaddingAndStructuring">
      <HeroSection />
      <WhoWeAre />
      <Benefits />
      <HowItWorks />
      <AboutUs />
    </main>
  );
}
