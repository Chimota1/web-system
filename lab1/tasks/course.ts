interface Course {
    title: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course {
    title: string;
    duration: number;
    students: string[];
    private student?: string;
    constructor(title: string, duration: number, students: string[]) {
        this.title = title;
        this.duration = duration;
        this.students = students;
    }
    public registerStudent(student: string): void {
        this.students.push(student);
        console.log(`${student} has been registered for the course: ${this.title}`);
    }
    public isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[];
    constructor() {
        this.courses = [];
    }
    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Course "${course.title}" has been added.`);
    }
    removeCourse(courseTitle: string): void {
        this.courses = this.courses.filter(course => course.title !== courseTitle);
        console.log(`Course "${courseTitle}" has been removed.`);
    }
    findCourse(courseTitle: string): Course | undefined {
        return this.courses.find(course => course.title === courseTitle);
    }
}

const course1: OnlineCourse = new OnlineCourse("TypeScript Basics", 10, []);
const course2: OnlineCourse = new OnlineCourse("Advanced TypeScript", 15, []);
const course3: OnlineCourse = new OnlineCourse("TypeScript for Professionals", 20, []);

course1.registerStudent("John Doe");
course2.registerStudent("Jane Smith");
course3.registerStudent("Alice Johnson");

const courseManager: CourseManager = new CourseManager();
courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);

["TypeScript Basics", "Advanced TypeScript", "TypeScript for Professionals"].forEach(title => {
    courseManager.findCourse(title)?.students.forEach(student => {
        console.log(`Course: ${title}, Student: ${student}`);
    });
});