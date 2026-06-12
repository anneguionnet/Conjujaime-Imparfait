// ============================================================
// BDD ACCENTS — é, è, ê, â, et son [ɛ] écrit -e (η)
// ============================================================
const verbesAccents1 = [

  // ============================================================
  // JEU 1. Les mots accentués dans Le Petit Prince (ch. 1-7)
  // ============================================================

  // ========================================================
  // 1a. ACCENT AIGU — é (31 entrées)
  // ========================================================
 {"mot":"un éléphant","pos":1,"cible":"é"},
{"mot":"un éléphant","pos":2,"cible":"é"},
 {"mot":"préféré","pos":1,"cible":"é"},
{"mot":"préféré","pos":2,"cible":"é"},
{"mot":"préféré","pos":3,"cible":"é"},
  {"mot":"intéressant","cible":"é"},
  {"mot":"un désert","cible":"é"},
  {"mot":"les étoiles","cible":"é"},
  {"mot":"un étonnement","cible":"é"},
  {"mot":"la géographie","cible":"é"},
  {"mot":"un métier","cible":"é"},
  {"mot":"un bélier","cible":"é"},
  {"mot":"un mécanicien","cible":"é"},
  {"mot":"une réparation","cible":"é"},
  {"mot":"l'intérieur","cible":"é"},
  {"mot":"une expérience","cible":"é","pos":2},
  {"mot":"une présence","cible":"é"},
  {"mot":"un trésor","cible":"é"},
  {"mot":"la mélancolie","cible":"é"},
 {"mot":"égaré","cible":"é"},
  {"mot":"découragé","cible":"é"},
  {"mot":"stupéfait","cible":"é"},
  {"mot":"compréhensif","cible":"é"},
  {"mot":"sérieuse","cible":"é"},
  {"mot":"véritablement","cible":"é"},
  {"mot":"léger","cible":"é"},
{"mot":"régulièrement","cible":"é","pos":1},
 {"mot":"je préfère","cible":"é"},
 {"mot":"un étincellement","cible":"é"},


  // ========================================================
  // 1b. ACCENT GRAVE — è (40 entrées)
  // ========================================================
  {"mot":"une carrière","cible":"è"},
  {"mot":"la boulangère","cible":"è"},
{"mot":"la pâtissière","cible":"è"},
  {"mot":"la bouchère","cible":"è"},
  {"mot":"la caissière","cible":"è"},
  {"mot":"une ambulancière","cible":"è"},
  {"mot":"une bergère","cible":"è","pos":2},
  {"mot":"une bijoutière","cible":"è"},
  {"mot":"une conseillère","cible":"è"},
  {"mot":"une costumière","cible":"è"},
  {"mot":"un modèle","cible":"è"},
  {"mot":"un mystère","cible":"è"},
{"mot":"entière","pos":2,"cible":"è"},
  {"mot":"une planète","cible":"è"},
  {"mot":"la première","cible":"è","pos":2},
  {"mot":"quatrième","cible":"è"},
  {"mot":"régulièrement","cible":"è","pos":2},
 {"mot":"deuxième","pos":2,"cible":"è"},
  {"mot":"troisième","cible":"è"},
  {"mot":"cinquième","cible":"è"},
  {"mot":"sixième","cible":"è"},
  {"mot":"septième","pos":2,"cible":"è"},
  {"mot":"huitième","cible":"è"},
  {"mot":"neuvième","cible":"è","pos":2},
  {"mot":"dixième","cible":"è"},
  {"mot":"vingtième","cible":"è"},
  {"mot":"centième","cible":"è","pos":2},
  

  // ========================================================
  // 1c. ACCENT CIRCONFLEXE — ê (15 entrées)
  // ========================================================
  {"mot":"une forêt","cible":"ê","info":"de la famille de forestier"},
  {"mot":"une tête","cible":"ê","info":"vient du latin testa"},
  {"mot":"la fête","cible":"ê","info":"de la famille de festif"},
  {"mot":"être","cible":"ê","info":"de la famille de je suis, nous sommes, elles sont"},
  {"mot":"peut-être","cible":"ê","pos":2,"info":"vient du latin esse"},
  {"mot":"une rêverie","cible":"ê"},
  {"mot":"une bête","cible":"ê","info":"de la famille de bestial, bestiaux"},
  {"mot":"une fenêtre","cible":"ê","pos":2,"info":"de la famille de défenestrer"},
  {"mot":"un ancêtre","cible":"ê","info":"de la famille de ancestral"},
  {"mot":"la conquête","cible":"ê","info":"de la famille de quest en anglais"},
  {"mot":"honnête","cible":"ê","info":"de la famille de honest en anglais"},
  {"mot":"une tempête","cible":"ê","pos":2,"info":"de la famille de tempest en anglais"},
  {"mot":"un prêtre","cible":"ê","info":"de la famille de presbyter"},
  {"mot":"une guêpe","cible":"ê","info":"de la famille de wasp en anglais"},
  {"mot":"une crêpe","cible":"ê","info":"vient du latin crispus"},
 {"mot":"benêt","cible":"ê","pos":2,"info":"de la famille de Benoît, bénédictin"},

  // ========================================================
  // 1d. ACCENT CIRCONFLEXE — â étymologique (13 entrées)
  // ========================================================
  {"mot":"la hâte","cible":"â","info":"vient du francique haifst"},
  {"mot":"l'âge","cible":"â","info":"vient du latin aevum"},
  {"mot":"mâcher","cible":"â","info":"de la famille de mastiquer"},
  {"mot":"un âne","cible":"â","info":"vient du latin asinus"},
  {"mot":"une âme","cible":"â","info":"vient du latin anima"},
  {"mot":"un château","cible":"â","info":"de la famille de castle en anglais"},
  {"mot":"la grâce","cible":"â","info":"vient du latin gratia"},
  {"mot":"pâle","cible":"â","info":"vient du latin pallidus"},
  {"mot":"une tâche","cible":"â","info":"vient du latin taxa"},
  {"mot":"infâme","cible":"â","info":"vient du latin infamis"},
  {"mot":"un bâton","cible":"â","info":"de la famille de bastonnade"},
  {"mot":"un câble","cible":"â","info":"vient du latin capulum"},
  {"mot":"le théâtre","cible":"â","pos":2,"info":"vient du latin theatrum"},
 {"mot":"la pâtissière","cible":"â","info":"de la famille du mot italien pasta"},

  // ========================================================
  // 1e. ACCENT CIRCONFLEXE — û (homophones)
  // ========================================================
  {"mot":"dû","cible":"û","info":"dû (participe de devoir) ≠ du (article)"},
  {"mot":"sûr","cible":"û","info":"sûr (certain) ≠ sur (préposition)"},
  {"mot":"mûr","cible":"û","info":"mûr (de la famille de mature)"},
  {"mot":"jeûne","cible":"û","info":"jeûne (abstinence) ≠ jeune (âge)"},
  {"mot":"crû","cible":"û","info":"crû (participe de croître) ≠ cru (participe de croire)"},

];
