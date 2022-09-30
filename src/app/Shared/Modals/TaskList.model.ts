import { TaskStatus } from "./TaskStatus.model";
import { Task } from "./Task.model";
import { TaskDate } from "./TaskDate.model";
interface TaskDateInt {
    ToDo:Task[];
    InProgress:Task[];
    Done:Task[];
}
export class TaskList{ 
    Mon:TaskDateInt = {
        ToDo: [],
        InProgress: [],
        Done: []
    }
    Tue:TaskDateInt = {
        ToDo: [],
        InProgress: [],
        Done: []
    }
    Wed:TaskDateInt = {
        ToDo: [],
        InProgress: [],
        Done: []
    }
    Thu:TaskDateInt= {
        ToDo: [],
        InProgress: [],
        Done: []
    }
    Fri:TaskDateInt = {
        ToDo: [],
        InProgress: [],
        Done: []
    }
    Sat:TaskDateInt = {
        ToDo: [],
        InProgress: [],
        Done: []
    }
    Sun:TaskDateInt = {
        ToDo: [],
        InProgress: [],
        Done: []
    }
    AddNewTask(Task:Task){
        console.log(Task)
        switch(Number(Task.TaskDate)){
            case TaskDate.Mon:
                switch(Task.TaskStatus){
                    case TaskStatus.ToDo:
                        this.Mon.ToDo.push(Task);
                        break;
                    case TaskStatus.InProgress:
                        this.Mon.InProgress.push(Task);
                        break;
                    case TaskStatus.Done:
                        this.Mon.Done.push(Task);
                        break;
                }
                break;
            case TaskDate.Tue:
                switch(Task.TaskStatus){
                    case TaskStatus.ToDo:
                        this.Tue.ToDo.push(Task);
                        break;
                    case TaskStatus.InProgress:
                        this.Tue.InProgress.push(Task);
                        break;
                    case TaskStatus.Done:
                        this.Tue.Done.push(Task);
                        break;
                }
                break;
            case TaskDate.Wed:
                switch(Task.TaskStatus){
                    case TaskStatus.ToDo:
                        this.Wed.ToDo.push(Task);
                        break;
                    case TaskStatus.InProgress:
                        this.Wed.InProgress.push(Task);
                        break;
                    case TaskStatus.Done:
                        this.Wed.Done.push(Task);
                        break;
                }
                break;
            case TaskDate.Thu:
                switch(Task.TaskStatus){
                    case TaskStatus.ToDo:
                        this.Thu.ToDo.push(Task);
                        break;
                    case TaskStatus.InProgress:
                        this.Thu.InProgress.push(Task);
                        break;
                    case TaskStatus.Done:
                        this.Thu.Done.push(Task);
                        break;
                }
                break;
            case TaskDate.Fri:
                switch(Task.TaskStatus){
                    case TaskStatus.ToDo:
                        this.Fri.ToDo.push(Task);
                        break;
                    case TaskStatus.InProgress:
                        this.Fri.InProgress.push(Task);
                        break;
                    case TaskStatus.Done:
                        this.Fri.Done.push(Task);
                        break;
                }
                break;
            case TaskDate.Sat:
                switch(Task.TaskStatus){
                    case TaskStatus.ToDo:
                        this.Sat.ToDo.push(Task);
                        break;
                    case TaskStatus.InProgress:
                        this.Sat.InProgress.push(Task);
                        break;
                    case TaskStatus.Done:
                        this.Sat.Done.push(Task);
                        break;
                }
                break;
            case TaskDate.Sun:
                switch(Task.TaskStatus){
                    case TaskStatus.ToDo:
                        this.Sun.ToDo.push(Task);
                        break;
                    case TaskStatus.InProgress:
                        this.Sun.InProgress.push(Task);
                        break;
                    case TaskStatus.Done:
                        this.Sun.Done.push(Task);
                        break;
                }
                break;
            default:
                console.log('Error In AddNewTask TaskList Modal')
        }
    }
    getTasksByDate(Day:TaskDate){
        switch(Day){
            case TaskDate.Wed:
                return this.Wed
            case TaskDate.Tue:
                return this.Tue
            case TaskDate.Thu:
                return this.Thu
            case TaskDate.Sun:
                return this.Sun
            case TaskDate.Sat:
                return this.Sat
            case TaskDate.Mon:
                return this.Mon
            case TaskDate.Fri:
                return this.Fri
            default:
                console.log("Error In getTasksByDate");
                return this.Wed;
        }
    }
}