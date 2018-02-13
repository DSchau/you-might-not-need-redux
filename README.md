# you-might-not-need-redux

Come one, come all to the latest thought-leader parade of the week. Do you need Redux... or not?

## Technical

This is a Gatsby generated application. It makes use of the following Gatsby plugins:

- [gatsby-plugin-react-helmet](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet)
- [gatsby-plugin-react-next](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-next)
    For that React 16 👌
- [gatsby-plugin-emotion](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-emotion)
    CSS in JS lib
- [gatsby-plugin-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp)
    Image transformations
- [gatsby-transformer-yaml](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-yaml)
    Keeping my [metadata](content/) all neat and tidy
- [gatsby-transformer-screenshot](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-screenshot)
    Neat AWS lambda function invocation that takes a screenshot of the page and makes the screenshot a queryable GraphQL node (used for the meta image)
- [gatsby-transformer-sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp)
- [gatsby-plugin-typography](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-typography)
    For the slick typography
- [gatsby-source-filesystem](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem)

## Contributing Back

Feel free, contributions of any variety welcome.

### Getting Started

I recommend using `yarn` but `npm` will work just as well.

- `yarn start`
  Launch a local development server, hot reloading any changes to content
- `yarn build`
  Build static assets; this command will generally be run by CI (Netlify), but it can be helpful for testing/debugging
