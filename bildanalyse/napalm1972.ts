import { AnalysisStep } from './freiheitfuehrtvolk';

export const AMPEL_FEEDBACK = {
  red: "❌ FALSCH: Das Foto ist kein Fake. Es wurde nicht im Studio nachgestellt. Rot wäre hier falsch, weil das Ereignis wirklich so stattgefunden hat.",
  yellow: "⚠️ TEILWEISE RICHTIG: Vorsicht ist geboten, weil das Foto das Mädchen ohne ihre Zustimmung zeigt (Privatsphäre). Aber für die historischen Fakten ist Gelb eigentlich zu kritisch.",
  green: "✅ RICHTIG: Das Foto ist ein absolut glaubwürdiges Dokument. Es zeigt die schreckliche Realität des Krieges ohne Verschönerung. Es ist eine der wichtigsten Quellen für den Vietnamkrieg."
};

export const NAPALM_STEPS: AnalysisStep[] = [
  {
    number: 1,
    icon: "📐",
    title: "1) Beschreiben",
    subtitle: "WAS SEHE ICH?",
    content: {
      level_easy: {
        description: "Schau das Foto an. Sag nur, was du siehst.",
        points: ["Wie viele Kinder laufen da?", "Haben sie Kleidung an?", "Was siehst du hinten auf der Straße?", "Wie gucken die Kinder?"],
        hints: ["Siehst du Rauch?", "Die Soldaten sehen ruhig aus."],
        sentenceStarters: ["Ich sehe...", "Hinten ist...", "Das Mädchen hat keine...", "Die Kinder gucken..."]
      },
      level_medium: {
        description: "Sammle Fakten ohne Vermutungen.",
        points: ["Wie viele Kinder laufen auf der Straße auf uns zu?", "Was fällt dir an der Kleidung (oder deren Fehlen) der Kinder auf?", "Was ist im Hintergrund der Straße zu sehen? (Rauch, Personen)", "Welchen Gesichtsausdruck haben die Kinder?"],
        hints: ["Achte auf Rauch.", "Die Soldaten wirken ruhig."],
        sentenceStarters: ["Auf dem Foto sehe ich...", "Im Hintergrund erkennt man..."]
      },
      level_hard: {
        description: "Beschreibe den Aufbau des Fotos und die wichtigsten Bildelemente.",
        points: ["Wie sind die Personen auf der Straße angeordnet?", "In welchem Zustand befinden sich die Kinder in der Bildmitte?", "Was passiert im Hintergrund der Szene und wer ist dort zu sehen?", "Beschreibe die Gefühle, die man in den Gesichtern der Kinder lesen kann."],
        hints: ["Die Flucht der Kinder ist das Hauptthema des Bildes.", "Der Kontrast zwischen den weinenden Kindern und den ruhigen Soldaten ist auffällig.", "Der Rauch deutet auf eine Explosion hin."],
        sentenceStarters: ["Das Zentrum des Fotos wird bestimmt durch...", "Hinter den flüchtenden Kindern sieht man...", "Besonders markant ist die Mimik der Kinder, da...", "Der Aufbau des Bildes lenkt den Blick auf..."]
      }
    },
    checkpoint: {
      question: "Welches detail im Hintergrund deutet auf die unmittelbare Gefahr hin?",
      options: ["Spielende Kinder", "Dunkle Rauchwolken", "Ein Auto"],
      correctIndex: 1,
      hint: "Schau in den Himmel."
    }
  },
  {
    number: 2,
    icon: "🔍",
    title: "2) Hypothesen",
    subtitle: "WAS KÖNNTE DAS BEDEUTEN?",
    content: {
      level_easy: {
        description: "Was denkst du? Was ist passiert?",
        points: ["Warum laufen die Kinder weg? Haben sie Angst?", "Warum hat das Mädchen keine Kleider an?", "Was machen die Soldaten?"],
        hints: ["Ist es sehr heiß oder brennt es?", "Helfen die Soldaten?"],
        sentenceStarters: ["Ich glaube, sie laufen weg, weil...", "Das Mädchen hat keine Kleider, weil...", "Die Soldaten sind vielleicht..."]
      },
      level_medium: {
        description: "Stelle Vermutungen auf.",
        points: ["Vor was könnten die Kinder weglaufen? Was jagt ihnen solche Angst ein?", "Warum hat das Mädchen in der Mitte keine Kleider an?", "Welche Rolle spielen die Soldaten im Hintergrund? Helfen sie oder jagen sie?", "Woher könnte der schwarze Rauch kommen?"],
        hints: ["Hitze oder Feuer?", "Rolle der Soldaten?"],
        sentenceStarters: ["Ich vermute, dass...", "Die Kinder laufen weg, weil..."]
      },
      level_hard: {
        description: "Deute das Geschehen und stelle Vermutungen über die Ursachen an.",
        points: ["Was für eine Gefahr droht den Menschen vermutlich von hinten?", "Welche Verletzungen oder Schmerzen könnte das nackte Mädchen haben?", "Wie ist die Haltung der Soldaten zu bewerten - wirken sie bedrohlich oder hilfsbereit?", "Was muss kurz vor diesem Foto passiert sein?"],
        hints: ["Die Nacktheit könnte ein Hinweis auf starke Hitze oder Feuer sein.", "Die Soldaten scheinen eher zuzusehen als einzugreifen.", "Das Foto wirkt wie ein plötzlicher, echter Augenblick."],
        sentenceStarters: ["Man kann vermuten, dass die Ursache für die Flucht...", "Die körperliche Verfassung des Mädchens lässt darauf schließen, dass...", "Die Anwesenheit der Soldaten im Hintergrund bedeutet möglicherweise...", "Es ist wahrscheinlich, dass kurz zuvor..."]
      }
    },
    checkpoint: {
      question: "Warum könnte das Mädchen nackt sein?",
      options: ["Hitze/Feuer", "Baden gehen", "Sommertag"],
      correctIndex: 0,
      hint: "Rauch im Hintergrund."
    }
  },
  {
    number: 3,
    icon: "⏳",
    title: "3) Historischer Kontext",
    subtitle: "VIETNAMKRIEG 1972",
    content: {
      level_easy: {
        description: "Lies den Text. Er hilft dir.",
        contextText: "Der Vietnamkrieg war ein Krieg in Asien. Es kämpften [[Nordvietnam|Der kommunistische Norden des Landes.]] und der [[Vietcong|Eine Rebellengruppe, die im Süden kämpfte.]] gegen [[Südvietnam|Der Teil des Landes, der nicht kommunistisch werden wollte.]]. Die [[USA|Vereinigte Staaten von Amerika]] halfen Südvietnam. Nordvietnam wollte das Land [[vereinigen|Zusammenbringen zu einem einzigen Staat.]]. Die USA wollten verhindern, dass der Kommunismus stärker wird.\n\nDas Foto ist von [[1972|Das Jahr, in dem das Bild entstand.]]. In der Nähe gab es einen Angriff mit [[Napalm|Eine Brandwaffe, die klebrig ist und sehr heiß auf der Haut brennt.]]. Das Mädchen läuft weinend, weil es [[flieht|Vor Gefahr wegrennen.]], [[Angst|Ein schlimmes Gefühl bei Gefahr.]] hat und [[Schmerzen|Körperliches Leiden durch Verletzung.]] hat. Das Bild zeigt: Im Krieg leiden auch [[Kinder|Unbeteiligte junge Menschen.]] und andere Unbeteiligte.",
        points: ["Was ist Napalm?", "Wie heißt das Mädchen?", "Was hat das Foto gemacht?"],
        hints: ["Napalm tut sehr weh.", "Das Foto war überall in den Nachrichten."],
        sentenceStarters: ["Napalm ist...", "Das Mädchen war...", "Die Leute in der Welt..."]
      },
      level_medium: {
        description: "Lies den Text.",
        contextText: "Der Vietnamkrieg war Teil des [[Kalten Krieges|Der jahrzehntelange Konflikt zwischen den USA und der Sowjetunion.]]. [[Nordvietnam|Der kommunistisch regierte Norden.]] und der [[Vietcong|Kommunistische Kämpfer im Süden.]] kämpften gegen [[Südvietnam|Die Republik im Süden.]], das von den [[USA|Die Vereinigten Staaten von Amerika.]] unterstützt wurde. Nordvietnam wollte Vietnam unter einer Regierung [[vereinigen|Einen gemeinsamen Staat bilden.]]. Die USA wollten die Ausbreitung des Kommunismus verhindern.\n\nDas Foto entstand [[1972|Juni 1972.]] in Südvietnam nach einem Angriff mit [[Napalm|Eine grausame Brandwaffe, die wie brennendes Gel auf der Haut klebt.]]. Dabei wurden auch [[Zivilisten|Menschen, die keine Soldaten sind.]] getroffen. Das Mädchen läuft weinend, weil es aus der Gefahrenzone [[flieht|Sich in Sicherheit bringen.]], verletzt ist und unter Schock steht. Das Foto wurde berühmt, weil es die [[Folgen des Krieges für Kinder|Wie unschuldige Kinder unter der Gewalt leiden.]] deutlich macht.",
        points: ["Was genau ist Napalm und welche Wirkung hat es auf Menschen?", "Warum wurde das Dorf Trang Bang überhaupt angegriffen?", "Wer ist das Mädchen in der Mitte und was passierte mit ihr nach dem Foto?", "Welchen Einfluss hatte dieses Bild auf die Meinung der Menschen zum Krieg?"],
        hints: ["Napalm brennt auf der Haut.", "Angriff war ein Fehler."],
        sentenceStarters: ["Im Text steht, dass...", "Das Bild wurde zum Symbol für..."]
      },
      level_hard: {
        description: "Erfahre mehr über die Hintergründe des Vietnamkriegs.",
        contextText: "Der [[Vietnamkrieg|Der Konflikt zwischen 1955 und 1975.]] (1950er–1975) war ein Stellvertreterkonflikt im [[Kalten Krieg|Konflikt zwischen Westmächten und Ostblock.]]. [[Nordvietnam|Die Demokratische Republik Vietnam.]] und der in Südvietnam aktive [[Vietcong|Nationale Front für die Befreiung Südvietnams.]] verfolgten das Ziel, Vietnam politisch zu [[vereinigen|Einen einheitlichen, kommunistischen Staat schaffen.]] und kommunistisch zu prägen; [[Südvietnam|Republik Vietnam.]] wurde militärisch und politisch von den [[USA|U.S. Armed Forces.]] gestützt, die eine weitere Ausbreitung des Kommunismus in der Region verhindern wollten.\n\nDas Foto entstand [[1972|Der 8. Juni 1972.]] nach einem Angriff mit [[Napalm|Eine hoch entzündliche Substanz auf Benzinbasis.]], einer Brandwaffe, die zur Bekämpfung vermuteter Stellungen eingesetzt wurde. In der unübersichtlichen Kriegslage gerieten auch [[Unbeteiligte|Menschen ohne Bezug zu den Kampfhandlungen.]] in Lebensgefahr. Das Mädchen läuft weinend, weil es flieht, verletzt ist und akut unter Schmerzen und Schock steht. Als weltweit verbreitetes Pressefoto prägte es die öffentliche Wahrnehmung des Krieges und wirft bis heute Fragen nach [[Kriegsführung, Verantwortung und Medienwirkung|Wie Kriege geführt werden und wie darüber berichtet wird.]] auf.",
        points: ["Was macht den Einsatz von Napalm so grausam für die Zivilbevölkerung?", "Welche Wirkung hatte das Foto auf die öffentliche Meinung in anderen Ländern?", "Wer ist Kim Phuc und was wurde aus ihr nach diesem Ereignis?"],
        hints: ["Napalm brennt auch auf nasser Haut und lässt sich kaum löschen.", "Der Vietnamkrieg war einer der ersten Kriege, die so intensiv in den Medien gezeigt wurden.", "Das Bild entlarvte die Fehler und die Grausamkeit des Krieges."],
        sentenceStarters: ["Aus dem Text wird deutlich, dass...", "Das Foto von Nick Út war ein Wendepunkt, weil...", "Man lerne im Kontext, dass...", "Die Wirkung des Napalms war..."]
      }
    },
    checkpoint: {
      question: "Was bewirkte das Foto weltweit?",
      options: ["Nichts", "Stärkerer Protest gegen den Krieg", "Zustimmung zum Krieg"],
      correctIndex: 1,
      hint: "Lies den letzten Satz."
    }
  },
  {
    number: 4,
    icon: "💡",
    title: "4) Überprüfung",
    subtitle: "HYPOTHESEN KLÄREN",
    content: {
      level_easy: {
        description: "Prüfe jetzt deine Ideen.",
        points: ["Warum hatte das Mädchen keine Kleider an? Warst du richtig?", "Was weißt du jetzt über das Leid?", "Waren die Soldaten lieb?"],
        hints: ["Das Feuer hat die Kleider verbrannt.", "Die Soldaten haben später geholfen."],
        sentenceStarters: ["Ich hatte recht: Das Mädchen...", "Jetzt weiß ich, dass...", "Die Soldaten waren..."]
      },
      level_medium: {
        description: "Prüfe deine Vermutungen.",
        points: ["Stimmt deine Vermutung über den Grund für das Fehlen der Kleidung?", "Welche Details im Bild verstehst du erst jetzt durch den Text?", "Hattest du recht mit der Rolle der Soldaten im Hintergrund?"],
        hints: ["Vergleiche Realität vs. Vermutung."],
        sentenceStarters: ["Meine Hypothese war richtig, weil...", "Zuerst dachte ich..."]
      },
      level_hard: {
        description: "Vergleiche deine ersten Ideen mit den historischen Fakten.",
        points: ["Wurde deine Vermutung über das Leid des Mädchens durch den Text bestätigt?", "Welche Bildelemente ergeben erst jetzt mit dem Wissen über Napalm einen Sinn?", "Wie bewertest du nun die Rolle des Fotografen in dieser Situation?"],
        hints: ["Die Nacktheit ist eine direkte Folge der Brandwaffe.", "Das Bild zeigt einen tragischen Irrtum der eigenen Verbündeten.", "Der Fotograf half den Kindern direkt nach der Aufnahme."],
        sentenceStarters: ["Nachdem ich die Fakten kenne, lässt sich sagen, dass...", "Das Wissen über Napalm verändert den Blick auf das Bild, indem...", "Es bestätigt sich die Vermutung, dass...", "Man versteht nun besser, warum..."]
      }
    },
    checkpoint: {
      question: "Welches Wissen bestätigt das Leid?",
      options: ["Napalm brennt auf der Haut", "Es gab ein Fest", "Schulausflug"],
      correctIndex: 0,
      hint: "Was klebt auf der Haut?"
    }
  },
  {
    number: 5,
    icon: "🚦",
    title: "5) GLAUBWÜRDIGKEIT",
    subtitle: "QUELLENKRITIK",
    content: {
      level_easy: {
        description: "Ist das Foto wahr? Nutze die Ampel.",
        points: ["Zeigt das Foto die Wahrheit?", "Ist es gestellt oder echt?", "Darf man so ein Foto zeigen?"],
        hints: ["Ein Foto zeigt nur einen Moment.", "Das Mädchen litt wirklich."],
        sentenceStarters: ["Das Foto ist..., weil...", "Ich finde man darf das zeigen, weil...", "Es ist ein echtes Foto, denn..."]
      },
      level_medium: {
        description: "Wie glaubwürdig ist dieses Foto als Quelle für den Vietnamkrieg? Nutze die Ampel.",
        points: ["Ein Foto zeigt einen Moment – kann es die ganze Wahrheit eines Krieges zeigen?", "Wurde das Bild gestellt oder ist es ein echter Schnappschuss?", "Darf oder muss man solches Leid fotografieren, um die Welt zu informieren?"],
        hints: ["Ist ein Foto immer die Wahrheit?", "Zeigt es einen Ausschnitt oder das Ganze?"],
        sentenceStarters: ["Ich bewerte die Glaubwürdigkeit als ..., da...", "Ein Foto zeigt zwar die Realität, aber nur..."]
      },
      level_hard: {
        description: "Bewerte den Wert des Fotos als geschichtliches Zeugnis.",
        points: ["Ist das Foto ein ehrlicher Beweis für das Geschehen oder nur ein kleiner Ausschnitt?", "Sollte man so ein Bild veröffentlichen, um die Welt aufzurütteln, oder verletzt das die Rechte der Kinder?", "Welchen Unterschied macht es, dass dies ein echtes Foto und kein Gemälde ist?"],
        hints: ["Das Bild wurde nicht geplant, sondern in einer Krisensituation aufgenommen.", "Bilder von Schmerz können Menschen stark beeinflussen.", "Hinterfrage, ob ein einziges Foto einen ganzen Krieg erklären kann."],
        sentenceStarters: ["Die Glaubwürdigkeit des Fotos ist hoch, da...", "Man muss jedoch bedenken, dass ein Foto immer nur...", "Die ethische Frage dabei ist...", "Im Vergleich zu einem Gemälde bietet dieses Foto..."]
      }
    }
  },
  {
    number: 6,
    icon: "🌍",
    title: "6) METAEBENE",
    subtitle: "BEDEUTUNG HEUTE",
    content: {
      level_easy: {
        description: "Denk an heute. Würdest du so ein Foto posten?",
        points: ["Ist Privatsphäre wichtig?", "Warum ist das Mädchen heute Friedens-Botschafterin?", "Was lernst du für die Zukunft?"],
        hints: ["Stell dir vor, du wärst auf dem Foto.", "Bilder können die Welt ändern."],
        sentenceStarters: ["Ich würde das Foto nicht posten, weil...", "Das Bild lehrt uns, dass Krieg...", "Kim Phuc ist heute wichtig, weil..."]
      },
      level_medium: {
        description: "Darf man solche Bilder heute noch in sozialen Medien zeigen?",
        points: ["Wäre es heute okay, ein solches Foto eines Kindes ohne dessen Erlaubnis zu posten?", "Was lehrt uns dieses Bild über die Verantwortung von Fotografen in Kriegsgebieten?", "Sollte man solche schrecklichen Bilder im Unterricht zeigen? Warum (nicht)?"],
        hints: ["Schutz der Privatsphäre vs. Information.", "Würdest du so ein Bild teilen?", "Warum ist Kim Phuc heute eine Friedensbotschafterin?"],
        sentenceStarters: ["Heutzutage wäre die Veröffentlichung schwierig, weil...", "Das Bild lehrt uns für die Zukunft, dass...", "Die Metaebene zeigt uns, dass Kriegsbilder immer auch..."]
      },
      level_hard: {
        description: "Überlege, was das Bild uns heute noch über die Welt sagen kann.",
        points: ["Wie hat dieses Foto die Sicht auf Kriege für immer verändert?", "Dürfte man heute in Zeiten von sozialen Medien noch solche Bilder ohne Erlaubnis zeigen?", "Was können wir von Kim Phuc und ihrem Umgang mit der Vergangenheit lernen?"],
        hints: ["Das Bild hat einen festen Platz im Gedächtnis der Menschheit.", "Bilder können politische Entscheidungen beeinflussen.", "Reflektiere deine eigene Verantwortung beim Ansehen und Teilen von Bildern."],
        sentenceStarters: ["Die langfristige Wirkung des Bildes zeigt sich darin, dass...", "In der heutigen digitalen Welt stellt sich die Frage...", "Ich nehme aus dieser Analyse mit, dass...", "Das Beispiel Kim Phuc verdeutlicht, dass..."]
      }
    }
  }
];

export const SENSITIVITY = {
  warning: "Dieses Foto zeigt verletzte Kinder und Kriegsgrausamkeit.",
  classroomOption: {
    defaultPreview: "blurred",
    revealButtonText: "Bild anzeigen",
    alternativeTask: "Arbeite mit Skizzen."
  }
};
