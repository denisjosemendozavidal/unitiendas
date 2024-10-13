import "../styles/globals.css";
import "../styles/navbar.css";

/*Need to continue working on this styling, items to fix: 

1 - Fill of the whatsapp logo, need it to be white.
2 - Need the background to be trasnparent when page loads and then go white once scrolling begins

*/

export default function Navbar() {
  return (
    <header class="header">
      <nav class="navbar">
        <a href="#" class="nav-logo">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Logo image"
          />
        </a>

        <div class="main-button-wrapper">
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
      </nav>
    </header>
  );
}
