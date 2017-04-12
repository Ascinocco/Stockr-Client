/**
 * App: Stockr
 * File: stock.ts
 * Description: this page creates an instance of user JSON object.
 */

export class User
{
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;

    constructor(firstName: string, lastName: string, email: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}