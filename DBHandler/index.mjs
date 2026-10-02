import uploadSectionAssets from "./handlers/uploadSectionAssets.mjs";
import { client } from "./client.mjs";
import appendPageSections from "./handlers/appendPageSections.mjs";

const PAGE_ID = "75670d89-490c-4481-ac1c-04673bcdcee4"; // "/"
const SUBPAGE_ID = "318de78d-efbf-4e97-9576-246038094eb1"; // "/podstrona" (placeholder link target)

const img = await uploadSectionAssets(8);
const icons = await uploadSectionAssets(1);
console.log(Object.keys(img), Object.keys(icons));

const link = { _type: "reference", _ref: SUBPAGE_ID };

// replace the previously added section
await client.patch(PAGE_ID).unset(['sections[_key=="info-boxes"]']).commit();

await appendPageSections(PAGE_ID, [
  {
    _type: "infoBoxes",
    _key: "info-boxes",
    leftImg: { ...img.LeftStain, alt: "" },
    rightImg: { ...img.RightSideStain, alt: "" },
    firstBox: {
      title: "RODZICE WYBIERAJĄ HIPPOART",
      quote:
        "Cudowne miejsce! Dzieci są szczęśliwe, codziennie wracają z uśmiechem i opowiadają, co ciekawego robiły. Kadra jest pełna ciepła i zaangażowania. Polecamy z całego serca!",
      starsImg: { ...img.FiveStars, alt: "5 gwiazdek" },
      heartImg: { ...img.Heart, alt: "" },
      author: "Mama Zosi",
    },
    secondBox: {
      title: "Poznajmy się!",
      subtitle:
        "Najlepiej zobaczyć HippoArt na żywo. Umów się na spotkanie i zobacz, jak wygląda nasze przedszkole.",
      btn: {
        label: "Umów wizytę",
        link,
        icon: { ...icons.CalendarIcon, alt: "" },
      },
      rightImg: { ...img.HippoWithBrush, alt: "Hipopotam z pędzlem" },
    },
    thirdBox: {
      title: "MASZ PYTANIE?",
      plusIcon: { ...img.PlusIcon, alt: "" },
      questionList: [
        {
          _key: "q1",
          question: "Od jakiego wieku przyjmujecie dzieci?",
          answer:
            "Przyjmujemy dzieci od 2,5 roku życia. Każda grupa ma wykwalifikowaną kadrę i dostosowany do wieku program zajęć.",
        },
        {
          _key: "q2",
          question: "Jak wygląda rekrutacja?",
          answer:
            "Wystarczy umówić się na wizytę, poznać nasze przedszkole i wypełnić krótki formularz zgłoszeniowy. Po rozmowie z dyrekcją potwierdzamy miejsce i przekazujemy komplet dokumentów.",
        },
        {
          _key: "q3",
          question: "Co obejmuje czesne?",
          answer:
            "Czesne obejmuje całodzienną opiekę, zajęcia plastyczne i językowe, materiały dydaktyczne oraz udział w wydarzeniach przedszkolnych. Wyżywienie rozliczane jest osobno.",
        },
        {
          _key: "q4",
          question: "Jak wygląda wyżywienie?",
          answer:
            "Codziennie serwujemy trzy zbilansowane posiłki przygotowywane na miejscu ze świeżych, sezonowych składników. Dbamy o diety indywidualne, a jadłospis publikujemy co tydzień.",
        },
      ],
    },
  },
]);
