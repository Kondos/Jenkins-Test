pipeline {
    agent any
    triggers {
        cron('1 H * * *')
    }
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
            }
        }
    }
}
