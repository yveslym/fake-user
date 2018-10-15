var faker = require('faker');

function Address(){
    this.street = faker.address.streetName;
    this.city = faker.address.city;
    this.state = faker.address.state;
}

function User(){
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.username = faker.name.username();
    this.email = faker.internet.email();
    this.imageUrl = faker.image.image();
    this.address = Address();
}

const MultyUser = numUsers =>{
    var userArray = [];
    for(var i=0; i< numUsers; i++){
        var user = User();
        userArray.append(user);
    }
    return userArray;
}

module.exports ={ User, MultyUser}
 
