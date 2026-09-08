# Technische Go-live-Prüfung · 8. September 2026

## Metadaten und Vorschaugrafiken

- Alle acht Inhaltsseiten haben individuelle Titel, Beschreibungen, kanonische HTTPS-URLs sowie vollständige Open-Graph- und Twitter-Card-Metadaten im ausgelieferten HTML. Kein JavaScript ist zum Auslesen nötig.
- Eigene JPEG-Vorschaugrafiken im Format 1200 × 630 Pixel, jeweils ca. 109–142 KB. Zentrales, vollständig sichtbares Logo mit Abstand zu den Bildrändern; zusätzlich visuell im quadratischen Mittelausschnitt kontrolliert. Seitlich passende Fotografien, lokale Markenschriften und konsistente Farben.
- Browser-Icons in 32/192 Pixeln und Apple-Touch-Icon in 180 Pixeln, jeweils mit vollständig eingepasstem Logo.
- Die sechs redaktionellen Seiten bleiben indexierbar und in der Sitemap. Impressum, Datenschutz und Fehlerseite bleiben `noindex`; rechtliche Seiten dürfen weiterhin gecrawlt werden.
- Die Fehlerseite erhält einen eigenen Titel und eine passende Beschreibung.
- Strukturierte lokale Unternehmensdaten, Breadcrumbs, Adresse, Telefon und Öffnungszeiten bleiben konsistent. Die redaktionellen Fotografien in den strukturierten Daten bleiben von den eigens gestalteten Social Cards getrennt.

Die Felder orientieren sich am [Open Graph Protocol](https://ogp.me/). Die konkrete Darstellung und das erneute Einlesen bereits geteilter Links liegen bei der jeweiligen Plattform. Neue, inhaltsabhängige Bilddateinamen vermeiden die Wiederverwendung alter Bild-URLs.

## Ausgeführte Prüfungen

- TypeScript und Lint ohne Fehler; erfolgreicher Produktionsbuild.
- Automatische Prüfung von neun HTML-Seiten, 226 internen Links, Sprungmarken, Überschriften, kanonischen URLs, Indexierbarkeit, strukturierten Daten und Sitemap.
- Zusätzliche Prüfung aller acht Social-Metadatensätze, Bild-Alternativtexte, tatsächlicher JPEG-Abmessungen und maximaler Dateigröße von 300 KB. Lokale Bildvarianten, Skripte, Stylesheets und Icons müssen im Export vorhanden sein.
- Vier Datenschutztests bestanden: ungültige/abgelaufene Auswahl, getrennte Einwilligungen und Widerruf, isolierter Feed sowie keine externen Skripte oder eingebetteten Medien im HTML vor Einwilligung.
- Browserprüfung aller acht Seiten bei 396, 771 und 1167 CSS-Pixeln: keine horizontale Überbreite und keine fehlgeschlagenen geladenen Bilder. Mobile Navigation geöffnet; Datenschutzdialog geöffnet, Ablehnung gespeichert und Fortbestand nach erneutem Aufruf kontrolliert.
- Startseite zusätzlich bei 353 CSS-Pixeln kontrolliert: unter 360 Pixeln einspaltig, bei 396 Pixeln zwei Fotospalten.
- Sicherheitsupdates für React, React DOM/RSC, Vinext, Vite, Sharp und zugehörige Build-Werkzeuge. Paketprüfung nach Installation: keine bekannten Schwachstellen gemeldet.

Die Browserprüfung nutzt simulierte Ansichtsgrößen und ersetzt keine Prüfung auf jedem physischen Endgerät. Die tatsächliche Verfügbarkeit von Instagram-/Elfsight-Inhalten hängt zusätzlich vom Anbieter und den Datenschutzeinstellungen des Besuchers ab. Die in `Datenschutz-Umsetzung.md` dokumentierten organisatorischen Punkte bleiben separat zu klären.

## Wartung

Die Bildauswahl und Beschriftung stehen in `scripts/social-preview.config.json`. `npm run build` erstellt die Grafiken und das Metadatenmanifest automatisch vor dem Export. Die Generator-Abhängigkeiten und Fonts sind lokal und versioniert. Der Build bricht bei fehlerhaften Metadaten oder fehlenden Assets ab.

Veröffentlichung erfolgt über `main` im Repository `kiliansmd/lupercia_final` und die bestehende Vercel-Git-Integration. Nach Veröffentlichung sind die acht Seiten, Vorschaugrafiken, Icons, Sitemap, robots.txt und der HTTP-404-Status am öffentlichen Host zu prüfen.
