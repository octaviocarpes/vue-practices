# vue-flow
This POC is used to practice the <a href="https://flow.org/en/">Flow.js</a> lib with Vue.

Created with the help of this <a href="https://alligator.io/vuejs/components-flow/">post</a>

Starting from vue-cli’s webpack-simple template, there are nine extra dependencies to install. Here’s what each of them does:

<b>Babel:</b>
<ul>
  <li>babel-plugin-syntax-flow - Adds support for flow syntax in Babel.</li>
  <li>babel-plugin-transform-class-properties - Adds support for class properties and static methods</li>
  <li>babel-plugin-transform-flow-strip-types - Removes type annotations from source files before transpiling with Babel.</li>
</ul>

<b>Eslint: (optional)</b>
<ul>
  <li>eslint - Eslint. It’s pretty much the de-facto linter for JS, with integrations for a variety of editors and IDEs as well. If   you’re not using this now, you’ll want to start using it.</li>
  <li>babel-eslint - Patches Eslint to use Babel’s parser for parsing source files.</li>
  <li>eslint-plugin-html - Allows Eslint to handle HTML files. (ie. Only lints stuff inside script tags.)</li>
  <li>eslint-plugin-flowtype-errors - Passes flow errors through Eslint, and to your editor’s eslint plugin if you have one.</li>
  <li>eslint-plugin-vue - Opinionated utilities for Eslint with Vue.</li>
  <li>eslint-config-vue - Opinionated config for Eslint with Vue.</li>
</ul>

<b>Flow:</b>
<ul>
  <li>flow-bin - The Flow typechecker.</li>
</ul>

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
