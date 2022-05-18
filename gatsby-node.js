/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

// You can delete this file if you're not using it
exports.createPages = ({ actions: { createRedirect, createPage } }) => {
  // createRedirect({
  //   fromPath: `/*`,
  //   toPath: `/*`,
  //   statusCode: 500,
  //   isPermanent: true,
  //   conditions: {
  //    country: [`ir`,`sy`,`cu`,`so`,`ca`]
  // })

  const blockedCountries = {
    cuba: `cu`,
    iran: `ir`,
    northKorea: `kp`,
    sudan: `sd`,
    syria: `sy`,
    crimea: `ua-43`,
  }

  createRedirect({
    fromPath: "/*",
    toPath: "/",
    // Unavailable For Legal Reasons
    statusCode: 451,
    // Comma separated list of countries
    conditions: {
      country: Object.values(blockedCountries),
    },
  })

  createRedirect({
    fromPath: "/server-error",
    toPath: "/",
    statusCode: 500,
    conditions: {
      country: ["us"],
    },
  })
  createRedirect({
    fromPath: "/not-found",
    toPath: "/",
    statusCode: 404,
    conditions: {
      country: "us",
    },
  })
  createRedirect({
    fromPath: "/forbidden",
    toPath: "/",
    statusCode: 403,
    conditions: {
      country: ["us"],
    },
  })

  createRedirect({
    fromPath: "/illegal",
    toPath: "/",
    statusCode: 451,
    conditions: {
      country: "us",
    },
  })

  createRedirect({
    fromPath: "/us-about",
    toPath: "/about",
    statusCode: 301,
    conditions: {
      country: ["us", "ca"],
    },
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

  createRedirect({
    fromPath: "/mypath-1",
    toPath: "/mypath1",
    statusCode: "301",
  })

  createRedirect({
    fromPath: "/mypath-2",
    toPath: "/mypath2",
    statusCode: "fail",
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
    conditions: {
      language: `sp`,
    },
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
    conditions: {
      country: [`us`],
    },
  })

  createRedirect({
    fromPath: `/donate/*`,
    toPath: `https://develop-django.ligonier.org/donate/*`,
    statusCode: 200,
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
