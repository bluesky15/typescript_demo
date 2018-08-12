// console.log("hello world!");

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