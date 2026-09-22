# Lupercia — Tee. Genuss. Begegnung.

Vollständige Website für den Teesalon von Maria Moreno in Bonn. Die Texte und Medien stammen aus der bestehenden Lupercia-Website; die Gestaltung orientiert sich an der großzügigen Fotografie, Typografie und dem redaktionellen Aufbau von Lula Cafe.

## Lokal starten

Voraussetzung: Node.js 24 und npm.

```sh
npm ci
npm run dev
```

Anschließend **http://127.0.0.1:4173/** öffnen.

## Fertige statische Website

```sh
npm run build
npm start
```

`dist/client/` enthält nach dem Build die fertige Website mit allen Seiten, Fotos, Schriften und JavaScript-Dateien. `npm start` stellt diesen Ordner lokal bereit. Der Entwicklungsserver muss vorher beendet werden, wenn er denselben Port belegt. Ein anderer Port ist mit `PORT=4174 npm start` möglich.

Die Website wird statisch ausgeliefert. Auf `/maria/` werden das DW-Instagram-Video und der Instagram-Feed von Elfsight erst nach der jeweiligen Einwilligung geladen. Diese Auswahl lässt sich in den Datenschutzeinstellungen jederzeit widerrufen. Die Datenschutzseite beschreibt beide externen Dienste. Telefonlinks öffnen die Telefonfunktion; es gibt kein Online-Buchungssystem.

## Veröffentlichung auf Vercel

- Einziges Live-Repository: https://github.com/kiliansmd/lupercia_final
- Live-Website: https://lupercia.meindigitalerbetrieb.de
- Vercel-Projekt: `v0-lupercia-website-design`
- Produktionsbranch: `main`

Vercel ist mit diesem Repository verbunden. Änderungen auf `main` werden automatisch veröffentlicht. Das bisherige Repository `lupercia_website` ist vom Live-Projekt getrennt.

`vercel.json` konfiguriert den Framework-Preset Other, `npm ci`, Typprüfung, Lint, Build und das Ausgabeverzeichnis `dist/client`. `cleanUrls` ermöglicht direkte Unterseitenaufrufe ohne `.html`. Alle Quelldateien, Medien und die Lockdatei liegen im Repository. Abhängigkeiten und generierte Dateien werden beim Build erstellt. Eigene Umgebungsvariablen, Serverfunktionen und eine Datenbank sind nicht erforderlich.

## Seiten

- `/` — fotografische Startseite
- `/salon/` — Salon, Tea Time und Besuchsinformationen
- `/tee-genuss/` — Tee, Geschirr und Feinkost
- `/mate/` — Mate aus Argentinien, Yerbas, Kalebassen und Bombillas
- `/maria/` — Maria Moreno und die Geschichte des Namens Lupercia
- `/veranstaltungen/` — Teerunden, Workshops und Kultur; zugängliche Aufklappbereiche
- `/geschenkbox/` — Inhalte, Ablauf und persönliche Anfrage
- `/impressum/` und `/datenschutz/`
- Eigene Fehlerseite für unbekannte Adressen

## Sprachen

Die Sprachwahl **DE / EN / ES** ist auf jeder Seite im Header sichtbar, auch mobil. Sie wechselt den gesamten Seiteninhalt ohne Neuladen. Geöffnete Menüs und Veranstaltungsdetails sowie die Datenschutzauswahl bleiben erhalten. Die Sprache steht in der URL: Deutsch behält die bestehenden Adressen, Englisch liegt unter `/en`, Spanisch unter `/es` (z. B. `/es/mate`). Interne Links behalten die Sprache bei; Suchparameter und Anker bleiben beim Sprachwechsel erhalten. Zurück/Vorwärts im Browser funktioniert ebenfalls. Eine zusätzliche Speicherung oder ein Übersetzungsdienst ist nicht erforderlich.

Alle neun Inhaltsseiten und die Fehlerseite werden in drei Sprachen als HTML vorgerendert. Damit sind auch direkte Aufrufe und die Sprachlinks ohne JavaScript nutzbar. Übersetzt sind außerdem Navigation, Bildbeschreibungen, Cookie-/Datenschutzdialoge, Rechtstexte, Metadaten, strukturierte Daten und Social-Media-Vorschaubilder. Externe Instagram-Beiträge und Texte in vorhandenen Produktfotos bleiben im Original.

`locales/catalog.json` enthält die englischen und spanischen Texte, zugeordnet zum deutschen Ausgangstext. Neue sichtbare Texte werden mit `t('Deutscher Ausgangstext')` eingebunden; beide Übersetzungen müssen im Katalog ergänzt werden. `app/i18n-core.ts` enthält die gemeinsamen Sprach- und URL-Funktionen, `app/i18n.tsx` die dynamische Umschaltung. Die Sprachrouten in `app/en/` und `app/es/` verwenden dieselben Inhaltskomponenten wie die deutschen Seiten. Jede Seite besitzt eine eigene kanonische Adresse, Sprachalternativen (`hreflang`) und ein passendes Vorschaubild.

## Inhalte bearbeiten

