import Link from 'next/link';

const NAV = [
  ['/','Accueil'],
  ['/presentation','Qui suis-je ?'],
  ['/therapies','Accompagnements'],
  ['/tarifs','Tarifs & modalités'],
  ['/contact','Contact'],
];

export function Brand(){
  return <Link className="logo" href="/" aria-label="Nadia El Ferkane-Blanc, accueil">
    <img src="/images/embleme.png" alt="" width="278" height="200" />
    <span><strong>Nadia El Ferkane-Blanc</strong><small>Thérapeute familiale systémique</small></span>
  </Link>;
}

export function SiteHeader(){
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav aria-label="Navigation principale">
        {NAV.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}
      </nav>
      <a className="header-cta" href="tel:+33625700824"><span>Prendre rendez-vous</span><b aria-hidden="true">↗</b></a>
    </div>
  </header>;
}

export function SiteFooter(){
  return <footer>
    <div className="container footer-grid">
      <div className="footer-brand"><Brand/><p>Thérapie individuelle, de couple et familiale à La Ciotat et Marseille.</p></div>
      <div className="footer-links"><b>Explorer</b>{NAV.slice(1).map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</div>
      <div className="footer-contact"><b>Me joindre</b><a href="tel:+33625700824">06 25 70 08 24</a><a href="mailto:elferkane.nadia@hotmail.fr">elferkane.nadia@hotmail.fr</a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Nadia El Ferkane-Blanc</span><span>SIRET 922 238 316 00017</span></div>
  </footer>;
}

export function PageIntro({eyebrow,title,text}){
  return <section className="page-intro"><div className="container page-intro-inner"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{text&&<p className="lede">{text}</p>}<span className="intro-rule" aria-hidden="true" /></div></section>;
}

export function ContactBanner(){
  return <section className="banner"><div className="container banner-inner"><div><p className="eyebrow">Un premier échange</p><h2>Parlons de ce qui vous amène.</h2><p>Écrivez-moi de préférence par email en indiquant votre demande et vos coordonnées. Je vous recontacterai pour un entretien téléphonique préalable.</p></div><div className="banner-actions"><a className="button light" href="mailto:elferkane.nadia@hotmail.fr">Envoyer un email <span aria-hidden="true">↗</span></a><a className="light-link" href="tel:+33625700824">06 25 70 08 24</a></div></div></section>;
}
