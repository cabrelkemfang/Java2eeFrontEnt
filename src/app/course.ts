import { Contents } from "./contents";

export class Course {
    course_code: string;
    course_title: string;
    course_value: number;
    semester: number;
    level: number;
    course_status: string;
    option: string;
    course_master: string;
    contents:any[]=[];
}
