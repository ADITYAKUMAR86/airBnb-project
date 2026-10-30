const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connected successfully");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/DEMO_DATABASE");
}

const instaUserschema = mongoose.Schema({
    userName: String,
    email: String,
});

const post = mongoose.Schema({
    content: String,
    likes : Number,
    userName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    },
});

const InstaUser = new mongoose.model("InstaUser", instaUserschema);
const Post = new mongoose.model("Post", post);

// const adduserFn = async  () => {
//     const instaUser1 = new InstaUser({
//         userName : 'aditya',
//         email : 'aditya@gmail.com'
//     })

//     let post1 = new Post({
//         content : 'hello world ',
//         likes : 47,
//     })
//     post1.userName = instaUser1;

//     await instaUser1.save();
//     await post1.save();
// }

// adduserFn();
 
const adduserFn = async () => {
    let instaUser1 = await InstaUser.findOne({userName : 'aditya'});
    let post2 = new Post({
        content : 'byee',
        likes : 546,
        userName : instaUser1
    })
    await post2.save();
}

adduserFn();