

class thisClass {
    init() {
        console.log("we're initing this class");
        return;
    }
}

var obj = {
    first: function() {
        var test = new thisClass();
        console.log(test.init());
        return;
    },
    second: function(arr) {
        this.a = arr;
        for (var i = 0; i < this.a.length; i++) {
            console.log(this.a[i]);
        }
        return;
    }
}

function recursive(obj, times) {

    if (times > 0) {
        console.log('here: ', obj)
        recursive(obj, times-1);
    } else {
        return 'end';
    }

}

recursive('objectSuper', 2);


// console.log(obj.first());
// console.log(obj.second(['array1', 'array2', 'array3']));




















// class myLittleTools {

//     init() {
//         exports.default = ['this', 'is', 'an', 29];
//         var object = {
//             first: {
//                 hello: 'hola',
//                 192: 'this is a numero',
//                 aqui: 'here'
//             }

// )
//         }
//     }

//     isNull(object) {
//         this.object = object;
//         this.type = typeof this.object;
        
//         if (this.object === null) {
//             return true;
//         };

//         if (this.type === undefined) {
//             return true;
//         };

//         return;
//     }

//     type(object) {
//         this.object = object;
//         this.type = typeof this.object;

//         if (this.isNull(this.object)) {
//             return null;
//         } 

//         if (Array.isArray(this.object)) {
//             return 'Array';
//         }

//         if (this.type === 'number') {
//             return 'Number';
//         }
        
//     }

//     count(object) {
//         this.object = object;

//         if (this.type(this.object) === 'Array') {
//             return this.object.length;
//         }

//         if (this.type(this.object) === 'Number') {
//             return this.object.length;
//         }

//     }

// }

// var tool = new myLittleTools();

// console.log(tool.count(2));










































// var auth = require('../routes/security/auth.js');
// var bcrypt = require('bcrypt-nodejs');


// return new Promise(function(resolve, reject) {

//     var string = 'string';
//     var Hash = '';

//     bcrypt.hash(string, null, null, function(err, hash) {
//         console.log('New Variable Hash: ', hash);
//         Hash = hash;
//         return {};
//     }).then((n) => {
//         bcrypt.compare("string", Hash, function(err, res) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(res);
//             return;
//         })
//         console.log('hash : ', Hash);
//         return {};
//     }).then((n) => {
//         bcrypt.compare("nothing", Hash, function(err, res) {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(res);
//             return;
//         })
//         resolve('it worked');
//     }).catch((err) => {
//         console.log(err);
//         reject('it broke');
//     })

// })









// console.log('auth obj: ', auth);
// console.log('auth.login: ', auth.login('debbie', 'password9988'));

// console.log('auth type: ', typeof auth);
// console.log('auth.login type: ', typeof auth.login);

