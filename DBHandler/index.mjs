// import { client } from "./client.mjs";
// import uploadSectionAssets from "./handlers/uploadSectionAssets.mjs";
// import appendPageSections from "./handlers/appendPageSections.mjs";

// const PAGE_ID = "75670d89-490c-4481-ac1c-04673bcdcee4"; // "/"
// const ABOUT_PAGE_ID = "318de78d-efbf-4e97-9576-246038094eb1"; // "/podstrona"

// // remove duplicated infoColumnsBar accidentally appended by a re-run
// await client.patch(PAGE_ID).unset(["sections[2]"]).commit();

// const img = await uploadSectionAssets(4);

// await appendPageSections(PAGE_ID, [
//   {
//     _type: "moreThanKindergarten",
//     _key: "more-than-kindergarten",
//     hippoImg: { ...img.HippoWithPen, alt: "Hipopotam z ołówkiem" },
//     rightStainImg: { ...img.RightSideStain, alt: "" },
//     topText: "DLACZEGO MY?",
//     titleFirstLine: "Więcej niż",
//     titleSecondLine: "przedszkole",
//     description:
//       "Tworzymy miejsce, w którym dzieci rozwijają swoje zainteresowania, budują relacje i odkrywają świat w swoim tempie – z radością, ciekawością i poczuciem bezpieczeństwa.",
//     btn: {
//       label: "O nas",
//       link: { _type: "reference", _ref: ABOUT_PAGE_ID },
//     },
//     tileList: [
//       { _key: "creativity", icon: { ...img.PaintsPalletteIconPink, alt: "Paleta farb" }, title: "Twórczość", description: "Sztuka, muzyka i kreatywne zajęcia rozwijają wyobraźnię i pozwalają dzieciom wyrażać siebie." },
//       { _key: "languages", icon: { ...img.GlobIcon, alt: "Globus" }, title: "Języki", description: "Angielski i francuski poznawane w naturalny, przyjazny dla dziecka sposób." },
//       { _key: "relations", icon: { ...img.HeartIcon, alt: "Serce" }, title: "Relacje", description: "Tworzymy atmosferę, w której dziecko czuje się zauważone, ważne i bezpieczne." },
//       { _key: "development", icon: { ...img.LightBulbIcon, alt: "Żarówka" }, title: "Rozwój", description: "Wspieramy rozwój dziecka również poprzez pracę specjalistów." },
//       { _key: "movement", icon: { ...img.RunningManIcon, alt: "Biegnący człowiek" }, title: "Ruch", description: "Taniec, gimnastyka i aktywność fizyczna są naturalną częścią naszego dnia." },
//       { _key: "curiosity", icon: { ...img.MagnifyingGlassIcon, alt: "Lupa" }, title: "Ciekawość", description: "Dzieci eksperymentują, pytają, próbują i odkrywają nowe zainteresowania." },
//     ],
//   },
// ]);
