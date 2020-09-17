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
            }
        }
        stage('Test Jenkins') {
            steps {
                echo 'Hello world! test polling' 
            }
        }
    }
}
