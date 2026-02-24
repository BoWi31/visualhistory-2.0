
import { AnalysisStep } from './freiheitfuehrtvolk';

export const AMPEL_FEEDBACK = {
  red: "❌ FALSCH: Das Bild ist kein technischer 'Fake' (wie ein Computerbild). Es wurde 1967 wirklich so gefilmt. Wer 'Lüge' sagt, muss beweisen, wie der Betrug gemacht wurde (z.B. ein Kostüm finden).",
  yellow: "✅ RICHTIG (Beste Wahl): Wir wissen es nicht sicher. Experten streiten sich seit über 50 Jahren. Es gibt keine biologischen Beweise (Haare/DNA), aber auch keinen Beweis für ein Kostüm. Das Bild bleibt ein Rätsel.",
  green: "⚠️ VORSICHT: Grün würde bedeuten, das Bild beweist ein neues Tier zu 100%. Für die Wissenschaft reicht ein unscharfes Video aber nicht aus. Man braucht echte Knochen oder DNA-Proben."
};

export const BIGFOOT_STEPS: AnalysisStep[] = [
  {
    number: 1,
    icon: "📐",
    title: "1) BESCHREIBEN",
    subtitle: "WAS SEHE ICH?",
    content: {
      level_easy: {
        description: "Schau das Bild genau an. Beschreibe nur, was man wirklich mit den Augen sehen kann.",
        points: ["Wie sieht der Körper der Gestalt aus?", "Beschreibe die Umgebung (Bäume, Boden).", "Wie ist die Qualität des Bildes (Farben, Schärfe)?", "In welche Richtung blickt das Wesen?"],
        hints: ["Schau dir die Arme an. Sind sie lang?", "Ist der Boden flach oder liegen dort Bäume?", "Das Bild ist alt und etwas unscharf."],
        sentenceStarters: ["Ich sehe ein Wesen, das...", "Die Gestalt hat sehr lange...", "Der Hintergrund besteht aus...", "Das Bild wirkt auf mich..."]
      },
      level_medium: {
        description: "Sammle optische Fakten. Bleibe sachlich und bilde noch keine Meinung.",
        points: ["Analysiere die Anatomie: Proportionen von Armen, Beinen und Rumpf.", "Beschreibe die Landschaft (Vegetation, Lichtverhältnisse).", "Bewerte die technische Bildqualität (Körnung, Bewegungsunschärfe).", "Beschreibe die Körperhaltung und die Schrittfolge der Figur."],
        hints: ["Achte auf das Verhältnis von Armlänge zu Körpergröße.", "Siehst du irgendwo Nähte wie bei Kleidung?", "Der Hintergrund sieht nach einer wilden Natur aus."],
        sentenceStarters: ["Auf diesem Frame erkennt man...", "Besonders auffällig an der Anatomie ist...", "Die Umgebung lässt sich beschreiben als...", "Die Fortbewegung der Figur wirkt..."]
      },
      level_hard: {
        description: "Analysiere das Bild als technisches Dokument seiner Zeit.",
        points: ["Untersuche die räumliche Tiefe: Wie weit ist das Wesen von der Kamera entfernt?", "Analysiere die Textur der Oberfläche (Fellstruktur, Muskelspiel).", "Welche biomechanischen Merkmale des Ganges lassen sich feststellen?", "Beschreibe die Interaktion der Figur mit dem Untergrund (Gewicht, Fußabdrücke)."],
        hints: ["Achte auf Licht und Schatten auf den Schultern.", "Die Figur dreht beim Laufen den Oberkörper.", "Das Bild wurde mit einer 16mm-Filmkamera gemacht."],
        sentenceStarters: ["Die bildkompositorische Analyse zeigt...", "Bezüglich der Materialbeschaffenheit lässt sich feststellen...", "Die biomechanischen Aspekte des Ganges deuten auf...", "Besonders signifikant für die Datierung ist..."]
      }
    },
    checkpoint: {
      question: "Was ist eine reine Beobachtung (Fakt), keine Vermutung?",
      options: ["Die Gestalt trägt ein Affenkostüm", "Die Gestalt bewegt sich auf zwei Beinen", "Die Gestalt ist ein Bigfoot"],
      correctIndex: 1,
      hint: "Nur das Gehen auf zwei Beinen kann man direkt im Bild sehen."
    }
  },
  {
    number: 2,
    icon: "🔍",
    title: "2) HYPOTHESEN",
    subtitle: "ERKLÄRUNGEN SUCHEN",
    content: {
      level_easy: {
        description: "Überlege dir: Was könnte diese Gestalt sein? Sammle verschiedene Ideen.",
        points: ["Welche Erklärungen aus der Natur fallen dir ein?", "Könnte es etwas Künstliches (von Menschen Gemachtes) sein?", "Warum haben Menschen so viele verschiedene Ideen bei diesem Bild?", "Was müsste man finden, um ganz sicher zu sein?"],
        hints: ["Denk an Tiere oder an Verkleidungen.", "Überleg mal: Könnte es ein Trick sein?", "Jeder Mensch sieht oft etwas anderes."],
        sentenceStarters: ["Eine Erklärung könnte sein, dass...", "Man könnte vermuten, dass...", "Vielleicht handelt es sich um...", "Es ist schwierig zu sagen, weil..."]
      },
      level_medium: {
        description: "Entwickle verschiedene Denkmodelle, um das Gesehene zu erklären.",
        points: ["Sammle mindestens drei verschiedene Ideen für die Identität der Gestalt.", "Überlege: Was spricht für ein echtes Tier?", "Was spricht für einen geplanten Betrug?", "Welche Rolle spielt es, was man vorher über Bigfoot gehört hat?"],
        hints: ["Könnte es ein Mensch, ein Affe oder etwas ganz anderes sein?", "Denk an die Leute, die das Video gefilmt haben."],
        sentenceStarters: ["Es lassen sich verschiedene Hypothesen aufstellen: Erstens...", "Für die Echtheit könnte sprechen, dass...", "Ein Hinweis auf eine Täuschung wäre...", "Die Wahrnehmung wird beeinflusst durch..."]
      },
      level_hard: {
        description: "Diskutiere die Wahrscheinlichkeit verschiedener Erklärungsansätze.",
        points: ["Wäge die Idee einer 'neuen Tierart' gegen die eines 'Schauspielers im Kostüm' ab.", "Welche Beweise bräuchte die Wissenschaft für deine Ideen?", "Inwiefern beeinflusst unser Wunsch nach Geheimnissen unsere Meinung?", "Welche Beweise fehlen uns für jede deiner Vermutungen?"],
        hints: ["Oft ist die einfachste Erklärung die richtige. Welche ist das hier?", "Wissenschaft braucht Dinge, die man anfassen kann (Knochen)."],
        sentenceStarters: ["Kritisch betrachtet stehen sich zwei Erklärungsmodelle gegenüber...", "Die Validität der Hypothesen hängt ab von...", "Ein methodisches Problem bei der Analyse ist...", "Die Wahrscheinlichkeitsrechnung deutet darauf hin, dass..."]
      }
    }
  },
  {
    number: 3,
    icon: "⏳",
    title: "3) KONTEXT",
    subtitle: "WAS PASSIERTE 1967?",
    content: {
      level_easy: {
        description: "Lies genau, wie der Film entstanden ist. Das hilft dir beim Prüfen.",
        contextText: "Am [[20. Oktober 1967|Der Tag der Aufnahme.]] ritten zwei Männer, [[Roger Patterson|Ein Cowboy, der unbedingt beweisen wollte, dass es Bigfoot gibt.]] und [[Bob Gimlin|Sein Freund.]], durch einen einsamen Wald in Kalifornien. Sie ritten an einem Bach entlang. Plötzlich sahen sie eine große, dunkle Gestalt am Ufer stehen. Roger sprang sofort von seinem Pferd. Sein Pferd hatte Angst und er fiel fast hin. Er schnappte sich seine [[16mm-Kamera|Eine kleine Kamera für Filme auf Rollen.]] und lief der Gestalt hinterher. Er filmte beim Laufen. Deshalb wackelt das Bild so stark. Die Gestalt lief weg und schaute einmal kurz zurück. Nach weniger als einer Minute war sie im dichten Wald verschwunden. Später fanden die Männer große Fußabdrücke im Sand und machten Formen aus Gips davon.",
        points: ["Was haben die Männer im Wald gemacht?", "Wie hat Roger Patterson reagiert, als er das Wesen sah?", "Was passierte, nachdem das Wesen weg war?"],
        hints: ["Sie waren mit Pferden im Wald.", "Roger ist losgerannt, um zu filmen.", "Sie haben Spuren am Boden gefunden."],
        sentenceStarters: ["An diesem Tag wollten die Männer...", "Patterson hat die Kamera genommen und...", "Die Suche endete mit..."]
      },
      level_medium: {
        description: "Verstehe den Ablauf der Ereignisse am Bluff Creek.",
        contextText: "Im Jahr [[1967|Das Jahr der Aufnahme.]] suchten Roger Patterson und Bob Gimlin gezielt nach Beweisen für das Waldwesen [[Bigfoot|Ein sagenumwobenes Wesen.]]. Sie ritten durch ein unwegsames Gebiet in [[Nordkalifornien|Ein Ort namens Bluff Creek.]]. Als sie die Gestalt sichteten, scheute Pattersons Pferd. Er rannte mit seiner Kamera los, während das Wesen (von ihnen 'Patty' genannt) ruhig davonging. Patterson filmte im Laufen, was die Unschärfe erklärt. Die Gestalt ignorierte die Männer fast völlig und verschwand im Unterholz. Patterson und Gimlin sagten später, das Wesen sei riesig gewesen. Kritiker vermuten heute, dass Patterson das Video plante, um mit der Geschichte Geld zu verdienen.",
        points: ["Beschreibe die Situation der Männer während der Aufnahme.", "Was wissen wir über das Verhalten der Gestalt im Wald?", "War die Gegend belebt oder einsam?"],
        hints: ["Patterson wollte einen Film über Bigfoot machen.", "Das Wesen schien keine große Angst zu haben.", "Sie waren weit weg von jeder Stadt."],
        sentenceStarters: ["Der historische Kontext verdeutlicht, dass...", "Der Ablauf der Sichtung war geprägt von...", "Die Motivation der Urheber könnte..."]
      },
      level_hard: {
        description: "Analysiere die Entstehungsgeschichte des 'Patterson-Gimlin-Films'.",
        contextText: "Die Sichtung am [[20. Oktober 1967|Ein berühmter Tag für Rätsel-Fans.]] geschah in einer Zeit, in der viele Menschen in den USA an Monster glaubten. Patterson nutzte eine einfache Kamera. Ein großes Problem ist die [[Bildrate|Wie viele Bilder pro Sekunde gefilmt wurden.]]. Man weiß nicht genau, wie schnell die Kamera lief. Wenn sie langsam lief, wirkt der Gang der Figur heute normal. Wenn sie schnell lief, wirkt er unnatürlich. Patterson und Gimlin machten sofort Gipsabdrücke der Spuren. Bis heute konnte kein Experte aus Hollywood beweisen, wie man 1967 ein so perfektes Kostüm im Wald hätte nutzen können. Aber: Es gibt bis heute keine Haare oder DNA von so einem Tier.",
        points: ["Welchen Einfluss hat die Technik auf die Beweiskraft?", "Warum ist die Geschwindigkeit des Films (fps) wichtig?", "Warum ist das Fehlen von echten Spuren (Haaren) ein Problem?"],
        hints: ["Ohne den Original-Filmstreifen kann man schlecht prüfen.", "Sogar Disney-Experten waren von dem Video überrascht.", "Bilder allein reichen der Wissenschaft oft nicht."],
        sentenceStarters: ["Die Rekonstruktion der Ereignisse zeigt...", "Ein entscheidender technischer Faktor ist...", "Die Quellenlage wird dadurch erschwert, dass...", "Im wissenschaftlichen Diskurs wird kritisiert..."]
      }
    }
  },
  {
    number: 4,
    icon: "💡",
    title: "4) ÜBERPRÜFEN",
    subtitle: "IDEEN CHECKEN",
    content: {
      level_easy: {
        description: "Vergleiche jetzt deine Ideen aus Schritt 2 mit dem Wissen aus Schritt 3.",
        points: ["Passt deine Idee zu dem, was im Wald passiert ist?", "Hast du deine Meinung durch den Text geändert?", "Was spricht gegen einen Betrug (Hoax)?", "Was spricht für einen Betrug?"],
        hints: ["Könnte man im tiefen Wald schnell ein Kostüm anziehen?", "Patterson hat schon vorher an Bigfoot geglaubt.", "Das Video sieht für manche sehr echt aus."],
        sentenceStarters: ["Nach dem Lesen des Textes denke ich...", "Meine erste Idee war..., weil...", "Gegen einen Betrug spricht, dass...", "Für einen Betrug spricht, dass..."]
      },
      level_medium: {
        description: "Prüfe deine Hypothesen anhand der historischen Fakten.",
        points: ["Welche deiner Vermutungen passt zum Text?", "Wie wichtig sind die Gipsabdrücke für deine Meinung?", "Was hältst du davon, dass Patterson vom Pferd gesprungen ist?", "Glaubst du jetzt eher an ein Tier oder an einen Trick?"],
        hints: ["Denk an die Muskeln, die man im Video sieht.", "Haben die Männer die Wahrheit gesagt?"],
        sentenceStarters: ["Beim Abgleich der Hypothesen mit dem Kontext zeigt sich...", "Ein Argument für Hypothese A ist...", "Dagegen lässt sich einwenden, dass...", "Insgesamt komme ich zu dem Schluss, dass..."]
      },
      level_hard: {
        description: "Führe eine kritische Quellenprüfung durch.",
        points: ["Passen die Bewegungen im Bild zu dem, was die Männer erzählt haben?", "Gibt es Widersprüche zwischen der Technik und Pattersons Zielen?", "Wie sicher ist die Kette: Film -> Abdrücke -> Zeugen?", "Ist ein Betrug wahrscheinlicher als ein neues Tier?"],
        hints: ["Patterson brauchte Geld – ist das ein Motiv?", "Gimlin hat seine Geschichte nie geändert."],
        sentenceStarters: ["Die Korrelation zwischen Bildmaterial und Zeugenaussage ist...", "Trotz der Indizien für einen Betrug bleibt das Problem...", "Die Beweiskette weist Lücken auf bei...", "Methodisch gesehen lässt sich feststellen..."]
      }
    },
    checkpoint: {
      question: "Was macht es schwierig, den Film als 'eindeutigen Beweis' zu nutzen?",
      options: ["Die schlechte Bildqualität", "Das Fehlen von biologischen Proben (DNA)", "Beides"],
      correctIndex: 2,
      hint: "Bilder allein können in der Biologie keine neue Art beweisen."
    }
  },
  {
    number: 5,
    icon: "🚦",
    title: "5) WAHRHEITSGEHALT",
    subtitle: "GLAUBWÜRDIGKEIT",
    content: {
      level_easy: {
        description: "Wie glaubwürdig ist das Bild? Nutze die Ampel.",
        points: ["Beweist das Bild, dass es Bigfoot gibt?", "Beweist das Bild, dass es ein Trick war?", "Was wissen wir wirklich sicher?"],
        hints: ["Gelb heißt: Wir wissen es nicht.", "Grün heißt: Es ist sicher wahr.", "Rot heißt: Es ist eine Lüge."],
        sentenceStarters: ["Ich wähle die Farbe..., weil...", "Das Bild beweist für mich...", "Man kann nicht sicher sein, weil..."]
      },
      level_medium: {
        description: "Bewerte den Wert des Bildes als historische Quelle.",
        points: ["Ist das Bild eine gute Quelle für ein Tier?", "Zeigt das Bild eher, was Menschen 1967 spannend fanden?", "Welche Infos fehlen uns für eine Antwort?"],
        hints: ["Ein Bild allein ist oft kein Beweis.", "Wissenschaft braucht Fakten, keine Wünsche."],
        sentenceStarters: ["In Bezug auf den Wahrheitsgehalt lässt sich sagen...", "Das Bild ist als Quelle wertvoll für..., aber nicht für...", "Meine Bewertung fällt auf..., da..."]
      },
      level_hard: {
        description: "Diskutiere den Stellenwert des Bildes im kryptozoologischen Diskurs.",
        points: ["Kann ein Film ohne echte Knochen als 'wahr' gelten?", "Ist das Bild ein Beweis für etwas Unbekanntes?", "Wie glaubwürdig sind die Filmer heute noch?"],
        hints: ["Das Bild zeigt etwas, das nicht in unser Wissen passt."],
        sentenceStarters: ["Die Glaubwürdigkeit der Quelle ist ambivalent, da...", "Im wissenschaftlichen Sinne fungiert das Bild als...", "Die finale Beurteilung lautet..."]
      }
    }
  },
  {
    number: 6,
    icon: "🌍",
    title: "6) METAEBENE",
    subtitle: "MYTHOS UND MEDIEN",
    content: {
      level_easy: {
        description: "Warum faszinieren uns solche Bilder bis heute?",
        points: ["Warum wollen Menschen an Monster glauben?", "Warum verbreiten sich solche Bilder so schnell?", "Was lernst du für den Umgang mit Internet-Bildern?"],
        hints: ["Geheimnisse sind spannend.", "Prüfe immer die Quelle."],
        sentenceStarters: ["Das Bild ist heute noch berühmt, weil...", "Menschen glauben das gerne, weil...", "Bevor ich ein Bild teile, werde ich..."]
      },
      level_medium: {
        description: "Reflektiere über die Macht von viralen Bildern und Mythen.",
        points: ["Warum wurde aus diesem einen Film eine weltweite 'Ikone'?", "Welche Rolle spielt die 'Ungewissheit' für den Erfolg einer Story?", "Wie prüfst du heute Bilder im Internet (Regeln)?", "Warum verdienen Menschen Geld mit solchen Mythen?"],
        hints: ["Regel 1: Quelle checken. Regel 2: Wer verdient daran?"],
        sentenceStarters: ["Das Bild fungiert als Symbol für...", "Die Faszination erklärt sich durch...", "Um Medienkompetenz zu zeigen, muss man...", "Der kommerzielle Aspekt ist..."]
      },
      level_hard: {
        description: "Analysiere das Bild als kulturelles Phänomen.",
        points: ["Inwiefern ist der Bigfoot-Film ein Vorläufer heutiger Fake-News oder Deepfakes?", "Warum ist der Zweifel oft lukrativer als die Wahrheit?", "Diskutiere die Verantwortung der Medien bei der Verbreitung unbestätigter Inhalte.", "Welche gesellschaftliche Funktion erfüllen moderne Mythen?"],
        hints: ["Klicks und Aufmerksamkeit sind eine eigene Währung."],
        sentenceStarters: ["Das Phänomen Bigfoot zeigt exemplarisch, wie...", "In der heutigen Medienwelt lehrt uns dieses Bild...", "Die gesellschaftliche Relevanz von Mythen liegt in...", "Die ethische Verantwortung der Medien besteht darin..."]
      }
    }
  }
];
