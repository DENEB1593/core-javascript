// 함수 호출
var func = function (x) {
    console.log(this, x);
}

func(1);

// 메소드 호출
var obj ={
    method: func
};

obj.method(2);      // 점표기볍
obj['method'](2);   // 대괄호 표기법