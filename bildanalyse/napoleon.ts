import { AnalysisStep } from './freiheitfuehrtvolk';

export const INSTRUCTION_HINT = "WICHTIG: BITTE SCHREIBE DEINE ERGEBNISSE UND GEDANKEN IN DEIN HEFT ODER AUF EIN BLATT PAPIER!";

export const AMPEL_FEEDBACK = {
  red: "✅ RICHTIG: Als Beweis für den exakten Ablauf ist das Bild 'unglaubwürdig'. Napoleon ritt in echt auf einem Maultier und das Wetter war friedlich. Das Bild zeigt also eine bewusste historische Lüge, um Macht zu demonstrieren.",
  yellow: "⚠️ TEILWEISE RICHTIG: Das Ereignis (Alpenüberquerung) stimmt zwar, aber fast jedes Detail (Pferd, Umhang, Haltung) ist erfunden oder extrem verschönert worden.",
  green: "❌ FALSCH: Das Bild ist als Tatsachenbericht absolut unglaubwürdig. Grün wäre nur richtig, wenn du die Frage so verstehst: 'Ist das Bild glaubwürdig dafür, wie Napoleon gesehen werden wollte?'"
};

export const NAPOLEON_STEPS: AnalysisStep[] = [
  {
    number: 1,
    icon: "📐",
    title: "BESCHREIBEN",
    subtitle: "WAS SEHT IHR?",
    content: {
      level_easy: {
        description: "Was siehst du auf dem Bild? Suche nur Dinge, die man sehen kann.",
        points: ["Was trägt Napoleon für Kleidung?", "Was macht das Pferd?", "Was steht auf den Steinen unten?", "Wie sieht die Natur aus?"],
        hints: ["Achte auf den Hut und den Umhang.", "Wohin zeigt Napoleon?", "Das Pferd steht auf den Hinterbeinen."],
        sentenceStarters: ["Ich sehe...", "Napoleon trägt...", "Das Pferd ist...", "Auf den Steinen steht..."]
      },
      level_medium: {
        description: "Sammle nur Dinge, die man wirklich im Bild sehen kann.",
        points: ["Wie ist Napoleon gekleidet? (Farben, Hut, Umhang)", "Was macht das Pferd gerade? Beschreibe seine Körperhaltung.", "Was steht auf den Steinen unten links im Bild?", "Wie sieht die Landschaft im Hintergrund aus?"],
        hints: ["Achte auf Kleidung, Hut, Umhang, Haltung.", "Wohin zeigt Napoleon?", "Schau auf das Pferd."],
        sentenceStarters: ["Ich sehe ________.", "Im Vordergrund sehe ich ________.", "Auffällig ist ________."]
      },
      level_hard: {
        description: "Beschreibe das Bild sehr genau und achte auf die Wirkung der Farben und der Form.",
        points: ["Welche Details an Napoleons Uniform und Umhang fallen dir auf?", "Wie ist die Haltung des Pferdes und was bewirkt das beim Betrachter?", "Welche Inschriften kannst du auf den Steinen am Boden lesen?", "Wie wird die Kälte und die Höhe der Alpen im Hintergrund dargestellt?"],
        hints: ["Die rote Farbe des Umhangs soll besonders auffallen.", "Die Namen auf den Steinen sind Verweise auf berühmte Feldherren der Vergangenheit.", "Die bergige Landschaft verstärkt den Eindruck einer großen Tat."],
        sentenceStarters: ["In der Mitte des Bildes steht...", "Die Haltung des Pferdes lässt vermuten, dass...", "An den Inschriften auf den Steinen erkennt man...", "Der Hintergrund verdeutlicht..."]
      }
    }
  },
  {
    number: 2,
    icon: "🔍",
    title: "DEUTEN",
    subtitle: "HYPOTHESEN BILDEN",
    content: {
      level_easy: {
        description: "Was bedeutet das Bild? Was will der Maler uns sagen?",
        points: ["Warum zeigt Napoleon mit dem Finger nach oben?", "Warum ist Napoleon so ruhig, obwohl das Pferd wild ist?", "Warum ist sein Mantel so rot?", "Was sollen wir über Napoleon denken?"],
        hints: ["Er zeigt den Weg.", "Er beherrscht die wilde Kraft.", "Rot bedeutet Macht."],
        sentenceStarters: ["Ich glaube, er zeigt nach oben, weil...", "Napoleon wirkt ruhig, damit wir...", "Der Maler will zeigen, dass Napoleon..."]
      },
      level_medium: {
        description: "Was könnte das bedeuten? Stelle Vermutungen auf.",
        points: ["Warum zeigt Napoleon so entschlossen mit dem Finger nach oben?", "Das Pferd wirkt wild – Napoleon aber ganz ruhig. Was soll das aussagen?", "Warum trägt er einen so leuchtend roten Umhang in einer Schneelandschaft?", "Welche Wirkung wollte der Maler bei den Betrachtern erzielen?"],
        hints: ["Warum zeigt Napoleon nach vorne?", "Starker Wind = Spannung?", "Warum wirkt er so ruhig auf dem wilden Tier?"],
        sentenceStarters: ["Ich vermute: Das Bild will zeigen, dass ________.", "Vielleicht bedeutet ________ , dass ________."]
      },
      level_hard: {
        description: "Welche geheime Botschaft steckt hinter der Darstellung Napoleons?",
        points: ["Was soll die Geste des erhobenen Armes aussagen?", "Warum stellt der Maler Napoleon so überlegen dar, obwohl das Pferd kaum zu bändigen ist?", "Welche Bedeutung haben die Farben und das Licht für die Gesamtaussage?", "Wie möchte Napoleon durch dieses Bild bei seinem Volk ankommen?"],
        hints: ["Die Ruhe im Sturm ist ein Zeichen für einen starken Anführer.", "Das Bild soll Napoleon als Helden feiern, der vor nichts zurückschreckt.", "Die Diagonale im Bild erzeugt ein Gefühl von Aufstieg und Sieg."],
        sentenceStarters: ["Es lässt sich vermuten, dass...", "Das Verhältnis zwischen Ross und Reiter soll zeigen, dass...", "Der Künstler nutzt die Farben, um...", "Das Ziel des Bildes ist vermutlich..."]
      }
    }
  },
  {
    number: 3,
    icon: "⏳",
    title: "KONTEXT",
    subtitle: "NAPOLEON UND SEINE MACHT",
    content: {
      level_easy: {
        description: "Lies den Text. Er sagt dir die Wahrheit über Napoleon.",
        contextText: "Napoleon ritt im Jahr 1800 über die Alpen. Er wollte gegen Feinde kämpfen. Das Bild ist aber kein Foto. Napoleon wollte sehr mutig aussehen. In echt ritt er auf einem braven [[Maultier|Ein Tier, das vorsichtig geht.]]. Der Maler David hat Napoleon aber auf einem schönen Pferd gemalt. Das war Werbung für Napoleon.",
        points: ["Ritt Napoleon wirklich auf einem Pferd?", "Warum wollte er so mutig aussehen?", "Wer hat das Bild bezahlt?"],
        hints: ["Ein Maultier sieht nicht so heldenhaft aus.", "Das Bild entstand ein Jahr nach der Reise."],
        sentenceStarters: ["Im Text lerne ich, dass...", "Napoleon ritt eigentlich...", "Das Bild ist Werbung, weil..."]
      },
      level_medium: {
        description: "Lies den Text aufmerksam durch.",
        contextText: "Napoleon führte 1800 eine Armee über die Alpen. Das Bild entstand 1801. Es ist kein Foto, sondern ein Auftragsgemälde. Er wollte mutig und unbesiegbar wirken. In Wirklichkeit ritt er auf einem sicheren [[Maultier|Ein Lasttier, das sicher klettern kann, aber nicht so edel aussieht.]]. Das Bild ist also eine bewusste Inszenierung seiner Macht.",
        points: ["War Napoleon wirklich so heroisch auf einem Pferd unterwegs?", "Was war der wahre Grund für die Alpenüberquerung im Jahr 1800?", "Wer hat das Bild in Auftrag gegeben und warum?", "Warum wurden die Namen 'Hannibal' und 'Karolus Magnus' auf die Steine gemalt?"],
        hints: ["Gemälde = bewusste Botschaft.", "Napoleon ritt in echt auf einem Maultier."],
        sentenceStarters: ["Im Kontext steht, dass ________.", "Ich habe lerne, dass ________."]
      },
      level_hard: {
        description: "Verstehe die Hintergründe der Alpenüberquerung und die Rolle des Künstlers.",
        contextText: "Napoleon ritt im Jahr 1800 tatsächlich über die Alpen, um seine Feinde zu überraschen. Das Bild wurde erst danach vom Maler David im Auftrag Napoleons angefertigt. Napoleon weigerte sich, für das Bild Modell zu sitzen. Er sagte, es sei egal, wie er genau aussieht, solange er mutig wirkt. In Wirklichkeit überquerte er die Berge auf einem trittsicheren [[Maultier|Eine Mischung aus Pferd und Esel, die sehr gut klettern kann.]], da das Wetter eigentlich gut war. Das prachtvolle Pferd im Bild ist also eine reine Erfindung des Künstlers.",
        points: ["Warum ist der Unterschied zwischen Realität und Bild so groß?", "Welche Funktion hatte das Bild für Napoleons Ruf als Herrscher?", "Warum wurden die Namen früherer Eroberer wie Hannibal auf die Felsen geschrieben?"],
        hints: ["Das Bild ist ein frühes Beispiel für politische PR (Werbung).", "Napoleon wollte sich in eine Reihe mit den größten Feldherren der Geschichte stellen.", "Der Maler und der Herrscher arbeiteten zusammen an einer Legende."],
        sentenceStarters: ["Man erkennt eine große Abweichung zur Realität, denn...", "Das Bild diente vor allem dazu...", "Die Erwähnung alter Feldherren soll zeigen, dass...", "Historisch gesehen war die Reise..."]
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
        description: "Denk nach: Waren deine Ideen richtig?",
        points: ["War das Pferd echt? Nein, es war ein Maultier. Warum hat der Maler gelogen?", "Sieht Napoleon immer noch so mutig für dich aus?", "Was weißt du jetzt über das Bild?"],
        hints: ["Der Maler wollte Napoleon helfen.", "Wir wissen jetzt: Es ist kein echtes Foto."],
        sentenceStarters: ["Zuerst dachte ich..., aber...", "Das Bild lügt, weil...", "Napoleon wollte, dass wir glauben..."]
      },
      level_medium: {
        description: "Prüfe jetzt deine Vermutungen mit deinem neuen Wissen.",
        points: ["Passt das edle Ross zur historischen Wahrheit (Maultier)?", "Stimmt dein Eindruck von Napoleons 'Ruhe' mit seiner Absicht überein, mächtig zu wirken?", "Welche Symbole im Bild verstehst du jetzt erst richtig?"],
        hints: ["Vergleiche: Botschaft vs. Wirklichkeit.", "Das Pferd symbolisiert die Beherrschung wilder Kraft."],
        sentenceStarters: ["Meine Vermutung war ________. Das passt (nicht), weil ________."]
      },
      level_hard: {
        description: "Vergleiche dein neues Wissen mit deinen ersten Eindrücken.",
        points: ["Wie bewertest du jetzt die Darstellung des Pferdes, nachdem du vom Maultier weißt?", "Inwiefern wurde deine Vermutung zur Machtdarstellung durch den Text bestätigt?", "Welche Elemente des Bildes sind nun eindeutig als 'Werbung' erkennbar?"],
        hints: ["Die Wahrheit war viel unspektakulärer als das Bild.", "Das Bild manipuliert unsere Sicht auf die Ereignisse.", "Jedes Detail im Bild hat eine bestimmte Absicht."],
        sentenceStarters: ["Nachdem ich den Text gelesen habe, wird klar, dass...", "Die Darstellung des Pferdes ist nun als... zu bewerten.", "Es zeigt sich, dass meine erste Idee zu... richtig war/korrigiert werden muss.", "Man sieht nun deutlich, wie der Maler..."]
      }
    }
  },
  {
    number: 5,
    icon: "🚦",
    title: "GLAUBWÜRDIGKEIT",
    subtitle: "QUELLENKRITIK",
    content: {
      level_easy: {
        description: "Wie ehrlich ist das Bild? Nutze die Ampel.",
        points: ["Ist das Bild eine Lüge?", "Kann man dem Bild glauben?", "Was lernen wir über Napoleon durch dieses Bild?"],
        hints: ["Das Bild zeigt nicht die Wahrheit.", "Das Bild zeigt nur, wie Napoleon gerne sein wollte."],
        sentenceStarters: ["Ich gebe dem Bild die Farbe..., weil...", "Das Bild zeigt keine echte Geschichte, sondern...", "Wir lernen, dass Napoleon sich gerne..."]
      },
      level_medium: {
        description: "Bewerte die Glaubwürdigkeit des Bildes als historische Quelle mit der Ampel.",
        points: ["Ist das Bild eine 'Lüge' oder einfach nur Kunst?", "Kann man diesem Bild vertrauen, wenn man etwas über den echten Napoleon lernen will?", "Welchen Wert hat ein solches Propagandabild für Historiker heute?"],
        hints: ["Informiert das Bild über die Alpenüberquerung oder über Napoleons Ego?", "Wem nützte dieses Bild?"],
        sentenceStarters: ["Die Glaubwürdigkeit stufe ich als ... ein, weil...", "Das Bild verschleiert die Realität, indem es..."]
      },
      level_hard: {
        description: "Bewerte das Bild kritisch als geschichtliches Dokument.",
        points: ["Ist das Bild eher eine Täuschung oder ein wichtiges Kunstwerk seiner Zeit?", "Inwieweit kann man dieses Bild nutzen, um etwas über die echte Person Napoleon zu erfahren?", "Warum ist ein solches Propagandabild trotzdem wertvoll für Forscher?"],
        hints: ["Das Bild ist keine neutrale Quelle für die Reise, aber eine tolle Quelle für Napoleons Selbstdarstellung.", "Glaubwürdigkeit ist hier nicht gleich Wahrheit.", "Überlege, wem das Bild damals genützt hat."],
        sentenceStarters: ["Kritisch betrachtet lässt sich sagen, dass...", "Das Bild ist als Quelle für... sehr nützlich, aber nicht für...", "Die Glaubwürdigkeit ist eingeschränkt, weil...", "Trotz der Erfindungen lehrt uns das Bild viel über..."]
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
        description: "Denk an heute. Machen Menschen heute auch solche Fotos?",
        points: ["Gibt es heute auch 'Fake'-Bilder von Stars?", "Warum ist es wichtig, Bilder nicht immer sofort zu glauben?", "Was nimmst du für dich mit?"],
        hints: ["Denk an Instagram-Filter.", "Bilder können uns täuschen.", "Wir müssen immer genau hinschauen."],
        sentenceStarters: ["Heute machen Leute das Gleiche mit...", "Ich habe lerne, dass ich bei Bildern...", "Bilder von mächtigen Leuten sind oft..."]
      },
      level_medium: {
        description: "Wie gehen wir heute mit Herrscherbildern und 'Self-Marketing' um?",
        points: ["Gibt es moderne Beispiele für solche 'Fake-Bilder' (z.B. in sozialen Medien)?", "Warum ist es wichtig, Bilder von mächtigen Personen kritisch zu hinterfragen?", "Was nimmst du für deinen eigenen Umgang mit Medien aus dieser Analyse mit?"],
        hints: ["Erinnert dich das Bild an heutige 'Instagram-Filter' oder PR?", "Warum brauchen Anführer solche Bilder?", "Was nimmst du aus dieser Analyse mit?"],
        sentenceStarters: ["Napoleon betrieb hier schon eine Art von...", "Heutige Politiker nutzen ähnliche Methoden, um...", "Mir ist klar geworden, dass Bilder oft..."]
      },
      level_hard: {
        description: "Reflektiere über moderne Formen der Selbstdarstellung.",
        points: ["Welche Ähnlichkeiten siehst du zwischen Napoleons Bild und heutigen Profilen in sozialen Medien?", "Warum versuchen auch heute noch mächtige Menschen, ihr Bild in der Öffentlichkeit zu steuern?", "Hat diese Analyse deine Art und Weise verändert, wie du Bilder im Alltag ansiehst?"],
        hints: ["Ikonische Bilder bleiben oft länger im Kopf als die trockenen Fakten.", "PR-Strategien sind heute viel schneller, aber oft ähnlich aufgebaut.", "Bilde dir eine eigene Meinung zu manipulierten Bildern."],
        sentenceStarters: ["Parallelen zur heutigen Zeit finden sich in...", "Die Analyse hat mir gezeigt, dass wir heute...", "Es ist auch heute noch wichtig, Bilder zu hinterfragen, weil...", "Mein Fazit aus dieser Untersuchung ist..."]
      }
    }
  }
];