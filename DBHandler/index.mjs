// import uploadSectionAssets from "./handlers/uploadSectionAssets.mjs";
// import appendPageSections from "./handlers/appendPageSections.mjs";

// const PAGE_ID = "75670d89-490c-4481-ac1c-04673bcdcee4"; // "/"
// const SUBPAGE_ID = "318de78d-efbf-4e97-9576-246038094eb1"; // "/podstrona" (placeholder link target)

// const img = await uploadSectionAssets(7);
// console.log(Object.keys(img));

// const link = { _type: "reference", _ref: SUBPAGE_ID };

// await appendPageSections(PAGE_ID, [
//   {
//     _type: "forParentsSection",
//     _key: "for-parents",
//     firstBox: {
//       title: "DLA RODZICÓW",
//       description: "Wszystko, czego\npotrzebujesz\nw jednym miejscu.",
//       bottomImg: { ...img.DashAndArrow, alt: "" },
//       leftImg: { ...img.LeftStain, alt: "" },
//     },
//     secondBox: {
//       leftImg: { ...img.HippoWithSpoon, alt: "Hipopotam kucharz z drewnianą łyżką" },
//       rightImg: { ...img.Fruits, alt: "" },
//       titleFirstLine: "Jadłospis",
//       titleSecondLine: "na ten tydzień",
//       btn: { label: "Zobacz jadłospis", link },
//     },
//     thirdBox: {
//       leftImg: { ...img.Notepad, alt: "Notatnik z listą kontrolną" },
//       titleFirstLine: "Dokumenty",
//       titleSecondLine: "do pobrania",
//       btn: { label: "Sprawdź", link },
//     },
//     fourthBox: {
//       leftImg: { ...img.Calendar, alt: "Kalendarz" },
//       rightImg: { ...img.StarAndBaloon, alt: "" },
//       titleFirstLine: "Organizacja",
//       titleSecondLine: "i wydarzenia",
//       btn: { label: "Zobacz kalendarz", link },
//     },
//   },
// ]);
