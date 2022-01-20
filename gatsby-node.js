/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

// You can delete this file if you're not using it
exports.createPages = ({ actions: { createRedirect, createPage } }) => {
  createRedirect({
    fromPath: `/*`,
    toPath: `/*`,
    statusCode: 500,
    isPermanent: true,
    country: `ir,sy,cu,so,ca`,
  })

  createRedirect({
    fromPath: "/about-2/",
    toPath: "/about/",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: "/about-1",
    toPath: "/about",
    isPermanent: true,
    force: true,
  })

  // createRedirect({
  //   fromPath: "/velopers-slug%/api-documentation/http-api-error-messages",
  //   toPath: "/about",
  //   isPermanent: true,
  //   force: true,
  // })

  createRedirect({
    fromPath: "/about-all/",
    toPath: "/about/",
    statusCode: 200,
  })

  createRedirect({
    fromPath: "/packages/*",
    toPath: "/plugins/:splat",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: `/books`,
    toPath: `/sp/books`,
    isPermanent: true,
    ignoreCase: true,
    language: `sp`,
  })

  createRedirect({
    fromPath: `/resources?id=:id`,
    toPath: `/resources/:id`,
    isPermanent: true,
    ignoreCase: true,
  })

  createRedirect({
    fromPath: `/files`,
    toPath: `/us/files`,
    isPermanent: true,
    ignoreCase: true,
    country: `us`,
  })

  const useCaseTemplatePath = path.resolve(`src/templates/use-cases/index.js`)
  const slug = `campaign-event/emoji.tinder.com`

  createPage({
    path: `/use-cases/${slug}`,
    component: useCaseTemplatePath,
  })
}

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        "process.env.__BUILD_DATE__": JSON.stringify(new Date().toISOString()),
        "process.env.__NODE_VERSION__": JSON.stringify(process.version),
      }),
    ],
  })
}

// exports.onPostBuild = ({ store }) => {
//   const { pages } = store.getState()
//   for (const [pathname, page] of pages) {
//     if (page.mode && page.mode !== `SSG`) {
//       // index++

//       console.log({
//         pathname,
//         matchPath: page.matchPath,
//         genHtmlUsingPathname: generateHtmlPath(``, pathname),
//         genHtmlUsingMatchPath: page.matchPath
//           ? generateHtmlPath(``, page.matchPath)
//           : `-no-match-path`,
//         genPageDataUsingPathname: generatePageDataPath(``, pathname),
//         genPageDataUsingMatchPath: page.matchPath
//           ? generatePageDataPath(``, page.matchPath)
//           : `-no-match-path`,
//       })
//     }
//   }
// }
