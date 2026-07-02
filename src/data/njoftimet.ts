export type Njoftim = {
  id: string;
  slug: string;
  visible: boolean;
  date: string;
  titleAL: string;
  titleEN: string;
  excerptAL: string;
  excerptEN: string;
  bodyAL: string;
  bodyEN: string;
  imageUrl?: string;
};

export const njoftimet: Njoftim[] = [
  {
    id: "njoftim-1",
    slug: "ndryshim-orari-1-maj-2026",
    visible: true,
    date: "2026-05-01",
    titleAL: "Ndryshim Orari — 1 Maj 2026",
    titleEN: "New Visiting Hours — 1 May 2026",
    excerptAL: "Nga data 1 maj 2026, ndryshon orari i vizitave në Muzeun Gjergj Kastrioti Skënderbeu dhe Muzeun Etnografik Krujë.",
    excerptEN: "From 1 May 2026, visiting hours at the Gjergj Kastrioti Skanderbeg Museum and Ethnographic Museum Krujë have changed.",
    bodyAL: `Të dashur vizitorë të Qendrës Muzeore Krujë! 🏰

Ju njoftojmë se nga data 1 maj 2026, ndryshon orari i vizitave në Muzeun Gjergj Kastrioti Skënderbeu dhe Muzeun Etnografik Krujë. 🇦🇱

Orari:
E hënë – E diel: 09:00 – 19:00

Ju mirëpresim!`,
    bodyEN: `Dear visitors to the Muzeu Krujë Cultural Centre! 🏰

We are pleased to inform you that from 1 May 2026, visiting hours at the Gjergj Kastrioti Skanderbeg Museum and the Ethnographic Museum Krujë have changed. 🇦🇱

Hours:
Monday – Sunday: 09:00 – 19:00

We look forward to welcoming you!`,
  },
  {
    id: "njoftim-2",
    slug: "restaurimi-i-salles-kryesore",
    visible: false,
    date: "2026-06-15",
    titleAL: "Projekt Restaurimi i Sallës Kryesore",
    titleEN: "Main Hall Restoration Project",
    excerptAL: "Salla kryesore e Muzeut Historik do të jetë e mbyllur gjatë muajit gusht për punime restaurimi.",
    excerptEN: "The main hall of the Historical Museum will be closed during August for restoration works.",
    bodyAL: `Muzeu Historik i Krujës do të ndërmarrë punime restaurimi në sallën e tij kryesore gjatë muajit gusht 2026.

Gjatë kësaj periudhe, salla kryesore dhe ekspozitat e armëve origjinale do të jenë të mbyllura për vizitorët. Pjesët e tjera të muzeut do të qëndrojnë të hapura me oraret normale.

Faleminderit për mirëkuptimin tuaj.`,
    bodyEN: `The Krujë Historical Museum will undertake restoration works in its main hall during August 2026.

During this period, the main hall and original weapons exhibits will be closed to visitors. All other parts of the museum will remain open with normal hours.

Thank you for your understanding.`,
  },
  {
    id: "njoftim-3",
    slug: "ekspozite-e-re-armatimet-e-skenderbeut",
    visible: false,
    date: "2026-09-01",
    titleAL: "Ekspozitë e Re: Armatimet e Skënderbeut",
    titleEN: "New Exhibition: Skanderbeg's Armament",
    excerptAL: "Nga shtatori 2026, ekspozita e re mbi armatimet e epokës skënderbegase do të hapet për publikun.",
    excerptEN: "From September 2026, a new exhibition on Skanderbeg-era armaments opens to the public.",
    bodyAL: `Muzeu Historik i Krujës është i kënaqur të njoftojë hapjen e ekspozitës së re "Armatimet e Skënderbeut" më 1 shtator 2026.

Ekspozita do të paraqesë armë origjinale, replikat dhe dokumente historike nga periudha 1443–1468, duke ofruar një pamje të thellë mbi teknikat ushtarake të epokës.

Hyrja është e përfshirë në çmimin normal të biletës.`,
    bodyEN: `The Krujë Historical Museum is pleased to announce the opening of the new exhibition "Skanderbeg's Armament" on 1 September 2026.

The exhibition will present original weapons, replicas and historical documents from the 1443–1468 period, offering an in-depth view of the military techniques of the era.

Entry is included in the normal ticket price.`,
  },
];
