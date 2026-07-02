export type EtnografikuRoom = {
  id: string;
  titleAL: string;
  titleEN: string;
  descAL: string;
  descEN: string;
  images: string[];
};

export const etnografikuRooms: EtnografikuRoom[] = [
  {
    id: "hyrja",
    titleAL: "Muzeu Etnografik",
    titleEN: "The Ethnographic Museum",
    descAL: `Është një banesë tradicionale e ndërtuar në mesin e shekullit XVIII (1764) nga Kapllan Pashë Toptani. Arkitektura e saj është orientale me korridor të mbyllur, tip kulle dy katëshe me mure guri me gjerësi 60-80 cm. Në të gjenden piktura të stilit barok dhe islamik të cilat zbukurojnë dhomat kryesore të saj.

Që në hyrje bien në sy harqet e portave me gurë të gdhendur dhe rrugët e shtruara me kalldrëm.

Në këtë banesë gjenden shumë elemente të traditës së zonës për mënyrën e jetesës, veshjes, zakoneve, etj. Në hyrje janë disa modele burimesh natyrale të ujit të cilat dëshmojnë se Kruja ka patur disa të tilla, madje mendohet se dhe prejardhja e emrit të qytetit vjen nga fjala 'kroje' që do të thotë burim uji në shqip.`,
    descEN: `It is a traditional building built in the middle of the XVIII century (1764) by Kaplan Pasha Toptani. Its architecture is oriental with a closed corridor, a type of two-storey tower with stone walls 60-80 cm wide. In it are Baroque and Islamic paintings which adorn its main rooms.

From the entrance, the arches of the gates with carved stones and the cobbled streets stand out.

In this apartment are found many elements of the tradition of the area from lifestyle to dresses, customs, etc. At the entrance are some models of natural water sources which prove that Kruja had some of them — it is even thought that the origin of the name of the city comes from the word 'kroje' which means water spring in Albanian.`,
    images: ["/media/app-photos/etnografiku_1.jpg", "/media/app-photos/etnografiku_2.jpg", "/media/app-photos/etnografiku_3.jpg"],
  },
  {
    id: "veglat",
    titleAL: "Veglat Tradicionale",
    titleEN: "Traditional Tools",
    descAL: `Në hollin e katit të parë njihesh me veglat tradicionale të bujkut për punimin e tokës, mekanizmat e bluarjes së drithit me dorë dhe me ujë, mekanizmat e pastrimit të grurit për hashure (ëmbëlsirë tradicionale), etj.

Një nga zejet e ekspozuara është regja ose përpunimi i lëkurës dhe proceset që kalonte ajo, përdorur më pas për të bërë këpucë. Gjithashtu në ambjentet e banesës njihesh me përpunimin e kashtës së kënetës dhe prodhimin e hastrave për tu ulur ose për të fjetur.`,
    descEN: `From the first-floor lobby, you get acquainted with the traditional tools of the farmer for tillage, the mechanisms of grinding the grain by hand and with water, the mechanisms of cleaning the grain for hashure (traditional dessert), etc.

One of the exhibits is the tanning or processing of leather and the processes it went through, later used to make shoes. Also, in the premises of the house, you get acquainted with the processing of swamp straw and the production of hastras to sit or sleep.`,
    images: ["/media/app-photos/etnografiku_4.jpg"],
  },
  {
    id: "hekuri",
    titleAL: "Punimi i Hekurit",
    titleEN: "Iron Work",
    descAL: "Në punishtet e katit të parë do shikoni punishten ku punohej hekuri për nevojat e familjes dhe të tregut të Krujës, si dhe qeramika ku prodhoheshin tjegulla, tulla dhe objekte të përdorimit shtëpiak.",
    descEN: "In the workshops on the first floor, you will see where iron is worked for the needs of the family and the market of Kruja, as well as ceramics where tiles, bricks, and objects of household use were produced.",
    images: ["/media/app-photos/etnografiku_5.jpg"],
  },
  {
    id: "distileria",
    titleAL: "Distileria",
    titleEN: "The Distillery",
    descAL: "Në punishten tjetër do shikoni distilerinë ku prodhohej rakia dhe vera.",
    descEN: "In the next workshop you will see the distillery where brandy (raki) and wine were produced.",
    images: ["/media/app-photos/etnografiku_6.jpg"],
  },
  {
    id: "leshi",
    titleAL: "Përpunimi i Leshit",
    titleEN: "Wool Processing",
    descAL: "Në një punishte tjetër ndodhet mulliri me ujë i përdorur për të bluar drithin, valancia që përdorej për të bërë shajak ose stof leshi, dhe përpunimi i leshit të deles përdorur për të bërë qeleshet.",
    descEN: "Then in another workshop, there is the water mill used to grind grain, the valance used to make felt or wool, and the processing of sheep wool used to make fez.",
    images: ["/media/app-photos/etnografiku_7.jpg"],
  },
  {
    id: "mulliri",
    titleAL: "Mulliri i Vajit",
    titleEN: "The Oil Mill",
    descAL: "Në punishten e fundit ndodhet mulliri i vajit të ullirit dhe shumë amfora ose magrip përdorur për të mbajtur për një kohë të gjatë vajin e ullirit.",
    descEN: "In the last workshop is the olive oil mill and many amphorae used to store the olive oil for a long time.",
    images: ["/media/app-photos/etnografiku_8.jpg"],
  },
  {
    id: "kati2",
    titleAL: "Kati i II-të",
    titleEN: "2nd Floor",
    descAL: `Në katin e dytë të banesës fillohet nga dhoma e grave ose e nuses ku dallohen arkat ku nusja sillte pajën e saj, të cilat janë origjinale, pikturat murale të shek. XVIII dhe dy tipe dritaresh të veçanta me punim druri, të cilat lart janë me punime gipsi vetëm për dritë dhe poshtë për ajrosje.

Korridori që shërben si ndërlidhës mes dhomave ku do të shikoni edhe veshjet e dasmës për dhëndrin dhe nusen, i cili është mëndafshi i qëndisur me ar, argjend e perla lumi (inxhi).

Një veçanti është se të gjitha dyert janë të ulëta të cilat të detyrojnë të ulësh kokën në shenjë respekti në çdo dhomë, sa herë do të futesh apo të dalësh nga ajo dhomë.`,
    descEN: `The second floor of the apartment starts from the ladies' room or the bride's room where the boxes are distinguished where the bride brought her dowry, which is original; the mural paintings of the XVIII century and two special types of windows which above are with gypsum works only for light and below for ventilation, with woodwork.

The corridor serves as a link between the rooms where you will also see the wedding dresses for the groom and the bride, which is silk embroidered with gold, silver, and river pearls (inxhi).

One peculiarity is that all the doors are low which forces you to lower your head as a sign of respect in each room, every time you enter or leave that room.`,
    images: ["/media/app-photos/etnografiku_9.jpg", "/media/app-photos/etnografiku_10.jpg", "/media/app-photos/etnografiku_11.jpg"],
  },
  {
    id: "oda-burrave",
    titleAL: "Oda e Burrave",
    titleEN: "Men's Room",
    descAL: `Dhoma (oda) e burrave, më e bukura dhe më interesantja dhe e gjitha origjinale e shek. XVIII. Në brendësi do shikoni tavanin, armët e ekspozuara në mur, oxhakun që është në krahun tjetër të murit, në dhomën e familjes.

Do shikoni tavanin në formë kupole e mbuluar me xham dhe vrimat në mure nga ku dilte avulli.`,
    descEN: `The men's room is the most beautiful and interesting of all, original of the XVIII century. Inside you will see the ceiling, the weapons exposed on the wall, and the chimney that is on the other side of the wall, in the family room.

You will see the dome-shaped ceiling covered with glass and the holes in the walls from where the steam came out.`,
    images: ["/media/app-photos/etnografiku_12.jpg", "/media/app-photos/etnografiku_13.jpg"],
  },
  {
    id: "dhoma-ndenjes",
    titleAL: "Dhoma e Ndenjes",
    titleEN: "Living Room",
    descAL: "Në dhomën e ndenjes është pjesa e ballkonit lart ku mbanin fëmijët që të mos uleshin për të ngrënë me të rriturit, oxhaku që ngroh dhomën dhe njëkohësisht ujin e hamamit, dhe gjithashtu veglin apo tezgjahun e përdorur për të bërë qilimet.",
    descEN: "There is a part in the balcony of the living room upstairs where children were kept from sitting down to eat with adults, the chimney that heats the room and the water of the hammam (bath) at the same time, and also the utensil or loom used to make carpets.",
    images: ["/media/app-photos/etnografiku_14.jpg"],
  },
  {
    id: "kuzhina",
    titleAL: "Kuzhina",
    titleEN: "Kitchen",
    descAL: `Kuzhina ka një oxhak origjinal tip aspiratori, enë të ndryshme qeramike, bakër dhe dru. Gjithashtu kuzhina është përdorur edhe si dhomë fjetjeje për më të vjetrit e familjes.

Në dalje do të shikoni veglat e marangozit dhe rozeta tavani mbi 300 vjeçare. Gjithashtu do të shikoni qilarin, dhoma e konservimit të frutave dhe perimeve për dimrin.`,
    descEN: `The kitchen has an original aspirator-type chimney, various ceramic dishes, copper, and wood. The kitchen is also used as a bedroom for the elders of the family.

At the exit you will see the carnation tools and ceiling rosettes that are over 300 years old, as well as the pantry and canning room for winter fruits and vegetables.`,
    images: ["/media/app-photos/etnografiku_15.jpg"],
  },
  {
    id: "dhoma-gjumit",
    titleAL: "Dhoma e Gjumit",
    titleEN: "Bedroom",
    descAL: "Në dhomën e madhe të gjumit janë ekspozuar veshje të traditës katolike dhe myslimane, të përdorura në qytetin e Krujës ose të ardhur nga banorët e zonave të tjera.",
    descEN: "In the large bedroom are exhibited clothes of Catholic and Muslim tradition, used in the city of Kruja or coming from the inhabitants of other areas.",
    images: ["/media/app-photos/etnografiku_16.jpg", "/media/app-photos/etnografiku_17.jpg"],
  },
];
