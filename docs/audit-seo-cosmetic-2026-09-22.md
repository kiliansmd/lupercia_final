# Kosmetik- und SEO-Audit vom 22.09.2026

Ausgangsstand: Produktions-Commit `e41fdab` von `kiliansmd/lupercia_final`. Untersucht wurden sämtliche neun Inhaltsseiten und die Fehlerseite in Deutsch, Englisch und Spanisch: 30 Seitenvarianten. Der Auftrag beschränkt sich auf Darstellung, Bedienbarkeit, Bildauslieferung und technische SEO.

## Inhaltserhalt

Ein Browservergleich aller 30 Seiten bestätigt identische Textknoten, Bildbeschreibungen, Links, Seitentitel und Meta-Beschreibungen vor und nach der Änderung. Ausgenommen vom Textvergleich ist ausschließlich der neu hinzugefügte CSS-Block innerhalb von `noscript`, der keine Besuchertexte enthält.

Der Übersetzungskatalog, sämtliche Originalbilder, Angebote, Preise, Termine, Öffnungszeiten, Kontaktangaben, Rechtstexte und bestehenden Zieladressen wurden nicht geändert. Es wurden keine Fotos generiert, Bildmotive ausgetauscht, Rezensionen ergänzt oder Geschäftsinformationen erfunden.

## Befunde und Umsetzung

| Bereich | Befund | Optimierung |
| --- | --- | --- |
| Fotos auf Startseite, Salon, Tee, Mate, Maria und Geschenkboxen | Viele Bilder wurden trotz kleiner Darstellung in voller Auflösung geladen. | Statische WebP-Größen mit echten `srcset`-Kandidaten, passenden `sizes`, erhaltenem Seitenverhältnis und Originaldatei als Fallback. |
| Logo im Header und Footer | Bestehende Logo-Dateien waren für ihre sichtbare Größe vergleichsweise groß. | Eigene hochqualitative Größen aus dem vorhandenen Logo; unverändertes Motiv. |
| Bereits responsive Detailfotos, u. a. Veranstaltungen | Funktionierende Größenvarianten vorhanden. | Beibehalten; die bestehende Quelle wird nicht unnötig ersetzt. |
| Ladeprioritäten | Auch eine nachfolgende Geschenk-Kachel wurde sofort geladen; Schriftdateien wurden erst nach CSS entdeckt. | Erste Bildkacheln bleiben direkt verfügbar, nachfolgende Bilder laden bedarfsgerecht. Zwei lokale Schriften werden vorgeladen. |
| Bild-Caching | Wiederholte Bildaufrufe können ohne Änderung erneut übertragen werden. | Inhaltsabhängige Dateinamen und einjähriges unveränderliches Caching ausschließlich für generierte Bildvarianten. Neue Bildinhalte erhalten neue Dateinamen. |
| Mobile Sprachwahl | Je nach Breite nur 24–27 px breite Ziele direkt neben dem Logo. | 44 × 44 px große Ziele in einer eigenen, mittigen Zeile unter dem Logo. Keine Überschneidung mit Logo oder Menü. |
| Footer und kleine Kontaktlinks | Einzelne Links hatten kleine Touch-Flächen. | Größere anklickbare Flächen; Footer-Bedienelemente mindestens 44 px hoch. |
| Tastaturfokus | Bildkachel-Fokus verwendete dieselbe dunkle Kontur wie helle Flächen; Eingabefelder waren nicht Teil der gemeinsamen Fokusregel. | Heller, innenliegender Fokus auf Fotos, zusätzliche äußere Kontur und konsistenter Fokus für Formularfelder. Unterstützung erzwungener Systemfarben bleibt erhalten. |
| Desktop-Bildnavigation | Kleine Zusatztexte auf den Kacheln. | Lesbarere Schriftgrößen für vorhandene Kacheluntertitel und Links. |
| Navigation ohne JavaScript | Das mobile Hauptmenü blieb verborgen, obwohl seine Links im HTML standen. | `noscript`-Darstellung zeigt die vorhandene mobile Navigation und blendet den funktionslosen Menüknopf aus. |
| Mehrsprachige Sitemap | Alle indexierbaren Sprachseiten vorhanden, aber keine Sprachgruppen oder Hauptbilder in der XML-Datei. | Gegenseitige DE/EN/ES-/x-default-Verweise sowie die bereits vorhandenen Hauptbilder ergänzt. |
| Strukturierte Daten | Dieselbe Website-Entität deklarierte je nach Seite eine andere einzelne Sprache. | Website nennt konsistent die drei unterstützten Sprachen; einzelne Seiten behalten ihre jeweilige Sprache. Bildbeschreibungen werden aus bestehenden SEO-Daten übernommen. |

## Bereits korrekt und deshalb beibehalten

