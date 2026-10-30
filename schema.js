const mongoose = require('mongoose');

main().then(() => {
    console.log("connected successfully");
    
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/DEMO_DATABASE');
}

// const demoSchema = new mongoose.Schema({
//     username : String,
//     addres : [{
//         _id : false,
//         location : String,
//         city : String
//     }]

// })

// const Demo = mongoose.model("Demo", demoSchema, "relationDemoLikeforegin");

// const newData = new Demo({
//     username : "aditya",
//     addres: [{
//         location : 'mumbai',
//         city : 'howrah'
//     },{
//         location : 'mumbai',
//         city : 'noida'
//     }, {
//         location : 'xyz',
//         city : 'abc'
//     }]
// })

// newData.save();


const userSchema = new mongoose.Schema({
    customerName : String,
    orderId: [{
        // khanaKeId : String
        type: mongoose.Schema.Types.ObjectId,
        ref : "Order"
    }],
})

const orderSchema =  new mongoose.Schema({
    itemName : String,
    price : String,
})

const User = mongoose.model('User', userSchema);
const Order = mongoose.model('order', orderSchema);

const addCustomeFn =  async () =>{
    // const cst1 = new User({
    //     customerName : 'aditya'
    // })

    // let order1Name = await Order.findOne({itemName : 'samosa'});
    // let order2Name = await Order.findOne({itemName : 'burger'});

    // cst1.orderId.push(order1Name);
    // cst1.orderId.push(order2Name)

    // let result = await cst1.save();
    // console.log(result);
    
    const res = User.find({customerName : 'aditya'});
    console.log(res);
    
}

addCustomeFn();

// Order.insertMany([
//     {itemName : 'samosa', price : 12},
//     {itemName : 'coldDrink', price : 50},
//     {itemName : 'burger', price : 20}
// ])

