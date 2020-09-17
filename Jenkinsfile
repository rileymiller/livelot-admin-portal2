pipeline {
    agent {
        docker {
            image 'node:12.18.4-alpine3.9'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "yarn install"
                sh "ls"
                sh "yarn test"
            }
        }
        stage('Test') {
            steps {
                sh "./scripts/test.sh"
            }
        }
        stage('Cleanup') {
            steps {
                echo "Clean it up"
            }
        }
    }
}
