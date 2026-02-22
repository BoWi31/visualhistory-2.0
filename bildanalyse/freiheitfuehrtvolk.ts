export const INSTRUCTION_HINT = "WICHTIG: BITTE SCHREIBE DEINE ERGEBNISSE UND GEDANKEN IN DEIN HEFT ODER AUF EIN BLATT PAPIER!";

export const AMPEL_FEEDBACK = {
  red: "❌ FALSCH: Das Bild ist keine 'Lüge' oder Fälschung. Es ist ein Kunstwerk, das eine tiefere Wahrheit (die Sehnsucht nach Freiheit) zeigen will. Rot wäre nur richtig, wenn der Maler behauptet hätte, das sei ein echtes Foto.",
  yellow: "✅ RICHTIG (Beste Wahl): Dieses Bild ist eine Inszenierung. Der Maler mischt echte Details (Uniformen, Notre-Dame) mit Symbolen (die nackte Freiheit). Es ist glaubwürdig für die *Stimmung*, aber nicht für den exakten Ablauf.",
  green: "⚠️ TEILWEISE RICHTIG: Grün passt, wenn man das Bild als Quelle für die *Ideale* der Menschen nutzt. Aber als Dokument für echte Fakten ist es zu 'gestellt' und heroisch übertrieben."
};

export interface Checkpoint {
  question: string;
  options: string[];
  correctIndex: number;
  hint: string;
}

export interface LevelContent {
  description: string;
  points: string[];
  hints: string[];
  sentenceStarters: string[];
  contextText?: string;
}

export interface AnalysisStep {
  number: number;
  icon: string;
  title: string;
  subtitle: string;
  content: {
    level_easy: LevelContent;   // DaZ: Einfache Sprache, kurze Sätze
    level_medium: LevelContent; // Hauptschule: Klare, direkte Sprache
    level_hard: LevelContent;   // Realschule: Analytisch, aber verständlich
  };
  checkpoint?: Checkpoint;
}

