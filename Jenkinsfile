pipeline {
    agent any

    stages {
        
        
        stage('Upload Code') {
            steps {
                withCredentials([file(credentialsId: "fd4h6u3v8-7n72-479e-a509-e3802et07ab0", variable: 'PRIVATEKEY')]) {
                    sh "ls"
                    sh "ssh -o StrictHostKeyChecking=no -i ${PRIVATEKEY} imbauerc@imbauer.com ls"
                }
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building....'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing....'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}