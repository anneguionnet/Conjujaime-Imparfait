// ============================================================
// data.js — BDD Conju J'aime
// 20 verbes par groupe (+ 5 pronominaux gr1 et gr3)
// ============================================================

const verbesInfinitifParticipe = [
    {
        "infi": "aboyer",
        "v": "il aboyait",
        "part": "aboyant",
        "gr": 1,
        "niv": 2
    },
    {
        "infi": "aboyer",
        "v": "nous aboierons",
        "part": "aboyant",
        "gr": 1,
        "niv": 2
    },
    {
        "infi": "acheter",
        "v": "tu achèteras",
        "part": "achetant",
        "gr": 1,
        "niv": 1
    },
    {
        "infi": "alléguer",
        "v": "nous alléguions",
        "part": "alléguant",
        "gr": 1,
        "niv": 4
    },
    {
        "infi": "arriver",
        "v": "nous arrivions",
        "part": "arrivant",
        "gr": 1,
        "niv": 1
    },
    {
        "infi": "arriver",
        "v": "tu arrivais",
        "part": "arrivant",
        "gr": 1,
        "niv": 1
    },
    {
        "infi": "arrêter",
        "v": "vous arrêtiez",
        "part": "arrêtant",
        "gr": 1,
        "niv": 1
    },
    {
        "infi": "arrêter",
        "v": "il arrêta",
        "part": "arrêtant",
        "gr": 1,
        "niv": 1
    },
    {
        "infi": "avancer",
        "v": "il avançait",
        "part": "avançant",
        "gr": 1,
        "niv": 1
    },
    {
        "infi": "avancer",
        "v": "j’avançais",
        "part": "avançant",
        "gr": 1,
        "niv": 1
    },
    {
        "infi": "avouer",
        "v": "nous avouons",
        "part": "avouant",
        "gr": 1,
        "niv": 1
    },
    {
        "infi": "broyer",
        "v": "il broyait",
        "part": "broyant",
        "gr": 1,
        "niv": 3
    },
    {
        "infi": "bégayer",
        "v": "tu bégayais",
        "part": "bégayant",
        "gr": 1,
        "niv": 3
    },
    {
        "infi": "bénéficier",
        "v": "je bénéficiais",
        "part": "bénéficiant",
        "gr": 1,
        "niv": 3
    },
    {
        "infi": "céder",
        "v": "tu céderas",
        "part": "cédant",
        "gr": 1,
        "niv": 2
    },
    {
        "infi": "chatoyer",
        "v": "elle chatoyait",
        "part": "chatoyant",
        "gr": 1,
        "niv": 4
    },
    {
        "infi": "collecter",
        "v": "nous collections",
        "part": "collectant",
        "gr": 1,
        "niv": 2
    },
    {
        "infi": "collecter",
        "v": "tu collectais",
        "part": "collectant",
        "gr": 1,
        "niv": 2
    },
    {
        "infi": "dédaigner",
        "v": "tu dédaignais",
        "part": "dédaignant",
        "gr": 1,
        "niv": 4
    },
    {
        "infi": "dédaigner",
        "v": "il dédaignera",
        "part": "dédaignant",
        "gr": 1,
        "niv": 4
    },
    {
        "infi": "déplacer",
        "v": "tu déplaçais",
        "part": "déplaçant",
        "gr": 1,
        "niv": 2
    },
    {
        "infi": "déshabituer",
        "v": "tu t’en déshabituais",
        "part": "déshabituant",
        "gr": 1,
        "niv": 3
    },
    {
        "infi": "effrayer",
        "v": "j’effrayais",
        "part": "effrayant",
        "gr": 1,
        "niv": 3
    },
    {
        "infi": "employer",
        "v": "tu employais",
        "part": "employant",
        "gr": 1,
        "niv": 2
    },
    {
        "infi": "rassasier",
        "v": "nous rassasiions",
        "part": "rassasiant",
        "gr": 1,
        "niv": 4
    },
    {
        "infi": "se scinder",
        "v": "il se scindait",
        "part": "scindant",
        "gr": 1,
        "niv": 4
    },
    {
        "infi": "agir",
        "v": "tu agissais",
        "part": "agissant",
        "gr": 2,
        "niv": 3
    },
    {
        "infi": "applaudir",
        "v": "j’applaudissais",
        "part": "applaudissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "applaudir",
        "v": "il applaudit",
        "part": "applaudissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "arrondir",
        "v": "tu arrondissais",
        "part": "arrondissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "arrondir",
        "v": "j'arrondis",
        "part": "arrondissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "bondir",
        "v": "il bondissait",
        "part": "bondissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "bondir",
        "v": "tu bondis",
        "part": "bondissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "brunir",
        "v": "tu brunissais",
        "part": "brunissant",
        "gr": 2,
        "niv": 3
    },
    {
        "infi": "brunir",
        "v": "il brunit",
        "part": "brunissant",
        "gr": 2,
        "niv": 3
    },
    {
        "infi": "bâtir",
        "v": "tu bâtissais",
        "part": "bâtissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "bâtir",
        "v": "je bâtis",
        "part": "bâtissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "choisir",
        "v": "tu choisissais",
        "part": "choisissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "choisir",
        "v": "il choisit",
        "part": "choisissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "finir",
        "v": "tu finiras",
        "part": "finissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "finir",
        "v": "je finis",
        "part": "finissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "fléchir",
        "v": "tu fléchissais",
        "part": "fléchissant",
        "gr": 2,
        "niv": 3
    },
    {
        "infi": "fléchir",
        "v": "il fléchit",
        "part": "fléchissant",
        "gr": 2,
        "niv": 3
    },
    {
        "infi": "grandir",
        "v": "nous grandissions",
        "part": "grandissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "grandir",
        "v": "il grandit",
        "part": "grandissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "guérir",
        "v": "je guérirais",
        "part": "guérissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "guérir",
        "v": "je guéris",
        "part": "guérissant",
        "gr": 2,
        "niv": 2
    },
    {
        "infi": "haïr",
        "v": "tu haïras",
        "part": "haïssant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "haïr",
        "v": "ils haïssent",
        "part": "haïssant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "punir",
        "v": "j’en punissais",
        "part": "punissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "punir",
        "v": "il punit",
        "part": "punissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "rougir",
        "v": "tu rougissais",
        "part": "rougissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "rougir",
        "v": "il rougit",
        "part": "rougissant",
        "gr": 2,
        "niv": 1
    },
    {
        "infi": "aplanir",
        "v": "tu aplanissais",
        "part": "aplanissant",
        "gr": 2,
        "niv": 3
    },
    {
        "infi": "aplanir",
        "v": "il aplanit",
        "part": "aplanissant",
        "gr": 2,
        "niv": 3
    },
    {
        "infi": "s'appauvrir",
        "v": "tu t'appauvrissais",
        "part": "appauvrissant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "s'appauvrir",
        "v": "je m'appauvris",
        "part": "appauvrissant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "approfondir",
        "v": "tu approfondissais",
        "part": "approfondissant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "approfondir",
        "v": "elle approfondit",
        "part": "approfondissant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "assainir",
        "v": "tu assainissais",
        "part": "assainissant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "assainir",
        "v": "elle assainit",
        "part": "assainissant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "s'assombrir",
        "v": "tu t'assombrissais",
        "part": "assombrissant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "s'assombrir",
        "v": "il s'assombrit",
        "part": "assombrissant",
        "gr": 2,
        "niv": 4
    },
    {
        "infi": "s'assoupir",
        "v": "tu t'assoupissais",
        "part": "assoupissant",
        "gr": 2,
        "niv": 3
    },
    {
        "infi": "s'assoupir",
        "v": "elle s'assoupit",
        "part": "assoupissant",
        "gr": 2,
        "niv": 3
    },
    {
        "infi": "abattre",
        "v": "tu abattais",
        "part": "abattant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "abattre",
        "v": "ils abattent",
        "part": "abattant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "accourir",
        "v": "elle accourait",
        "part": "accourant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "accourir",
        "v": "j’accours",
        "part": "accourant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "accueillir",
        "v": "j’accueillais",
        "part": "accueillant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "accueillir",
        "v": "vous accueillez",
        "part": "accueillant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "acquérir",
        "v": "nous acquérons",
        "part": "acquérant",
        "gr": 3,
        "niv": 4
    },
    {
        "infi": "advenir",
        "v": "il advenait",
        "part": "advenant",
        "gr": 3,
        "niv": 4
    },
    {
        "infi": "advenir",
        "v": "il advient",
        "part": "advenant",
        "gr": 3,
        "niv": 4
    },
    {
        "infi": "aller",
        "v": "nous allions",
        "part": "allant",
        "gr": 3,
        "niv": 1
    },
    {
        "infi": "aller",
        "v": "il va",
        "part": "allant",
        "gr": 3,
        "niv": 1
    },
    {
        "infi": "apparaître",
        "v": "j’apparaissais",
        "part": "apparaissant",
        "gr": 3,
        "niv": 4
    },
    {
        "infi": "apparaître",
        "v": "vous apparaissez",
        "part": "apparaissant",
        "gr": 3,
        "niv": 4
    },
    {
        "infi": "appartenir",
        "v": "tu appartenais",
        "part": "appartenant",
        "gr": 3,
        "niv": 4
    },
    {
        "infi": "appartenir",
        "v": "il appartient",
        "part": "appartenant",
        "gr": 3,
        "niv": 4
    },
    {
        "infi": "apprendre",
        "v": "nous apprenions",
        "part": "apprenant",
        "gr": 3,
        "niv": 1
    },
    {
        "infi": "apprendre",
        "v": "il apprend",
        "part": "apprenant",
        "gr": 3,
        "niv": 1
    },
    {
        "infi": "assaillir",
        "v": "j’assaillais",
        "part": "assaillant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "assaillir",
        "v": "il tressaille",
        "part": "assaillant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "asseoir",
        "v": "nous asseyions",
        "part": "asseyant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "asseoir",
        "v": "il s’assied",
        "part": "asseyant",
        "gr": 3,
        "niv": 3
    },
    {
        "infi": "attendre",
        "v": "j’attendais",
        "part": "attendant",
        "gr": 3,
        "niv": 1
    },
    {
        "infi": "battre",
        "v": "tu battais",
        "part": "battant",
        "gr": 3,
        "niv": 2
    },
    {
        "infi": "battre",
        "v": "ils battent",
        "part": "battant",
        "gr": 3,
        "niv": 2
    },
    {
        "infi": "boire",
        "v": "tu boiras",
        "part": "buvant",
        "gr": 3,
        "niv": 1
    },
    {
        "infi": "boire",
        "v": "ils boivent",
        "part": "buvant",
        "gr": 3,
        "niv": 1
    },
    {
        "infi": "bouillir",
        "v": "nous bouillions",
        "part": "bouillant",
        "gr": 3,
        "niv": 4
    },
    {
        "infi": "bouillir",
        "v": "il bout",
        "part": "bouillant",
        "gr": 3,
        "niv": 4
    },
    {
        "infi": "comprendre",
        "v": "tu comprenais",
        "part": "comprenant",
        "gr": 3,
        "niv": 1
    },
    {
        "infi": "comprendre",
        "v": "il comprend",
        "part": "comprenant",
        "gr": 3,
        "niv": 1
    },
    {
        "infi": "conduire",
        "v": "tu conduiras",
        "part": "conduisant",
        "gr": 3,
        "niv": 2
    },
    {
        "infi": "connaître",
        "v": "j’en connaissais",
        "part": "connaissant",
        "gr": 3,
        "niv": 2
    },
    {
        "infi": "croire",
        "v": "j’en croyais",
        "part": "croyant",
        "gr": 3,
        "niv": 2
    },
    {
        "infi": "falloir",
        "v": "il fallait",
        "part": "fallant",
        "gr": 3,
        "niv": 2
    },
    {
        "infi": "falloir",
        "v": "il faut",
        "part": "fallant",
        "gr": 3,
        "niv": 2
    }
];

