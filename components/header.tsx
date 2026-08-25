import { siteContent } from "@/content/site-content";

export function Header() {
  return (
    <header className="site-header">
      <a className="monogram" href="#top" aria-label={`${siteContent.name}, home`}>
        <span>{siteContent.initials.charAt(0)}</span>
        <span className="monogram__divider" aria-hidden="true" />
        <span>{siteContent.initials.charAt(1)}</span>
      </a>

      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {siteContent.navigation.map((item) => (
            <li key={item.href}>
              <a className="nav-link animated-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
