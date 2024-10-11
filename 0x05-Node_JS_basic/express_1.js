// const express = require('express');
// const app = express();
// const fs = require('fs');
import express from 'express'

const path = process.argv[2]

const fun = (path) => new Promise ((resolve, reject)=>{
try {
const data = fs.readFileSync(path, 'utf-8')
const content = data.trim().split("\n").slice(1).map(x => x.split(','))


const dic = {}
content.forEach((element)=>{
	const [name,,,field] = element
	if (!dic[field]){
		dic[field] = []
	}
	dic[field].push(name)
})

const res = []
res.push(`number of students ${content.length}`)
Object.entries(dic).map(([key,value])=>{
	res.push(`${key}: ${value}`)
})
resolve(res.join('\n') + '\n')
}
catch(err){
	reject(err.message)
}

})
const app = express()
app.get('/', (_, res) => {
	res.send('Hello Holberton School!');
});
app.get('/students', (_, res) => {
	fun(path).then((data)=>{
		res.send(data)
	})
	.catch((err)=>{
		res.send(err)
	})

});

app.listen(1245, () => {
	  console.log('Server is running on http://localhost:1245/');
});


