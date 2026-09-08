import type { Metadata } from 'next';
import Image from 'next/image';
import { TextLink, phone } from '../site-chrome';
import { Invitation } from '../editorial';
export const metadata: Metadata = {
  title: 'Die persönliche Geschenkbox',
  description:
    'Tee, Porzellan und feine Kleinigkeiten: Maria stellt Ihre Lupercia Geschenkbox persönlich zusammen. Individuell abstimmen und im Salon in Bonn abholen.',
};
export default function Gifts() {
  return (
    <main id="main-content" className="page-width detail-page gift-page">
      <section className="portrait-hero gift-hero">
        <div>
          <span className="eyebrow">Die Lupercia Geschenkbox</span>
          <h1>
            Ein bisschen
            <br />
            <em>
              Lupercia
              <br />
              verschenken.
            </em>
          </h1>
          <p>
            Individuell zusammengestellte Genussboxen für Geburtstage,
            Einladungen oder einfach so – von Maria persönlich ausgewählt.
          </p>
          <TextLink href={phone}>Ihre Geschenkbox anfragen</TextLink>
        </div>
        <figure>
          <Image
            src="/assets/images/geschenkbox/rosenbox.webp"
            alt="Eine Lupercia Geschenkbox mit Rosentee, floraler Porzellantasse, Butterkeksen und Rosenkonfitüre vor einem Blumenstrauß"
            width={1086}
            height={1448}
            loading="eager"
            fetchPriority="high"
          />
          <figcaption>
            Eine beispielhafte Zusammenstellung. Jede Box wird individuell
            gestaltet.
          </figcaption>
        </figure>
      </section>
      <section className="editorial-row">
        <span className="eyebrow">Für einen lieben Menschen</span>
        <div>
          <h2>
            Ein Geschenk,
            <br />
            <em>das zu jemandem passt.</em>
          </h2>
          <div className="two-text">
            <p>
              Zum Geburtstag, als Mitbringsel zur Einladung, als Dank – oder
              einfach so, weil jemand eine ruhige Stunde verdient hat.
            </p>
            <p>
              Sagen Sie Maria, für wen die Box gedacht ist und was die Person
              mag. Sie wählt aus demselben Sortiment aus, das auch im Salon
              steht.
            </p>
          </div>
        </div>
      </section>
      <section
        className="gift-photo-pair"
        aria-label="Einblicke in Marias Geschenkboxen"
      >
        <figure className="gift-photo-generous">
          <Image
            src="/assets/images/geschenkbox/tee-und-feines.webp"
            alt="Eine Geschenkbox mit Lupercia Tee, türkisfarbener Porzellantasse, Florentinern, Ingwer und Orangenmarmelade"
            width={1600}
            height={1096}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Tee, Lieblingsporzellan und feine Begleiter.</figcaption>
        </figure>
        <figure className="gift-photo-detail">
          <Image
            src="/assets/images/geschenkbox/kleine-aufmerksamkeit.webp"
            alt="Türkisfarbene Tasse mit goldenem Teesieb, Butterkeksen und Wildblütenhonig, eingebettet in schwarzes Seidenpapier"
            width={1000}
            height={1171}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Auch eine kleine Aufmerksamkeit kann viel sagen.
          </figcaption>
        </figure>
        <p className="gift-photo-note">
          Jede Box wird persönlich zusammengestellt. Die Fotos zeigen Beispiele.
        </p>
      </section>
      <section className="gift-contents">
        <div>
          <span className="eyebrow">Was in die Box kommen kann</span>
          <h2>
            Kleine Dinge.
            <br />
            <em>Große Freude.</em>
          </h2>
          <TextLink href="/tee-genuss/">Das Sortiment ansehen</TextLink>
        </div>
        <div className="contents-grid">
          <div>
            <span>01</span>
            <h3>Guter Tee</h3>
            <p>
              Ausgewählte Schwarz-, Grün-, Weiß-, Kräuter- und Früchtetees,
              darunter Bio-Tees.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Mate aus Argentinien</h3>
            <p>
              Marias persönliche Verbindung zu Argentinien, bewusst ausgewählt.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Lieblingsgeschirr</h3>
            <p>
              Eine Tasse, Kanne oder Dose aus dem Sortiment europäischer
              Hersteller.
            </p>
          </div>
          <div>
            <span>04</span>
            <h3>Feine Begleiter</h3>
            <p>
              Gebäck, Konfitüre und weitere Kleinigkeiten, die zu gutem Tee
              gehören.
            </p>
          </div>
        </div>
      </section>
      <div className="gift-making">
        <figure className="gift-basket-photo">
          <Image
            src="/assets/images/geschenkbox/geschenkkorb.webp"
            alt="Ein geflochtener Geschenkkorb mit weißer Teekanne, Rosentasse, Honig und Tee, geschmückt mit rosa Blüten"
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Ein Korb voller kleiner Freuden. Von Maria ausgewählt.
          </figcaption>
        </figure>
        <section className="gift-steps">
          <span className="eyebrow">So entsteht Ihre Geschenkbox</span>
          <h2>
            Drei Sätze <em>genügen.</em>
          </h2>
          <ol>
            <li>
              <span>01</span>
              <h3>Erzählen.</h3>
              <p>
                Für wen die Box ist, welcher Anlass dahintersteht und was die
                Person gerne trinkt.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Zusammenstellen.</h3>
              <p>
                Maria wählt die Inhalte aus und stimmt Umfang und Preis mit
                Ihnen ab.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Abholen.</h3>
              <p>
                Fertig verpackt im Salon in der Argelanderstraße 75 in Bonn.
              </p>
            </li>
          </ol>
        </section>
      </div>
      <Invitation
        title={
          <>
            Für wen darf es
            <br />
            <em>ein bisschen Lupercia sein?</em>
          </>
        }
        description="Inhalt, Umfang und Preis stimmen Sie persönlich mit Maria ab – am schnellsten telefonisch oder bei einem Besuch im Salon."
        label="Geschenkbox anfragen"
      />
    </main>
  );
}
