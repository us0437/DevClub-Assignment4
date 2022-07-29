const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
function myFunction(req, res) {
    let query = req.url.split("q=")[1];
    let output = "";
    let word = ['C','I','G','A','R'];
    if (query == null) {
        output = "undefined";
    }
    else {
        let i = 0;
        while(i<5){
            if(query[i]==word[i]){
                output+='g';
            }
            else if(query[i]=='C' || query[i]=='I' || query[i]=='G' || query[i]=='A' || query[i]=='R'){
                output+='y';
            }
            else{
                output+='r';
            }
            i++;
        }
    }
    console.log(output)
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.end(output)

}
const server = http.createServer(myFunction);
function callBack() {
    console.log('Server running at  http://${hostname}:${port}/');
}
server.listen(port, hostname, callBack);
