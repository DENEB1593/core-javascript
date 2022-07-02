// 메서드 내부에서의 this

var obj= {
    methodA: function() { console.log(this); },
    inner: {
        methodB: function() {console.log(this); }
    }
}

obj.methodA(); // 메소드로서의 호출
obj['methodA']();