var Cat = function(name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
    console.log(this); // Cat { bark: '야옹', name: 'choco', age: 7 }
}


var choco = new Cat('choco', 7);

