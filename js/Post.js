import {User} from "./User.js";

class Post {
    constructor() {
        this.id = Post.GenerateUID();
        this.title; // String
        this.content; // String (MarkDown)
        this.author; // User object
        this.createdAt; // Date
        this.updatedAt; // Date
        this.tags; // Array of String
    }

    Update() {
        // TODO
    }

    Delete() {
        // TODO
    }

    get htmlContent() {
        return marked(this.content);
    }

    static GenerateUID() {
        if (this.counter == undefined)
            this.counter = 0;

        return this.counter++;
    }

    // This function creates & returns a new Post object
    static GenerateFake() {
        let post = new Post();
        let loremIpsum = `   
# Elementa et imagine felix consulat inficit tamen 
## Populusque et Procris quisque

Lorem markdownum venas haerentem carnes rapinae, et ait nec. Et umbra, mihi, a
vitiatas, loco omnia: Althaea arte cum arma aevum.

1. Velles tum ora gradieris ita
2. Quantum tuos ne simus in tollens ille
3. Non quod tenetur
4. Illa surgit obsceno omnia

Bene Sardibus quod donec fenestris primus placidi, et anilibus ut aura nos
mirum! Hostes adspergine lapsu innocuos in veros revertitur sanguis. Extemplo
Oceanus populisque si laqueis Phasis, Aeson en rettulit retro amaverat advehar
nostro reliquit debere medio, *totos*! Ab precatur quid rapinae radiis
obscenique illud **en illa furit** illo, referunt, sitiemus! Et omnia, potiunda
e colonis dicar cum: superasse primus, parabam est suae mutabile pudore!`.trim();

        post.title = "title";
        post.content = loremIpsum;
        post.author = User.Get();
        post.createdAt = new Date();
        post.updatedAt = new Date();
        post.tags = ["html","css"];

        return post;
    }

    static Get() {
        return Post.GenerateFake();
    }

    static GetCollection() {
        let collection = [];

        for (let i = 0; i < 20; ++i) {
            collection.push(Post.GenerateFake());
        }

        return collection;
    }    
}

export {Post};
