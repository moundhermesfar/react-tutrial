import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instgram.com">
          <FaInstagram />
        </a>
        <a href="https://gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p>2020 CARSSO, All rights reseved.</p>
    </footer>
  );
}
