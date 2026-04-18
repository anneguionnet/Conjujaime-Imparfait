// Conju J'aime — Passé simple — base pédagogique
// Terminaisons A  : -ai / -as / -a / -a / -èrent
// Terminaisons I  : -is / -is / -it / -it / -irent
// Terminaisons U  : -us / -us / -ut / -ut / -urent
// Pronominaux : formes[] = radicaux pour [je, tu, il, on, elles]

// cat: "A" — verbes en -ER (21 verbes)
const verbesPSpetit_A = [
  { inf: "aller",      niv: 1, rad: "all" },
  { inf: "arriver",    niv: 1, rad: "arriv" },
  { inf: "avouer",     niv: 1, rad: "avou" },
  { inf: "donner",     niv: 1, rad: "donn" },
  { inf: "décider",    niv: 1, rad: "décid" },
  { inf: "déjeuner",   niv: 1, rad: "déjeun" },
  { inf: "dîner",      niv: 1, rad: "dîn" },
  { inf: "entrer",     niv: 1, rad: "entr" },
  { inf: "écouter",    niv: 1, rad: "écout" },
  { inf: "louer",      niv: 1, rad: "lou" },
  { inf: "nouer",      niv: 1, rad: "nou" },
  { inf: "rentrer",    niv: 1, rad: "rentr" },
  { inf: "s'arrêter",  niv: 1, formes: ["m'arrêt", "t'arrêt", "s'arrêt", "s'arrêt", "s'arrêt"] },
  { inf: "secouer",    niv: 1, rad: "secou" },
  { inf: "souffler",   niv: 1, rad: "souffl" },
  { inf: "tomber",     niv: 1, rad: "tomb" },
  { inf: "aboyer",     niv: 2, rad: "aboy" },
  { inf: "acheter",    niv: 2, rad: "achet" },
  { inf: "appuyer",    niv: 2, rad: "appuy" },
  { inf: "balayer",    niv: 2, rad: "balay" },
  { inf: "bégayer",    niv: 2, rad: "bégay" },
];

// cat: "I" — 2e groupe + 3e en -IR/-RE/-DRE... (20 verbes)
const verbesPSpetit_I = [
  { inf: "apprendre",   niv: 1, rad: "appr",     gr: 3 },
  { inf: "battre",      niv: 1, rad: "batt",      gr: 3 },
  { inf: "blanchir",    niv: 1, rad: "blanch",    gr: 2 },
  { inf: "blondir",     niv: 1, rad: "blond",     gr: 2 },
  { inf: "blêmir",      niv: 1, rad: "blêm",      gr: 2 },
  { inf: "bondir",      niv: 1, rad: "bond",      gr: 2 },
  { inf: "brunir",      niv: 1, rad: "brun",      gr: 2 },
  { inf: "bâtir",       niv: 1, rad: "bât",       gr: 2 },
  { inf: "bénir",       niv: 1, rad: "bén",       gr: 2 },
  { inf: "choisir",     niv: 1, rad: "chois",     gr: 2 },
  { inf: "comprendre",  niv: 1, rad: "compr",     gr: 3 },
  { inf: "contredire",  niv: 1, rad: "contred",   gr: 3 },
  { inf: "dire",        niv: 1, rad: "d",          gr: 3 },
  { inf: "dormir",      niv: 1, rad: "dorm",      gr: 3 },
  { inf: "durcir",      niv: 1, rad: "durc",      gr: 2 },
  { inf: "définir",     niv: 1, rad: "défin",     gr: 2 },
  { inf: "détruire",    niv: 1, rad: "détruis",   gr: 3 },
  { inf: "embellir",    niv: 1, rad: "embell",    gr: 2 },
  { inf: "emplir",      niv: 1, rad: "empl",      gr: 2 },
  { inf: "engloutir",   niv: 1, rad: "englout",   gr: 2 },
];

// cat: "U" — 3e groupe spécial (20 verbes)
const verbesPSpetit_U = [
  { inf: "conclure",    niv: 2, rad: "concl",     gr: 3 },
  { inf: "courir",      niv: 2, rad: "cour",      gr: 3 },
  { inf: "devoir",      niv: 2, rad: "d",          gr: 3 },
  { inf: "lire",        niv: 2, rad: "l",           gr: 3 },
  { inf: "moudre",      niv: 2, rad: "moul",      gr: 3 },
  { inf: "pouvoir",     niv: 2, rad: "p",           gr: 3 },
  { inf: "relire",      niv: 2, rad: "rel",        gr: 3 },
  { inf: "savoir",      niv: 2, rad: "s",           gr: 3 },
  { inf: "accourir",    niv: 3, rad: "accour",    gr: 3 },
  { inf: "boire",       niv: 3, rad: "b",           gr: 3 },
  { inf: "concourir",   niv: 3, rad: "concour",   gr: 3 },
  { inf: "connaître",   niv: 3, rad: "conn",      gr: 3 },
  { inf: "croire",      niv: 3, rad: "cr",         gr: 3 },
  { inf: "disparaître", niv: 3, rad: "dispar",    gr: 3 },
  { inf: "déplaire",    niv: 3, rad: "dépl",      gr: 3 },
  { inf: "élire",       niv: 3, rad: "él",         gr: 3 },
  { inf: "réélire",     niv: 3, rad: "réél",      gr: 3 },
  { inf: "émouvoir",    niv: 3, rad: "ém",         gr: 3 },
  { inf: "promouvoir",  niv: 3, rad: "prom",      gr: 3 },
  { inf: "encourir",    niv: 3, rad: "encour",    gr: 3 },
];

const verbesPSpetit_IVenir = [];
const verbesPSpetit = [...verbesPSpetit_A, ...verbesPSpetit_I, ...verbesPSpetit_IVenir, ...verbesPSpetit_U];
