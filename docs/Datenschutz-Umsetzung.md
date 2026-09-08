# Datenschutz-Umsetzung · 8. September 2026

## Umgesetzt

- `/impressum`: bestätigte Betreiberangaben von Maria Moreno, ladungsfähige Anschrift, Telefon und E-Mail. Keine erfundenen Register-/Steuerdaten. Bestehende Erklärung zur Verbraucherstreitbeilegung beibehalten; kein veralteter OS-Plattform-Link.
- `/datenschutz`: konkrete Website-Funktionen, Verantwortliche, Hosting, Zwecke/Rechtsgrundlagen, Empfänger, internationale Übermittlungen, Speicherfristen bzw. Kriterien, Kontaktanfragen und Betroffenenrechte.
- Eigener Consent-Mechanismus ohne zusätzliches CMP-Skript und ohne Trackingkennung. Erste Ebene: gleichwertiges Ablehnen, Anpassen, Akzeptieren. Notwendige Funktionen immer verfügbar; zwei optional getrennte Dienste standardmäßig aus.
- Auswahl in `lupercia:privacy:v1`, Version 1, Zeitstempel und feste Gültigkeit von 180 Tagen, kein serverseitiges Einwilligungsprotokoll. Ungültige, veraltete oder abgelaufene Angaben führen zu gesperrten Diensten. Änderungen werden zwischen geöffneten Tabs synchronisiert. Ohne Browser-Speicherung nur für den aktuellen Seitenaufruf.
- Native Dialog-Bedienung mit Tastatur, Fokus-Rückgabe und Escape. Permanenter Widerrufseinstieg im Footer und in der Datenschutzerklärung.
- Instagram-Player und Elfsight-Galerie werden erst nach Einwilligung gemountet. Elfsight läuft in einem eigenen Browser-Frame. Beim Widerruf werden die vollständigen Frames entfernt, einschließlich laufendem Drittanbieter-JavaScript. Keine Vorab-Preconnects und keine externe Consent-Plattform.
- Der lokale Feed-Frame lädt auch bei direktem URL-Aufruf kein Elfsight-Skript: Erst eine Nachricht des autorisierten Elternfensters aktiviert ihn. Der Frame ist `noindex`.
- Drittanbieter-Cookies und bereits verarbeitete Daten können nicht durch die Website rückwirkend gelöscht werden; dieser Unterschied wird erklärt.
- Tests: fehlerhafte/abgelaufene/future Consent-Daten, unabhängige Auswahl, Widerruf-Datensatz, gesicherter Feed-Handshake und Prüfung aller statischen HTML-Seiten auf vorzeitige externe Einbettungen. `npm run build` führt SEO- und Datenschutz-Prüfungen aus.

## Noch vom Betreiber / rechtlich zu prüfen

Die Umsetzung ist keine anwaltliche Freigabe und kein Nachweis einer vollständigen DSGVO-Konformität des Betriebs.

1. Betreiber hat die angefragten Kontaktangaben mit „alles korrekt“ bestätigt. Falls eine USt-IdNr., Wirtschafts-IdNr. oder Registereintragung vorhanden ist, müssen deren konkrete Angaben ergänzt werden. Keine gewöhnliche Steuernummer veröffentlichen. Erklärung zur fehlenden Teilnahme an Verbraucherschlichtung mit tatsächlicher Geschäftspraxis abgleichen.
2. Vercel-Vertragsbeziehung und Hosting-Verantwortung zwischen Maria und dem Agentur-/Teamkonto überprüfen, einschl. Art.-28-Vertragskette, relevanten Pro-/Enterprise-Bedingungen, konkreter Log-Aufbewahrung und Unterauftragnehmern. Ein abgeschlossener AV-Vertrag wurde nicht behauptet. Vercel selbst erklärt DPF-Teilnahme; dies ersetzt die Vertragsprüfung nicht.
3. Elfsight nennt aktuell **Elfsight SL, Andorra**. Alte Angaben zu Elfsight LLC in Armenien sind überholt. Laut offizieller Hilfe vom 7. September 2026 bietet Elfsight derzeit **keinen DPA/AV-Vertrag** an. Rolle und Erforderlichkeit eines Art.-28-Vertrags für den konkreten Galerie-Einsatz juristisch prüfen; wenn erforderlich und nicht beschaffbar, Anbieter ersetzen. Eine Cookie-Einwilligung heilt keine fehlenden sonstigen Voraussetzungen. Cookie-Deaktivierung beim Anbieter ist optional möglich, wird hier aber nicht als erfolgt behauptet.
4. Weitere nicht im Repository erkennbare Dienste, E-Mail-Anbieter, tatsächliche Speicher-/Löschprozesse, Bild-/Persönlichkeitsrechte und etwaige zusätzliche Informationspflichten betrieblich abgleichen. Die Frage nach weiteren Diensten/Verträgen blieb bei Umsetzung zunächst unbeantwortet.
5. Nachweis der Einwilligung gemäß Art. 7 Abs. 1 DSGVO prüfen: Die datensparsame Browser-Auswahl und versionierte Implementierung sind kein manipulationssicheres serverseitiges Auditprotokoll. Bei entsprechenden Nachweisanforderungen einen geeigneten dokumentierten Prozess/CMP einsetzen.
6. Bei neuen Diensten, geänderten Zwecken oder wesentlichen Änderungen der Informationen `CONSENT_VERSION` erhöhen und Texte aktualisieren; vorhandene Einwilligungen nicht automatisch erweitern.

## Quellen

- [DDG § 5](https://www.gesetze-im-internet.de/ddg/__5.html)
- [TDDDG § 25](https://www.gesetze-im-internet.de/ttdsg/__25.html)
- [DSGVO, insbesondere Art. 6, 7, 13, 15–22, 28, 44 ff. und 77](https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679)
- [DSK: Orientierungshilfe für Anbieter digitaler Dienste](https://www.datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf)
- [Vercel DPA](https://vercel.com/legal/dpa) und [Privacy Notice](https://vercel.com/legal/privacy-notice)
- [Elfsight Datenschutz](https://elfsight.com/privacy-policy/), [Kontakt/aktuelle Gesellschaft](https://elfsight.com/contact/), [GDPR-Hilfe, Cookie-Laufzeit und fehlender DPA](https://help.elfsight.com/article/418-elfsight-and-gdpr)
- [EU-Kommission: Angemessenheitsbeschlüsse, einschließlich Andorra](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en)
- [Meta/Instagram Datenschutz](https://privacycenter.instagram.com/policy/) und [Cookie-Richtlinie](https://www.instagram.com/legal/cookies/) (automatischer Abruf eingeschränkt)
- [LDI NRW Kontakt](https://www.ldi.nrw.de/kontakt)
