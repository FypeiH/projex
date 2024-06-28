export interface IPersonToGetList{
    results: Person[]
}

export class Person{
    id:number = -1
    name: string = ""
    username: string = ""
    email: string = ""
    password: string = ""
}