import uploadSectionAssets from "./handlers/uploadSectionAssets.mjs";
import appendPageSections from "./handlers/appendPageSections.mjs";

const PAGE_ID = "75670d89-490c-4481-ac1c-04673bcdcee4"; // "/"

const img = await uploadSectionAssets(3);

await appendPageSections(PAGE_ID, [
  {
    _type: "infoColumnsBar",
    _key: "info-columns-bar",
    leftStainImg: { ...img.LeftSideStain, alt: "" },
    rightBubblesImg: { ...img.RightSideBubbles, alt: "" },
    separatorImg: { ...img.DotsSeparator, alt: "" },
    items: [
      { _key: "en", icon: { ...img.EnFlagIcon, alt: "Flaga Wielkiej Brytanii" }, title: "Angielski", subtitle: "4x w tygodniu" },
      { _key: "fr", icon: { ...img.FrFlagIcon, alt: "Flaga Francji" }, title: "Francuski", subtitle: "1x w tygodniu" },
      { _key: "art", icon: { ...img.PaintsPalleteIcon, alt: "Paleta farb" }, title: "Edukacja", subtitle: "artystyczna" },
      { _key: "hours", icon: { ...img.ClockIcon, alt: "Zegar" }, title: "7:00 – 18:00", subtitle: "opieka nad dziećmi" },
      { _key: "place", icon: { ...img.PinIcon, alt: "Lokalizacja" }, title: "Wieliczka", subtitle: "ul. Różana 39" },
    ],
  },
]);
