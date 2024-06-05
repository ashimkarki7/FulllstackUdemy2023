import bcryptjs from 'bcryptjs';


const users = [{
    name:'Admin User',
    email:'booking@gmail.com',
    password:bcryptjs.hashSync('123456',10),
    isAdmin: true,
},
    {
    name:'Ashim karki',
    email:'johnDoe@gmail.com',
    password:bcryptjs.hashSync('123456',10),
    isAdmin: true,
},{ name:'Jane Doe',
        email:'janeDoe@gmail.com',
        password:bcryptjs.hashSync('123456',10),
        isAdmin: false,

    }
];
export default  users;