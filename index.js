var faker = require('faker');

class Address{
    constructor() {
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    
    }
}

class User {

    constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.username = this.firstName+this.lastName;
    this.email = faker.internet.email();
    this.imageUrl = faker.image.people();
    this.address = new Address();
    }
}

const multiUsers = numUsers =>{
    var userArray = [];
    for(var i=0; i< numUsers; i++){
        var user = new User();
        userArray.push(user);
    }
    return userArray;
}

module.exports ={ User, multiUsers}
 
