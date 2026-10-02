// import appendPageSections from "./handlers/appendPageSections.mjs";

// const SUBPAGE_ID = "318de78d-efbf-4e97-9576-246038094eb1"; // "/podstrona"

// const span = (text, marks = []) => ({ _type: "span", text, marks });
// const block = (style, children, extra = {}) => ({
//   _type: "block",
//   style,
//   markDefs: [],
//   children,
//   ...extra,
// });
// const row = (key, cells) => ({ _key: key, _type: "row", cells });

// await appendPageSections(SUBPAGE_ID, [
//   {
//     _type: "richTextSection",
//     _key: "rich-text-menu",
//     content: [
//       block("h2", [span("Jadłospis na ten tydzień")]),
//       block("normal", [
//         span("Wszystkie posiłki przygotowujemy na miejscu ze "),
//         span("świeżych, sezonowych składników", ["strong"]),
//         span(". Alergeny oznaczamy w nawiasach."),
//       ]),
//       {
//         _type: "table",
//         _key: "menu-table",
//         hasHeader: true,
//         rows: [
//           row("r0", ["Dzień", "Śniadanie", "Obiad", "Podwieczorek"]),
//           row("r1", [
//             "Poniedziałek",
//             "Owsianka z owocami",
//             "Rosół z makaronem, kurczak z ryżem",
//             "Jogurt z musli",
//           ]),
//           row("r2", [
//             "Wtorek",
//             "Kanapki z twarożkiem",
//             "Krem z dyni, pulpeciki w sosie",
//             "Jabłko, wafle ryżowe",
//           ]),
//           row("r3", [
//             "Środa",
//             "Jajecznica ze szczypiorkiem",
//             "Zupa pomidorowa, makaron z warzywami",
//             "Budyń waniliowy",
//           ]),
//           row("r4", [
//             "Czwartek",
//             "Płatki z mlekiem",
//             "Barszcz, ryba z ziemniakami",
//             "Marchewka, hummus",
//           ]),
//           row("r5", [
//             "Piątek",
//             "Naleśniki z dżemem",
//             "Zupa ogórkowa, kasza z gulaszem",
//             "Koktajl owocowy",
//           ]),
//         ],
//       },
//       block("h4", [span("Uwaga")]),
//       block(
//         "bullet" === "" ? "normal" : "normal",
//         [
//           span("Jadłospis może ulec zmianie. ", ["em"]),
//           span("Diety indywidualne", ["strong"]),
//           span(" realizujemy po wcześniejszym zgłoszeniu."),
//         ],
//         { listItem: "bullet", level: 1 },
//       ),
//       block("small", [span("Smacznego!", ["underline"])]),
//     ],
//   },
// ]);
