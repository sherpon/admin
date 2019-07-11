#!/usr/bin/env sh

echo "Installing firebase-tools":
npm install -g firebase-tools

echo "Deploying to staging":
firebase deploy --only hosting:admin -P staging --token $FIREBASE_DEPLOY_TOKEN
