import "../styles/globals.css";
import "../styles/whatsappWidget.css";

export default function WhatsappWidget() {
  return (
    <div>
      <div className="whatsappwidgetLinkWrapper">
        <a
          className="whatsappWidgetlink"
          href="https://api.whatsapp.com/send?phone=573059321550"
          target="_blank"
        >
          <p className="WhatsappWidgetText">Contactanos</p>
          <div className="whatsappWidgetIconWrapper">
            <img
              className="whatsappWidgetIcon"
              src="../assets/images/whatsapp-logo.png"
              alt="WhatsAppp Logo"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
