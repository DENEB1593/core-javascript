// 명시적으로 this를 바인딩하는 법

//1) call 메서드
var func = function(a, b, c) {
    console.log(this, a, b, c);
}

func(1, 2, 3);
func.call({x: 1}, 4, 5, 6); // { x: 1 } 4 5 6
// call은 첫번째 인자를 메소드 내에서 this로 바인딩한다.


// 2) apply
func.apply({x: 1}, [4, 5, 6]); //// { x: 1 } 4 5 6
// apply는 첫번쨰 인자로 this를 두번째 인자로 배열 내 요소들을 매개변수로 지정


var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};


// call의 활용 예시
Array.prototype.push.call(obj, 'd');
console.log(obj); //{ '0': 'a', '1': 'b', '2': 'c', '3': 'd', length: 4 }


var arr = Array.prototype.slice.call(obj);
console.log(arr); //[ 'a', 'b', 'c', 'd' ] 
