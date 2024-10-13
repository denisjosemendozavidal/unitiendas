import "../styles/globals.css";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContentWrapper">
        <div className="footerLogoWrapper">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt=""
          />
        </div>
        <div className="footerContactInfoWrapper">
          <div className="footerPhoneNumberSocialMediaAndAdrressWrapper">
            <div className="footerPhoneNumberWrapper">
              <a href="">
                <p> Numero de Contact: </p>
              </a>
            </div>
            <div className="footerSocialMediaWrapper">
              Sigues en: Iconos de redes sociales irian aqui
            </div>
            <div className="footerAddresswrapper">
              <p>
                Encuentranos en Carrera Algo, Calle Donde, #Alguno, Sector
                Lejos, Barranquilla, Atlantico
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerDivider"></div>
      <div className="footerCredits">
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
