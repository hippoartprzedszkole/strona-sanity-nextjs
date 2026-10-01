// import { client } from "./client.mjs";

// const PAGE_ID = "75670d89-490c-4481-ac1c-04673bcdcee4"; // "/"

// const { header } = await client.fetch(
//   `*[_type=="commonComponents"][0]{header{btnIcon,btnPhone}}`,
// );

// const result = await client
//   .patch(PAGE_ID)
//   .set({
//     'sections[_key=="hero-section"].pinkBtn.icon': header.btnIcon,
//     'sections[_key=="hero-section"].pinkBtn.tel': header.btnPhone,
//   })
//   .commit();
// console.log("Done:", result._id);
