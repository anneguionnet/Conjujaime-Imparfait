// Conju J'aime — Passé simple — 60 verbes — base pédagogique
// Terminaisons A  : -ai / -as / -a / -a / -èrent
// Terminaisons I  : -is / -is / -it / -it / -irent
// Terminaisons U  : -us / -us / -ut / -ut / -urent
// Terminaisons IN : -ins / -ins / -int / -int / -inrent  (tenir/venir)
// Pronominaux : formes[] = radicaux pour [je, tu, il, on, elles]

// 60 verbes au total

// cat: "A" — verbes en -ER (21 verbes)
const verbesPSpetit_A = [
 { inf: "aller", niv: 1, rad: "all" },
  { inf: "arriver", niv: 1, rad: "arriv" },
  { inf: "avouer", niv: 1, rad: "avou" },
  { inf: "donner", niv: 1, rad: "donn" },
  { inf: "décider", niv: 1, rad: "décid" },
  { inf: "déjeuner", niv: 1, rad: "déjeun" },
  { inf: "dîner", niv: 1, rad: "dîn" },
  { inf: "entrer", niv: 1, rad: "entr" },
  { inf: "écouter", niv: 1, rad: "écout" },
  { inf: "louer", niv: 1, rad: "lou" },
  { inf: "nouer", niv: 1, rad: "nou" },
  { inf: "rentrer", niv: 1, rad: "rentr" },
  { inf: "s'arrêter", niv: 1, formes: ["m'arrêt", "t'arrêt", "s'arrêt", "s'arrêt", "s'arrêt"] },
  { inf: "secouer", niv: 1, rad: "secou" },
  { inf: "souffler", niv: 1, rad: "souffl" },
  { inf: "tomber", niv: 1, rad: "tomb" },
  { inf: "aboyer", niv: 2, rad: "aboy" },
  { inf: "acheter", niv: 2, rad: "achet" },
  { inf: "appuyer", niv: 2, rad: "appuy" },
  { inf: "balayer", niv: 2, rad: "balay" },
  { inf: "bégayer", niv: 2, rad: "bégay" },
];

// cat: "I" — 2e groupe + 3e en -IR/-RE/-DRE... (20 verbes)
const verbesPSpetit_I = [
  { inf: "apprendre", niv: 1, rad: "appr" },
  { inf: "battre", niv: 1, rad: "batt" },
  { inf: "blanchir", niv: 1, rad: "blanch" },
  { inf: "blondir", niv: 1, rad: "blond" },
  { inf: "blêmir", niv: 1, rad: "blêm" },
  { inf: "bondir", niv: 1, rad: "bond" },
  { inf: "brunir", niv: 1, rad: "brun" },
  { inf: "bâtir", niv: 1, rad: "bât" },
  { inf: "bénir", niv: 1, rad: "bén" },
  { inf: "choisir", niv: 1, rad: "chois" },
  { inf: "comprendre", niv: 1, rad: "compr" },
  { inf: "contredire", niv: 1, rad: "contred" },
  { inf: "dire", niv: 1, rad: "d" },
  { inf: "dormir", niv: 1, rad: "dorm" },
  { inf: "durcir", niv: 1, rad: "durc" },
  { inf: "définir", niv: 1, rad: "défin" },
  { inf: "détruire", niv: 1, rad: "détruis" },
  { inf: "embellir", niv: 1, rad: "embell" },
  { inf: "emplir", niv: 1, rad: "empl" },
  { inf: "engloutir", niv: 1, rad: "englout" },
];

// cat: "U" — 3e groupe spécial (20 verbes)
const verbesPSpetit_U = [
  { inf: "conclure", niv: 2, rad: "concl" },
  { inf: "courir", niv: 2, rad: "cour" },
  { inf: "devoir", niv: 2, rad: "d" },
  { inf: "lire", niv: 2, rad: "l" },
  { inf: "moudre", niv: 2, rad: "moul" },
  { inf: "pouvoir", niv: 2, rad: "p" },
  { inf: "relire", niv: 2, rad: "rel" },
  { inf: "savoir", niv: 2, rad: "s" },
  { inf: "accourir", niv: 3, rad: "accour" },
  { inf: "boire", niv: 3, rad: "b" },
  { inf: "concourir", niv: 3, rad: "concour" },
  { inf: "connaître", niv: 3, rad: "conn" },
  { inf: "croire", niv: 3, rad: "cr" },
  { inf: "disparaître", niv: 3, rad: "dispar" },
  { inf: "déplaire", niv: 3, rad: "dépl" },
  { inf: "élire", niv: 3, rad: "él" },
  { inf: "réélire", niv: 3, rad: "réél" },
  { inf: "émouvoir", niv: 3, rad: "ém" },
  { inf: "promouvoir", niv: 3, rad: "prom" },
  { inf: "encourir", niv: 3, rad: "encour" },
];

const verbesPSpetit_IVenir = [];
const verbesPSpetit = [...verbesPSpetit_A, ...verbesPSpetit_I, ...verbesPSpetit_IVenir, ...verbesPSpetit_U];