function CreatStudent (name, rollNo, id){
    var student = {};
    student.name = name,
    student.rollNo = rollNo,
    student.id = id
    return student;
}
var student1 = CreatStudent("xyz",17,1969);
console.log(student1);

function Student(name, rollNo, id){
    this.name = name;
    this.rollNo = rollNo;
    this.id = id;
}

var student2 = new Student("abc" , 12, 1669);
console.log(student2);