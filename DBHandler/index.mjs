// import appendPageSections from "./handlers/appendPageSections.mjs";

// const CALENDAR_PAGE_ID = "1555a99f-1aac-4747-8520-5527cb384c16"; // "/kalendarz"

// const span = (text, marks = []) => ({ _type: "span", text, marks });
// const block = (style, children) => ({
//   _type: "block",
//   style,
//   markDefs: [],
//   children,
// });
// const row = (key, cells) => ({ _key: key, _type: "row", cells });

// await appendPageSections(CALENDAR_PAGE_ID, [
//   {
//     _type: "richTextSection",
//     _key: "rich-text-calendar",
//     content: [
//       block("h2", [span("Kalendarz wydarzeń")]),
//       block("normal", [
//         span("Najbliższe wydarzenia w HippoArt. "),
//         span("O szczegółach informujemy z wyprzedzeniem", ["strong"]),
//         span("."),
//       ]),
//       {
//         _type: "table",
//         _key: "calendar-table",
//         hasHeader: true,
//         rows: [
//           row("r0", ["Data", "Wydarzenie"]),
//           row("r1", [
//             "5 listopada",
//             "Dzień Pluszowego Misia – przynosimy ulubione maskotki",
//           ]),
//           row("r2", [
//             "11 listopada",
//             "Święto Niepodległości – poranek patriotyczny",
//           ]),
//           row("r3", ["29 listopada", "Andrzejki w przedszkolu"]),
//           row("r4", ["6 grudnia", "Mikołajki – spotkanie z Mikołajem"]),
//           row("r5", ["18 grudnia", "Jasełka i wigilia przedszkolna"]),
//           row("r6", ["22 grudnia – 2 stycznia", "Przerwa świąteczna"]),
//           row("r7", ["21 stycznia", "Dzień Babci i Dziadka – występ dzieci"]),
//         ],
//       },
//     ],
//   },
// ]);
