interface Engineer  {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
    name: 'Jun',
    role: 'front-end',
    follower: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 関数のオーバーロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}

const upperHello = toUpperCase('hello');

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker : NomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);        
    }
}

class Dog {
    kind: 'dog' = 'dog';
    speak() {
        console.log('bow-wow');
    }
}

class Bird {
    kind: 'bird' = 'bird';
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
            break;
        default:
            break;
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());

// const input = <HTMLInputElement>document.getElementById('hoge');
const input = document.getElementById('hoge')!;
(document.getElementById('hoge') as HTMLInputElement).value = 'hoge';

interface Designer {
    name: string;
    [index: string]: string;
}

const desiner: Designer = {
    name: 'hoge',
    role: 'web',
    greeting: 'hey!'
}

interface DownloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}
const downloadedData: DownloadedData = {
    id: 1
}
console.log(downloadedData.user?.name?.first);

const userData = downloadedData.user ?? 'no-user'; // nullish coalescing