Die deutschen Ausgangstexte stehen in `app/content.tsx` und den jeweiligen `app/*/content.tsx`. Die `page.tsx`-Dateien verbinden diese gemeinsamen Komponenten mit den Metadaten der jeweiligen Sprache. Gemeinsame Links finden sich in `app/site-config.ts`, Kopfzeile in `app/header.tsx`, Fußzeile und Besuchsbereich in `app/site-chrome.tsx`. Das gesamte Design liegt in `app/globals.css`. Fotos und Schriften liegen lokal in `public/assets/`.

Die fünf Fotos der Hero-Navigation liegen unter `public/assets/images/hero/`: Tee & Genuss → `/tee-genuss/`, Maria → `/maria/`, Geschenkbox → `/geschenkbox/`, Salon → `/salon/`, Veranstaltungen → `/veranstaltungen/`. Die Zuordnung entspricht den benannten Originaldateien der bereitgestellten Auswahl. Auf der Startseite gibt es außerhalb dieser Hero-Kacheln keine Fotos; die Markenlogos in Kopf- und Fußzeile bleiben erhalten. Der Besuchsbereich wird dort mit `withPhoto={false}` ausgegeben.

## Bildauslieferung und Bedienbarkeit

`npm run dev` und `npm run build` erzeugen mit `scripts/generate-responsive-images.mjs` passende WebP-Größen aus den vorhandenen Originalbildern. Die Originaldateien, Bildmotive und Bildbeschreibungen bleiben erhalten. `app/responsive-image.tsx` liefert echte `srcset`-Kandidaten und passende `sizes` aus; die vorhandenen Detailfotos behalten ihre responsiven Quellen. `app/responsive-images.json` enthält das erzeugte Manifest. `public/assets/responsive/` wird beim Build erzeugt und nicht eingecheckt. Inhaltsabhängige Dateinamen erlauben langes Browser-Caching ohne veraltete Bilder nach einer Änderung.

Die Sprachwahl und Footer-Bedienelemente haben größere Touch-Flächen. Die mobile Sprachwahl sitzt als kompaktes natives Auswahlfeld rechts neben dem Logo unter dem Menüknopf. Sie bleibt auch bei 320 px erreichbar, ohne eine eigene Zeile unter dem Logo zu benötigen. Ohne JavaScript stehen weiterhin direkte Sprachlinks zur Verfügung. Tastaturfokus wird auf Bildkacheln und Formularfeldern sichtbar hervorgehoben. Die mobile Hauptnavigation ist auch ohne JavaScript zugänglich. Schriftdateien werden lokal vorgeladen.

Die Sitemap enthält dieselben indexierbaren Seiten wie zuvor, ergänzt um gegenseitige Sprachverweise und vorhandene Hauptbilder. Website-Schema und seitenbezogene Sprachangaben sind konsistent. Die Build-Prüfungen kontrollieren zusätzlich Bildabmessungen, Seitenverhältnisse und Sitemap-Verweise.

## Technik und Prüfung

React, TypeScript, Vinext (Next.js-kompatible Dateirouten) und statischer HTML-Export. Kein CMS und keine Datenbank erforderlich.

```sh
npm run typecheck
npm run lint
npm run check:i18n
npm run build
```

`npm run build` prüft vorab die Vollständigkeit des Übersetzungskatalogs und anschließend SEO, Sprachadressen, interne Links und das datenschutzfreundliche HTML aller 30 Seitenvarianten. Fehlende Übersetzungen oder unübersetzte JSX-Texte und beschreibende Attribute brechen den Build ab.

Die responsive Navigation unterstützt Tastatur und Escape. Veranstaltungsdetails verwenden native HTML-Details. Bewegungsreduktion, sichtbare Fokuszustände, Bildbeschreibungen und ein Sprunglink zum Hauptinhalt sind berücksichtigt.

## Quellen und redaktionelle Entscheidungen

- Inhalte und Medien: https://lupercia.meindigitalerbetrieb.de/ und die dort verlinkten Inhaltsseiten, gelesen am 08.09.2026.
- Gestalterische Referenz: https://www.lulacafe.com/. Es werden keine Lula-Bilder, Logos oder Texte verwendet.
- Lupercias eigene Fotos, botanische Illustration, Favicon und lokale Schriften wurden aus der Ausgangswebsite übernommen. Nutzungsrechte richten sich nach den bestehenden Originalrechten; es wird keine neue Lizenz behauptet.
- Mate bleibt ein persönlicher Schwerpunkt innerhalb einer breiteren Teewelt.
- Die Lebensgeschichte und wörtlich gekennzeichneten Aussagen sind der Maria-Seite entnommen.
- Die uneinheitlichen Veranstaltungslisten wurden zusammengeführt. Konkrete Termine, Preise und freie Plätze werden bei Maria angefragt.
- Die Feinkostliste wurde dem passenden Sortimentsteil zugeordnet.
- Die Geschenkbox-Abbildung bleibt ausdrücklich als Beispiel gekennzeichnet.
- Rechtliche Angaben wurden aus der bestehenden Website übernommen und an die tatsächlich eingebundenen Dienste angepasst. Die Website wird auf Vercel bereitgestellt.
