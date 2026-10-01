import uploadSectionAssets from "./handlers/uploadSectionAssets.mjs";
import appendPageSections from "./handlers/appendPageSections.mjs";

const PAGE_ID = "75670d89-490c-4481-ac1c-04673bcdcee4"; // "/"

const img = await uploadSectionAssets(6);
const img5 = await uploadSectionAssets(5);
console.log(Object.keys(img), Object.keys(img5));

await appendPageSections(PAGE_ID, [
  {
    _type: "dayInHippoArt",
    _key: "day-in-hippoart",
    title: "JAK WYGLĄDA DZIEŃ W HIPPOART?",
    rightImg: { ...img.GirlPhotoWithSideHeart, alt: "Uśmiechnięta dziewczynka z pomalowanymi dłońmi" },
    separatorImg: { ...img.ArrowSeparatorIcon, alt: "" },
    tileList: [
      { _key: "morning", hourText: "7:00", icon: { ...img.SunIcon, alt: "Słońce" }, title: "Dzień dobry!", description: "Swobodna zabawa\ni spokojny początek dnia." },
      { _key: "discover", hourText: "9:00", icon: { ...img5.BookIcon, alt: "Książka" }, title: "Odkrywamy", description: "Zajęcia edukacyjne\ni językowe." },
      { _key: "create", hourText: "10:30", icon: { ...img5.PaintsPalettePink2Icon, alt: "Paleta farb" }, title: "Tworzymy\ni działamy", description: "Muzyka, sztuka, ruch." },
      { _key: "rest", hourText: "12:00", title: "Chwila odpoczynku", description: "Obiad i wyciszenie." },
      { _key: "passions", hourText: "14:00", icon: { ...img.VioletStarIcon, alt: "Gwiazdka" }, title: "Rozwijamy pasje", description: "Warsztaty i zajęcia dodatkowe." },
      { _key: "afternoon", hourText: "16:00", icon: { ...img.SmileIcon, alt: "Uśmiech" }, title: "Popołudniowa zabawa", description: "Czas na relacje\ni swobodną aktywność." },
    ],
  },
]);
