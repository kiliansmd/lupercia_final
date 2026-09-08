# Lupercia: lokale SEO für Bonn und die Südstadt

Stand: 8. September 2026. Prüfung der Startseite, aller fünf Angebotsseiten, der rechtlichen Seiten, des statischen Exports und der Produktionsadresse.

## Ergebnis und Prioritäten

| Priorität | Hebel | Befund / Umsetzung |
| --- | --- | --- |
| Sehr hoch | Eindeutige Hauptadresse | Alle Seiten nennen die aktuelle Live-Domain als Canonical. Sitemap, Open Graph und strukturierte Daten verwenden dieselbe Adresse. `lupercia.de` und `www.lupercia.de` lieferten bei der Prüfung HTTP 503. Die langfristige Hauptdomain muss mit dem Unternehmensprofil übereinstimmen. Eine Domainumstellung wurde nicht vorgenommen. |
| Sehr hoch | Angebot + Standort verständlich benennen | Individuelle Titel und Beschreibungen für sechs indexierbare Seiten; sichtbare Einstiege mit Bonn/Südstadt und dem jeweiligen Angebot. Kein zusätzlicher Textblock und keine neuen Fotos auf der Startseite. |
| Sehr hoch | Google-Unternehmensprofil | Größter noch offener lokaler Hebel: Profil und Website auf dieselbe Adresse ausrichten, passende Kategorien, Angebote, Öffnungszeiten, Fotos und echte Rezensionen pflegen. Kein Kontozugriff vorhanden; Änderungen am Profil wurden nicht vorgenommen. |
| Hoch | Auffindbare, konsistente Seitenstruktur | XML-Sitemap, robots.txt, direkt erreichbare interne Links ohne unnötige Slash-Weiterleitungen und sichtbare Breadcrumbs für alle Angebotsseiten ergänzt. |
| Hoch | Eindeutige Unternehmensdaten | JSON-LD für Lupercia als Teesalon/Einzelhandel, Website, einzelne Seiten und Breadcrumbs. Name, Adresse, Telefon, Öffnungszeiten, Logo, Bilder und Instagram-Profil sind maschinenlesbar verbunden. |
| Hoch | Mobile Ladezeit | Das bisher überall geladene Logo war ca. 1,5 MB groß. Neue WebP-Versionen in mehreren Größen werden passend zur Auflösung geladen. Bilder und Schriften bleiben lokal. |
| Mittel | Suchergebnis / geteilte Links | Individuelle Metadaten mit lokaler Suchabsicht, Open Graph und Twitter Cards einschließlich passender vorhandener Fotos. |
| Mittel | Rechtliche Seiten aus Suchergebnissen nehmen | Impressum und Datenschutz: `noindex, follow`, nicht in der Sitemap. Weiterhin erreichbar und crawlbar, damit Google die Anweisung lesen kann. Auch die Fehlerseite ist nicht indexierbar. |
| Laufend | Qualität absichern | Jeder Build erzeugt die SEO-Dateien neu und prüft HTML, Titel, Beschreibungen, Canonicals, robots, strukturierte Daten, Bildattribute und interne Links einschließlich Sprungmarken. |

## Klare Aufgaben für die einzelnen Seiten

| Seite | Relevante Suchabsicht | Nächster Schritt für Besucher |
| --- | --- | --- |
| `/` | Lupercia, Teesalon Bonn, Teeladen Bonn-Südstadt | Angebot wählen, Adresse und Öffnungszeiten finden |
| `/salon` | Tea Time Bonn, Teesalon Südstadt | Tisch oder Tea Time telefonisch anfragen, Route öffnen |
| `/tee-genuss` | Tee kaufen Bonn, loser Tee, Mate, Teeberatung | Sortiment kennenlernen und Beratung/Besuch anfragen |
| `/geschenkbox` | Tee-Geschenkbox Bonn, individuelle Teegeschenke | Inhalt und Preis abstimmen, vor Ort abholen |
| `/veranstaltungen` | Teeverkostung Bonn, Tee-Workshop, private Teerunde | Aktuelle Termine und Plätze anfragen |
| `/maria` | Maria Moreno, Tee-Sommelière Bonn, Lupercia Geschichte | Vertrauen aufbauen, DW-Beitrag ansehen, Salon besuchen |

Die Inhalte sind bereits als HTML vorhanden und unabhängig von JavaScript lesbar. Die bestehende Fotografie, lokale WebP-Bilder, lokale Schriften, mobile Navigation, Telefonnummern und Routenlinks sind gute Grundlagen. Die Instagram-Inhalte bleiben ausschließlich auf der Maria-Seite; deren gewünschte direkte Einbettung wird durch die SEO-Änderungen nicht verändert.

## Was Googles Darstellung beeinflusst – und was nicht

