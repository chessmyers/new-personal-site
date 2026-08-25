import { siteContent } from "@/content/site-content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <p>
          {siteContent.name} <span aria-hidden="true">©</span> {new Date().getFullYear()}
        </p>
        <p>{siteContent.footer.note}</p>
      </div>
    </footer>
  );
}
