export class MovieModel {
    constructor(
        public id: number,
        public title: string,        
        public poster: string,
        public genre: string[],
        public year: number,
        public duration: number,
        public imdbRating: number,
        public actors: number[]
    ) {}
}
