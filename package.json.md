## 1. Install Dependencies
```
sudo npm install --save \
  @babel/polyfill \
  @babel/core \
  @babel/preset-env \
  @babel/preset-react \
  @babel/plugin-syntax-dynamic-import \
  babel-loader \
  babel-plugin-transform-react-jsx-img-import \
  # dotenv \
  dotenv-webpack \
  # cross-fetch
  axios \ 
  react \
  react-dom \
  react-router-dom \
  history \
  prop-types \
  react-redux \
  redux \
  redux-logger \
  redux-thunk \
```

```
sudo npm install --save-dev \
  jest \
  jest-localstorage-mock \
  enzyme \
  enzyme-adapter-react-16 \
  css-loader \
  file-loader \
  html-loader \
  html-webpack-plugin \
  img-loader \
  mini-css-extract-plugin \
  path \
  postcss-loader \
  node-sass \
  autoprefixer \
  sass-loader \
  url-loader \
  # You may need an appropriate loader to handle this file type. : https://github.com/webpack/webpack/issues/8656
  webpack@4.28.4 \ 
  webpack-cli \
  webpack-dev-server \
  acorn-dynamic-import@4.0.0
```

## 2. Setup the package.json
Add the lines below to the package.json file.
```
"scripts": {
  "test": "jest --coverage",
  "dev": "webpack --mode development --env.ENVIRONMENT=development",
  "staging": "webpack --mode production --env.ENVIRONMENT=staging",
  "build": "webpack --mode production --env.ENVIRONMENT=production",
  "watch": "webpack --watch --mode development --env.ENVIRONMENT=development",
  "start": "webpack-dev-server --mode development --env.ENVIRONMENT=development"
}
```

```
"browserslist": [
  "last 2 versions"
]
```

```
"jest": {
  "setupFilesAfterEnv": [
    "./src/setupTests.js",
    "jest-localstorage-mock"
  ],
  "moduleNameMapper":{
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
}
```