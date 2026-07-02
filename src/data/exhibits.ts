import type { Exhibit } from "@/types";

// Images: local /images/* paths (Next.js optimised) + Wikimedia Commons URLs (unoptimized in ArtifactCard).
const IMG = {
  weapons:     "/media/gallery/art-wiki-11.jpg",   // Yatagan sword with scabbard — Met Museum
  lances:      "/media/gallery/art-wiki-12.jpg",   // Yatagan from Court of Suleiman — Met Museum
  mural:       "/media/gallery/art-wiki-10.png",   // Helmet of Skanderbeg — Wikimedia CC BY-SA 4.0
  eagleFlag:   "/media/gallery/ska-fresco-assembly.jpg", // Kuvendi i Lezhës 1444 fresco
  mosaic:      "/media/gallery/art-wiki-13.jpg",   // Gold Belt Mount — decorative/heraldic
  ethInterior: "/media/ethnographic-interior.jpg",
  weaving:     "/media/gallery/fb-women-weaving.jpg",
  leagueMap:   "/media/gallery/ska-kuvendi-map.jpg",
  tapestry:    "/media/gallery/art-wiki-01.jpg",   // Traditional woven belt — Muzeu Etnografik
  ethRoom:     "/media/gallery/art-wiki-22.jpg",   // Traditional locks — household objects
  portrait:    "/media/gallery/hist-wiki-01.jpg",
  battle:      "/media/gallery/hist-wiki-06.jpg",
  firman:      "/media/gallery/arch-wiki-10.jpg",
  costume:     "/media/gallery/art-wiki-02.jpg",
  dress:       "/media/gallery/art-wiki-03.jpg",
};

