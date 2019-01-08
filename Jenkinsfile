pipeline {
    agent any

    stages {
        
        
        stage('Upload Code') {
            steps {
                withCredentials([file(credentialsId: "fd4h6u3v8-7n72-479e-a509-e3802et07ab0", variable: 'PRIVATEKEY')]) {
                    sh "ls"
                    sh '''
                    for file in **; do
                        if [ -d $file ]; then
                            scp -o StrictHostKeyChecking=no -i ${PRIVATEKEY} -r $file imbauerc@imbauer.com:/home3/imbauerc/public_html/
                        elif [ -f $file ]; then
                            scp -o StrictHostKeyChecking=no -i ${PRIVATEKEY} $file imbauerc@imbauer.com:/home3/imbauerc/public_html/$file
                        fi
                    done
                    '''
                    sh "ssh -o StrictHostKeyChecking=no -i ${PRIVATEKEY} imbauerc@imbauer.com ls"
                }
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building.....'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
