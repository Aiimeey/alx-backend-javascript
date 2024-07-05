export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (accumulator, obj) => accumulator + obj.id, 0,
    );
  }

  return 0;
}
