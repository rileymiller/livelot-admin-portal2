pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                sh "yarn install"
            }
        }
        stage('Test') {
            steps {
                sh "yarn test"
            }
        }
    }
}
