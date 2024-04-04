pipeline {
    agent {
        label 'pl2inpun2038pc' // Specify the agent by its label
    }
    stages {
        stage('run') {
            steps {
                script {
                    // Define the path to the file
                    String testSet = "D:\\Workdir\\newJT.set"
                    
                    // Read the file content
                    def fileContent = readFile file: testSet, encoding: "UTF-8"
                    //println fileContent
                    def lines = fileContent.tokenize('\n');
                    // Iterate over each line in the file
                    for (line in lines){
                            println line
                    }
                }
            }
        }
    }
}
