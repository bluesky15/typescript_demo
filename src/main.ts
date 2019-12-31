// console.log("hello world!");
import index from './index'
import runIndexCode from './index';
class Message{
     msg: string;
    constructor(msg:string){
    this.msg = msg;
    }
    greet(){
        console.log(this.msg);
    }
}

var message = new Message("Hello there");
message.greet();
runIndexCode()