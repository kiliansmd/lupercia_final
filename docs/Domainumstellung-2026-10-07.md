# Domainumstellung auf lupercia.de

Ziel vom 07.10.2026: Alle indexierbaren Sprach- und Inhaltsseiten verwenden ausschließlich `https://lupercia.de` als kanonischen Host. Seitenpfade, Inhalte, Titel und Sprachstruktur bleiben erhalten.

## Konfiguration

- `seo.config.json`: `origin` ist `https://lupercia.de`. Daraus entstehen Canonicals, hreflang, Open Graph, Vorschaubild-URLs und strukturierte Daten.
- `scripts/generate-seo.mjs` erzeugt Sitemap und robots.txt mit derselben Hauptdomain. Die Sitemap enthält die 21 indexierbaren Inhaltsseiten in Deutsch, Englisch und Spanisch.
- Vercel-Projekt: `v0-lupercia-website-design`, Repository: `kiliansmd/lupercia_final`, Produktionsbranch: `main`.
- Domain-Ziel in Vercel: `lupercia.de` liefert Production aus; `www.lupercia.de` und `lupercia.meindigitalerbetrieb.de` leiten dauerhaft mit HTTP 308 auf `lupercia.de` weiter. Unterseiten und Suchparameter müssen erhalten bleiben.
- Bestehender Vercel-Authentifizierungsschutz für Deployment-Adressen bleibt aktiv.
- `app/layout.tsx` enthält das von Google bereitgestellte öffentliche Verifizierungs-Meta-Tag für die Search-Console-Property `https://lupercia.de/`. Dieses Tag zur Aufrechterhaltung der Bestätigung beibehalten; es lädt keine Skripte und aktiviert kein Tracking.

Die alte Subdomain dient nur noch als Weiterleitung. Ihre Domain-Zuordnung, DNS-Auflösung und TLS-Versorgung mindestens ein Jahr, möglichst dauerhaft, beibehalten. Eine sofortige Löschung würde bestehende Links unterbrechen und die Übertragung von Suchsignalen erschweren. Die Weiterleitung darf nicht durch eine robots.txt-Sperre oder eine vorgeschaltete noindex-Seite ersetzt werden.

## Veröffentlichung prüfen

1. Typprüfung, Lint und vollständigen Build einschließlich vorhandener SEO-Prüfung ausführen.
2. `https://lupercia.de` und alle 21 Sitemap-Adressen müssen direkt HTTP 200 mit passenden Canonicals liefern.
3. Alte Subdomain und www-Adresse müssen Startseite, Unterseiten und Sprachpfade mit HTTP 308 auf dieselben Pfade der Hauptdomain weiterleiten; Suchparameter bleiben erhalten.
4. Sitemap, robots.txt, Canonicals, hreflang und strukturierte Daten dürfen keine alte Subdomain enthalten.
5. Impressum und Datenschutz bleiben erreichbar und noindex; unbekannte URLs liefern weiterhin HTTP 404.

## Google Search Console

Erfordert Zugriff auf die passenden Search-Console-Properties; Vercel allein meldet keinen Domainumzug an Google.

- Neue Property für `lupercia.de` verifizieren und `https://lupercia.de/sitemap.xml` einreichen.
- Wichtige neue URLs mit der URL-Prüfung kontrollieren und gegebenenfalls Indexierung beantragen.
- Falls für die verifizierte alte Property verfügbar, die Adressänderung von `lupercia.meindigitalerbetrieb.de` auf `lupercia.de` melden.
- Indexierung, von Google gewählte Canonicals und Suchleistung in beiden Properties beobachten.
- Website-Adresse im Google-Unternehmensprofil und in selbst verwalteten Branchenverzeichnissen auf `https://lupercia.de` aktualisieren.

Google verarbeitet den Wechsel erst durch erneutes Crawlen. Alte Treffer können vorübergehend sichtbar bleiben; ein unverändertes Ranking ist nicht garantierbar. Keine temporäre Entfernung der alten URLs als Ersatz für die dauerhafte Weiterleitung verwenden.

Quellen: [Google: Websiteumzug](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [Google: kanonische URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [Vercel: Domain-Weiterleitungen](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting).
