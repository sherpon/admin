#!/usr/bin/env sh

echo "copy postcss.config.js file into the node_modules":
cp "./src/styles/postcss.config.js" "./node_modules/grapesjs/dist/css/postcss.config.js"

echo "Start build for production";

./node_modules/.bin/webpack --mode production \
  --env.ENVIRONMENT=production \
  --env.ENV_FILE_PATH=$ADMIN_PRODUCTION_ENV \
  --env.FIREBASE_CONFIG_PATH=$ADMIN_PRODUCTION_FIREBASE_CONFIG_JSON \
  --env.PLANS_JSON_PATH=$ADMIN_PRODUCTION_PLANS_JSON