export const STEPS: AnalysisStep[] = [
  {
    number: 1,
    icon: "📐",
    title: "BESCHREIBEN",
    subtitle: "WAS SEHT IHR?",
    content: {
      level_easy: {
        description: "Schau das Bild genau an. Was siehst du? Suche nur Dinge, die man wirklich sehen kann.",
        points: ["Welche Menschen siehst du?", "Was liegt vorne auf dem Boden?", "Welches Haus steht hinten rechts im Rauch?", "Welche Farben hat die Flagge?"],
        hints: ["Suche die Körper am Boden.", "Die Kirche hinten heißt Notre-Dame.", "Siehst du reiche und arme Menschen?"],
        sentenceStarters: ["Ich sehe...", "In der Mitte ist...", "Rechts ist ein Junge...", "Im Hintergrund ist..."]
      },
      level_medium: {
        description: "Schau genau hin. Wir suchen zuerst nur Dinge, die man im Bild wirklich mit den Augen finden kann.",
        points: ["Welche verschiedenen Personen siehst du? (Achte auf Alter und Kleidung)", "Was liegt ganz vorne im Bild auf dem Boden?", "Welches berühmte Gebäude erkennt man hinten rechts im Rauch?", "Welche Farben hat die Flagge, die die Frau hält?"],
        hints: ["Achte auf die am Boden liegenden Körper.", "Die Türme im Hintergrund gehören zur Kathedrale Notre-Dame.", "Es sind Menschen aus verschiedenen sozialen Schichten zu sehen."],
        sentenceStarters: ["Im Vordergrund des Bildes erkennt man...", "In der Mitte steht eine Frau, die...", "Ganz rechts sieht man einen Jungen, der...", "Im Hintergrund kann man..."]
      },
      level_hard: {
        description: "Analysiere das Bild systematisch. Achte besonders auf die Details der Komposition und die Anordnung der Figuren.",
        points: ["Unterscheide die verschiedenen Gruppen von Menschen nach ihrer Kleidung und Herkunft.", "Welche Gegenstände liegen im Vordergrund und was sagen sie über den Kampf aus?", "Welche bekannten Bauwerke im Hintergrund helfen uns, den Ort genau zu bestimmen?", "Beschreibe die Farben und die Position der Flagge im Zentrum des Bildes."],
        hints: ["Die Toten am unteren Bildrand bilden eine Basis für die Szene.", "Die Türme von Notre-Dame sind ein wichtiger Hinweis auf Paris.", "Achte darauf, wie der Maler arme und reiche Leute nebeneinander zeigt."],
        sentenceStarters: ["Das Bild wird geprägt durch...", "Im Vordergrund lassen sich deutliche Details wie... erkennen.", "Ein wichtiger Orientierungspunkt im Hintergrund ist...", "Die Farben der Flagge fallen besonders auf, weil..."]
      }
    },
    checkpoint: {
      question: "Welches Gebäude erkennt man ganz hinten rechts im Dunst des Bildes?",
      options: ["Den Eiffelturm", "Die Kathedrale Notre-Dame", "Das Schloss Versailles"],
      correctIndex: 1,
      hint: "Es ist eine berühmte Kirche in Paris mit zwei großen Türmen."
    }
  },
  {
    number: 2,
    icon: "🔍",
    title: "DEUTEN",
    subtitle: "HYPOTHESEN BILDEN",
    content: {
      level_easy: {
        description: "Denk nach: Was bedeuten die Dinge? Was wollte der Maler zeigen?",
        points: ["Warum kämpfen arme und reiche Menschen hier zusammen?", "Wer ist die Frau in der Mitte? Ist sie eine echte Soldatin?", "Warum hält sie die Flagge so hoch?", "Warum ist das Licht so hell?"],
        hints: ["Der Mann mit dem Zylinder ist reich.", "Die Frau hat keine Schuhe an. Ist das bei Soldaten normal?", "Alle laufen nach vorne zu uns."],
        sentenceStarters: ["Ich glaube, der reiche Mann...", "Die Frau in der Mitte ist vielleicht...", "Der Maler will zeigen, dass...", "Alle kämpfen zusammen, weil..."]
      },
      level_medium: {
        description: "Überlege nun: Was könnten diese Dinge bedeuten? Stelle Vermutungen auf.",
        points: ["Warum kämpfen hier so viele verschiedene Menschen (Zylinder vs. Arbeiterhemd) zusammen?", "Wer könnte die Frau in der Mitte sein? Ist sie eine echte Kämpferin?", "Warum hält sie die Flagge so weit nach oben?", "Warum hat der Maler die Szene so dramatisch und hell gestaltet?"],
        hints: ["Der Mann mit dem Zylinder sieht eher wohlhabend aus.", "Die Frau trägt keine Schuhe – ist das normal für eine Schlacht?", "Die Bewegung der Gruppe geht nach vorne auf den Betrachter zu."],
        sentenceStarters: ["Ich vermute, dass der Mann mit dem Zylinder...", "Die Frau in der Mitte könnte ein Symbol für... sein.", "Der Maler wollte wahrscheinlich zeigen, dass...", "Dass alle gemeinsam kämpfen, deutet darauf hin, dass..."]
      },
      level_hard: {
        description: "Was ist die tiefere Bedeutung der Symbole? Welche Botschaft möchte der Künstler vermitteln?",
        points: ["Warum zeigt der Maler Menschen aus ganz unterschiedlichen Schichten, die gemeinsam kämpfen?", "Ist die Frau in der Mitte eine echte Person oder steht sie für eine Idee?", "Wie nutzt der Maler Licht und Bewegung, um die Szene besonders heldenhaft wirken zu lassen?", "Welches Gefühl soll das Bild bei den Menschen auslösen, die es betrachten?"],
        hints: ["Der Mann mit dem Zylinder und der Arbeiter stehen für die Einheit des Volkes.", "Dass die Frau barfuß ist, zeigt uns, dass sie eher eine Figur aus einer Geschichte (Sinnbild) ist.", "Das hellle Licht im Zentrum lenkt unsere Aufmerksamkeit auf die Anführerin."],
        sentenceStarters: ["Man kann vermuten, dass...", "Die Darstellung der Frau lässt darauf schließen, dass sie...", "Durch die besondere Lichtführung erreicht der Maler, dass...", "Die Zusammenarbeit der verschiedenen Menschen bedeutet wohl, dass..."]
      }
    },
    checkpoint: {
      question: "Wer könnte die Frau in der Mitte des Bildes sein?",
      options: ["Eine echte Generalin der Armee", "Ein Symbol (Marianne) für die Freiheit", "Eine zufällige Passantin"],
      correctIndex: 1,
      hint: "Sie trägt keine Schuhe und eine phrygische Mütze – Symbole sind oft keine echten Personen."
    }
  },
  {
    number: 3,
    icon: "⏳",
    title: "KONTEXT",
    subtitle: "DIE JULIREVOLUTION 1830",
    content: {
      level_easy: {
        description: "Lies den Text. Er hilft dir. Dann verstehst du das Bild besser.",
        contextText: "Im Juli 1830 gab es in Paris einen großen Streit. Das nennt man [[Julirevolution|Das Volk kämpft gegen die Regierung und tauscht sie aus.]]. Der König Karl X. war sehr streng. Er wollte die [[Pressefreiheit|Das Recht, in der Zeitung die Wahrheit zu schreiben.]] verbieten. Die Menschen hatten Angst um ihr [[Wahlrecht|Das Recht, bei der Politik mitzureden.]]. Arbeiter, Studenten und Bürger bauten [[Barrikaden|Zäune aus Wagen und Steinen auf der Straße.]] und kämpften für ihre Freiheit.",
        points: ["Was wollte der König den Menschen wegnehmen?", "Was passierte drei Tage lang in Paris?", "Für welche Werte steht die Flagge?"],
        hints: ["Der König war gegen das Volk.", "Die Revolution dauerte nur 3 Tage."],
        sentenceStarters: ["Der König wollte...", "Die Menschen kämpften, weil...", "Die Revolution war..."]
      },
      level_medium: {
        description: "Lies den Text aufmerksam durch. Er hilft dir, das Bild richtig zu verstehen.",
        contextText: "Im Juli 1830 kam es in Paris zu einem gewaltigen Umbruch, der heute als [[Julirevolution|Ein schneller, oft gewaltsamer Umsturz der bestehenden Regierung durch das Volk.]] bekannt ist. Der damalige König Karl X. wollte die Zeit der strengen [[Monarchie|Eine Staatsform, in der ein König oder eine Königin die Macht hat, oft ohne das Volk zu fragen.]] zurückbringen. Er schaffte die [[Pressefreiheit|Das Recht, in Zeitungen die eigene Meinung zu schreiben, ohne dass der Staat es vorher verbietet.]] ab und änderte das [[Wahlrecht|Das Recht der Bürger, mitzubestimmen, wer im Staat das Sagen hat.]] so, dass fast nur noch reiche Adelige wählen durften. Arbeiter, Studenten und einfache Bürger gingen gemeinsam auf die Straßen. In drei heißen Sommertagen, den 'Glorreichen Drei', bauten sie riesige [[Barrikaden|Sperren aus Wagen, Pflastersteinen und Möbeln, um die Soldaten des Königs aufzuhalten.]] und kämpften für ihre Freiheit.",
        points: ["Welche Rechte wollte der König den Menschen wegnehmen?", "Warum nennt man die Revolution auch die 'Glorreichen Drei'?", "Was passierte am Ende mit König Karl X. laut Geschichtsbuch?", "Für welche Werte steht die Trikolore-Flagge im Kontext der Revolution?"],
        hints: ["Der König handelte gegen den Willen fast aller Bürger.", "Die Revolution dauerte genau drei Tage (27. bis 29. Juli)."],
        sentenceStarters: ["Aus dem Text geht hervor, dass der König...", "Die Julirevolution war erfolgreich, weil...", "Der Maler Delacroix wollte zeigen, dass..."]
      },
      level_hard: {
        description: "Erfahre mehr über die Gründe für den Aufstand in Paris.",
        contextText: "Die [[Julirevolution|Der gewaltsame Sturz der Regierung in Paris im Jahr 1830.]] brach aus, weil König Karl X. zu viel Macht wollte. Er versuchte, die [[Pressefreiheit|Das Recht, dass Zeitungen ohne Kontrolle des Staates berichten dürfen.]] fast ganz abzuschaffen. Außerdem wollte er das [[Wahlrecht|Das Recht der Bürger, mitzuentscheiden.]] so ändern, dass fast nur noch sehr reiche Menschen wählen durften. Das Volk von Paris wehrte sich heftig. Innerhalb von drei Tagen, die man 'Die glorreichen Drei' nennt, bauten sie überall in der Stadt [[Barrikaden|Hindernisse aus Steinen und Möbeln, um Soldaten zu stoppen.]] und zwangen den König zur Flucht.",
        points: ["Erkläre den Zusammenhang zwischen den Verboten des Königs und dem Aufstand.", "Was war das Ziel der Menschen, als sie die Barrikaden bauten?", "Inwiefern versucht das Bild, den Sieg des Volkes als gerecht darzustellen?"],
        hints: ["Der König wollte die Rechte der Bürger stark einschränken.", "Der Sieg dauerte nur drei Tage, was sehr schnell für eine Revolution war.", "Die Einheit von armen und reichen Bürgern war entscheidend für den Erfolg."],
        sentenceStarters: ["Der Grund für die Revolution war vor allem...", "Die Menschen bauten Barrikaden, um...", "Man kann im Text erkennen, dass...", "Der Erfolg der Revolution lag daran, dass..."]
      }
    },
    checkpoint: {
      question: "Was war einer der Hauptgründe für den Aufstand gegen König Karl X.?",
      options: ["Er wollte die Steuern senken", "Er wollte die Pressefreiheit abschaffen", "Er wollte Paris schöner bauen"],
      correctIndex: 1,
      hint: "Lies im Text nach, was der König mit der Pressefreiheit vorhatte."
    }
  },
  {
    number: 4,
    icon: "💡",
    title: "ÜBERPRÜFEN",
    subtitle: "HYPOTHESEN KLÄREN",
    content: {
      level_easy: {
        description: "Prüfe jetzt: Waren deine Ideen aus Schritt 2 richtig?",
        points: ["Hattest du recht mit der Frau? Sie heißt 'Marianne'. Was bedeutet sie wirklich?", "Warum laufen alle Leute zusammen mit ihr? Was zeigt das?", "Die Frau trägt eine rote Mütze. Was bedeutet diese Mütze?"],
        hints: ["Die Frau ist ein Symbol für die Freiheit.", "Alle Schichten halten zusammen.", "Die Mütze trugen früher Sklaven, wenn sie frei wurden."],
        sentenceStarters: ["Zuerst dachte ich..., aber jetzt weiß ich...", "Die Frau Marianne ist ein Symbol für...", "Die rote Mütze bedeutet..."]
      },
      level_medium: {
        description: "Prüfe nun deine Vermutungen aus Schritt 2 mit deinem neuen Wissen aus Schritt 3.",
        points: ["Hattest du recht mit der Frau? Sie ist die 'Marianne'. Wofür steht sie wirklich?", "Warum führt sie Menschen aus allen Schichten an? Was sagt das über die Revolution aus?", "Was bedeutet die rote [[phrygische Mütze|Mütze befreiter Sklaven]] auf ihrem Kopf im Vergleich zu deiner ersten Idee?"],
        hints: ["Die Frau ist eine 'Allegorie' (Sinnbild) der Freiheit.", "Die Einheit des Volkes war dem Maler besonders wichtig."],
        sentenceStarters: ["Meine Vermutung zur Frau war richtig/falsch, denn...", "Die Frau steht im Bild für...", "Die verschiedenen Kleider der Kämpfer zeigen uns heute..."]
      },
      level_hard: {
        description: "Vergleiche deine ersten Vermutungen mit den historischen Tatsachen.",
        points: ["Überprüfe deine Idee zur Frau in der Mitte: Ist sie ein echtes Vorbild oder ein Symbol für Werte?", "Wie passt die Zusammenarbeit der verschiedenen Menschen zu den Ereignissen der drei Tage?", "Was sagt uns die rote Mütze über die Ziele der Revolutionäre?"],
        hints: ["Die Figur Marianne ist ein Sinnbild für die Freiheit der Nation.", "Das Bild will zeigen, dass das gesamte Volk gemeinsam für die Freiheit kämpft.", "Bestimmte Symbole im Bild (wie die Flagge) waren damals verboten."],
        sentenceStarters: ["Meine erste Vermutung lässt sich nun so korrigieren, dass...", "Durch den Text wird klar, dass die Frau...", "Dass verschiedene Menschen zusammen kämpfen, zeigt...", "Die Bedeutung der roten Mütze ist..."]
      }
    },
    checkpoint: {
      question: "Was bedeutet die rote Mütze auf dem Kopf der Freiheit?",
      options: ["Es ist ein Modetrend der damaligen Zeit", "Ein Symbol für befreite Sklaven und die Freiheit", "Ein Zeichen für Kälte"],
      correctIndex: 1,
      hint: "Sinnbilder nutzen oft Kleidungsstücke mit historischer Bedeutung."
    }
  },
  {
    number: 5,
    icon: "🚦",
    title: "GLAUBWÜRDIGKEIT",
    subtitle: "QUELLENKRITIK",
    content: {
      level_easy: {
        description: "Ist das Bild 'echt'? Nutze die Ampel. Was denkst du?",
        points: ["Was sieht echt aus? Was sieht erfunden aus?", "Wollte der Maler uns die Wahrheit sagen oder wollte er uns begeistern?", "Kann man alles glauben, was man hier sieht?"],
        hints: ["Wollte der Maler uns beeinflussen?", "Könnte man das so fotografieren?", "Ist die Frau in der Mitte eine echte Person?"],
        sentenceStarters: ["Ich glaube das Bild ist..., weil...", "Das Bild ist erfunden, weil...", "Wir lernen aus dem Bild vor allem..."]
      },
      level_medium: {
        description: "Wie 'echt' ist dieses Bild? Nutze die Ampel, um die Glaubwürdigkeit als historische Quelle zu bewerten.",
        points: ["Welche Details wirken besonders realistisch, welche eher erfunden oder übertrieben?", "Wollte der Maler uns über die Fakten informieren oder uns emotional beeinflussen?", "Ist dieses Bild ein neutraler Beweis für das, was 1830 passiert ist?"],
        hints: ["Wollte der Maler informieren oder beeinflussen?", "Könnte die Szene exakt so fotografiert worden sein?", "Welche Rolle spielt die 'Freiheit' als Person in der Mitte?"],
        sentenceStarters: ["Ich bewertet die Glaubwürdigkeit as ..., weil...", "Das Bild ist eher eine Inszenierung als eine Dokumentation, da...", "Als historische Quelle verrät uns das Bild vor allem etwas über..."]
      },
      level_hard: {
        description: "Bewerte, wie nützlich das Bild als Beweis für die Geschichte ist. Unterscheide zwischen Wahrheit und Kunst.",
        points: ["Ist das Bild ein neutraler Bericht über den Kampf oder eher eine Werbung für die Revolution?", "Welche Teile des Bildes sind realistisch gemalt und welche sind eher erfunden, um Gefühle zu wecken?", "Was kann uns ein solches Kunstwerk heute noch über die Zeit von 1830 lehren?"],
        hints: ["Ein Gemälde ist immer eine bewusste Entscheidung des Malers, kein Zufallsprodukt.", "Die heldenhafte Darstellung soll die Betrachter stolz machen.", "Achte auf den Unterschied zwischen echten Details (Kleidung) und erfundenen Figuren (die Frau)."],
        sentenceStarters: ["Die Glaubwürdigkeit des Bildes ist kritisch zu sehen, weil...", "Der Maler wollte mit diesem Werk eher... als nur zu berichten.", "Man muss zwischen Realität und Erfindung unterscheiden, denn...", "Das Bild ist trotzdem wertvoll für uns, weil..."]
      }
    }
  },
  {
    number: 6,
    icon: "🌍",
    title: "METAEBENE",
    subtitle: "BEDEUTUNG HEUTE",
    content: {
      level_easy: {
        description: "Denk an heute. Warum ist das Bild heute noch wichtig?",
        points: ["Wo siehst du die Frau 'Marianne' heute? (Geld, Plakate)", "Warum kämpfen Menschen heute noch für Freiheit?", "Was hast du heute gelernt?"],
        hints: ["Schau mal auf französische Münzen.", "Freiheit ist für uns heute wichtig.", "Bilder können uns beeinflussen."],
        sentenceStarters: ["Das Bild ist heute noch wichtig, weil...", "Freiheit ist heute wichtig, weil...", "Überrascht hat mich, dass..."]
      },
      level_medium: {
        description: "Reflektiere über die Wirkung des Bildes über die Zeit hinweg.",
        points: ["Wo begegnet uns dieses Bild oder die Figur der 'Marianne' heute noch?", "Warum kämpfen Menschen heute immer noch für Freiheit? Gibt es aktuelle Beispiele?", "Was hast du durch diese Analyse über die Macht von Bildern gelernt?"],
        hints: ["Wo begegnet uns dieses Bild heute noch? (z.B. Euro-Münzen, Plakate)", "Warum ist Freiheit heute noch ein wichtiges Thema?", "Was hat dich bei der Analyse am meisten überrascht?"],
        sentenceStarters: ["Das Bild ist heute noch wichtig, weil...", "Das Thema Freiheit betrifft uns heute, indem...", "Am meisten hat mich überrascht, dass...", "Ich habe durch die Analyse lerne, dass..."]
      },
      level_hard: {
        description: "Überlege, warum dieses Bild auch heute noch weltberühmt ist.",
        points: ["Warum wird die Figur der Marianne auch heute noch als Symbol für den Staat Frankreich genutzt?", "In welchen aktuellen Situationen fordern Menschen auch heute noch 'Freiheit'?", "Wie hat sich dein Blick auf Bilder durch diese genaue Untersuchung verändert?"],
        hints: ["Die Marianne findet man zum Beispiel auf Euro-Münzen aus Frankreich.", "Das Motiv der Freiheit ist zeitlos und wird immer wieder neu interpretiert.", "Überlege, wie Bilder in sozialen Medien heute versuchen, uns zu beeinflussen."],
        sentenceStarters: ["Die Bedeutung des Bildes für die heutige Zeit ist...", "Das Thema Freiheit ist auch heute noch aktuell, weil...", "Die Untersuchung des Bildes hat mir gezeigt, dass...", "Ich nehme aus dieser Analyse mit, dass..."]
      }
    }
  }
];