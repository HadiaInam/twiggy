import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{ type: String, required: true},
    email:{ type: String, required: true, unique: true},
    password:{ type: String, required: true},
    friends:{ type: Object, default: []},
    treeCoins: {type: Number, default: 0}

}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;