const mongoose = require("mongoose");
// Define Schame wit timestamps and disable versionKey
const ordersSchema = mongoose.Schema({
// Define Model    
    customer_name : { type : String , require : true},
    product : { type : String , require : true},
    quantity : { type : Number , require : true},
    order_date : { type : String , require : true},
    status : { type : String , require : true},
},{
    timestamps : true
});
// Define Model
// Export Model
module.exports = mongoose.model ('orders',ordersSchema);