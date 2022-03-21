import { scrollToElement } from "~/utils/scrollToElement";

export default function Topbar() {
  return (
    <nav className="site-header">
      <ul>
        <li className="link" onClick={() => scrollToElement("skills")}>Services</li>
        <li className="link" onClick={() => scrollToElement("about")}>About</li>
        <li className="link" onClick={() => scrollToElement("contact")}>Contact</li>
      </ul>
    </nav>
  );
}
