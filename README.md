# Webpack_test
Try to learn Webpack 3 by follow the Tutorial from Lynda

Compile with webpack
```
// Compile all .js file exclude /node_modlues
$ npm run build

// Compile and watch
$ npm run watch
```

# Webpack3 note

## Webpack loaders
- [Loaders - 所有loader的详细用法](https://webpack.js.org/loaders/)

### Chapter 2.4 - Using Babel Loader for React
- [Babel-loader](https://webpack.js.org/loaders/babel-loader/)
Install the following packages
```
$ npm install --save-dev babel-preset-react
$ npm install --save-dev react react-dom
$ npm install -g serve
```

Add Presets on **./webpack.config.js** & **./.bablerc**
```
  presets: ['env', 'react']
```
Check the Babel's Doc for detail of [Presets](https://babeljs.io/docs/plugins/#presets)

### Chapter 3.1 Loading CSS with Webpack
Install:
```
$ npm install style-loader css-loader --save-dev
```

add following in **./webpack.config.js**
```
{
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' }
  ]
}
```
Webpack will load all .css file to /dist/bundle.js

#### [style-loader](https://webpack.js.org/loaders/style-loader/)
Adds CSS to the DOM by injecting a <style> tag

#### [css-loader](https://webpack.js.org/loaders/css-loader/)
The css-loader interprets `@import` and `url()` like import/require() and will resolve them.
Good loaders for requiring your assets are the [file-loader](https://webpack.js.org/loaders/file-loader/) and the [url-loader](https://webpack.js.org/loaders/url-loader/) which you should specify in your config (see below).

### Load SCSS
```// install
$ npm install sass-loader node-sass --save-dev
```

### Loading image
```
$ npm install url-loader file-loader --save-dev
```
load image to reduce the HTTPRequest to make
