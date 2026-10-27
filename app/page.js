import Link from 'next/link';
import { ContactBanner } from '../components/site/SiteChrome';

const portrait = '/images/nadia-el-ferkane-blanc.png';
const SERVICES = [
  ['01','Thérapie individuelle','Un espace pour déposer ce qui vous pèse et retrouver des repères qui vous correspondent.'],
  ['02','Thérapie de couple','Un accompagnement pour regarder ensemble les difficultés relationnelles et ouvrir un dialogue.'],
  ['03','Thérapie familiale','Une démarche qui prend en compte les liens, les places et les ressources de chaque membre.'],
];

export default function HomePage(){
  return <main id="contenu">
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Thérapie familiale systémique</p>
          <h1>Retrouver un espace pour <em>avancer ensemble.</em></h1>
          <p className="hero-lede">Je vous accueille à La Ciotat et à Marseille pour un accompagnement individuel, de couple ou familial, adapté à votre situation.</p>
          <div className="actions"><Link className="button" href="/contact">Prendre rendez-vous <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/therapies">Découvrir les accompagnements <span aria-hidden="true">→</span></Link></div>
          <div className="credentials"><span>Membre de la S.F.T.F</span><span>Membre de l’E.F.T.A</span></div>
        </div>
        <div className="portrait"><span className="hero-note">Une approche relationnelle</span><div className="portrait-bg"/><img src={portrait} alt="Nadia El Ferkane-Blanc" width="578" height="598"/><span className="portrait-name">Nadia El Ferkane-Blanc</span></div>
      </div>
    </section>
    <section className="intro section"><div className="container two-col"><p className="kicker">Une approche relationnelle</p><div><h2>Ce que nous vivons prend forme dans nos relations.</h2><p>L’approche systémique s’intéresse à l’individu au regard des différents systèmes auxquels il appartient : le couple, la famille, le milieu professionnel. Les difficultés sont considérées dans la perspective des relations avec l’environnement.</p><Link className="text-link" href="/presentation">En savoir plus sur mon parcours <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><p className="kicker">Les accompagnements</p><h2>Un travail ajusté à votre demande.</h2></div><Link className="text-link" href="/therapies">Voir les accompagnements <span aria-hidden="true">→</span></Link></div><div className="cards">{SERVICES.map(([n,title,text])=><article className="card" key={n}><small>{n}</small><h3>{title}</h3><p>{text}</p><Link href="/therapies" aria-label={`En savoir plus : ${title}`}><span aria-hidden="true">↗</span></Link></article>)}</div></div></section>
    <ContactBanner/>
  </main>;
}
