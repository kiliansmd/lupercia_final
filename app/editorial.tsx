'use client';
import { useTranslation } from './i18n';
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
  const { t } = useTranslation();
  return (
    <div className="page-intro">
      <div>
        <span className="eyebrow">{t(eyebrow)}</span>
        <h1>{title}</h1>
      </div>
      <p>{t(description)}</p>
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
  const { t } = useTranslation();
  return (
    <section className="invitation">
      <span className="eyebrow">{t(eyebrow)}</span>
      <h2>{title}</h2>
      <p>{t(description)}</p>
      <TextLink href={phone}>{t(label)}</TextLink>
      <Link className="invitation-phone" href={phone}>
        01516 7970350
      </Link>
    </section>
  );
}
