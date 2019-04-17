import {Context} from './Context.js'
import {Post} from './Post.js'

// Test context
console.log(Context.IsLogged() ? "User is logged" : "User is not logged");

let post = Post.Get();
let collection = Post.GetCollection();

console.log("Single post:");
console.log(post);
console.log("Collection:");
console.log(collection);

// Test marked
document.getElementsByTagName("body")[0].innerHTML = post.htmlContent;
