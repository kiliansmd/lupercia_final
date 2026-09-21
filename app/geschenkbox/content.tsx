'use client';
import { useTranslation } from '../i18n';
import { PageSeo } from '../seo-content';
import Image from '../responsive-image';
import { TextLink, phone } from '../site-chrome';
import { Invitation } from '../editorial';
export default function Gifts() {
  const { t } = useTranslation();
  return (
    <main id="main-content" className="page-width detail-page gift-page">
      <PageSeo path="/geschenkbox" />
      <section className="portrait-hero gift-hero">
        <div>
          <span className="eyebrow">{t('Geschenkboxen aus Bonn')}</span>
          <h1>
            {t('Ein bisschen')}
            <br />
            <em>
              {t('Lupercia')}
              <br />
              {t('verschenken.')}
            </em>
          </h1>
          <p>
            {t(
              'Tee-Geschenkboxen für Geburtstage, Einladungen oder einfach so – von Maria persönlich zusammengestellt und im Salon in der Bonner Südstadt abholbereit. Inhalt und Preis stimmen Sie gemeinsam ab.',
            )}
          </p>
          <TextLink href={phone}>{t('Ihre Geschenkbox anfragen')}</TextLink>
        </div>
        <figure>
          <Image
            src="/assets/images/geschenkbox/rosenbox.webp"
            alt={t(
              'Eine Lupercia Geschenkbox mit Rosentee, floraler Porzellantasse, Butterkeksen und Rosenkonfitüre vor einem Blumenstrauß',
            )}
            width={1086}
            height={1448}
            loading="eager"
            fetchPriority="high"
          />
          <figcaption>
            {t(
              'Eine beispielhafte Zusammenstellung. Jede Box wird individuell gestaltet.',
            )}
          </figcaption>
        </figure>
      </section>
      <section className="editorial-row">
        <span className="eyebrow">{t('Für einen lieben Menschen')}</span>
        <div>
          <h2>
            {t('Ein Geschenk,')}
            <br />
            <em>{t('das zu jemandem passt.')}</em>
          </h2>
          <div className="two-text">
            <p>
              {t(
                'Zum Geburtstag, als Mitbringsel zur Einladung, als Dank – oder einfach so, weil jemand eine ruhige Stunde verdient hat.',
              )}
            </p>
            <p>
              {t(
                'Sagen Sie Maria, für wen die Box gedacht ist und was die Person mag. Sie wählt aus demselben Sortiment aus, das auch im Salon steht.',
              )}
            </p>
          </div>
        </div>
      </section>
      <section
        className="gift-photo-pair"
        aria-label={t('Einblicke in Marias Geschenkboxen')}
      >
        <figure className="gift-photo-generous">
          <Image
            src="/assets/images/geschenkbox/tee-und-feines.webp"
            alt={t(
              'Eine Geschenkbox mit Lupercia Tee, türkisfarbener Porzellantasse, Florentinern, Ingwer und Orangenmarmelade',
            )}
            width={1600}
            height={1096}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            {t('Tee, Lieblingsporzellan und feine Begleiter.')}
          </figcaption>
        </figure>
        <figure className="gift-photo-detail">
          <Image
            src="/assets/images/geschenkbox/kleine-aufmerksamkeit.webp"
            alt={t(
              'Türkisfarbene Tasse mit goldenem Teesieb, Butterkeksen und Wildblütenhonig, eingebettet in schwarzes Seidenpapier',
            )}
            width={1000}
            height={1171}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            {t('Auch eine kleine Aufmerksamkeit kann viel sagen.')}
          </figcaption>
        </figure>
        <p className="gift-photo-note">
          {t(
            'Jede Box wird persönlich zusammengestellt. Die Fotos zeigen Beispiele.',
          )}
        </p>
      </section>
      <section className="gift-contents">
        <div>
          <span className="eyebrow">{t('Was in die Box kommen kann')}</span>
          <h2>
            {t('Kleine Dinge.')}
            <br />
            <em>{t('Große Freude.')}</em>
          </h2>
          <TextLink href="/tee-genuss">{t('Das Sortiment ansehen')}</TextLink>
        </div>
        <div className="contents-grid">
          <div>
            <span>01</span>
            <h3>{t('Guter Tee')}</h3>
            <p>
              {t(
                'Ausgewählte Schwarz-, Grün-, Weiß-, Kräuter- und Früchtetees, darunter Bio-Tees.',
              )}
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>{t('Mate aus Argentinien')}</h3>
            <p>
              {t(
                'Marias persönliche Verbindung zu Argentinien, bewusst ausgewählt.',
              )}
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>{t('Lieblingsgeschirr')}</h3>
            <p>
              {t(
                'Eine Tasse, Kanne oder Dose aus dem Sortiment europäischer Hersteller.',
              )}
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>{t('Feine Begleiter')}</h3>
            <p>
              {t(
                'Gebäck, Konfitüre und weitere Kleinigkeiten, die zu gutem Tee gehören.',
              )}
            </p>
          </div>
        </div>
      </section>
      <div className="gift-making">
        <figure className="gift-basket-photo">
          <Image
            src="/assets/images/geschenkbox/geschenkkorb.webp"
            alt={t(
              'Ein geflochtener Geschenkkorb mit weißer Teekanne, Rosentasse, Honig und Tee, geschmückt mit rosa Blüten',
            )}
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            {t('Ein Korb voller kleiner Freuden. Von Maria ausgewählt.')}
          </figcaption>
        </figure>
        <section className="gift-steps">
          <span className="eyebrow">{t('So entsteht Ihre Geschenkbox')}</span>
          <h2>
            {t('Drei Sätze ')}
            <em>{t('genügen.')}</em>
          </h2>
          <ol>
            <li>
              <span>01</span>
              <h3>{t('Erzählen.')}</h3>
              <p>
                {t(
                  'Für wen die Box ist, welcher Anlass dahintersteht und was die Person gerne trinkt.',
                )}
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>{t('Zusammenstellen.')}</h3>
              <p>
                {t(
                  'Maria wählt die Inhalte aus und stimmt Umfang und Preis mit Ihnen ab.',
                )}
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>{t('Abholen.')}</h3>
              <p>
                {t(
                  'Fertig verpackt im Salon in der Argelanderstraße 75 in Bonn.',
                )}
              </p>
            </li>
          </ol>
        </section>
      </div>
      <Invitation
        title={
          <>
            {t('Für wen darf es')}
            <br />
            <em>{t('ein bisschen Lupercia sein?')}</em>
          </>
        }
        description={t(
          'Inhalt, Umfang und Preis stimmen Sie persönlich mit Maria ab – am schnellsten telefonisch oder bei einem Besuch im Salon.',
        )}
        label={t('Geschenkbox anfragen')}
      />
    </main>
  );
}
