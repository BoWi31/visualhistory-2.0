import { AnalysisStep, Checkpoint } from './freiheitfuehrtvolk';

export const AMPEL_FEEDBACK = {
  red: "❌ FALSCH: Das Foto ist kein Beweis für eine kriminelle Verbindung. Es zeigt lediglich zwei Personen am selben Ort zur selben Zeit.",
  yellow: "✅ RICHTIG (Beste Wahl): Das Foto ist ein authentisches Dokument eines sozialen Events. Es belegt eine Bekanntschaft oder gleichzeitige Anwesenheit, aber keine tiefergehende Beziehung oder gemeinsame Handlungen.",
  green: "⚠️ TEILWEISE RICHTIG: Das Foto ist 'echt' im Sinne von unmanipuliert, aber als Quelle für die Art der Beziehung ohne weitere Belege unzureichend."
};

export const EPSTEIN_TRUMP_STEPS: AnalysisStep[] = [
  {
    number: 1,
    icon: "📷",
    title: "Beschreiben",
    subtitle: "WAS ZEIGT DAS FOTO?",
    content: {
      level_easy: {
        description: "Beschreibe nur, was du wirklich auf dem Foto siehst. Achte auf die Personen und den Raum.",
        points: [
          "Wie viele Personen sind im Vordergrund zu sehen?",
          "Was tragen die Männer für Kleidung?",
          "Wie stehen die Personen zueinander (Körperhaltung)?",
          "Was kannst du über den Raum im Hintergrund sagen?"
        ],
        hints: ["Achte auf Anzüge und Krawatten.", "Schau auf das Lächeln und die Blickrichtung.", "Ist es hell oder dunkel?"],
        sentenceStarters: ["Auf dem Foto sehe ich...", "Die Männer tragen...", "Im Hintergrund erkennt man...", "Die Personen stehen..."]
      },
      level_medium: {
        description: "Erfasse die Bildelemente objektiv. Konzentriere dich auf Kleidung, Haltung und Umgebung.",
        points: [
          "Beschreibe die Kleidung und das äußere Erscheinungsbild der beiden Männer.",
          "Analysiere die Körperhaltung und Mimik: Wie wirken die Personen aufeinander?",
          "Welche Details im Hintergrund lassen auf den Ort oder den Anlass schließen?",
          "Beschreibe den Bildausschnitt und die Lichtverhältnisse."
        ],
        hints: ["Die Kleidung deutet auf eine formelle Veranstaltung hin.", "Achte auf die Armhaltung und den Abstand zwischen den Personen.", "Der goldene Dekor im Hintergrund ist typisch für Mar-a-Lago."],
        sentenceStarters: ["Im Zentrum des Bildes stehen...", "Die formelle Kleidung lässt vermuten, dass...", "Die Körperhaltung der Personen wirkt...", "Der Hintergrund ist geprägt durch..."]
      },
      level_hard: {
        description: "Führe eine detaillierte deskriptive Analyse durch. Berücksichtige Komposition und visuelle Signale.",
        points: [
          "Analysiere die Bildkomposition: Wie sind die Personen im Raum platziert?",
          "Welche nonverbalen Signale senden Mimik und Gestik aus?",
          "Beschreibe die Materialität und den Stil der Umgebung im Hintergrund.",
          "Untersuche die Lichtführung und deren Wirkung auf die Szenerie."
        ],
        hints: ["Es handelt sich um ein klassisches 'Posing'-Foto.", "Achte auf die Symmetrie oder Asymmetrie der Aufstellung.", "Das Blitzlicht deutet auf eine schnelle Aufnahme bei einem Event hin."],
        sentenceStarters: ["Die Bildkomposition zeichnet sich aus durch...", "Die nonverbale Kommunikation zwischen den Porträtierten...", "Die Umgebung im Hintergrund signalisiert...", "Licht und Schatten erzeugen eine Atmosphäre von..."]
      }
    }
  },
  {
    number: 2,
    icon: "❓",
    title: "Hypothesen",
    subtitle: "VERMUTUNGEN MARKIEREN",
    content: {
      level_easy: {
        description: "Was glaubst du, was hier passiert? Überlege dir verschiedene Möglichkeiten.",
        points: [
          "Hypothese A: Die Männer sind beste Freunde.",
          "Hypothese B: Die Männer kennen sich kaum und posieren nur für ein Foto.",
          "Gegenhypothese: Das Foto wurde zufällig bei einer großen Party gemacht.",
          "Welche Wörter zeigen, dass du dir nicht sicher bist?"
        ],
        hints: ["Nutze Wörter wie 'vielleicht' oder 'könnte'.", "Ein Foto zeigt nur eine Sekunde."],
        sentenceStarters: ["Ich vermute, dass...", "Es könnte sein, dass...", "Vielleicht sind sie...", "Eine andere Möglichkeit ist..."]
      },
      level_medium: {
        description: "Stelle mindestens zwei Hypothesen und eine Gegenhypothese auf. Markiere Vermutungen deutlich.",
        points: [
          "Formuliere eine Hypothese über die Beziehung der Personen.",
          "Formuliere eine Gegenhypothese (z.B. rein geschäftlich oder zufällig).",
          "Welche Details im Bild stützen deine Vermutungen?",
          "Warum ist es wichtig, hier im Konjunktiv (könnte, würde) zu sprechen?"
        ],
        hints: ["Hypothesen sind keine Fakten.", "Ein Lächeln für die Kamera muss keine echte Freude bedeuten."],
        sentenceStarters: ["Man könnte annehmen, dass...", "Dagegen spricht die Hypothese, dass...", "Es ist unklar, ob...", "Die Bildsituation lässt vermuten..."]
      },
      level_hard: {
        description: "Entwickle differenzierte Hypothesen und begründe, warum diese spekulativ bleiben müssen.",
        points: [
          "Entwickle eine Hypothese zur sozialen Dynamik in diesem Moment.",
          "Stelle eine Gegenhypothese auf, die den Event-Charakter betont.",
          "Analysiere, welche visuellen Beweise für oder gegen deine Thesen sprechen.",
          "Diskutiere die Gefahr von Vorurteilen bei der Betrachtung dieses speziellen Fotos."
        ],
        hints: ["Berücksichtige den Kontext eines Pressefotos.", "Vermeide 'Rückschaufehler' (Wissen von heute auf damals übertragen)."],
        sentenceStarters: ["Eine plausible Lesart wäre...", "Alternativ ließe sich argumentieren, dass...", "Die visuelle Evidenz für diese These ist jedoch...", "Es bleibt abzuwarten, ob weitere Quellen..."]
      }
    },
    checkpoint: {
      question: "Fakt oder Vermutung? Welche Aussage ist ein belegbarer Fakt?",
      options: [
        "Die beiden Männer sind enge Freunde.",
        "Zwei Männer stehen nebeneinander.",
        "Sie planen gerade ein Geschäft."
      ],
      correctIndex: 1,
      hint: "Ein Fakt ist nur das, was man direkt sehen oder durch die Quelle belegen kann."
    }
  },
  {
    number: 3,
    icon: "📜",
    title: "Historischer Kontext",
    subtitle: "PRESSEFOTOS UND PR",
    content: {
      level_easy: {
        description: "Lerne, was ein Pressefoto ist. Warum werden solche Fotos gemacht?",
        contextText: "Dieses Bild ist ein [[Pressefoto|Ein Foto, das für Zeitungen oder Werbung gemacht wird.]]. Es entstand 1997 bei einer Feier in [[Mar-a-Lago|Einem berühmten Club in Florida, der Donald Trump gehört.]]. Bei solchen Events werden oft hunderte Fotos von Gästen gemacht, die nebeneinander stehen. Das nennt man [[Posing|Sich extra für die Kamera hinstellen und lächeln.]]. Oft kennen sich die Leute auf den Fotos gar nicht gut.",
        points: [
          "Wer hat das Foto laut Bildunterschrift gemacht?",
          "Wo und wann wurde es aufgenommen?",
          "Warum lächeln Menschen auf Eventfotos oft?"
        ],
        hints: ["Schau in die Metadaten (Davidoff Studios).", "Eventfotos dienen oft der Selbstdarstellung."],
        sentenceStarters: ["Das Foto wurde im Jahr... aufgenommen.", "Der Ort ist...", "Ein Pressefoto dient dazu...", "Laut Bildunterschrift zeigt es..."]
      },
      level_medium: {
        description: "Verstehe die Funktion von Event- und Pressefotografie in der High Society.",
        contextText: "Das Foto stammt von den [[Davidoff Studios|Einem Fotostudio, das oft auf Partys in Palm Beach fotografiert.]]. Solche Aufnahmen sind typische [[PR-Fotos|Fotos für die Öffentlichkeitsarbeit, um Erfolg und Kontakte zu zeigen.]]. In den 1990er Jahren war es in Mar-a-Lago üblich, dass der Gastgeber mit vielen Gästen posierte. Die [[Bildunterschrift|Der Text unter dem Bild, der Infos zu Ort und Personen gibt.]] ist hier die wichtigste Quelle für das Datum (1997) und den Ort.",
        points: [
          "Erkläre die Funktion von Eventfotos für die beteiligten Personen.",
          "Warum ist die Bildunterschrift als Quelle wichtig, aber auch kritisch zu sehen?",
          "Warum werden solche Fotos oft erst Jahre später interessant für die Medien?"
        ],
        hints: ["Fotos erzeugen eine 'Anmutung von Nähe'.", "Die Quelle der Information ist Getty Images."],
        sentenceStarters: ["Im historischen Kontext von 1997 bedeutet dieses Foto...", "Die Rolle der Davidoff Studios war...", "Solche Eventfotos werden oft genutzt, um...", "Die Bildunterschrift liefert uns Fakten wie..."]
      },
      level_hard: {
        description: "Analysiere die Mechanismen der Bildproduktion und deren spätere Instrumentalisierung.",
        contextText: "In der Welt der Reichen und Mächtigen dienen Fotos als [[Soziales Kapital|Kontakte und Bekanntschaften, die den eigenen Status erhöhen.]]. Das Foto von 1997 ist ein Produkt dieser [[Event-Kultur|Veranstaltungen, bei denen das Sehen und Gesehenwerden im Vordergrund steht.]]. Kritisch ist, dass solche Bilder oft erst Jahrzehnte später aus dem Archiv geholt werden, um neue Geschichten zu erzählen. Dabei wird oft vergessen, dass ein Foto nur eine [[Momentaufnahme|Ein winziger Ausschnitt aus der Zeit, ohne Vorher und Nachher.]] ist.",
        points: [
          "Diskutiere den Unterschied zwischen einem Schnappschuss und einem inszenierten Eventfoto.",
          "Wie verändert sich die Bedeutung eines Bildes durch den zeitlichen Abstand?",
          "Welche Rolle spielen Bildagenturen wie Getty Images bei der Bewahrung solcher Quellen?"
        ],
        hints: ["Posing ist eine Form der visuellen Kommunikation.", "Kontextverlust ist eine Gefahr bei Archivbildern."],
        sentenceStarters: ["Die soziologische Bedeutung solcher Aufnahmen liegt in...", "Die Instrumentalisierung von Archivbildern erfolgt oft durch...", "Man muss berücksichtigen, dass die Bildproduktion...", "Der Quellenwert der Bildunterschrift ist insofern limitiert, als..."]
      }
    }
  },
  {
    number: 4,
    icon: "🔍",
    title: "Überprüfen der Hypothesen",
    subtitle: "PRÜFKRITERIEN ANWENDEN",
    content: {
      level_easy: {
        description: "Prüfe deine Ideen: Was stimmt wirklich? Was wissen wir nicht?",
        points: [
          "Können wir beweisen, dass sie Freunde sind? (Nein, das Foto reicht nicht).",
          "Stimmt das Datum? (Ja, laut Quelle Getty Images).",
          "Gibt es noch mehr Fotos von diesem Abend? (Das wäre eine gute Prüfung).",
          "Ist das Bild geschnitten (Cropping)?"
        ],
        hints: ["Ein Foto ist kein Vertrag.", "Suche nach anderen Quellen."],
        sentenceStarters: ["Die Hypothese, dass sie Freunde sind, kann man...", "Belegt ist durch die Quelle nur...", "Um sicher zu sein, müsste man...", "Ich habe gelernt, dass..."]
      },
      level_medium: {
        description: "Wende wissenschaftliche Prüfkriterien auf das Bild an.",
        points: [
          "Verifiziere Ort und Datum anhand der Agenturdaten.",
          "Untersuche, ob das Bild beschnitten wurde (Cropping) und ob dadurch Informationen fehlen.",
          "Suche nach Vergleichsquellen: Gab es an diesem Abend weitere Gäste?",
          "Warum beweist das Nebeneinanderstehen keine gemeinsame Handlung?"
        ],
        hints: ["Prüfe die Metadaten der Bildagentur.", "Ein Bildausschnitt kann den Fokus manipulieren."],
        sentenceStarters: ["Beim Abgleich mit der Quelle zeigt sich...", "Ein wichtiges Prüfkriterium ist...", "Gegen eine enge Verbindung spricht...", "Die Verifizierung von Ort und Zeit ergibt..."]
      },
      level_hard: {
        description: "Führe eine quellenkritische Verifizierung der aufgestellten Hypothesen durch.",
        points: [
          "Analysiere die Provenienz (Herkunft) des Bildes über Getty Images.",
          "Diskutiere die Limitationen der visuellen Evidenz bei Eventfotografie.",
          "Welche weiteren Quellen (Gästelisten, Berichte) wären nötig, um eine Hypothese zu beweisen?",
          "Inwiefern ist das 'Wissen von heute' ein Hindernis bei der objektiven Prüfung?"
        ],
        hints: ["Vermeide zirkuläre Beweisführung.", "Die Bildserie könnte mehr Aufschluss geben als das Einzelfoto."],
        sentenceStarters: ["Die quellenkritische Prüfung ergibt, dass...", "Die Limitation der visuellen Evidenz zeigt sich darin, dass...", "Zur Verifizierung der Hypothesen müssten zusätzlich...", "Ein methodischer Fehler wäre es, wenn..."]
      }
    }
  },
  {
    number: 5,
    icon: "🚦",
    title: "Beurteilung des Wahrheitsgehaltes",
    subtitle: "WAS IST BELEGBAR?",
    content: {
      level_easy: {
        description: "Trenne jetzt streng: Was wissen wir sicher? Was ist nur geraten?",
        points: [
          "Sicher: Zwei Männer sind 1997 am selben Ort.",
          "Nicht sicher: Sie arbeiten zusammen oder sind Freunde.",
          "Was fehlt uns noch für die ganze Wahrheit?"
        ],
        hints: ["Fakt vs. Meinung.", "Das Foto lügt nicht, aber es sagt nicht alles."],
        sentenceStarters: ["Belegbar durch das Foto ist...", "Nicht belegbar ist...", "Es ist unklar, ob...", "Mir fehlen Informationen über..."]
      },
      level_medium: {
        description: "Unterscheide präzise zwischen belegbaren Fakten und Interpretationen.",
        points: [
          "Liste alle Fakten auf, die durch das Foto und die Bildunterschrift belegt sind.",
          "Nenne drei Dinge, die oft behauptet werden, aber durch das Foto NICHT beweisbar sind.",
          "Welche Informationen fehlen uns (z.B. Anlass der Feier, Gesprächsinhalte)?",
          "Bewerte die Glaubwürdigkeit der Quelle 'Davidoff Studios'."
        ],
        hints: ["Belegbar: Anwesenheit, Kleidung, Ort (laut Quelle).", "Nicht belegbar: Absichten, Tiefe der Beziehung."],
        sentenceStarters: ["Streng belegbar ist lediglich...", "Eine bloße Vermutung bleibt hingegen...", "Für eine abschließende Beurteilung fehlen...", "Die Quelle belegt zwar die Anwesenheit, aber nicht..."]
      },
      level_hard: {
        description: "Erstelle eine quellenkritische Synthese und benenne die Leerstellen der Information.",
        points: [
          "Differenziere zwischen der visuellen Wahrheit des Moments und der behaupteten Wahrheit der Beziehung.",
          "Analysiere die 'Leerstellen' des Bildes: Was passiert außerhalb des Rahmens?",
          "Diskutiere die Zuverlässigkeit von Bildunterschriften als historische Primärquelle.",
          "Welche Metadaten wären für eine forensische Prüfung der Originaldatei nötig?"
        ],
        hints: ["Ein Foto ist ein Fragment der Realität.", "Die Bildunterschrift ist eine sekundäre Information zum Bild."],
        sentenceStarters: ["In der abschließenden Beurteilung muss man trennen zwischen...", "Die Leerstellen der Information betreffen vor allem...", "Die behauptete Wahrheit lässt sich nicht verifizieren, weil...", "Methodisch sauber ist nur die Feststellung, dass..."]
      }
    }
  },
  {
    number: 6,
    icon: "🌍",
    title: "Metaebene",
    subtitle: "MEDIENKOMPETENZ HEUTE",
    content: {
      level_easy: {
        description: "Warum ist dieses Foto heute ein Beispiel für 'Fake News' oder falsche Schlüsse?",
        points: [
          "Erkläre den Fehler: 'Sie stehen nebeneinander, also sind sie beide schuld'. Stimmt das?",
          "Warum teilen Menschen solche Bilder im Internet oft mit wütenden Texten?",
          "Was solltest du tun, bevor du ein solches Bild teilst?"
        ],
        hints: ["Das nennt man 'Kontaktschuld' (Guilt by association).", "Erst prüfen, dann teilen."],
        sentenceStarters: ["Ein typischer Denkfehler ist...", "Bilder werden im Netz oft genutzt, um...", "Bevor ich ein Bild teile, sollte ich...", "Ich habe gelernt, dass ein Foto kein..."]
      },
      level_medium: {
        description: "Reflektiere über den Umgang mit belastenden Bildern in sozialen Medien.",
        points: [
          "Was bedeutet der Begriff 'Guilt by association' (Kontaktschuld) in Bezug auf dieses Foto?",
          "Warum werden Bilder im Netz oft polarisiert (nur schwarz oder weiß) dargestellt?",
          "Stelle 3 Regeln auf, wie man Bilder im Internet prüfen sollte.",
          "Warum ist das Lernziel 'Kritische Bildbetrachtung' für die Demokratie wichtig?"
        ],
        hints: ["Polarisierung dient oft der Erzeugung von Klicks.", "Emotionen verhindern oft sachliche Prüfung."],
        sentenceStarters: ["Der Denkfehler der Kontaktschuld besagt, dass...", "Die Polarisierung im Netz führt dazu, dass...", "Meine Regeln für den Umgang mit solchen Bildern sind...", "Kritische Bildbetrachtung schützt davor, dass..."]
      },
      level_hard: {
        description: "Analysiere die Mechanismen der digitalen Empörung und die Rolle der Bildkritik.",
        points: [
          "Diskutiere die psychologische Wirkung von Bildern als 'scheinbare Beweise' in sozialen Medien.",
          "Wie nutzen Algorithmen die emotionale Aufladung solcher Archivbilder aus?",
          "Entwickle eine Strategie zur Deeskalation bei der Verbreitung von spekulativen Bildinhalten.",
          "Inwiefern ist die Trennung von Fakt und Interpretation eine Kernkompetenz im digitalen Zeitalter?"
        ],
        hints: ["Bilder wirken schneller als Text.", "Algorithmen bevorzugen kontroverse Inhalte."],
        sentenceStarters: ["Die psychologische Falle bei solchen Bildern ist...", "Digitale Algorithmen verstärken die Wirkung, indem...", "Eine verantwortungsbewusste Strategie wäre...", "Die Fähigkeit zur Bildkritik ist essenziell, weil..."]
      }
    }
  }
];

