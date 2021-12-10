const students = [
    {
        name: 'James',
        grade: 10
    },
    {
        name: 'David',
        grade: 7
    },
    {
        name: 'Paul',
        grade: 4
    },
];
function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >=7);
}
console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos');
console.log(students);