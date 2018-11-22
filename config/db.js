const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mcaticketmaster' 

mongoose.connect(CONNECTION_URI, {
    useNewUrlParser: true
});

// mongoose.connect('mongodb://localhost:27017/employeedatabase', {
//     useNewUrlParser: true
// });

module.exports = mongoose;