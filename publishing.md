# entneo-api-kit

Entneo REST API Requests Kit

## Steps to pushing new version

- compile the TS project into `/dist` by running `npm run build`
- login to `npm` with `npm login`. This should allow login via the browser or command line
  - using the default password found in lastpass
- ensure you bump the version number up in the `package.json` file
- use `npm publish` to push latest version to the node package manager.

## bonus

- how to documentation: https://docs.npmjs.com/cli/v8/commands/npm-publish
- update the package version in your app. `npm update @entneo/entneo-api-kit`
  - might also want to run `npm install` before starting your service