export const exhibitsData: Exhibit[] = [

  // ── ETHNOGRAPHIC MUSEUM — Albanian (sq) ──────────────────────────────
  {
    id: "eth-1-sq", locale: "sq", slug: "kostum-traditional", museum: "ethnographic",
    name: "Kostum Traditional Femëror", period: "Shekulli XVIII", era: "ottoman", type: "textiles",
    description: "Kostum i plotë femëror nga rajoni i Krujës. Përmban xhubletë të qëndisur me fije ari, brez argjendi dhe kapele tradicionale. Pasqyron mjeshtërinë e lartë të endjes dhe qëndisjes shqiptare të periudhës osmane.",
    imageUrl: IMG.costume,
    provenance: "Familja Kelmendi, Krujë", dimensions: "Komplet veshje",
  },
  {
    id: "eth-2-sq", locale: "sq", slug: "endja-tradicionale", museum: "ethnographic",
    name: "Endja Tradicionale — Zanat i Grave Shqiptare", period: "Shekulli XIX–XX", era: "modern", type: "textiles",
    description: "Gra shqiptare duke endur në vegjë tradicionale — zanat i trashëguar brez pas brezi. Endja ishte veprimtaria kryesore e grave në zonat rurale, ku prodhoheshin qilimat, shalët dhe veshjet me motive dekorative tipike të çdo fshati.",
    imageUrl: IMG.weaving,
    provenance: "Fotografi historike, Shqipëri Qendrore", dimensions: "—",
  },
  {
    id: "eth-3-sq", locale: "sq", slug: "vatre-zjarri", museum: "ethnographic",
    name: "Vatër Zjarri Tradicionale", period: "Shekulli XIX", era: "modern", type: "household",
    description: "Vatër zjarri e gdhendur me motive tradicionale shqiptare. Qendra e shtëpisë shqiptare — vendi ku mblidhej familja, gatuhej ushqimi dhe zhvillohej jeta shoqërore.",
    imageUrl: IMG.ethInterior,
    provenance: "Shtëpia Etnografike, Krujë", dimensions: "120 × 80 × 40 cm",
  },
  {
    id: "eth-4-sq", locale: "sq", slug: "qilim-ilir", museum: "ethnographic",
    name: "Fragment Qilimi Ilir i Restauruar", period: "Shekulli IV p.K.", era: "ancient", type: "textiles",
    description: "Fragment qilimi i restauruar me motive gjeometrike ilire. Motivet e trekëndëshave dhe vijave zigzag janë karakteristike të artit dekorativ ilir të bregdetit adriatik.",
    imageUrl: IMG.tapestry,
    provenance: "Gërmime arkeologjike, nekropol ilir", dimensions: "Fragment: 45 × 38 cm",
  },
  {
    id: "eth-5-sq", locale: "sq", slug: "stoli-argjendi", museum: "ethnographic",
    name: "Stoli Argjendi Femërore", period: "Shekulli XVIII–XIX", era: "ottoman", type: "textiles",
    description: "Koleksion stolish argjendi të punuara me teknikën filigran — byzylykë, vathë dhe gjerdane. Argjendaria shqiptare ka traditë shekullore dhe pasqyron ndikimin oriental dhe venedikas.",
    imageUrl: IMG.dress,
    provenance: "Bazari i Krujës, koleksion privat", dimensions: "Koleksion 12 cope",
  },

  // ── SKANDERBEG MUSEUM — Albanian (sq) ────────────────────────────────
  {
    id: "ska-1-sq", locale: "sq", slug: "shpata-e-skenderbeut", museum: "skanderbeg",
    name: "Shpata e Skënderbeut", period: "Shekulli XV", era: "medieval", type: "weaponry",
    description: "Shpata ceremoniale e atribuuar Gjergj Kastriotit — Skënderbeut. Teh çeliku të kalitur me dorezë argjendi me gdhendja të hollë. Një nga artefaktet më të çmuara të rezistencës shqiptare kundër Perandorisë Osmane.",
    imageUrl: IMG.weapons,
    provenance: "Kështjella e Krujës", dimensions: "Gjatësi: 92 cm",
  },
  {
    id: "ska-2-sq", locale: "sq", slug: "helma-e-skenderbeut", museum: "skanderbeg",
    name: "Helma e Skënderbeut (Replikë)", period: "Shekulli XV", era: "medieval", type: "weaponry",
    description: "Replikë e saktë e helmës origjinale të Skënderbeut, e cila ruhet në Muzeun Kunsthistorisches në Vjenë. Helma konikale me krye dhie — stemën e familjes Kastrioti — është simboli më i njohur i Shqipërisë mesjetare.",
    imageUrl: IMG.mural,
    provenance: "Replikë — Origjinali: Kunsthistorisches Museum, Vjenë", dimensions: "Lartësi: 32 cm, Diametri: 22 cm",
  },
  {
    id: "ska-3-sq", locale: "sq", slug: "hanxhar-ceremonial", museum: "skanderbeg",
    name: "Hanxhar Ceremonial — Armë Osmane", period: "Shekulli XVI", era: "medieval", type: "weaponry",
    description: "Hanxhar ceremonial me teh çeliku të ndërtuar me ari dhe dorezë fildishtë të gdhendur me motive floralore. Guri i kuq i çmuar në kokë tregon statusin e lartë të pronarit. Armë e oborrit osman, tipike e klasës fisnike luftarake të periudhës XVI.",
    imageUrl: IMG.lances,
    provenance: "Koleksion arkeologjik, Shqipëri", dimensions: "Gjatësi: 78 cm",
  },
  {
    id: "ska-4-sq", locale: "sq", slug: "lidhja-e-lezhes-1444", museum: "skanderbeg",
    name: "Lidhja e Lezhës — Kuvendi i 2 Marsit 1444", period: "1444", era: "medieval", type: "documents",
    description: "Freska historike e Kuvendit të Lezhës — momenti kur 25 krerë shqiptarë u mblodhën më 2 Mars 1444 dhe zgjodhën Gjergj Kastriotin komandant të përgjithshëm. Kjo aleancë historike shënoi fillimin e rezistencës 25-vjeçare kundër Perandorisë Osmane.",
    imageUrl: IMG.eagleFlag,
    provenance: "Freska — Muzeu Historik Krujë", dimensions: "Freska murale",
  },
  {
    id: "ska-5-sq", locale: "sq", slug: "harta-e-lidhjes-1444", museum: "skanderbeg",
    name: "Harta e Lidhjes — Kuvendi i Lezhës 2 Mars 1444", period: "1444", era: "medieval", type: "documents",
    description: "Dokument historik i Kuvendit të Lezhës me emrat e 25 krerëve shqiptarë dhe territoret e tyre: Stefan Cernojevici, Lekë Dukagjini, Skënderbeu, Andrea Topia, Gjergj Araniti e të tjerë — bashkë kundër Perandorisë Osmane. Stema e shqiponjës dykrenare qëndron në krye.",
    imageUrl: IMG.leagueMap,
    provenance: "Muzeu Historik Krujë — artefakt dokumentar", dimensions: "68 × 48 cm",
  },
  {
    id: "ska-6-sq", locale: "sq", slug: "kapese-brezi-ari", museum: "skanderbeg",
    name: "Kapëse Brezi Ari — Stoli Mesjetare", period: "Shekulli XIII–XV", era: "medieval", type: "textiles",
    description: "Kapëse brezi prej bronzi të artëzuar me motive spirale dhe dekorime rrethorë — element i veshjes ceremoniale të fisnikërisë shqiptare mesjetare. Teknika e gdhendjes dhe cilësia e materialit tregojnë orjentim nga tradita artizanale bizantine dhe ballkanike.",
    imageUrl: IMG.mosaic,
    provenance: "Koleksion arkeologjik, Shqipëri e Mesme", dimensions: "Diametri: 6.5 cm",
  },
  {
    id: "ska-7-sq", locale: "sq", slug: "reliev-skenderbeu-rezistenca", museum: "skanderbeg",
    name: "Reliev — Skënderbeu dhe Rezistenca Shqiptare", period: "Shekulli XV", era: "medieval", type: "documents",
    description: "Reliev guri i brendshëm i Muzeut Historik — Skënderbeu i rrethuar nga luftëtarët shqiptarë me armë, shpata dhe emblemën e dhisë të familjes Kastrioti në helmet. Vepër artistike e komisionuar për muzeun si dëshmi e trashëgimisë mesjetare shqiptare.",
    imageUrl: IMG.battle,
    provenance: "Instalim muzeal — Muzeu Historik Krujë", dimensions: "Reliev muror",
  },
  {
    id: "ska-8-sq", locale: "sq", slug: "reliev-brendshem-muzeu", museum: "skanderbeg",
    name: "Reliev i Brendshëm — Muzeu Historik Krujë", period: "Shekulli XV", era: "medieval", type: "documents",
    description: "Reliev guri monumental i ekspozuar brenda Muzeut Historik — Skënderbeu me helma karakteristike të familjes Kastrioti, duke mbajtur pergamenë dhe i rrethuar nga fisnikë shqiptarë. Vepër e artit figurativ e komisionuar si dëshmi e trashëgimisë mesjetare.",
    imageUrl: IMG.portrait,
    provenance: "Instalim muzeal — Muzeu Historik Gjergj Kastrioti Skënderbeu, Krujë", dimensions: "Reliev muror",
  },

  // ── ETHNOGRAPHIC MUSEUM — English (en) ───────────────────────────────
  {
    id: "eth-1-en", locale: "en", slug: "traditional-costume", museum: "ethnographic",
    name: "Traditional Female Costume", period: "18th Century", era: "ottoman", type: "textiles",
    description: "Complete female costume from the Krujë region. Includes an embroidered xhubleta with gold thread, silver belt and traditional headwear. Reflects the high craftsmanship of Albanian weaving and embroidery during the Ottoman period.",
    imageUrl: IMG.costume,
    provenance: "Kelmendi family, Krujë", dimensions: "Complete ensemble",
  },
  {
    id: "eth-2-en", locale: "en", slug: "traditional-weaving", museum: "ethnographic",
    name: "Traditional Weaving — Albanian Women's Craft", period: "19th–20th Century", era: "modern", type: "textiles",
    description: "Albanian women at a traditional loom — a craft passed down through generations. Weaving was the primary occupation of women in rural areas, producing rugs, saddlebags and garments with decorative motifs unique to each village.",
    imageUrl: IMG.weaving,
    provenance: "Historical photograph, Central Albania", dimensions: "—",
  },
  {
    id: "eth-3-en", locale: "en", slug: "traditional-hearth", museum: "ethnographic",
    name: "Traditional Hearth", period: "19th Century", era: "modern", type: "household",
    description: "Stone hearth carved with traditional Albanian motifs. The centre of the Albanian home — where the family gathered, food was cooked, and social life unfolded.",
    imageUrl: IMG.ethInterior,
    provenance: "Ethnographic House, Krujë", dimensions: "120 × 80 × 40 cm",
  },
  {
    id: "eth-4-en", locale: "en", slug: "illyrian-rug", museum: "ethnographic",
    name: "Restored Illyrian Rug Fragment", period: "4th Century BC", era: "ancient", type: "textiles",
    description: "Restored rug fragment with Illyrian geometric motifs. The triangular and zigzag patterns are characteristic of the decorative art of Adriatic Illyrian tribes.",
    imageUrl: IMG.tapestry,
    provenance: "Archaeological excavations, Illyrian necropolis", dimensions: "Fragment: 45 × 38 cm",
  },
  {
    id: "eth-5-en", locale: "en", slug: "silver-jewellery", museum: "ethnographic",
    name: "Traditional Silver Jewellery", period: "18th–19th Century", era: "ottoman", type: "textiles",
    description: "Collection of filigree silver jewellery — bracelets, earrings and necklaces. Albanian silversmithing has a centuries-old tradition reflecting both Oriental and Venetian influences.",
    imageUrl: IMG.dress,
    provenance: "Krujë bazaar, private collection", dimensions: "Collection of 12 pieces",
  },

  // ── SKANDERBEG MUSEUM — English (en) ─────────────────────────────────
  {
    id: "ska-1-en", locale: "en", slug: "skanderbeg-sword", museum: "skanderbeg",
    name: "Skanderbeg's Sword", period: "15th Century", era: "medieval", type: "weaponry",
    description: "Ceremonial sword attributed to Gjergj Kastrioti — Skanderbeg. Tempered steel blade with a finely engraved silver hilt. One of the most treasured artifacts of the Albanian resistance against the Ottoman Empire.",
    imageUrl: IMG.weapons,
    provenance: "Castle of Krujë", dimensions: "Length: 92 cm",
  },
  {
    id: "ska-2-en", locale: "en", slug: "skanderbeg-helmet", museum: "skanderbeg",
    name: "Skanderbeg's Helmet (Replica)", period: "15th Century", era: "medieval", type: "weaponry",
    description: "Exact replica of Skanderbeg's original helmet, preserved in the Kunsthistorisches Museum in Vienna. The conical helmet crowned with a goat's head — the Kastrioti family crest — is the most recognisable symbol of medieval Albania.",
    imageUrl: IMG.mural,
    provenance: "Replica — Original: Kunsthistorisches Museum, Vienna", dimensions: "Height: 32 cm, Diameter: 22 cm",
  },
  {
    id: "ska-3-en", locale: "en", slug: "ceremonial-dagger", museum: "skanderbeg",
    name: "Ceremonial Dagger — Ottoman Court Weapon", period: "16th Century", era: "medieval", type: "weaponry",
    description: "Ceremonial dagger with a steel blade inlaid with gold foliate scrollwork and an ivory handle set with a red gemstone. A prestige weapon of the Ottoman nobility, reflecting the refined craftsmanship of 16th-century court armouries.",
    imageUrl: IMG.lances,
    provenance: "Archaeological collection, Albania", dimensions: "Length: 78 cm",
  },
  {
    id: "ska-4-en", locale: "en", slug: "league-of-lezhe-1444", museum: "skanderbeg",
    name: "League of Lezhë — Assembly of 2 March 1444", period: "1444", era: "medieval", type: "documents",
    description: "Historical fresco of the Assembly of Lezhë — the moment when 25 Albanian lords gathered on 2 March 1444 and elected Gjergj Kastrioti supreme commander. This alliance marked the beginning of 25 years of resistance against the Ottoman Empire.",
    imageUrl: IMG.eagleFlag,
    provenance: "Fresco — Skanderbeg Historical Museum, Krujë", dimensions: "Mural fresco",
  },
  {
    id: "ska-5-en", locale: "en", slug: "league-of-lezhe-map", museum: "skanderbeg",
    name: "Alliance Map — Assembly of Lezhë, 2 March 1444", period: "1444", era: "medieval", type: "documents",
    description: "Historical document of the Assembly of Lezhë naming all 25 Albanian lords and their territories: Stefan Cernojevici, Lekë Dukagjini, Skanderbeg, Andrea Topia, Gjergj Araniti and others — united against the Ottoman Empire. The double-headed eagle emblem crowns the document.",
    imageUrl: IMG.leagueMap,
    provenance: "Skanderbeg Historical Museum, Krujë", dimensions: "68 × 48 cm",
  },
  {
    id: "ska-6-en", locale: "en", slug: "gold-belt-clasp", museum: "skanderbeg",
    name: "Gold Belt Clasp — Medieval Albanian Ornament", period: "13th–15th Century", era: "medieval", type: "textiles",
    description: "Gilded bronze belt clasp with interlaced scroll and floral motifs, part of the ceremonial dress of the Albanian medieval nobility. The casting technique and decorative vocabulary reflect Byzantine and Balkan craft traditions of the period.",
    imageUrl: IMG.mosaic,
    provenance: "Archaeological collection, central Albania", dimensions: "Diameter: 6.5 cm",
  },
  {
    id: "ska-7-en", locale: "en", slug: "relief-skanderbeg-resistance", museum: "skanderbeg",
    name: "Stone Relief — Skanderbeg and the Albanian Resistance", period: "15th Century", era: "medieval", type: "documents",
    description: "Interior stone relief of the Skanderbeg Historical Museum — Skanderbeg surrounded by Albanian warriors bearing arms and swords, with the Kastrioti goat-head emblem visible on their helmets. Commissioned as an artistic testament to the Albanian medieval heritage.",
    imageUrl: IMG.battle,
    provenance: "Museum installation — Skanderbeg Historical Museum, Krujë", dimensions: "Mural relief",
  },
  {
    id: "ska-8-en", locale: "en", slug: "interior-relief-museum", museum: "skanderbeg",
    name: "Interior Relief — Skanderbeg Historical Museum", period: "15th Century", era: "medieval", type: "documents",
    description: "Monumental stone relief displayed inside the Skanderbeg Historical Museum — Skanderbeg in the characteristic Kastrioti goat-head helmet, holding a scroll and surrounded by Albanian nobles. A work of figurative art commissioned as a testament to Albanian medieval heritage.",
    imageUrl: IMG.portrait,
    provenance: "Museum installation — Skanderbeg Historical Museum, Krujë", dimensions: "Mural relief",
  },
];
