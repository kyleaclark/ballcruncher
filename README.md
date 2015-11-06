## Ballcruncher — "isomorphic" Node.js react app

### Getting Started

Just clone the repo and start hacking:

```shell
$ npm install                   # Install Node.js components listed in ./package.json
$ npm start                     # Compile and launch
```

### How to Build

```shell
$ npm run build                 # or, `npm run build -- --release`
```

By default, it builds in *debug* mode. If you need to build in release
mode, just add a `-- --release` flag. This will optimize the output bundle for
production.

### How to Run

```shell
$ npm start                     # or, `npm start -- --release`
```

This will start a light-weight development server with "live reload" and
synchronized browsing across multiple devices and browsers.

### How to Deploy

```shell
$ npm run deploy                # or, `npm run deploy -- --production`
```

For more information see `tools/deploy.js`.

### How to Update

You can always fetch and merge recent changes from this repo back into
your own project:

```shell
$ git checkout master
$ git fetch react-starter-kit
$ git merge react-starter-kit/master
$ npm install
```

### How to Test

Run unit tests powered by [Jest](https://facebook.github.io/jest/) with the following
[npm](https://www.npmjs.org/doc/misc/npm-scripts.html) command:

```shell
$ npm test
```

Test any javascript module by creating a `__tests__/` directory where
the file is. Append `-test.js` to the filename and [Jest](https://facebook.github.io/jest/) will do the rest.

---
Generated using [react-starter-kit](https://github.com/kriasoft/react-starter-kit/)
