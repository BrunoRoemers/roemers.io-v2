// needed for running Jest tests, see jest.config.js and https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/
global.___loader = {
  enqueue: jest.fn(),
}
