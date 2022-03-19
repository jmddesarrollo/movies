export class ActorModel {
    constructor(
        public id: number,
        public first_name: string,        
        public last_name: string,
        public gender: string[],
        public bornCity: number,
        public birthdate: number,
        public img: number,
        public rating: number,
        public movies: []
    ) {}
}