import "../styles/globals.css";
import "../styles/navbar.css";

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

        <div class="nav-button">
          <button class="button">Button</button>
        </div>
      </nav>
    </header>
  );
}
