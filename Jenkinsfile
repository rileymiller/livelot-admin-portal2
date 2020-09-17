pipeline {
    agent any 
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