- Eindeutige Titel und Beschreibungen, serverseitig gerendertes HTML, eine H1 je Seite, Canonicals, HTML-hreflang, Open Graph und Twitter-Metadaten.
- Bestehende Canonical-Domain, URL-Struktur, interne Verlinkung und Anker. Keine Domain- oder URL-Migration.
- Rechtliche Seiten und Fehlerseiten mit `noindex`; Rechtstexte bleiben für Suchmaschinen abrufbar. Die Sitemap enthält weiterhin ausschließlich die 21 indexierbaren Inhaltsseiten.
- Kontakt- und Öffnungszeitangaben in strukturierten Daten; keine erfundenen Preise, Veranstaltungen, Bewertungen, Koordinaten oder zusätzlichen Angebote.
- Datenschutz: keine externen Medien vor Einwilligung, bestehende Auswahl und Widerruf bleiben funktionsfähig.
- Keine gefundenen defekten internen Links, fehlenden Bilder, horizontalen Überläufe oder automatisiert erkannten Kontrastfehler im Ausgangsstand. Die Seiten wurden nicht pauschal umgestaltet.

## Messung

Vergleich der deutschen Startseite mit Lighthouse 13.5.0, mobile Standardeinstellungen, gleicher lokaler statischer Server und Browser. Einzelmessungen; der lokale Server komprimiert HTML/CSS/JavaScript nicht wie Vercel. Die Werte sind deshalb ein kontrollierter lokaler Vorher-nachher-Vergleich und keine Aussage über reale Nutzer-Perzentile.

| Messgröße | Vorher | Nachher |
| --- | ---: | ---: |
| Übertragene Bilddaten | 1.409 kB | 445 kB |
| Insgesamt übertragene Daten | 2.236 kB | 1.253 kB |
| Largest Contentful Paint | 10,6 s | 7,5 s |
| First Contentful Paint | 5,3 s | 4,7 s |
| Layoutverschiebung (CLS) | 0,066 | 0 |
| Total Blocking Time | 0 ms | 0 ms |
| Lighthouse Performance | 61 | 64 |
| Lighthouse Accessibility / Best Practices / SEO | 100 / 100 / 100 | 100 / 100 / 100 |

Die Bildübertragung sinkt in dieser Messung um rund 68 %, die Gesamtübertragung um rund 44 %. Die Live-Ausgangsmessung auf Vercel ergab separat 76 Performance-Punkte und 100/100/100 für die übrigen Kategorien; sie wird nicht mit dem unkomprimierten lokalen Ergebnis gleichgesetzt. Ein bereits bestehender SEO-Score von 100 ist keine Aussage über Rankings oder die vollständige Suchmaschinenqualität.

## Validierung

- TypeScript, Lint und statischer Produktionsbuild erfolgreich.
- Alle 587 Übersetzungseinträge, 30 HTML-Seiten, 924 interne Links, Metadaten, hreflang, strukturierte Daten und Sitemap geprüft.
- 176 generierte Bildkandidaten aus 36 vorhandenen Ausgangsbildern: Existenz, tatsächliche Breite, Dateiformat und unverändertes Seitenverhältnis geprüft.
- Alle 30 Seiten bei sechs Breiten (320, 375, 760, 761, 1024 und 1440 px): keine horizontalen Überläufe oder fehlerhaften Bildanfragen.
- Automatischer axe-Audit der zehn deutschen Seitentypen: keine erkannten Verstöße. Zusätzliche Sichtprüfung der Desktop- und Mobilansichten; alle Sprachfassungen im Layoutvergleich enthalten.
- Dynamischer Sprachwechsel, geöffnete Veranstaltungsdetails, mobile Navigation, Escape, Datenschutzdialog und mobile Navigation ohne JavaScript erfolgreich geprüft.
- Abschließender Inhaltsvergleich aller 30 Seiten ohne Unterschiede.

## Abgegrenzte weitere Potenziale

Der Lighthouse-Test weist weiterhin auf gemeinsam geladenes Framework-JavaScript und CSS für mehrere Seitentypen hin. Eine größere Aufteilung der Laufzeit oder ein Frameworkwechsel wären eine eigene Architekturarbeit mit umfassenderen Regressionstests. Sie wurden nicht als kosmetische Änderung durchgeführt. Reale Core-Web-Vitals, Indexierungsstatus und Suchanfragen lassen sich nur mit entsprechenden Felddaten bzw. Search-Console-Zugriff bewerten; daraus werden hier keine Ergebnisse abgeleitet. Inhaltliche Keyword-Erweiterungen, neue Landingpages und erfundene strukturierte Geschäftsdaten sind ausdrücklich nicht Teil dieser Änderung.

## Technische Referenzen

- [Google: Bild-SEO](https://developers.google.com/search/docs/appearance/google-images)
- [Google: Sprachvarianten und Sitemap](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [web.dev: responsive Bilder](https://web.dev/learn/design/responsive-images)
- [web.dev: Ladeprioritäten](https://web.dev/articles/fetch-priority)
