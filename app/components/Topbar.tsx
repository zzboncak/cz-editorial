import { Link } from "remix";

export default function Topbar() {
  return (
    <nav className="site-header">
      <ul>
        <Link to="#skills">
          <li>Services</li>
        </Link>
        <Link to="#about">
          <li>About</li>
        </Link>
        <Link to="#contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
