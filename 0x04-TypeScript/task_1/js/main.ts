interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;  // Allows additional properties
}

interface Directors extends Teacher {
  numberOfReports: number;
}
// Test instances
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false, 
  location: 'London',
  contract: false
};
// Implement the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17
};

// Function to print teacher information
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the Student interface
interface Student{
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements Student {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}


// // Define an interface for the Teacher class constructor
// interface TeacherConstructor {
//   new (firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number): Teacher;
// }
// // Implement the Teacher interface
// class TeacherClass implements Teacher {
//   public firstName: string;
//   public lastName: string;
//   public fullTimeEmployee: boolean;
//   public location: string;
//   public yearsOfExperience?: number;

//   constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullTimeEmployee = fullTimeEmployee;
//     this.location = location;
//     if (yearsOfExperience) {
//       this.yearsOfExperience = yearsOfExperience;
//     }
//   }
// }
// console.log(teacher3);
// console.log(director1);
// console.log(printTeacher("John", "Doe"));

const student1 = new StudentClass("John", "Doe");
console.log(student1.workOnHomework());  // Output: Currently working
console.log(student1.displayName());     // Output: John
