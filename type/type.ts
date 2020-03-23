/*
    型注釈
*/
let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14; // 整数も浮動小数点もnumber
let negative: number = -1.3;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

/*
    型推論
        型注釈は書き方が冗長なので、基本的には型推論で定義する。
*/
let hasVal = true;
let num = 10;
let pi = 3.14; // 整数も浮動小数点もnumber
let negativeNum = -1.3;
let singleQuo = 'hello';
let doubleQuo = "hello";
let backQuo = `hello`;
let hello; // 初期化しない場合はany型になる。なんでも入れられる。良い書き方ではないので、こういう場合は型注釈を使う。

/*
    オブジェクトの型
        これも基本的には型推論でOK
*/
const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 24
}

/*
    配列の型
*/
const fruits: string[] = ['apple', 'banana', 'grape'];
const various = [1, 'hoge', 'huga', 4]; // 型推論によりUnion型になる。
const various2: any = [5, 'hello', 'yeah', 5];

/*
    Tuple型 決まった内容の配列を定義
*/
const book: [string, number, boolean] = ['business', 1500, false];
book.push(22); // 上記定義に則していないがエラーにはならない。TypeScriptは、初期化時の型には厳しいが後は割と緩い。

/*
    Enum 列挙型
        特定の、まとまったグループの型
*/
enum CoffeeSize  {
    SHORT,
    TALL,
    GRANDE,
    VENTI 
} // 基本的には全部大文字

const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
}

/*
    any型 何でも入る。極力使わない。
*/ 
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];

/*
    Union型
        | でつなげて複数の型を使えるようにする。
*/
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello'];

/*
    Literal型 特定の値しか入れられない型
*/
const apple: 'apple' = 'apple'; // apple以外だめ。
const banana = 'banana'; // constで定義するとLiteral型で型推論される。
let clothSize: 'small' | 'medium' | 'large' = 'large'; // Literal型をUnion型でつなげると列挙型のような書き方ができる。列挙型のようにオブジェクトとして扱うことはできない。

/*
    Typeエイリアス 複雑な型を変数のように扱う
*/
type size = 'small' | 'medium' | 'large';
let someCoffee: size = 'medium';

/*
    関数に型をつける パラメータと戻り値
        パラメータを型推論にするとanyになってしまうので必ず型をつけること。
*/
function add(num1:number, num2: number): number {
    return num1 + num2;
}

/*
    void
        voidはundifinedを返す。
*/
function sayHello(): void {
    console.log('hello');
}

/*
    null型
        nullとundefinedが入れられる。
*/
let nothing: null = null;

/*
    関数を保持する変数に型をつける
*/
const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNum: (num: number) => number = num => num * 2;

/*
    callback関数に型をつける
*/
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}

doubleAndHandle(12, doubleNum => {
    return doubleNum;
})

/*
    unknowng型
        何でも入れられるが、使うときは注意。
*/
let unknownInput: unknown;
let anyInput: any;
let text: string;
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
function error(message:string): never {
    throw new Error(message);
}