
class Student {
    name: string;
    grade: number;

    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
    }

}

class Roster {
    students: Student[];
    get size(): number {
        return this.students.length;
    }

    constructor() {
        this.students = [];
    }

    add(student: Student): void {
        this.students.push(student);
    }
}

export default class GradeSchool {

    roster: Roster;

    constructor() {
        this.roster = new Roster();
    }

    public studentRoster(): Roster {
        return this.roster;
    }

    public addStudent(name: string, grade: number): void {
        const student = new Student(name, grade);
        this.roster.add(student);
    }

    public studentsInGrade(grade: number): Student[] {
        return this.roster.students.filter(s => s.grade == grade);
    }
}

