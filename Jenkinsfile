pipeline {pipeline {
    agent any
    
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build --verbose'
                sh 'CI=true npm build' 
            }
        }
    }
}
