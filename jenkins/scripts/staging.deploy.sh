#!/usr/bin/env sh

firebase deploy --only hosting:admin -P staging --token $FIREBASE_DEPLOY_TOKEN