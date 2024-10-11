import express from 'express';
import fs from 'fs/promises';




export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter(Boolean).slice(1);
    const result = {};

    lines.forEach((line) => {
      const [firstname,,,field] = line.split(',');
      if (!result[field]) {
        result[field] = [];
      }
      result[field].push(firstname);

    });

    // const res = []
    // Object.entries(result).map(([key,value])=>{
    //     res.push(`${key} : ${value}`)
    // })
  console.log(result)
    return result;
  } catch (error) {
    throw Error(error.stack.message);
  }

};

class AppController {
    static getHomepage(req, res) {
        res.status(200).send('Hello Holberton School!');
    }
}


class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase('./database.csv');
            const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            
            let response = 'This is the list of our students\n';
            for (const field of fields) {
                response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
            }
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }
        try {
            const students = await readDatabase('./database.csv');
            const response = `List: ${students[major] ? students[major].join(', ') : ''}`;
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

// app.use('/app', router); // All routes in 'router' will be prefixed with '/app'


const router = express.Router()
const app = express();
app.use(express.json());
app.use(router);

router.get('/',AppController.getHomepage)
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);




const PORT = 1245;
// app.use('/users', routes); // routes are defined in routes and prefixed with /users
app.listen(PORT,'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// module.exports = app;
// export default app; 
