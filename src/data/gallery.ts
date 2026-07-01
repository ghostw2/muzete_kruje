import type { GalleryImage } from "@/types";

// Wikimedia Commons images under Creative Commons licenses.
// Attribution: Thomas Quine (CC BY 2.0), Adam Jones (CC BY-SA 2.0),
// Anneli Salo (CC BY-SA 3.0), Mooonswimmer (CC BY-SA 4.0),
// Andisrado (CC BY-SA 4.0), Pudelek (CC BY-SA 4.0).
// Local photographs © Muzeu Historik dhe Etnografik, Krujë.

export const galleryImages: GalleryImage[] = [
  // ── Architecture ──────────────────────────────────────────────────────
  {
    id: "arch-1",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Kruja_Castle_%28by_Pudelek%29.JPG",
    alt: "Kështjella e Krujës — pamje panoramike",
    category: "architecture",
    museum: "skanderbeg",
    width: 3158,
    height: 1621,
  },
  {
    id: "arch-2",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Kruja_Castle_and_Kruj%C3%AB_from_Skanderbeg_Museum_C_IMG_0594.JPG",
    alt: "Kështjella dhe qyteti i Krujës — pamje nga muzeu",
    category: "architecture",
    museum: "skanderbeg",
    width: 4000,
    height: 3000,
  },
  {
    id: "arch-3",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Albanian_window_%286913545920%29.jpg",
    alt: "Dritare tradicionale shqiptare — Muzeu Etnografik",
    category: "architecture",
    museum: "ethnographic",
    width: 3872,
    height: 2592,
  },
  {
    id: "arch-4",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/07/Double_eagle_curtains_%286906637146%29.jpg",
    alt: "Perdeja me shqiponjën dykrenare — Muzeu Etnografik",
    category: "architecture",
    museum: "ethnographic",
    width: 3872,
    height: 2592,
  },
  {
    id: "arch-5",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/10/Ethnographic_Museum_of_Kruja_11.jpg",
    alt: "Dhoma e brendshme e Muzeut Etnografik — piktura osmane",
    category: "architecture",
    museum: "ethnographic",
    width: 5000,
    height: 3338,
  },

  // ── Artifacts ─────────────────────────────────────────────────────────
  {
    id: "art-1",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Medieval_Albanian_weapons_%286952847424%29.jpg",
    alt: "Armët mesjetare shqiptare — Muzeu Skënderbeu",
    category: "artifacts",
    museum: "skanderbeg",
    width: 3872,
    height: 2592,
  },
  {
    id: "art-2",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Albanian_lances_%287095383539%29.jpg",
    alt: "Heshta shqiptare — Muzeu Skënderbeu",
    category: "artifacts",
    museum: "skanderbeg",
    width: 3872,
    height: 2592,
  },
  {
    id: "art-3",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Skanderbeg_Museum_mosaic.jpg",
    alt: "Mozaik — veshja tradicionale gege, Muzeu Skënderbeu",
    category: "artifacts",
    museum: "skanderbeg",
    width: 2048,
    height: 1536,
  },
  {
    id: "art-4",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Skanderbeg_Museum_mural_1.jpg",
    alt: "Mural — Skënderbeu dhe trupat e tij, Muzeu Skënderbeu",
    category: "artifacts",
    museum: "skanderbeg",
    width: 1536,
    height: 2048,
  },
  {
    id: "art-5",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Wrestling_tapestry_%287044156975%29.jpg",
    alt: "Tapiceri antike me skenë mundësi — Muzeu Etnografik",
    category: "artifacts",
    museum: "ethnographic",
    width: 3872,
    height: 2592,
  },

  // ── Events / Interiors ────────────────────────────────────────────────
  {
    id: "evt-1",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Room_Interior_with_Stained_Glass_-_Historical_Museum_-_Kruja_-_Albania_%2828880161698%29.jpg",
    alt: "Dhoma me xhama me ngjyra — Muzeu Historik, Krujë",
    category: "events",
    museum: "skanderbeg",
    width: 2590,
    height: 3559,
  },
  {
    id: "evt-2",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Skanderbeg_Museum_mural_1.jpg",
    alt: "Ekspozitë — murale historike, Muzeu Skënderbeu",
    category: "events",
    museum: "skanderbeg",
    width: 1536,
    height: 2048,
  },

  // ── Local photographs ─────────────────────────────────────────────────
  {
    id: "local-1",
    src: "/images/gallery/arch-ska-night-glow.jpg",
    alt: "Muzeu Historik natën — ndriçuar me drita portokalli, Krujë",
    category: "architecture",
    museum: "skanderbeg",
    width: 1537,
    height: 2048,
  },
  {
    id: "local-2",
    src: "/images/gallery/ska-fresco-assembly.jpg",
    alt: "Freska e Kuvendit të Lezhës, 2 Mars 1444 — brendësi Muzeu Skënderbeu",
    category: "events",
    museum: "skanderbeg",
    width: 1536,
    height: 2048,
  },
  {
    id: "local-3",
    src: "/images/gallery/ska-battle-panorama.jpg",
    alt: "Panorama e betejës — pikturë e madhe nën harkun e gurit, Muzeu Skënderbeu",
    category: "events",
    museum: "skanderbeg",
    width: 1708,
    height: 2560,
  },
  {
    id: "local-4",
    src: "/images/gallery/ska-stone-relief.webp",
    alt: "Reliev guri — Gjergj Kastrioti Skënderbeu me krerët e tij",
    category: "artifacts",
    museum: "skanderbeg",
    width: 5472,
    height: 3648,
  },
  {
    id: "local-5",
    src: "/images/gallery/ska-kuvendi-map.jpg",
    alt: "Harta e Kuvendit të Lezhës, 2 Mars 1444 — artefakt historik",
    category: "artifacts",
    museum: "skanderbeg",
    width: 1366,
    height: 2048,
  },
  {
    id: "local-6",
    src: "/images/gallery/kruje-bazaar.webp",
    alt: "Pazari i Vjetër i Krujës — rruga me kalldrëm drejt muzeve",
    category: "architecture",
    museum: "skanderbeg",
    width: 2560,
    height: 1707,
  },
];

export function getGalleryImages(category?: GalleryImage["category"]): GalleryImage[] {
  if (!category) return galleryImages;
  return galleryImages.filter((img) => img.category === category);
}
