// 객체 가변성으로 인한 문제점
var user = {
    name: 'Kim',
    gender: 'male'
};

var changeName = function(user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
}

var newUser = changeName(user, 'Park');

if (user !== newUser) {
    console.log('User info changed');
}

console.log(user.name + ", " + newUser.name); // Park, Park
console.log(user === newUser);

// 의도는 기존의 유저를 토대로 이름만 변경하는 유저를 생성하고 했으나
// 결과는 생각했던 것과 다르게 출력된다. (shallow copy, 두 객체는 같은 메모리를 가리키고 있기 때문이다.)

// 객체의 모든 프로퍼티를 조회하여 복사하는 방법
// 다만, 이 방법도 getter/setter를 복사하지 않는 점, 모든 프로퍼티를 대상으로 복사하는 점이 있어 단점이 있다.
var copyObj = function(target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
}

var newUser2 = copyObj(user);
newUser2.name = 'Lee';
console.log(user.name + ", " + newUser2.name); // Park, Park
console.log(user === newUser2);


// 중첩된 객체까지 복사하는 코드(객체 내부에 참조형데이터가 있는 경우)
var someObj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
};

var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = target[prop];
        }
    } else {
        result = target; // 기본형일 경우
    }
    return result;
}

var thatObj = copyObjectDeep(someObj);
console.log(thatObj === someObj); // false