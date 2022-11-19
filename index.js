class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary;
    }
}
let Vanua = new Worker('Vanua', 'Sokolov', 100, 15);
console.log(Vanua.getSalary());
let Oleg = new Worker('Oleg', 'Kusnesov', 300, 15);
console.log(Oleg.getSalary());

class MyString {
    reverse(str) {
        let reversStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversStr += str[i];
        }
        return reversStr;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }
    ucWords(str) {
        let arr = str.split(' ');
        let strArr = [];
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            strArr.push(newStr);
        }
        return strArr.join(' ');
    }
}
let str = new MyString();
console.log(str.reverse('he she it'));
console.log(str.ucFirst('he she it'));
console.log(str.ucWords('he, she, it'));