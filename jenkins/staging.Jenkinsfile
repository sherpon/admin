pipeline {
  agent {
    docker {
      image 'brucegroverlee/docker-firebase'
      args '-p 3001:3001'
    }
  }
  environment {
    CI = 'true'
    FIREBASE_DEPLOY_TOKEN = credentials('firebase-deploy-token')
    ADMIN_STAGING_ENV = credentials('admin-staging-env')
    ADMIN_STAGING_FIREBASE_CONFIG_JSON = credentials('admin-staging-firebase-config-json')
    ADMIN_STAGING_PLANS_JSON = credentials('admin-staging-plans-json')
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }
    stage('Build') {
      steps {
        sh './jenkins/scripts/staging.build.sh'
      }
    }
    stage('Deploy to staging') {
      steps {
        sh './jenkins/scripts/staging.deploy.sh'
      }
    }
  }
}