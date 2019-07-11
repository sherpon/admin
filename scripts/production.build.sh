#!/usr/bin/env sh

echo "copy postcss.config.js file into the node_modules":
cp "./src/styles/postcss.config.js" "./node_modules/grapesjs/dist/css/postcss.config.js"

echo "Start build for production";

webpack --mode production \
  --env.ENVIRONMENT=production \
  --env.ENV_FILE_PATH=$PWD/env/production.env \
  --env.FIREBASE_CONFIG_PATH=$PWD/env/production.firebaseConfig.json \
  --env.PLANS_JSON_PATH=$PWD/env/production.plans.json