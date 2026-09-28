import getPages from "./handlers/getPages.mjs";
import { writeFileSync } from "fs";
// import appendPageSections from "./handlers/appendPageSections.mjs";

getPages({ slug: "/premium-landing", language: "pl" })
  .then((result) => {
    const json = JSON.stringify(result, null, 2);
    writeFileSync("DBHandler/output.json", json, "utf-8");
    console.log("Saved to DBHandler/output.json");
  })
  .catch(console.error);

// const PAGE_ID = "6862fa38-01c4-493b-908a-59970458d61d";

// const sections = [
//   {
//     _type: "threeTilesSection",
//     _key: "three-tiles-pl",
//     title: "Czy zmagasz się z tymi problemami?",
//     tiles: [
//       {
//         _key: "tile-1-pl",
//         title: "Strata czasu\nna monotonną pracę",
//         description:
//           "Godziny na ręczne układanie, poprawki w PDF-ach i ciągłe prośby klienta o zmiany.",
//       },
//     ],
//   },
// ];

// appendPageSections(PAGE_ID, sections)
//   .then((result) => console.log("Done:", result))
//   .catch(console.error);
