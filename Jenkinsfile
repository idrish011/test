pipeline {
    agent any
    environment {
        CI = 'true npm build'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build --verbose'
            }
        }
    }
}