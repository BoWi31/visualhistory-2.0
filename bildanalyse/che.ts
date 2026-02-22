import { AnalysisStep } from './freiheitfuehrtvolk';

export const INSTRUCTION_HINT = "HINWEIS: Wir arbeiten respektvoll. Trenne Beobachtung und Meinung.";

export const AMPEL_FEEDBACK = {
  red: "❌ FALSCH: Das Bild ist kein Fake. Es ist ein echtes Foto von 1960. Aber: Es zeigt nur einen winzigen Ausschnitt der Realität. Rot wäre falsch, da das Foto an sich 'echt' ist.",
  yellow: "✅ RICHTIG: Das Foto ist eine Inszenierung durch Weglassen. Der Fotograf Alberto Korda hat das Originalbild stark zugeschnitten. Alle anderen Personen wurden entfernt, damit Che wie ein einsamer Held wirkt. Es ist belegbar für sein Aussehen, aber nicht für seinen Charakter.",
  green: "⚠️ TEILWEISE RICHTIG: Grün passt nur, wenn man sagt: 'Das Foto zeigt exakt, wie Che Guevara in diesem einen Moment aussah.' Aber Vorsicht: Ein Foto beweist keine politischen Ideen."
};

export const CHE_STEPS: AnalysisStep[] = [
  {
    number: 1,
    icon: "📐",
    title: "BESCHREIBEN",
    subtitle: "WAS IST SICHTBAR?",
    content: {
      level_easy: {
        description: "Schau das Porträt genau an. Beschreibe nur, was du wirklich siehst.",
        points: ["Was trägt der Mann auf dem Kopf?", "In welche Richtung blickt er?", "Wie ist der Hintergrund gestaltet?", "Wie ist der Kontrast (hell/dunkel)?"],
        hints: ["Suche den Stern auf der Mütze.", "Schau dir seine Haare an.", "Ist der Hintergrund scharf oder unscharf?"],
        sentenceStarters: ["Auf dem Bild sehe ich...", "Der Mann trägt...", "Sein Blick geht nach...", "Der Hintergrund ist..."]
      },
      level_medium: {
        description: "Analysiere die Bildgestaltung. Was ist im Bildzentrum?",
        points: ["Beschreibe die Kleidung und die Kopfbedeckung.", "Wie wirkt der Gesichtsausdruck des Mannes?", "Welche Rolle spielen Licht und Schatten in diesem Porträt?", "Wie viel Platz nimmt der Mann im Bild ein?"],
        hints: ["Das Barett ist eine typische Kopfbedeckung.", "Achte auf die Falten um seine Augen.", "Der Fokus liegt ganz auf dem Gesicht."],
        sentenceStarters: ["Im Zentrum des Porträts steht...", "Die Beleuchtung sorgt dafür, dass...", "Die Perspektive wirkt...", "Besonders auffällig ist..."]
      },
      level_hard: {
        description: "Untersuche die Komposition und die ästhetischen Merkmale.",
        points: ["Analysiere den Bildausschnitt (Nahaufnahme).", "Welche Wirkung erzielt der leicht untersichtige Blick (von unten nach oben)?", "Beschreibe die Beschaffenheit des Hintergrunds und seine Funktion.", "Welche Symbole lassen sich identifizieren?"],
        hints: ["Die Untersicht lässt Personen oft heroischer wirken.", "Der Stern ist ein Symbol für einen militärischen Rang.", "Der Kontrast betont die Gesichtszüge."],
        sentenceStarters: ["Die Komposition zeichnet sich aus durch...", "Durch die untersichtige Perspektive entsteht der Eindruck von...", "Der neutrale Hintergrund bewirkt eine...", "Die Kontrastführung unterstreicht..."]
      }
    }
  },
  {
    number: 2,
    icon: "🔍",
    title: "HYPOTHESEN",
    subtitle: "WIRKUNG UND VERMUTUNG",
    content: {
      level_easy: {
        description: "Was denkst du über den Mann? Wie wirkt er auf dich?",
        points: ["Sieht der Mann wie ein Kämpfer aus? Warum?", "Wirkt er eher traurig, wütend oder stolz?", "Was könnte er gerade denken?", "Was wollte der Fotograf mit diesem Bild erreichen?"],
        hints: ["Denk an Filme oder Plakate.", "Schaut er in die Zukunft?", "Wirkt er wie ein Anführer?"],
        sentenceStarters: ["Der Mann wirkt auf mich...", "Ich vermute, er denkt gerade an...", "Vielleicht wollte der Fotograf zeigen, dass...", "Sein Blick bedeutet für mich..."]
      },
      level_medium: {
        description: "Welche Botschaft vermittelt dieses Porträt?",
        points: ["Welche Charaktereigenschaften werden dem Mann durch dieses Bild zugeschrieben?", "Warum blickt er in die Ferne und nicht direkt in die Kamera?", "Was soll der Betrachter empfinden (Respekt, Angst, Hoffnung)?", "Welche Geschichte erzählt das Bild ohne Worte?"],
        hints: ["Der ferne Blick wirkt oft visionär.", "Die Entschlossenheit im Gesicht ist eine Deutung.", "Das Bild wirkt wie ein Denkmal."],
        sentenceStarters: ["Das Bild vermittelt den Eindruck von...", "Ich stelle die Hypothese auf, dass...", "Der ferne Blick lässt darauf schließen, dass...", "Die beabsichtigte Wirkung ist vermutlich..."]
      },
      level_hard: {
        description: "Interpretiere die ikonografische Bedeutung.",
        points: ["Inwiefern dient das Bild der Stilisierung einer Person zum Mythos?", "Welche emotionalen Ebenen spricht das Porträt an?", "Welche politischen Werte könnten mit diesem Bild transportiert werden?", "Warum ist dieses Bild wohl so berühmt geworden?"],
        hints: ["Das Bild wird oft als 'Guerillero Heroico' bezeichnet.", "Die Reduktion auf das Wesentliche macht es leicht merkbar.", "Religiöse Motive (Märtyrer) könnten mitschwingen."],
        sentenceStarters: ["Die Darstellung zielt darauf ab,...", "Man kann interpretieren, dass...", "Die emotionale Aufladung geschieht durch...", "Die Stilisierung zum Mythos wird deutlich an..."]
      }
    }
  },
  {
    number: 3,
    icon: "⏳",
    title: "HISTORISCHER KONTEXT",
    subtitle: "KUBA 1960",
    content: {
      level_easy: {
        description: "Lies, wer der Mann war und wann das Foto gemacht wurde.",
        contextText: "Das Foto entstand am 5. März 1960 auf der Insel [[Kuba|Ein Land in der Karibik, in dem es eine Revolution gab.]]. Der Mann ist [[Che Guevara|Ein bekannter Anführer der Revolution in Kuba.]]. Der Fotograf Alberto Korda machte das Bild bei einer Trauerfeier für Menschen, die bei einer Explosion gestorben waren. Che Guevara war dort ein wichtiger Politiker.",
        points: ["Wann und wo wurde das Foto gemacht?", "Wer ist der Mann auf dem Bild?", "Bei welchem Ereignis entstand das Foto?"],
        hints: ["Es war eine traurige Feier.", "Kuba liegt in Mittelamerika."],
        sentenceStarters: ["Das Foto wurde im Jahr... gemacht.", "Der Mann ist...", "Das Ereignis war..."]
      },
      level_medium: {
        description: "Verstehe die politische Situation in Kuba 1960.",
        contextText: "Im Jahr 1960 war die [[Kubanische Revolution|Der Sturz eines Diktators durch Rebellen wie Fidel Castro und Che Guevara.]] erst kurz vorbei. Che Guevara war einer der Anführer. Das Foto entstand während einer Gedenkfeier für die Opfer der Explosion des Frachters 'La Coubre'. Der Fotograf hieß [[Alberto Korda|Ein kubanischer Fotograf, der die Revolutionsführer begleitete.]]. Er drückte nur zweimal ab, als Che kurz ins Bild trat.",
        points: ["In welchem politischen Umfeld entstand das Porträt?", "Was war der Anlass der Gedenkfeier?", "Wie kam es zu dem Schnappschuss durch Alberto Korda?"],
        hints: ["Che war Teil der neuen Regierung.", "Das Foto war ursprünglich nicht als Porträt geplant."],
        sentenceStarters: ["Der historische Kontext ist geprägt durch...", "Das Foto entstand in einer Zeit von...", "Interessant ist, dass Alberto Korda..."]
      },
      level_hard: {
        description: "Analysiere die historische Rolle Che Guevaras.",
        contextText: "Das Porträt 'Guerillero Heroico' wurde 1960 aufgenommen, als Kuba sich nach der Revolution gegen die USA behaupten wollte. Che Guevara war damals Industrieminister und Nationalbankpräsident. Das Foto zeigt ihn während einer Rede von Fidel Castro zur Beerdigung der Opfer des La-Coubre-Attentats. Alberto Korda nutzte eine Leica-Kamera. Erst Jahre später wurde das Foto weltweit berühmt, als es für politische Proteste genutzt wurde.",
        points: ["Welche Ämter hatte Che Guevara zum Zeitpunkt des Fotos?", "Wie spiegelt das Foto die angespannte Lage Kubas wider?", "Warum blieb das Foto nach der Aufnahme zunächst jahrelang unbekannt?"],
        hints: ["Der Kalte Krieg beeinflusste die Situation auf Kuba.", "Das Bild wurde erst nach Ches Tod zum Weltsymbol."],
        sentenceStarters: ["Die Aufnahme steht im direkten Zusammenhang mit...", "Die politische Bedeutung Che Guevaras war...", "Der zeitliche Kontext erklärt, warum..."]
      }
    }
  },
  {
    number: 4,
    icon: "💡",
    title: "ÜBERPRÜFEN",
    subtitle: "HYPOTHESEN KLÄREN",
    content: {
      level_easy: {
        description: "Stimmt das, was du am Anfang gedacht hast?",
        points: ["Wusste man am Anfang, dass es eine Trauerfeier war?", "War Che Guevara wirklich so einsam, wie er im Bild wirkt?", "Was hat der Fotograf am Bild verändert?"],
        hints: ["Auf dem Originalbild waren noch andere Dinge zu sehen.", "Der Fotograf hat das Bild zugeschnitten."],
        sentenceStarters: ["Zuerst dachte ich..., aber jetzt weiß ich...", "Der Bildausschnitt zeigt uns nicht, dass...", "Das Foto wurde verändert, damit..."]
      },
      level_medium: {
        description: "Vergleiche deine Hypothesen mit den Fakten des Originals.",
        points: ["Das Originalfoto zeigt links eine Palme und rechts einen anderen Mann. Warum wurden diese entfernt?", "Wie verändert der Zuschnitt (Crop) die Bedeutung des Bildes?", "Hattest du den Gesichtsausdruck als 'trauernd' oder 'visionär' gedeutet? Was passt besser zum Kontext?"],
        hints: ["Durch den Zuschnitt wird aus einem Schnappschuss ein Porträt.", "Die Isolation der Person verstärkt die Wirkung."],
        sentenceStarters: ["Meine ursprüngliche Hypothese lässt sich korrigieren, weil...", "Der Vergleich mit dem Originalfoto zeigt, dass...", "Die Bearbeitung des Bildes bezweckt..."]
      },
      level_hard: {
        description: "Analysiere die bewusste Manipulation durch den Bildausschnitt.",
        points: ["Inwiefern ist das Bild eine 'Konstruktion' von Heldenhaftigkeit?", "Welche Elemente des Originalfotos mussten weichen, um die ikonische Wirkung zu erzielen?", "War Ches Blick wirklich visionär oder nur ein Moment der Beobachtung während einer Rede?"],
        hints: ["Das Foto wurde um etwa 90 Grad gedreht und zugeschnitten.", "Korda erkannte das Potenzial des Bildes erst später."],
        sentenceStarters: ["Die De-Konstruktion des Bildes offenbart, dass...", "Die Manipulation des Bildausschnitts führt dazu, dass...", "Kritisch betrachtet ist die 'visionäre' Ausstrahlung ein Ergebnis von..."]
      }
    }
  },
  {
    number: 5,
    icon: "🚦",
    title: "WAHRHEITSGEHALT",
    subtitle: "BELEGBAR ODER NICHT?",
    content: {
      level_easy: {
        description: "Kann man alles glauben, was man auf dem Bild sieht?",
        points: ["Was ist auf dem Bild echt (belegbar)?", "Was ist nur eine Vermutung?", "Welche Informationen fehlen uns, wenn wir nur dieses Bild haben?"],
        hints: ["Sein Gesicht ist echt.", "Ob er ein 'Guter' war, kann das Bild nicht sagen."],
        sentenceStarters: ["Belegbar durch das Bild ist...", "Nur eine Vermutung bleibt...", "Mir fehlt die Information über..."]
      },
      level_medium: {
        description: "Nutze die Ampel. Was beweist das Bild wirklich?",
        points: ["Ist das Bild ein Beweis für Che Guevaras Taten?", "Wie viel Interpretation steckt in deiner Bewertung?", "Welche historischen Quellen bräuchte man zusätzlich?"],
        hints: ["Das Bild zeigt eine Momentaufnahme, keinen Charakter.", "Fotos können täuschen, indem sie Kontext weglassen."],
        sentenceStarters: ["Ich bewerte die Glaubwürdigkeit als..., weil...", "Das Bild belegt zwar sein Aussehen, aber nicht...", "Um die Wahrheit zu finden, müsste man zusätzlich..."]
      },
      level_hard: {
        description: "Diskutiere die Grenzen der Fotografie als historische Quelle.",
        points: ["Unterscheide zwischen 'bildlicher Wahrheit' und 'historischer Wahrheit'.", "Welche Gefahren bestehen bei der Nutzung ikonischer Porträts als Quellen?", "Inwiefern ist das Bild eher ein Dokument der Kunstgeschichte als der Zeitgeschichte?"],
        hints: ["Ikonen vereinfachen komplexe Menschen.", "Das Bild ist ein Beleg für Ches Selbstdarstellung oder Kordas Blick."],
        sentenceStarters: ["Man muss differenzieren zwischen...", "Die Quellenkraft des Bildes beschränkt sich auf...", "Das Risiko bei der Nutzung dieses Bildes ist...", "Das Porträt verschleiert eher, als dass es..."]
      }
    }
  },
  {
    number: 6,
    icon: "🌍",
    title: "METAEBENE",
    subtitle: "VOM FOTO ZUR IKONE",
    content: {
      level_easy: {
        description: "Warum sieht man dieses Bild heute überall (T-Shirts, Poster)?",
        points: ["Wer nutzt das Bild heute für Werbung oder Protest?", "Welche Gefühle soll das Bild erzeugen?", "Ist es okay, das Gesicht eines Revolutionärs auf eine Kaffeetasse zu drucken?"],
        hints: ["Das Bild ist heute ein Logo.", "Viele kennen die Geschichte dahinter nicht."],
        sentenceStarters: ["Das Bild wird heute benutzt, um...", "Es erzeugt bei vielen Menschen...", "Ich finde die Nutzung als Logo..., weil..."]
      },
      level_medium: {
        description: "Reflektiere die kommerzielle und politische Nutzung.",
        points: ["Wie wurde aus einem Porträt eine Marke (Branding)?", "Welche Werte werden heute mit dem Bild verbunden (Freiheit, Rebellion, Mode)?", "Verdeckt der Mythos des Bildes die reale, historische Person?"],
        hints: ["Das Bild ist eines der meistreproduzierten Fotos der Welt.", "Es wird oft von der Popkultur 'geschluckt'."],
        sentenceStarters: ["Die Transformation des Bildes zur Ikone geschah durch...", "Heutzutage steht das Bild oft symbolisch für...", "Kritisch ist zu sehen, dass durch den Mythos..."]
      },
      level_hard: {
        description: "Analysiere das Bild als Medienphänomen.",
        points: ["Diskutiere die Entkopplung des Bildes von seinem historischen Ursprung.", "Inwiefern ist das Bild ein Beispiel für die Vereinfachung komplexer Geschichte?", "Welche Rolle spielt die Ästhetik (hoher Kontrast) für die Verbreitung in digitalen Medien?"],
        hints: ["Das Bild funktioniert wie ein Piktogramm.", "Die 'Marke Che' wird weltweit vermarktet.", "Reflektiere über die Verantwortung im Umgang mit Symbolen."],
        sentenceStarters: ["Das Bild ist ein Paradebeispiel für die...", "Die mediale Karriere des Porträts zeigt, dass...", "Die Ästhetik des Bildes begünstigt die...", "Letztlich stellt sich die Frage, ob..."]
      }
    }
  }
];

export const SENSITIVITY = {
  warning: "Politisch aufgeladenes Bild – wir trennen Beobachtung und Meinung.",
  classroomOption: {
    defaultPreview: "normal",
    revealButtonText: "Analyse starten",
    alternativeTask: "Diskussion über Symbole."
  }
};
