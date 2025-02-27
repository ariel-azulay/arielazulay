import { drawTableRows } from "./domService.js";

export class User{
    static usersList =[];
    static count = 0 ;

    id;
    firstName;
    lastName;
    email;
    password;
    isLogedIn= false;

    constructor(firstName,lastName,email,password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password =password;
        this.id =++User.count;

        User.usersList.push(this);
        drawTableRows(User.usersList)
    }
    static removeUser(id){
        User.usersList = User.usersList.filter(user=>user.id !==id);
        drawTableRows(User.usersList)
    }
}