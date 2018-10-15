# MULTI USERS GENERATOR

multi users generator is a small package  that help you to generate the more than thousand user within a line of code for your testing.
multi users generator use faker to generate the fake data

### Import npm

`npm install multi-users-generator --save
`

### Usage

```
let users = require(' multi-users-generator ');
multi = users.multiUser(300);
```
this line will return 300 users with address

Data:
```
[
 User {
    firstName: 'Holden',
    lastName: 'Ebert',
    username: 'HoldenEbert',
    email: 'Savanah82@yahoo.com',
    imageUrl: 'http://lorempixel.com/640/480/people',
    address:
     Address {
       street: '34465 Kovacek Spring',
       city: 'Lake Neil',
       state: 'New York' 
           } 
       } 
...
]
```



