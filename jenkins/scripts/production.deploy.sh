#!/usr/bin/env sh

firebase deploy --only hosting:admin -P production --token $FIREBASE_DEPLOY_TOKEN