const verbesPresent = [
    {
        "infinitif": "acheter",
        "groupe": 1,
        "niveau": 1,
        "radical": "achèt-"
    },
    {
        "infinitif": "arriver",
        "groupe": 1,
        "niveau": 1,
        "radical": "arriv-"
    },
    {
        "infinitif": "arrêter",
        "groupe": 1,
        "niveau": 1,
        "radical": "arrêt-"
    },
    {
        "infinitif": "avancer",
        "groupe": 1,
        "niveau": 1,
        "radical": "avanc-"
    },
    {
        "infinitif": "appuyer",
        "groupe": 1,
        "niveau": 2,
        "radical": "appui-"
    },
    {
        "infinitif": "avouer",
        "groupe": 1,
        "niveau": 2,
        "radical": "avou-"
    },
    {
        "infinitif": "balayer",
        "groupe": 1,
        "niveau": 2,
        "radical": "balai-",
        "radicalAlt": "balay-"
    },
    {
        "infinitif": "bégayer",
        "groupe": 1,
        "niveau": 2,
        "radical": "bégai-",
        "radicalAlt": "bégay-"
    },
    {
        "infinitif": "accentuer",
        "groupe": 1,
        "niveau": 3,
        "radical": "accentu-"
    },
    {
        "infinitif": "amplifier",
        "groupe": 1,
        "niveau": 3,
        "radical": "amplifi-"
    },
    {
        "infinitif": "apprécier",
        "groupe": 1,
        "niveau": 3,
        "radical": "appréci-"
    },
    {
        "infinitif": "associer",
        "groupe": 1,
        "niveau": 3,
        "radical": "associ-"
    },
    {
        "infinitif": "bayer",
        "groupe": 1,
        "niveau": 4,
        "radical": "bai-",
        "radicalAlt": "bay-"
    },
    {
        "infinitif": "broyer",
        "groupe": 1,
        "niveau": 4,
        "radical": "broi-"
    },
    {
        "infinitif": "bénéficier",
        "groupe": 1,
        "niveau": 4,
        "radical": "bénéfici-"
    },
    {
        "infinitif": "se rassasier",
        "groupe": 1,
        "niveau": 3,
        "pronominal": true,
        "radicalJe": "me rassasi-",
        "radicalTu": "te rassasi-",
        "radicalIl": "se rassasi-",
        "radicalPluriel": "se rassasi-"
    },
    {
        "infinitif": "se bonifier",
        "groupe": 1,
        "niveau": 3,
        "pronominal": true,
        "radicalJe": "me bonifi-",
        "radicalTu": "te bonifi-",
        "radicalIl": "se bonifi-",
        "radicalPluriel": "se bonifi-"
    },
    {
        "infinitif": "se dévouer",
        "groupe": 1,
        "niveau": 3,
        "pronominal": true,
        "radicalJe": "me dévou-",
        "radicalTu": "te dévou-",
        "radicalIl": "se dévou-",
        "radicalPluriel": "se dévou-"
    },
    {
        "infinitif": "se méfier",
        "groupe": 1,
        "niveau": 2,
        "pronominal": true,
        "radicalJe": "me méfi-",
        "radicalTu": "te méfi-",
        "radicalIl": "se méfi-",
        "radicalPluriel": "se méfi-"
    },
    {
        "infinitif": "finir",
        "groupe": 2,
        "niveau": 1,
        "radical": "fini-",
        "radicalPluriel": "finiss-"
    },
    {
        "infinitif": "choisir",
        "groupe": 2,
        "niveau": 1,
        "radical": "choisi-",
        "radicalPluriel": "choisiss-"
    },
    {
        "infinitif": "grandir",
        "groupe": 2,
        "niveau": 1,
        "radical": "grandi-",
        "radicalPluriel": "grandiss-"
    },
    {
        "infinitif": "réussir",
        "groupe": 2,
        "niveau": 1,
        "radical": "réussi-",
        "radicalPluriel": "réussiss-"
    },
    {
        "infinitif": "remplir",
        "groupe": 2,
        "niveau": 1,
        "radical": "rempli-",
        "radicalPluriel": "rempliss-"
    },
    {
        "infinitif": "réfléchir",
        "groupe": 2,
        "niveau": 2,
        "radical": "réfléchi-",
        "radicalPluriel": "réfléchiss-"
    },
    {
        "infinitif": "établir",
        "groupe": 2,
        "niveau": 2,
        "radical": "établi-",
        "radicalPluriel": "établiss-"
    },
    {
        "infinitif": "réagir",
        "groupe": 2,
        "niveau": 2,
        "radical": "réagi-",
        "radicalPluriel": "réagiss-"
    },
    {
        "infinitif": "avertir",
        "groupe": 2,
        "niveau": 2,
        "radical": "averti-",
        "radicalPluriel": "avertiss-"
    },
    {
        "infinitif": "bondir",
        "groupe": 2,
        "niveau": 2,
        "radical": "bondi-",
        "radicalPluriel": "bondiss-"
    },
    {
        "infinitif": "aboutir",
        "groupe": 2,
        "niveau": 3,
        "radical": "abouti-",
        "radicalPluriel": "aboutiss-"
    },
    {
        "infinitif": "accomplir",
        "groupe": 2,
        "niveau": 3,
        "radical": "accompli-",
        "radicalPluriel": "accompliss-"
    },
    {
        "infinitif": "adoucir",
        "groupe": 2,
        "niveau": 3,
        "radical": "adouci-",
        "radicalPluriel": "adouciss-"
    },
    {
        "infinitif": "affaiblir",
        "groupe": 2,
        "niveau": 3,
        "radical": "affaibli-",
        "radicalPluriel": "affaibliss-"
    },
    {
        "infinitif": "agrandir",
        "groupe": 2,
        "niveau": 3,
        "radical": "agrandi-",
        "radicalPluriel": "agrandiss-"
    },
    {
        "infinitif": "abolir",
        "groupe": 2,
        "niveau": 4,
        "radical": "aboli-",
        "radicalPluriel": "aboliss-"
    },
    {
        "infinitif": "alunir",
        "groupe": 2,
        "niveau": 4,
        "radical": "aluni-",
        "radicalPluriel": "aluniss-"
    },
    {
        "infinitif": "amincir",
        "groupe": 2,
        "niveau": 4,
        "radical": "aminci-",
        "radicalPluriel": "aminciss-"
    },
    {
        "infinitif": "amortir",
        "groupe": 2,
        "niveau": 4,
        "radical": "amorti-",
        "radicalPluriel": "amortiss-"
    },
    {
        "infinitif": "aplanir",
        "groupe": 2,
        "niveau": 4,
        "radical": "aplani-",
        "radicalPluriel": "aplaniss-"
    },
    {
        "infinitif": "coudre",
        "groupe": 3,
        "niveau": 1,
        "radical": "cou",
        "radicalPluriel": "cous",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "entendre",
        "groupe": 3,
        "niveau": 1,
        "radical": "enten",
        "radicalPluriel": "entend",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "étendre",
        "groupe": 3,
        "niveau": 1,
        "radical": "éten",
        "radicalPluriel": "étend",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "fendre",
        "groupe": 3,
        "niveau": 1,
        "radical": "fen",
        "radicalPluriel": "fend",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "apprendre",
        "groupe": 3,
        "niveau": 2,
        "radical": "appren",
        "radicalPluriel": "apprenn",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "attendre",
        "groupe": 3,
        "niveau": 2,
        "radical": "atten",
        "radicalPluriel": "attend",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "comprendre",
        "groupe": 3,
        "niveau": 2,
        "radical": "compren",
        "radicalPluriel": "comprenn",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "défendre",
        "groupe": 3,
        "niveau": 2,
        "radical": "défen",
        "radicalPluriel": "défend",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "confondre",
        "groupe": 3,
        "niveau": 3,
        "radical": "confon",
        "radicalPluriel": "confond",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "correspondre",
        "groupe": 3,
        "niveau": 3,
        "radical": "correspon",
        "radicalPluriel": "correspond",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "découdre",
        "groupe": 3,
        "niveau": 3,
        "radical": "décou",
        "radicalPluriel": "décous",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "distendre",
        "groupe": 3,
        "niveau": 3,
        "radical": "disten",
        "radicalPluriel": "distend",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "condescendre",
        "groupe": 3,
        "niveau": 4,
        "radical": "condescen",
        "radicalPluriel": "condescend",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "démordre",
        "groupe": 3,
        "niveau": 4,
        "radical": "démor",
        "radicalPluriel": "démord",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "désapprendre",
        "groupe": 3,
        "niveau": 4,
        "radical": "désappren",
        "radicalPluriel": "désapprenn",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "s'attendre",
        "groupe": 3,
        "niveau": 3,
        "pronominal": true,
        "radicalJe": "m'atten",
        "radicalTu": "t'atten",
        "radicalIl": "s'atten",
        "radicalPluriel": "s'attend",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "se comprendre",
        "groupe": 3,
        "niveau": 3,
        "pronominal": true,
        "radicalJe": "me compren",
        "radicalTu": "te compren",
        "radicalIl": "se compren",
        "radicalPluriel": "se comprenn",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "se confondre",
        "groupe": 3,
        "niveau": 4,
        "pronominal": true,
        "radicalJe": "me confon",
        "radicalTu": "te confon",
        "radicalIl": "se confon",
        "radicalPluriel": "se confond",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "se correspondre",
        "groupe": 3,
        "niveau": 4,
        "pronominal": true,
        "radicalJe": "me correspon",
        "radicalTu": "te correspon",
        "radicalIl": "se correspon",
        "radicalPluriel": "se correspond",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "se découdre",
        "groupe": 3,
        "niveau": 4,
        "pronominal": true,
        "radicalJe": "",
        "radicalTu": "",
        "radicalIl": "se décou",
        "radicalPluriel": "se décous",
        "terminaisons": "ds|ds|d|ent"
    },
    {
        "infinitif": "cuire",
        "groupe": 3,
        "niveau": 3,
        "radical": "cui-",
        "radicalPluriel": "cuis-"
    },
    {
        "infinitif": "desservir",
        "groupe": 3,
        "niveau": 3,
        "radical": "desser-",
        "radicalPluriel": "desserv-"
    },
    {
        "infinitif": "devenir",
        "groupe": 3,
        "niveau": 2,
        "radical": "devien-",
        "radicalPluriel": "devienn-"
    },
    {
        "infinitif": "devoir",
        "groupe": 3,
        "niveau": 1,
        "radical": "doi-",
        "radicalPluriel": "doiv-"
    },
    {
        "infinitif": "dire",
        "groupe": 3,
        "niveau": 1,
        "radical": "di-",
        "radicalPluriel": "dis-"
    },
    {
        "infinitif": "disconvenir",
        "groupe": 3,
        "niveau": 4,
        "radical": "disconvien-",
        "radicalPluriel": "disconvienn-"
    },
    {
        "infinitif": "discourir",
        "groupe": 3,
        "niveau": 4,
        "radical": "discour-",
        "radicalPluriel": "discour-"
    },
    {
    "infinitif": "disparaître",
    "groupe": 3,
    "niveau": 3,
    "radical": "disparai-",
    "radicalIl": "disparaî-",
    "radicalPluriel": "disparaiss-"
},
    {
        "infinitif": "décrire",
        "groupe": 3,
        "niveau": 1,
        "radical": "décri-",
        "radicalPluriel": "décriv-"
    },
    {
        "infinitif": "déduire",
        "groupe": 3,
        "niveau": 3,
        "radical": "dédui-",
        "radicalPluriel": "déduis-"
    },
    {
        "infinitif": "défaire",
        "groupe": 3,
        "niveau": 2,
        "radical": "défai-",
        "sujetsPossibles": [
            "je",
            "tu",
            "il",
            "elle"
        ]
    },
    {
        "infinitif": "démentir",
        "groupe": 3,
        "niveau": 3,
        "radical": "démen-",
        "radicalPluriel": "dément-"
    },
    {
        "infinitif": "départir",
        "groupe": 3,
        "niveau": 4,
        "radical": "dépar-",
        "radicalPluriel": "départ-"
    },
    {
        "infinitif": "dépeindre",
        "groupe": 3,
        "niveau": 4,
        "radical": "dépein-",
        "radicalPluriel": "dépeign-"
    },
{
    "infinitif": "déplaire",
    "groupe": 3,
    "niveau": 2,
    "radical": "déplai-",
    "radicalIl": "déplaî-",
    "radicalPluriel": "déplais-"
},
    {
        "infinitif": "déteindre",
        "groupe": 3,
        "niveau": 3,
        "radical": "détein-",
        "radicalPluriel": "déteign-"
    },
    {
        "infinitif": "détenir",
        "groupe": 3,
        "niveau": 2,
        "radical": "détien-",
        "radicalPluriel": "détienn-"
    },
    {
        "infinitif": "détruire",
        "groupe": 3,
        "niveau": 2,
        "radical": "détrui-",
        "radicalPluriel": "détruis-"
    },
    {
        "infinitif": "faire",
        "groupe": 3,
        "niveau": 2,
        "radical": "fai-",
        "sujetsPossibles": [
            "je",
            "tu",
            "il",
            "elle"
        ]
    },
    {
        "infinitif": "feindre",
        "groupe": 3,
        "niveau": 4,
        "radical": "fein-",
        "radicalPluriel": "feign-"
    },
    {
        "infinitif": "frire",
        "groupe": 3,
        "niveau": 3,
        "radical": "fri-",
        "sujetsPossibles": [
            "je",
            "tu",
            "il",
            "elle"
        ]
    },
    {
        "infinitif": "fuir",
        "groupe": 3,
        "niveau": 1,
        "radical": "fui-",
        "radicalPluriel": "fui-"
    },
    {
        "infinitif": "geindre",
        "groupe": 3,
        "niveau": 4,
        "radical": "gein-",
        "radicalPluriel": "geign-"
    },
  {
          infinitif: "mettre",
          groupe: 3,
          niveau: 1,
          radical: "me",
          radicalPluriel: "mett",
          terminaisons: "ts|ts|t|ent",
        },
        {
          infinitif: "se mettre",
          groupe: 3,
          niveau: 3,
          pronominal: true,
          radicalJe: "me me",
          radicalTu: "te me",
          radicalIl: "se me",
          radicalPluriel: "se mett",
          terminaisons: "ts|ts|t|ent",
        },
  {
          infinitif: "battre",
          groupe: 3,
          niveau: 1,
          radical: "bat-",
          radicalPluriel: "batt-",
          terminaisons: "ts|ts|t|ent",
        },
];