Organische Sitelinks werden automatisch ausgewählt. Eine Sitemap ist keine Bestellung bestimmter Sitelinks. Die fünf Hauptseiten sind klar verlinkt, mit eindeutigen Titeln versehen und indexierbar. Das schafft die Voraussetzungen; Anzahl, Reihenfolge und tatsächliche Darstellung bestimmt Google. Das `noindex` für die rechtlichen Seiten wirkt erst nach einem erneuten Crawl. [Google: Sitelinks](https://developers.google.com/search/docs/appearance/sitelinks), [Google: noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

Strukturierte Unternehmensdaten helfen Google, das Geschäft zu verstehen. Sie erzwingen weder ein Knowledge Panel noch besondere Suchergebnisse. Es wurden keine erfundenen Bewertungen, Preise oder Veranstaltungstermine ausgezeichnet. Allgemeine Veranstaltungsformate ohne konkrete Termine erhalten bewusst kein Event-Markup. [Google: LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business).

## Die nächsten wirksamen Schritte außerhalb der Website

1. **Hauptdomain festlegen und vereinheitlichen.** Falls künftig `lupercia.de` verwendet werden soll: Domain funktionsfähig auf diese Website schalten, alle bisherigen Seiten dauerhaft auf die jeweils entsprechende neue URL weiterleiten, `origin` in `seo.config.json` umstellen und anschließend neu bauen. Vorher keine Canonicals auf die aktuell fehlerhafte Domain setzen. Website-Adresse im Unternehmensprofil und in wichtigen Branchen-/Bonn-Einträgen abgleichen. [Google: Canonicals und Weiterleitungen](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
2. **Google-Unternehmensprofil vervollständigen.** Den tatsächlichen Geschäftsnamen unverändert verwenden. Die verfügbare passende Hauptkategorie (z. B. Teeladen) anhand des echten Geschäftsschwerpunkts auswählen; weitere Kategorien nur für tatsächlich angebotene Leistungen. Adresse, Telefon, reguläre und Feiertagsöffnungszeiten abgleichen. Tea Time, lose Tees, Mate, Geschenkboxen und Verkostungen mit passenden Fotos und Links auf die jeweilige Angebotsseite ergänzen.
3. **Echte lokale Bekanntheit ausbauen.** Zufriedene Gäste ohne Gegenleistung um eine ehrliche Google-Bewertung bitten; keine Bewertungsvorgaben. Rezensionen persönlich beantworten. Bestehende Erwähnungen in Bonner Kultur-, Genuss- und Stadtteilmedien um korrekte Website-Verlinkung bitten. Keine gekauften Linkpakete und keine nahezu identischen Stadtteilseiten erstellen. Google beschreibt Relevanz, Entfernung und Bekanntheit als wesentliche lokale Faktoren. [Google: lokale Rankings](https://support.google.com/business/answer/7091?hl=de).
4. **Search Console verbinden.** Die tatsächlich verwendete Domain verifizieren, `/sitemap.xml` einreichen und die sechs öffentlichen URLs per URL-Prüfung kontrollieren. Indexierung und von Google gewählte Canonicals beobachten. Eine Verifizierung oder Einreichung konnte ohne Kontozugriff nicht durchgeführt werden.
5. **Konkrete Veranstaltungen veröffentlichen, sobald verfügbar.** Für echte Termine vollständige Angaben zu Datum, Uhrzeit, Ort, Preis und Anmeldung bereitstellen. Erst dann Event-Daten hinzufügen. Keine Platzhaltertermine für vermeintlich größere Suchergebnisse.

### Vorschlag für die Beschreibung im Google-Unternehmensprofil

> Lupercia ist ein Teesalon und Teeladen in der Bonner Südstadt. In der Argelanderstraße 75 begrüßt Sie Tee-Sommelière Maria Moreno mit rund 100 Teesorten, argentinischem Mate und persönlicher Beratung. Genießen Sie Tea Time mit Gebäck und herzhaften Kleinigkeiten, entdecken Sie Porzellan oder lassen Sie eine individuelle Tee-Geschenkbox zusammenstellen. Termine für Teeverkostungen, Workshops und private Teerunden stimmen Sie persönlich mit Maria ab.

Dieser Text ist ein vorbereiteter Vorschlag und wurde nicht in ein externes Profil eingetragen.

## Erfolg messen

Ohne Search-Console- und Unternehmensprofil-Daten liegen keine belastbaren Ausgangswerte für Rankings, Klicks oder Conversions vor. Nach der Veröffentlichung zunächst Indexierungsstatus und gewählte Canonicals prüfen. Anschließend über vergleichbare Zeiträume die Suchanfragen mit Bonn/Südstadt, nicht markenbezogene Klicks, Impressionen und Klickrate je Angebotsseite beobachten. Im Unternehmensprofil Website-Klicks, Anrufe und Routenanfragen auswerten. Änderungen an Rankings sind nicht sofort zu erwarten; ein fester Platz lässt sich nicht zusagen.

Die technische Prüfung des Builds ersetzt keine URL-Prüfung aus Googles Sicht und keinen Rich-Results-Test. Ebenso ist die Verringerung der Logodateigröße kein gemessener Core-Web-Vitals-Wert.

## Pflege

- `seo.config.json`: Hauptdomain, sechs Seiten, Seitentitel, Beschreibungen und Vorschaubilder.
- `app/seo.tsx`: Metadaten, strukturierte Daten und Breadcrumbs.
- `scripts/generate-seo.mjs`: Sitemap und robots.txt vor jedem Build.
- `scripts/check-seo.mjs`: automatische Prüfung nach jedem Build; Fehler verhindern ein erfolgreiches Deployment.
- Bei Änderungen von Adresse, Telefon oder Öffnungszeiten die sichtbaren Angaben, strukturierten Daten und das Unternehmensprofil gemeinsam aktualisieren.
- Manuell ausführen: `npm run typecheck`, `npm run lint`, `npm run build`.
