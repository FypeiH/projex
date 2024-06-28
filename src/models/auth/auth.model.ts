import { Person } from "../person/person.model"

export interface IAuth{
    user: Person
    token: string
}