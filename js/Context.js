// Context will be a singleton
class Context {
    static Initialize() {
        this.isInitialized = true;

        // ALl init code here
    }

    static Get() {
        if (this.isInitialized == undefined)
            Context.Initialize();

        return this;
    }

    static get User(){
        return firebase.auth().currentUser;
    }

    static get IsLogged() {
        // TODO: https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#currentuser
        // return Context.User != null;
        return true; ///< mockup
    }
}

// IIFE to init our Context
(() => {
    Context.Get();
})();

export {Context};
