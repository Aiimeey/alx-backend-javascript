namespace Subjects {
    export class Subject {
      // private teacher: Teacher;

      // constructor(teacher: Teacher) {
      //   this.teacher = teacher;
      // }
      teacher: Subjects.Teacher;
  
      set setTeacher(teacher: Subjects.Teacher) {
        this.teacher = teacher;
      }
    }
  }
