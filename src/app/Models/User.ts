export class User
{
    private _id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;

    constructor(firstName: string, lastName: string, email: string, 
                password?: string, _id?: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

        if (password) {
            this.password = password;
        }

        if (_id) {
            this._id = _id;
        }
    }
}