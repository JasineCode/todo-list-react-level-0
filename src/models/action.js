import { Task } from "./task"

export class Action{
    constructor(type="",payload=new Task()){
        this.type=type
        this.payload=payload
    }
}