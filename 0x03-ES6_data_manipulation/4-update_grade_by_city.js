export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (getListStudents instanceof Array
    && typeof city === 'string'
    && newGrades instanceof Array
  ) {
    return getListStudents.filter(
      (obj) => obj.location === city,
    ).map(
      (obj) => ({
        ...obj,
        grade: (newGrades.find(
          (grade) => grade.studentId === obj.id,
        ) || { grade: 'N/A' }).grade,
        // grade: (newGrades.filter((grade) => grade.studentId === obj.id,
        // ).pop() || { grade: 'N/A' }).grade,
      }),
    );
  }
  return [];
}

// function updateStudentGradeByCity(ls, city, ng) {
//   let cf = ls.filter((obj) => obj.location === city);

//   return cf.map((obj) => {
//     let match = ng.find((ngobj) => ngobj.studentId === obj.id);
//     return match ? {...obj, grade : match.grade} : {...obj, grade : "N/A"};
//   });
// }
