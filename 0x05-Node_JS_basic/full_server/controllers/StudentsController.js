import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const path = process.argv.length > 2 ? process.argv[2] : './database.csv';

      const students = await readDatabase(path);
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
      // const response = `List: ${students.map((student) => student.firstname).join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
      //   .send(err instanceof Error ? err.message : err.toString());
    }
  }
}

export default StudentsController;
