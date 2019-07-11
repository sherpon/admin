#!/usr/bin/env sh

# firebase deploy --only hosting:admin -P production --token $FIREBASE_DEPLOY_TOKEN

./home/node/.npm-global/lib/node_modules/firebase-tools/lib/bin/firebase.js \
  deploy --only hosting:admin -P production --token $FIREBASE_DEPLOY_TOKEN