/**
 * MINI-PROTOKOLL (Copy-Paste):
 * 1) Beschreiben: Zwei Männer in Anzügen posieren 1997 lächelnd in einem Innenraum (Mar-a-Lago).
 * 2) Hypothesen: Es könnte eine enge Freundschaft oder eine rein zufällige Event-Begegnung sein.
 * 3) Historischer Kontext: Typisches PR-Eventfoto der 90er; Mar-a-Lago als Ort für soziale Vernetzung.
 * 4) Überprüfen der Hypothesen: Bildunterschrift belegt Ort/Zeit; visuelle Evidenz beweist keine tiefere Bindung.
 * 5) Beurteilung des Wahrheitsgehaltes: Belegbar ist die gleichzeitige Anwesenheit; unklar bleiben Absichten und Beziehung.
 * 6) Metaebene: Warnung vor 'Guilt by association'; Fotos sind Momentaufnahmen, keine absoluten Beweise.
 */

export const CHECKPOINT_FACT_OR_FICTION: Checkpoint = {
  question: "Fakt oder Vermutung? (Basierend auf der Quelle Getty Images)",
  options: [
    "Zwei Männer stehen nebeneinander. (Fakt)",
    "Sie sind enge Freunde. (Vermutung)",
    "Ort/Datum laut Bildunterschrift: Mar-a-Lago 1997. (Fakt)",
    "Sie planen ein Verbrechen. (Vermutung)",
    "Es ist ein Farbfoto in einem Innenraum. (Fakt)",
    "Einer der Männer hat den anderen eingeladen. (Unklar/Vermutung)"
  ],
  correctIndex: 0, // This is a bit different from the standard checkpoint, I'll adjust the UI call if needed or just use a standard one.
  hint: "Fakten sind direkt sichtbar oder durch die Quelle (Getty) belegt. Alles andere ist Interpretation."
};
