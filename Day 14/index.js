var studentDatabase = [];
var filterStudent = [];
function addStudent(name, email, age, phone) {
  var Student = { name, email, age, phone };
  studentDatabase.push(Student);
}
// function findEmail(Email) {
//   var emailfound = studentDatabase.find(function (email) {
//     return email.email === Email;
//   });
//   console.log(emailfound);
// }
function findEmail(Email) {
  var emailfound = studentDatabase.some(function (email) {
    return email.email === Email;
  });
  console.log(emailfound);
}

function deleteStudent(email) {
  filterStudent = studentDatabase.filter(function filter(obj) {
    return obj.email != email;
  });
  console.log(filterStudent);
}
function showAge(start, end) {
  filterAge = studentDatabase.filter(function age(obj) {
    return obj.age >= start && obj.age <= end;
  });
  console.log(filterAge);
}

addStudent("ganesh", "ganesh@gmail.com", 21, 9360142405);
addStudent("karthik", "karthik@gmail.com", 21, 9629808538);
addStudent("prajith", "prajith@gmail.com", 22, 6381466797);
addStudent("arun", "arun@gmail.com", 22, 9087773045);
addStudent("saran", "saran@gmail.com", 18, 9360409252);
addStudent("ajet", "ajet@gmail.com", 22, 9994136626);
addStudent("dharun", "dharun@gmail.com", 23, 9360223144);
addStudent("Gulam", "gulam@gmail.com", 23, 7550325332);
addStudent("DeppaKumar", "deppa@gmail.com", 20, 6369698088);
addStudent("Ganapathy", "gana@gmail.com", 28, 9994918746);
console.log("Student Database ...............");
console.log(studentDatabase);
console.log("Delete Student  ...............");
deleteStudent("ajet@gmail.com");
console.log("Show Age Between 18 to 20 ...............");
showAge(18, 20);
console.log("Find Email ...............");
findEmail("gana@gmail.com");

var totalLength = studentDatabase.reduce(function (accumulator) {
  return accumulator + 1;
}, 0);
console.log("Total Length Of Database ...............");
console.log(totalLength);

var camelCase = studentDatabase.map(function name(obj) {
  return obj.name.toUpperCase();
});
console.log("Student Name in Uppercase ...............");
console.log(camelCase);

function updateStudent(name, Email, age, phone) {
  var emailfind = studentDatabase.some(function (email) {
    return email.email === Email;
  });
  console.log(emailfind);
  var index = studentDatabase.findIndex(function indexes(emails) {
    return emails.email === Email;
  });
  console.log(index);
  if (emailfind == true) {
    studentDatabase[index].name = name;
    studentDatabase[index].email = Email;
    studentDatabase[index].age = age;
    studentDatabase[index].phone = phone;
  }
}
console.log("Update Database ...............");

updateStudent("ganeshVV", "ganesh@gmail.com", 12, 1234567890);
console.log(studentDatabase);
let main = studentDatabase.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
console.log("Student Database in Ascending...............");
console.log(main);
console.log("Pagination ...............");
function Pagination(start, index) {
  let maindata = main.slice(start, index);
  console.log(maindata);
}
Pagination(3, 5);
