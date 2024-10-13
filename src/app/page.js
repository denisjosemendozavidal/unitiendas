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
        <div className="hersectionTextAndButton">
          <h1 className="h1Styling">Bienvenidos A Unitiendas</h1>
          <p className="subTitleStyling"> Compra mas barato, misma calidad!</p>
          <div class="nav-button-wrapper">
            <a
              class="button"
              href="https://api.whatsapp.com/send?phone=573059321550"
              target="_blank"
            >
              Contactanos{" "}
              <img
                className="whatsappSVGInButton"
                src="../assets/whatsappSVG.svg"
                alt="Whatsapp Logo"
              />
            </a>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M24.1801 11.2281C24.2815 11.3294 24.362 11.4497 24.4168 11.5821C24.4717 11.7146 24.5 11.8565 24.5 11.9999C24.5 12.1432 24.4717 12.2852 24.4168 12.4176C24.362 12.55 24.2815 12.6703 24.1801 12.7716L13.2716 23.6801C13.1703 23.7815 13.05 23.862 12.9176 23.9168C12.7852 23.9717 12.6432 24 12.4999 24C12.3565 24 12.2146 23.9717 12.0821 23.9168C11.9497 23.862 11.8294 23.7815 11.7281 23.6801L0.819678 12.7716C0.614992 12.567 0.5 12.2893 0.5 11.9999C0.5 11.7104 0.614992 11.4328 0.819678 11.2281C1.02436 11.0234 1.30198 10.9084 1.59145 10.9084C1.88092 10.9084 2.15853 11.0234 2.36322 11.2281L12.4999 21.3661L22.6365 11.2281C22.7378 11.1267 22.8581 11.0462 22.9906 10.9913C23.123 10.9364 23.2649 10.9082 23.4083 10.9082C23.5517 10.9082 23.6936 10.9364 23.826 10.9913C23.9585 11.0462 24.0788 11.1267 24.1801 11.2281ZM11.7281 12.7716C11.8294 12.8731 11.9497 12.9535 12.0821 13.0084C12.2146 13.0633 12.3565 13.0916 12.4999 13.0916C12.6432 13.0916 12.7852 13.0633 12.9176 13.0084C13.05 12.9535 13.1703 12.8731 13.2716 12.7716L24.1801 1.86322C24.3848 1.65853 24.4998 1.38092 24.4998 1.09145C24.4998 0.801979 24.3848 0.524364 24.1801 0.319678C23.9754 0.114992 23.6978 5.70615e-09 23.4083 0C23.1188 -5.70615e-09 22.8412 0.114992 22.6365 0.319678L12.4999 10.4577L2.36322 0.319678C2.15853 0.114992 1.88092 0 1.59145 0C1.30198 0 1.02436 0.114992 0.819678 0.319678C0.614992 0.524364 0.5 0.801979 0.5 1.09145C0.5 1.38092 0.614992 1.65853 0.819678 1.86322L11.7281 12.7716Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <img
        src="../assets/images/placeholderGift.gif"
        alt="Placeholder Gift"
        className="heroSectionBG"
      />
    </section>
  );
};

