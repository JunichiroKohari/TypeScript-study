"use strict";
/*
    型注釈
*/
var hasValue = true;
var count = 10;
var float = 3.14; // 整数も浮動小数点もnumber
var negative = -1.3;
var single = 'hello';
var double = "hello";
var back = "hello";
/*
    型推論
        型注釈は書き方が冗長なので、基本的には型推論で定義する。
*/
var hasVal = true;
var num = 10;
var pi = 3.14; // 整数も浮動小数点もnumber
var negativeNum = -1.3;
var singleQuo = 'hello';
var doubleQuo = "hello";
var backQuo = "hello";
var hello; // 初期化しない場合はany型になる。なんでも入れられる。良い書き方ではないので、こういう場合は型注釈を使う。
/*
    オブジェクトの型
        これも基本的には型推論でOK
*/
var person = {
    name: 'Jack',
    age: 24
};
/*
    配列の型
*/
var fruits = ['apple', 'banana', 'grape'];
var various = [1, 'hoge', 'huga', 4]; // 型推論によりUnion型になる。
var various2 = [5, 'hello', 'yeah', 5];
/*
    Tuple型 決まった内容の配列を定義
*/
var book = ['business', 1500, false];
book.push(22); // 上記定義に則していないがエラーにはならない。TypeScriptは、初期化時の型には厳しいが後は割と緩い。
/*
    Enum 列挙型
        特定の、まとまったグループの型
*/
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {})); // 基本的には全部大文字
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
/*
    any型 何でも入る。極力使わない。
*/
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
/*
    Union型
        | でつなげて複数の型を使えるようにする。
*/
var unionType = 10;
var unionTypes = [21, 'hello'];
/*
    Literal型 特定の値しか入れられない型
*/
var apple = 'apple'; // apple以外だめ。
var banana = 'banana'; // constで定義するとLiteral型で型推論される。
var clothSize = 'large'; // Literal型をUnion型でつなげると列挙型のような書き方ができる。列挙型のようにオブジェクトとして扱うことはできない。
var someCoffee = 'medium';
/*
    関数に型をつける パラメータと戻り値
        パラメータを型推論にするとanyになってしまうので必ず型をつけること。
*/
function add(num1, num2) {
    return num1 + num2;
}
/*
    void
        voidはundifinedを返す。
*/
function sayHello() {
    console.log('hello');
}
/*
    null型
        nullとundefinedが入れられる。
*/
var nothing = null;
/*
    関数を保持する変数に型をつける
*/
var anotherAdd = add;
var doubleNum = function (num) { return num * 2; };
/*
    callback関数に型をつける
*/
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(12, function (doubleNum) {
    return doubleNum;
});
/*
    unknowng型
        何でも入れられるが、使うときは注意。
*/
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
/*
    never型
        決して何も返さない。（voidはundefinedを返す）
        neverはversion3から。
*/
function error(message) {
    throw new Error(message);
}
