class User {
    constructor() {
        this.id = User.GenerateUID();
        this.firstName; // String
        this.lastName; // String
        this.email; // String
        this.linkedin; // String URL
        this.avatar; // String URL
    }

    static GenerateUID() {
        if(this.counter == undefined)
            this.counter = 0;

        return this.counter++;
    }

    static GenerateFakeUser() {
        let user = new User();

        user.firstName = "Firstname";
        user.lastName = "Lastname";
        user.email = "email@exemple.com";
        user.linkedin = "https://www.linkedin.com/";
        user.avatar = "https://st.depositphotos.com/1640243/4300/v/950/depositphotos_43001159-stock-illustration-anonymous-spy-icon.jpg";

        return user;
    }

    static Get() {
        return User.GenerateFakeUser();
    }

    static GetCollection() {
        let collection = [];

        for(i=0; i < 20; ++i){
            collection.push(User.GenerateFakeUser());
        }

        return collection;
    }
}

export {User};
