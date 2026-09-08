import Link from './site-link';
import { TextLink, phone } from './site-chrome';
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="page-intro">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
}
export function Invitation({
  eyebrow = 'Eine persönliche Einladung',
  title,
  description,
  label = 'Maria anrufen',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  label?: string;
}) {
  return (
    <section className="invitation">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <TextLink href={phone}>{label}</TextLink>
      <Link className="invitation-phone" href={phone}>
        01516 7970350
      </Link>
    </section>
  );
}