const WhyUs = () => {
  return (
    <section className="OverallSectionStyling">
      <div className="whyUsTitleAndCardsWrapper">
        <div className="whyUsTitleAndSubtitle">
          <h2 className="h2Styling">¿Por que Unitiendas?</h2>
          <p className=""> La Razon es sencilla, con unitiendas tienes:</p>
        </div>
        <div className="whyUsCardsWrapper">
          <div className="whyUsFirstCard">
            <img
              className="whyUsFirstCardImage"
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt=""
            />
            <div className="whyUsFirstCardText">
              <h3 className="whyUsFirstCardHeader">
                Acceso Directo a los mejores Proveedores
              </h3>
              <p className="whyUsFirstCardSubHeader">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="whyUsSecondAndThirdCardWrapper">
            <div className="whyUsSecondCard">
              <img
                className="whyUsSecondCardImage"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt=""
              />
              <div className="whyUsSecondCardText">
                <h3 className="whyUsSecondCardHeader">
                  Acceso a los mejores Productos
                </h3>
                <p className="whyUsSecondCardSubHeader">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="whyUsThirdCard">
              <img
                className="whyUsThirdCardImage"
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt=""
              />
              <div className="whyUsThirdCardText">
                <h3 className="whyUsSecondCardHeader">
                  Una Plataforma Facil de Manejar
                </h3>
                <p className="whyUsThirdCardSubHeader">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/*Not adding this benefits section for now*/

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
      <div className="howItWorksSectionHeaderAndListWrapper">
        <div className="howItWorksHeaderAndSubheaderWrapper">
          <h2 className="h2Styling">¿Como Funciona?</h2>
          <p className="">
            {" "}
            Con estos 4 Simples pasos empiezas a disfrutar los beneficios de tu
            alianza con Unitiendas:
          </p>
        </div>
        <div className="howitworksListOfItemsWrapper">
          <div className="howItworksItemWrapper">
            <a
              className="howitWorksItemLink"
              href="https://api.whatsapp.com/send?phone=573059321550"
              target="_blank"
            >
              <img
                className="howitworksItemIcon"
                src="../assets/checkmark.svg"
                alt=""
              />
              <p className="howItWorksItemText">
                Paso 1: Regístrate en nuestra plataforma
              </p>
            </a>
          </div>
          <div className="howItworksItemWrapper">
            <img
              className="howitworksItemIcon"
              src="../assets/checkmark.svg"
              alt=""
            />
            <p className="howItWorksItemText">
              Paso 2: Explora y selecciona los productos que necesitas
            </p>
          </div>
          <div className="howItworksItemWrapper">
            <img
              className="howitworksItemIcon"
              src="../assets/checkmark.svg"
              alt=""
            />
            <p className="howItWorksItemText">
              Paso 3: Realiza tu pedido y programa la entrega
            </p>
          </div>
          <div className="howItworksItemWrapper">
            <img
              className="howitworksItemIcon"
              src="../assets/checkmark.svg"
              alt=""
            />
            <p className="howItWorksItemText">
              Paso 4: Recibe tus productos y abastece tu tienda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="OverallSectionStyling">
      <div className="aboutUsTitleImageAndDescriptionWrapper">
        <div className="aboutUsTitleAndSubtitleWrapper">
          <h2 className="h2Styling">Sobre nosotros</h2>
          <p className="">
            {" "}
            Nuestra Misión: Empoderar a los tenderos locales y fortalecer las
            comunidades. Nuestra Visión: Ser la red más confiable entre
            proveedores y tenderos en el país. Valores: Transparencia,
            compromiso y servicio comunitario. Imagen de Equipo: Foto del equipo
            detrás de Unitiendas o imágenes que reflejen comunidad. Objetivo:
            Humanizar la iniciativa y construir confianza mostrando quiénes
            están detrás del proyecto.
          </p>
        </div>
        <div className="aboutUsImageAndTextWrapper">
          <div className="aboutUsImageWrapper">
            <img
              className="aboutUsImage"
              src="../assets/images/Fundador.jpg"
              alt=""
            />
          </div>
          <div className="aboutUsTextAndAutorWrapper">
            <div className="aboutUsTextWrapper">
              <p className="aboutUsText">
                "Mi sueño con Unitiendas es que podamos empoderar a los tenderos
                locales y fortalecer las comunidades donde vivimos. Creo
                firmemente que la deuda social de nuestro país con los tenderos
                es monumental. Los primeros en cualquier pueblito, caserío o
                localidad siempre son los tenderos; ellos son pilares
                fundamentales de nuestra Colombia.
              </p>
              <p>
                Creemos en la transparencia, el compromiso y el servicio
                comunitario como bases fundamentales. Aspiramos a ser la red más
                confiable entre proveedores y tenderos en el país. Al mostrar
                quiénes estamos detrás de Unitiendas, queremos humanizar nuestra
                iniciativa y construir confianza, porque sabemos que juntos
                podemos hacer una diferencia real."
              </p>
            </div>
            <p className="aboutUsTextAuthor"> Walber Porto - Fundador </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <main className="globalPaddingAndStructuring">
      <HeroSection />
      <WhyUs />
      <HowItWorks />
      <AboutUs />
    </main>
  );
}
