import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PageEntry, assetUrl } from './types';
import * as FreiheitData from './bildanalyse/freiheitfuehrtvolk';
import * as NapoleonData from './bildanalyse/napoleon';
import * as CheData from './bildanalyse/che';
import { CONTENT_REGISTRY } from './analysisContent';
import { Infographic } from './components/Infographic';

// BoWi Design-Konstanten
const BOWI_GREEN = "emerald-600";
const BOWI_BLUE = "sky-800";

const PAGES_DATA: PageEntry[] = [
  {
    "id": "napoleon-1801",
    "title": "Napoleon überquert die Alpen",
    "subtitle": "Jacques-Louis David • 1801",
    "description": "Napoleon überquert die Alpen",
    "path": "bildanalyse/napoleon",
    "imageUrl": "napoleon-1801.jpg",
    "year": 1801,
    "tags": ["NEUZEIT", "FRANKREICH", "MACHTBILD"],
    "focusTag": "MACHTBILD",
    "difficulty": 1,
    "shortText": "Napoleon als strahlender Held auf einem Pferd – Inszenierung oder Wahrheit?"
  },
  {
    "id": "che-portraet-1960",
    "title": "Che Guevara – Bild als Symbol",
    "subtitle": "Alberto Korda • 1960",
    "description": "Guerillero Heroico – Vom Foto zur Weltikone",
    "path": "bildanalyse/che",
    "imageUrl": "che-portraet.jpg",
    "year": 1960,
    "tags": ["KALTER KRIEG", "REVOLUTION", "IKONE"],
    "focusTag": "SYMBOLBILD",
    "difficulty": 3,
    "shortText": "Das berühmteste Porträt der Welt. Aber wer war der Mann wirklich?"
  },
  {
    "id": "napalm-1972",
    "title": "Angst und Flucht im Vietnamkrieg",
    "subtitle": "Nick Út • 1972",
    "description": "Napalm-Angriff 1972",
    "path": "bildanalyse/napalm",
    "imageUrl": "napalm1972.jpg",
    "year": 1972,
    "tags": ["MODERNE", "VIETNAM", "KRIEG"],
    "focusTag": "KRIEG & MEDIEN",
    "difficulty": 2,
    "shortText": "Ein Foto, das die Welt veränderte. Doch darf man das Leid von Kindern so zeigen?"
  },
  {
    "id": "freiheit-1830",
    "title": "Die Freiheit führt das Volk",
    "subtitle": "Eugène Delacroix • 1830",
    "description": "Die Freiheit führt das Volk",
    "path": "bildanalyse/freiheit",
    "imageUrl": "freiheit-1830.jpg",
    "year": 1830,
    "tags": ["REVOLUTION", "19. JHD.", "FRANKREICH"],
    "focusTag": "SYMBOLBILD",
    "difficulty": 2,
    "shortText": "Das berühmteste Gemälde zur Julirevolution. Wer ist die Frau in der Mitte?"
  },
  {
    "id": "hitler-kaernten-1939",
    "title": "Hitler im Kreise von Verehrerinnen",
    "subtitle": "Heinrich Hoffmann • 1939",
    "description": "NS-Propaganda und Personenkult",
    "path": "bildanalyse/hitler-kaernten-1939",
    "imageUrl": "hitler1939.jpg",
    "year": 1939,
    "tags": ["NS", "Propaganda", "Personenkult", "Quellenkritik", "Bildwirkung"],
    "focusTag": "PROPAGANDA",
    "difficulty": 2,
    "shortText": "Ein scheinbar harmloses Foto von 1939. Doch was verrät es uns über die Macht der Bilder?"
  },
  {
    "id": "epstein-trump-1997",
    "title": "Epstein & Trump in Mar-a-Lago",
    "subtitle": "Davidoff Studios / Getty Images • 1997",
    "description": "Jeffrey Epstein und Donald Trump zusammen in Mar-a-Lago (Palm Beach, Florida), 1997.",
    "path": "bildanalyse/epstein-trump-1997",
    "imageUrl": "epstein-trump-1997.jpg",
    "year": 1997,
    "tags": ["MEDIEN", "MACHT", "NETZWERKE"],
    "focusTag": "MEDIEN & MACHT",
    "difficulty": 2,
    "shortText": "Ein Pressefoto von 1997. Was beweist ein gemeinsames Foto wirklich?"
  }
];

// ... ab hier bleibt dein restlicher Code unverändert ...
