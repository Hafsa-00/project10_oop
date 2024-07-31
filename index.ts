import inquirer from 'inquirer';

class Student {
    name: string
    constructor(n: string) {
        this.name = n
    }
}
class Person {
    student: Student[] = []
    addStudent(obj: Student) {
        this.student.push(obj)
    }
}
let persons = new Person()


const programStart = async (persons: Person)=> {
    do{
    console.log('Welcome!')
    let ans = await inquirer.prompt({
        name: 'select',
        type: 'list',
        message: 'whom would you like to interact with?',
        choices: ['staff', 'student', 'exit']
    })
    if (ans.select == 'staff') {
        console.log('you approach the staff room')
    } else if (ans.select == 'student') {
        const ans = await inquirer.prompt({
            name: 'student',
            type: 'input',
            message: 'enter the student you want to talk',
        })
        const student = persons.student.find(val => val.name == ans.student)
        if (!student) {
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`hello i am ${name.name}.nice to meet you`);
            console.log('new student added')
            console.log(`current student lists:  `)
            console.log(persons.student)
        } else {
            console.log(`hello i am ${student.name}.nice to meet you again`);
            console.log(`existing student lists:`)
            console.log(persons.student)
        }
    }else if (ans.select == 'exit'){
        console.log('exiting the program.........')
        process.exit()
    }
}while(true)
}
programStart(persons)