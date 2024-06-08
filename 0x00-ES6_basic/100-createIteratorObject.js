export default function createIteratorObject(reportWithIterator) {
  // const employees = Object.values(reportWithIterator.allEmployees);
  // return employees.reduce((acc, name) => acc.concat(name), []);
  return Object.values(reportWithIterator.allEmployees).flat();
}
