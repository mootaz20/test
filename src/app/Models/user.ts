export class User{
    constructor(
        public id: number, 
        public email:string,
        public username: string,     
        public password:string,
        public name : {
            firstname:string;
            lastname:string;
        },
        public address: {
           city : string,
           street : string,
           number : number,
           zipcode : string,
           geolocation : {
            lat : string,
            long : string
           },
        },
        public phone:string
    ){

    }
}