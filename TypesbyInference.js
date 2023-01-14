var helloWorld = "Hello world.";
//usage of interface with variable
var user = {
    name: "john",
    id: 0
};
//declaring a class
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
//class with interface
var nextUser = new UserAccount("Bob", 42);
//Usage of interfaces in function
function getAdminUser() {
    return new UserAccount("Bob", 42);
}
function deleteAdminUser(user) {
    console.log(user.name);
}
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
var point = { x: 12, y: 13 };
logPoint(point);
