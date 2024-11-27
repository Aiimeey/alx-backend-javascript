import fs from 'fs/promises';
/**
 * Reads the data of students in a CSV data file.
 */
export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');// data.toString('utf-8')
    const lines = data.split('\n').filter(Boolean).slice(1);
    const result = {};

    lines.forEach((line) => {
      const [firstname,,, field] = line.split(',');
      if (!result[field]) {
        result[field] = [];
      }
      result[field].push(firstname);
    });

    // const res = []
    // Object.entries(result).map(([key,value])=>{
    //     res.push(`${key} : ${value}`)
    // })
    return result;
  } catch (error) {
    throw Error(error.stack.message);
  }
};
export default readDatabase;
// module.exports = readDatabase;
