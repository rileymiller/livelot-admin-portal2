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
        stage('Cleanup') {
            steps {
                echo "Clean it up"
            }
        }
    }
}
