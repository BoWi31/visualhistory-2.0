import { AnalysisStep } from './freiheitfuehrtvolk';

export const AMPEL_FEEDBACK = {
  red: "❌ RICHTIG: Das Bild ist Propaganda. Es zeigt nicht die ganze Wahrheit, sondern eine geplante Szene, um Hitler sympathisch wirken zu lassen.",
  yellow: "⚠️ TEILWEISE: Das Foto ist zwar 'echt' (keine Fotomontage), aber die Situation wurde genau so für die Kamera vorbereitet. Es ist eine Inszenierung.",
  green: "❌ FALSCH: Man darf diesem Bild nicht blind glauben. Es wurde gemacht, um Menschen zu beeinflussen. Es beweist nicht, dass alle Menschen damals so dachten."
};

export const HITLER_1939_STEPS: AnalysisStep[] = [
  {
    number: 1,
    icon: "📐",
    title: "Beschreiben",
    subtitle: "WAS IST SICHTBAR?",
    content: {
      level_easy: {
        description: "Schau das Foto genau an. Beschreibe nur, was du wirklich siehst.",
        points: ["Wer sitzt genau in der Mitte?", "Was tragen die Frauen für Kleidung?", "Wohin schauen die meisten Frauen?", "Wie ist der Raum eingerichtet?"],
        hints: ["Hitler trägt eine Uniform.", "Die Frauen tragen Trachten oder Kleider.", "Achte auf die Gesichter der Frauen."],
        sentenceStarters: ["In der Mitte des Bildes sitzt...", "Um ihn herum stehen viele...", "Die meisten Frauen blicken...", "Die Kleidung der Personen ist..."]
      },
      level_medium: {
        description: "Beschreibe den Bildaufbau und die Personen systematisch.",
        points: ["Beschreibe die Sitzposition der zentralen Figur.", "Wie sind die Frauen im Raum verteilt?", "Achte auf die Blickrichtungen: Wer schaut wen an?", "Welche Details fallen dir an der Kleidung und dem Raum auf?"],
        hints: ["Die zentrale Figur bildet den Mittelpunkt.", "Die Frauen bilden einen dichten Kreis.", "Der Raum wirkt eher privat oder gemütlich."],
        sentenceStarters: ["Das Zentrum des Fotos bildet...", "Die Anordnung der Personen wirkt...", "Auffällig an der Blickführung ist...", "Die Umgebung lässt auf einen... schließen."]
      },
      level_hard: {
        description: "Analysiere die Komposition und die visuelle Hierarchie.",
        points: ["Analysiere die Positionierung Hitlers im Verhältnis zur Gruppe.", "Wie wird durch Licht oder Anordnung der Blick des Betrachters gelenkt?", "Welche sozialen Signale senden Kleidung und Raumausstattung?", "Beschreibe die Mimik und Gestik der Beteiligten im Detail."],
        hints: ["Hitler ist der einzige Mann im Zentrum.", "Die Frauen blicken fast alle bewundernd zur Mitte.", "Die Trachtenkleidung betont eine bestimmte Tradition."],
        sentenceStarters: ["Die Bildkomposition ist so gewählt, dass...", "Die visuelle Hierarchie wird deutlich durch...", "Die Blickachsen im Bild konzentrieren sich auf...", "Die Raumsemantik suggeriert eine Atmosphäre von..."]
      }
    }
  },
  {
    number: 2,
    icon: "🔍",
    title: "Hypothesen",
    subtitle: "ABSCHT UND WIRKUNG",
    content: {
      level_easy: {
        description: "Was glaubst du: Warum wurde dieses Foto gemacht?",
        points: ["Soll Hitler hier gefährlich oder nett wirken?", "Warum sind nur junge Frauen um ihn herum?", "Glaubst du, das Foto war ein Zufall?"],
        hints: ["Propaganda will Gefühle wecken.", "Frauen als Zielgruppe für die Politik.", "Überlege, ob ein Fotograf zufällig dabei war."],
        sentenceStarters: ["Ich vermute, der Fotograf wollte zeigen, dass...", "Das Bild soll bewirken, dass...", "Ich glaube nicht, dass das Foto zufällig war, weil..."]
      },
      level_medium: {
        description: "Stelle Vermutungen über die beabsichtigte Wirkung an.",
        points: ["Welches Image von Hitler soll hier verbreitet werden?", "Welche Zielgruppe wollte die NS-Propaganda mit diesem Motiv ansprechen?", "Ist die Szene spontan entstanden oder gestellt? Begründe."],
        hints: ["Stichwort: 'Der Führer als Mensch'.", "Frauen als Wählerinnen und Unterstützerinnen.", "Achte auf die perfekte Ausleuchtung."],
        sentenceStarters: ["Die beabsichtigte Wirkung des Bildes ist vermutlich...", "Die NS-Propaganda zielte mit diesem Motiv darauf ab...", "Es spricht vieles für eine Inszenierung, da..."]
      },
      level_hard: {
        description: "Diskutiere die propagandistische Strategie hinter dem Motiv.",
        points: ["Inwiefern dient dieses Foto dem 'Führerkult'?", "Welche psychologische Wirkung hat die Darstellung von Nähe und Bewunderung?", "Stelle eine Gegenhypothese auf: Was zeigt das Bild absichtlich NICHT?"],
        hints: ["Personalisierung von Politik.", "Emotionale Bindung an die Führung.", "Kontrast zur Gewalt des Regimes."],
        sentenceStarters: ["Das Foto lässt sich als Teil des Führerkults deuten, indem...", "Die propagandistische Strategie beruht hier auf...", "Eine kritische Gegenhypothese wäre, dass..."]
      }
    }
  },
  {
    number: 3,
    icon: "⏳",
    title: "Historischer Kontext",
    subtitle: "NS-PROPAGANDA 1939",
    content: {
      level_easy: {
        description: "Lies den Text über die Zeit, in der das Foto entstand.",
        contextText: "1939 war Deutschland eine [[Diktatur|Ein Land, in dem nur einer bestimmt und es keine Freiheit gibt.]]. Adolf Hitler war der Chef. Joseph Goebbels war sein Minister für [[Propaganda|Werbung für eine politische Idee, die oft lügt oder Dinge schöner macht.]]. Sie wollten, dass alle Hitler toll finden. Das Foto entstand im Mai 1939. Nur wenige Monate später begann der [[Zweite Weltkrieg|Ein riesiger Krieg, den Deutschland anfing.]].",
        points: ["Wer war für die Propaganda zuständig?", "Was passierte kurz nach diesem Foto in der Welt?", "Was war das Ziel des 'Personenkults'?"],
        hints: ["Goebbels war der Chef-Propagandist.", "Der Krieg begann im September 1939."],
        sentenceStarters: ["Im Jahr 1939 war Deutschland...", "Das Ziel der Propaganda war...", "Kurz nach diesem Foto..."]
      },
      level_medium: {
        description: "Verstehe die Hintergründe der NS-Herrschaft im Jahr 1939.",
        contextText: "Im Jahr 1939 befand sich das NS-Regime auf dem Höhepunkt seiner Macht. Joseph Goebbels nutzte den [[Personenkult|Die übertriebene Verehrung einer einzelnen Person wie einen Gott.]], um Hitler als gütigen und geliebten 'Führer' darzustellen. Solche 'privaten' Bilder sollten von der Gewalt und den Kriegsvorbereitungen ablenken. Das Foto entstand am 3. Mai 1939 in Kärnten, kurz bevor Deutschland mit dem Überfall auf Polen den [[Zweiten Weltkrieg|Der zerstörerischste Krieg der Geschichte, ausgelöst durch Nazideutschland.]] entfesselte.",
        points: ["Erkläre die Funktion von 'harmlosen' Bildern in einer Diktatur.", "Welche Bedeutung hat der Zeitpunkt (Mai 1939) für die Bewertung des Bildes?", "Was bedeutet 'Personenkult' in diesem Zusammenhang?"],
        hints: ["Ablenkung von Aufrüstung und Verfolgung.", "Vorbereitung der Bevölkerung auf den Krieg."],
        sentenceStarters: ["Der historische Kontext zeigt, dass...", "Die Rolle von Joseph Goebbels war...", "Das Bild verschleiert die Realität von 1939, indem..."]
      },
      level_hard: {
        description: "Analysiere die politische Situation und die mediale Strategie 1939.",
        contextText: "Die NS-Propaganda perfektionierte 1939 die Inszenierung der [[Volksgemeinschaft|Die Idee, dass alle 'echten' Deutschen zusammenhalten und dem Führer folgen müssen.]]. Bilder wie dieses aus Kärnten sollten Harmonie und Einheit suggerieren. Während Hitler hier als 'volksnah' präsentiert wird, liefen im Hintergrund die letzten Vorbereitungen für den Angriffskrieg. Der [[Personenkult|Die systematische Verherrlichung Hitlers durch alle Medien.]] war ein zentrales Werkzeug, um die Massen emotional zu mobilisieren und Kritik zu unterdrücken.",
        points: ["Analysiere das Spannungsfeld zwischen Bildbotschaft und historischer Realität 1939.", "Inwiefern stützt das Foto die Ideologie der 'Volksgemeinschaft'?", "Diskutiere die Funktion des Fotografen Heinrich Hoffmann für das Regime."],
        hints: ["Hoffmann war Hitlers 'Leibfotograf' und lieferte die passenden Bilder.", "Die 'friedliche' Szene steht im krassen Gegensatz zur Aufrüstung."],
        sentenceStarters: ["Betrachtet man die politische Lage im Mai 1939, wird deutlich...", "Das Foto dient als visuelles Konstrukt der Volksgemeinschaft, weil...", "Die Diskrepanz zwischen Bild und Wirklichkeit lässt sich so beschreiben..."]
      }
    }
  },
  {
    number: 4,
    icon: "💡",
    title: "Überprüfen der Hypothesen",
    subtitle: "ECHT ODER GESTELLT?",
    content: {
      level_easy: {
        description: "Prüfe jetzt: Waren deine Ideen aus Schritt 2 richtig?",
        points: ["Schauen die Frauen wirklich alle freiwillig so glücklich?", "Wer könnte das Foto gemacht haben? Ein Freund oder ein Profi?", "Was fehlt auf dem Bild? Sieht man Soldaten oder Waffen?"],
        hints: ["Propaganda zeigt nie die schlechten Seiten.", "Hitler hatte einen eigenen Fotografen (Heinrich Hoffmann)."],
        sentenceStarters: ["Jetzt erkenne ich, dass das Bild...", "Es ist wahrscheinlich gestellt, weil...", "Man sieht keine Waffen, damit..."]
      },
      level_medium: {
        description: "Untersuche die Merkmale einer Inszenierung.",
        points: ["Analysiere den Bildausschnitt: Was wurde absichtlich weggelassen?", "Wer war der Fotograf Heinrich Hoffmann und welche Aufgabe hatte er?", "Widerspricht die friedliche Szene der politischen Realität von 1939?"],
        hints: ["Beschnittene Bilder können die Wahrheit verändern.", "Hoffmann verdiente Millionen mit Hitler-Fotos."],
        sentenceStarters: ["Der Bildausschnitt wurde so gewählt, dass...", "Die Rolle des Fotografen Hoffmann war entscheidend, da...", "Der Vergleich mit der Realität von 1939 zeigt..."]
      },
      level_hard: {
        description: "Führe eine kritische Analyse der Bildquelle durch.",
        points: ["Untersuche die Lichtsetzung und die Positionierung der Kamera.", "Inwiefern ist das Bild repräsentativ für die Stimmung in der Bevölkerung?", "Welche Informationen fehlen uns, um die Situation neutral zu bewerten?"],
        hints: ["Professionelle Ausleuchtung deutet auf Vorbereitung hin.", "Ein Foto von einer kleinen Gruppe beweist keine allgemeine Meinung."],
        sentenceStarters: ["Die technische Umsetzung des Fotos deutet auf...", "Die Repräsentativität der Quelle ist zweifelhaft, weil...", "Um das Bild abschließend zu bewerten, fehlen Informationen über..."]
      }
    }
  },
  {
    number: 5,
    icon: "🚦",
    title: "Beurteilung des Wahrheitsgehaltes",
    subtitle: "WAS BEWEIST DAS BILD?",
    content: {
      level_easy: {
        description: "Was ist wahr und was ist nur Werbung?",
        points: ["Beweist das Bild, dass ALLE Frauen Hitler mochten?", "Ist es sicher, dass die Frauen dort freiwillig waren?", "Was wissen wir NICHT über dieses Foto?"],
        hints: ["Das Bild zeigt nur einen kleinen Moment.", "In einer Diktatur gibt es oft Zwang."],
        sentenceStarters: ["Das Bild beweist nur, dass...", "Man kann nicht sicher sagen, ob...", "Es fehlt die Information, wer..."]
      },
      level_medium: {
        description: "Trenne zwischen Belegbarem und Vermutungen.",
        points: ["Was ist durch das Foto belegbar? (z.B. Hitler war in Kärnten)", "Was ist NICHT belegbar? (z.B. Die ganze Bevölkerung war begeistert)", "Welche Quellenkritik musst du hier üben?"],
        hints: ["Unterscheide: Bildinhalt vs. Bildaussage.", "Wer hat das Bild veröffentlicht?"],
        sentenceStarters: ["Belegbar durch das Foto ist lediglich...", "Die Behauptung, alle Deutschen seien begeistert gewesen, ist...", "Kritisch zu hinterfragen ist vor allem..."]
      },
      level_hard: {
        description: "Beurteile die Aussagekraft der Quelle kritisch.",
        points: ["Differenziere zwischen der dokumentarischen und der manipulativen Ebene.", "Welche Fakten lassen sich verifizieren, welche sind propagandistische Konstruktionen?", "Welche Vergleichsquellen bräuchte man für eine objektive Analyse?"],
        hints: ["Dokument: Hitler traf Frauen. Konstruktion: Er wird geliebt.", "Vergleichsquellen: Geheime Berichte über die Stimmung im Volk."],
        sentenceStarters: ["Man muss bei dieser Quelle strikt trennen zwischen...", "Die manipulative Ebene wird dadurch deutlich, dass...", "Eine objektive Einordnung erfordert den Vergleich mit..."]
      }
    }
  },
  {
    number: 6,
    icon: "🌍",
    title: "Metaebene",
    subtitle: "MANIPULATION ERKENNEN",
    content: {
      level_easy: {
        description: "Was lernen wir daraus für heute?",
        points: ["Warum sind 'nette' Bilder in der Politik oft gefährlich?", "Worauf achtest du heute bei Fotos im Internet (z.B. Instagram)?", "Was ist deine wichtigste Regel für Bilder?"],
        hints: ["Auch böse Menschen können auf Fotos nett aussehen.", "Filter und Inszenierung gibt es auch heute."],
        sentenceStarters: ["Nette Bilder können täuschen, weil...", "Wenn ich heute ein Foto im Internet sehe, prüfe ich...", "Meine Regel für Bilder ist..."]
      },
      level_medium: {
        description: "Übertrage dein Wissen auf die heutige Medienwelt.",
        points: ["Wie funktioniert Personenkult in sozialen Medien heute?", "Warum nutzen Politiker auch heute noch 'private' Schnappschüsse?", "Welche Prüffragen helfen dir, Manipulation zu erkennen?"],
        hints: ["Influencer und Politiker nutzen ähnliche Tricks.", "Bilder erzeugen Nähe und Vertrauen."],
        sentenceStarters: ["Der Personenkult von damals ähnelt heutigem...", "Politiker nutzen private Bilder, um...", "Bevor ich ein Bild glaube oder teile, frage ich mich..."]
      },
      level_hard: {
        description: "Reflektiere über Medienethik und moderne Propaganda.",
        points: ["Diskutiere die Gefahr von 'ästhetisierter' Propaganda.", "Inwiefern hat sich die Technik, aber nicht die Strategie der Manipulation verändert?", "Welche Verantwortung trägt der Betrachter von Bildern heute?"],
        hints: ["Schöne Bilder machen Ideologien schmackhaft.", "Strategie: Emotion vor Information."],
        sentenceStarters: ["Die Ästhetisierung von Politik führt dazu, dass...", "Trotz moderner Technik bleibt die Strategie gleich, indem...", "Die Verantwortung des Betrachters besteht darin..."]
      }
    }
  }
];

export const SENSITIVITY = {
  warning: "Dieses Foto kann Propaganda sein. Wir arbeiten sachlich und kritisch.",
  classroomOption: {
    defaultPreview: "visible",
    revealButtonText: "Bild kritisch betrachten",
    alternativeTask: "Analysiere die Bildbeschreibung."
  }
};
