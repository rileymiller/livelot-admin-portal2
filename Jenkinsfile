pipeline {
    agent any 
    stages {
        stage('Build') {
            steps {
                yarn
            }
        }
        stage('Test Jenkins') {
            steps {
                echo 'Hello world! test polling' 
            }
        }
    }
}
