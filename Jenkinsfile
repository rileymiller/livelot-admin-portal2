pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install -g yarn"
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
