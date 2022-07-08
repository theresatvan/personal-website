// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // creating pages for encyclopedia articles

//   const encArticleTemplate = path.resolve("./src/components/encArticle.js");

//   const { data } = await graphql(`
//     {
//       allMongodbPersonalSiteDbEncarticles(filter: {}) {
//         edges {
//           node {
//             title
//             mongodb_id
//             slug
//           }
//         }
//       }
//     }
//   `);

//   data.allMongodbPersonalSiteDbEncarticles.edges.forEach(edge => {
//       createPage({
//           path: edge.node.slug,
//           component: encArticleTemplate,
//           context: {
//               title: edge.node.title
//           }
//       })
//   })
// };
