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

Die Website wird statisch ausgeliefert. Auf `/maria/` lädt der DW-Instagram-Player direkt ohne eigenes Platzhalterfoto. Am Seitenende lädt das Elfsight-Widget `eea1093c-dd61-4d51-a3f2-c1a335162a59` den Instagram-Feed nach. Die Datenschutzseite beschreibt beide externen Dienste. Telefonlinks öffnen die Telefonfunktion; es gibt kein Online-Buchungssystem.

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

## Inhalte bearbeiten

Die Inhalte stehen in `app/page.tsx` und den jeweiligen `app/*/page.tsx`. Gemeinsame Links finden sich in `app/site-config.ts`, Kopfzeile in `app/header.tsx`, Fußzeile und Besuchsbereich in `app/site-chrome.tsx`. Das gesamte Design liegt in `app/globals.css`. Fotos und Schriften liegen lokal in `public/assets/`.

Die fünf Fotos der Hero-Navigation liegen unter `public/assets/images/hero/`: Tee & Genuss → `/tee-genuss/`, Maria → `/maria/`, Geschenkbox → `/geschenkbox/`, Salon → `/salon/`, Veranstaltungen → `/veranstaltungen/`. Die Zuordnung entspricht den benannten Originaldateien der bereitgestellten Auswahl. Auf der Startseite gibt es außerhalb dieser Hero-Kacheln keine Fotos; die Markenlogos in Kopf- und Fußzeile bleiben erhalten. Der Besuchsbereich wird dort mit `withPhoto={false}` ausgegeben.

## Technik und Prüfung

React, TypeScript, Vinext (Next.js-kompatible Dateirouten) und statischer HTML-Export. Kein CMS und keine Datenbank erforderlich.

```sh
npm run typecheck
npm run lint
npm run build
```

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
