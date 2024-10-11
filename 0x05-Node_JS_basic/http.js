const fs = require('fs');
const http = require('http');


const app = http.createServer();
const path = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
	try {
		data = fs.readFileSync(path,'utf-8')


		content = data.trim().split('\n').slice(1).map(x=> x.split(","))

        arr = {}
        content.forEach(element => {
            const [name, , , field] = element;
            if (!arr[field]) {
                arr[field] = [];
            }
            arr[field].push(name);

        });
        res = []
        res.push(`Number of student ${content.length}`)
        Object.entries(arr).map(([key, value]) => {
               res.push(`${key}: ${value}`);
        })


        // console.log(content.length + '\n' + JSON.stringify(students, ["CS"], 0))
		resolve(res);

	} catch (error) {
		reject(error.message)
	}
}) 

app.on('request',(req, res)=>{
    if (req.url == '/students'){
    countStudents(path)
	.then((data)=>{
		// res.write(JSON.stringify(data))  
        res.write(data.join('\n') + '\n')
        res.end()
	})
	.catch(err =>{
        // reject(new Error("")
		console.log(err)
        res.end()
	})
}
else if(req.url == '/'){
    text = "holberton school"
    res.writeHead('200', 'OK',{'content-type':'plain/text', 'content-length':text.length + 1})
    res.write(text + "\n")
    res.end()    
}
else{
    res.end()
}
})

app.listen(1245, "localhost",()=>{
    process.stdout.write("server running \n")
})
