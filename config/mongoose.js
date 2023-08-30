const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aziz:1234@aziz.fjez7sn.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('database connected boi')
})
.catch((err)=>{
    console.log('err about data base')
})