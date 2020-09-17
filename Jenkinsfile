pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
                sh 'yarn'
            }
        }
        stage('Test Jenkins') {
            steps {
                echo 'Hello world! test polling' 
            }
        }
    }
}
