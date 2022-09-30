import { TaskDate } from "./TaskDate.model";
import { TaskStatus } from "./TaskStatus.model";

export class Task {
    TaskName!:string;
    TaskDate!:TaskDate;
    TaskDescription!:string;
    TaskStatus!:TaskStatus;
    TaskTime!:string;
    constructor(){
        this.TaskStatus = TaskStatus.ToDo
    }
}