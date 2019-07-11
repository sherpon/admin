#!/usr/bin/env sh

echo "copy postcss.config.js file into the node_modules":
cp "./src/styles/postcss.config.js" "./node_modules/grapesjs/dist/css/postcss.config.js"

echo "Start build for staging";

./node_modules/.bin/webpack --mode production \
  --env.ENVIRONMENT=staging \
  --env.ENV_FILE_PATH=$ADMIN_STAGING_ENV \
  --env.FIREBASE_CONFIG_PATH=$ADMIN_STAGING_FIREBASE_CONFIG_JSON \
  --env.PLANS_JSON_PATH=$ADMIN_STAGING_PLANS_JSON