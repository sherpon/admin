pipeline {
  agent {
    docker {
      image 'brucegroverlee/docker-firebase'
      args '-p 3002:3002'
    }
  }
  environment {
    CI = 'true'
    FIREBASE_DEPLOY_TOKEN = credentials('firebase-deploy-token')
    ADMIN_PRODUCTION_ENV = credentials('admin-production-env')
    ADMIN_PRODUCTION_FIREBASE_CONFIG_JSON = credentials('admin-production-firebase-config-json')
    ADMIN_PRODUCTION_PLANS_JSON = credentials('admin-production-plans-json')
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh './jenkins/scripts/production.build.sh'
      }
    }
    stage('Deploy to production') {
      steps {
        sh './jenkins/scripts/production.deploy.sh'
      }
    }
  }
}