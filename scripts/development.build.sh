#!/usr/bin/env sh

echo "copy postcss.config.js file into the node_modules":
cp "./src/styles/postcss.config.js" "./node_modules/grapesjs/dist/css/postcss.config.js"

echo "Start build for development";

webpack --mode development \
  --env.ENVIRONMENT=development \
  --env.ENV_FILE_PATH=$PWD/env/development.env \
  --env.FIREBASE_CONFIG_PATH=$PWD/env/development.firebaseConfig.json \
  --env.PLANS_JSON_PATH=$PWD/env/development.plans.json