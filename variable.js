const challenge = '30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(2, 5));
console.log(challenge.substr(2))
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));
console.log(challenge.replace('JavaScript', 'python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
console.log(challenge.trim());
console.log(challenge.startsWith(30));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match('a'));
console.log('30 Days of'.concat(' JavaScript'));
console.log(challenge.repeat(2));

// Exercise Level 2 
console.log("'There is no exercise better for the heart than reaching down and liftinf people up.' by John Holmes teaches us to help one another");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead");
console.log(typeof Number('10'));
console.log(parseInt('9.8') + 1);
console.log('python and jargon'.includes('on'));
console.log('I hope this course is not full of jargon'.includes('jargon'));
let num = Math.random();
let calc = Math.floor((num * 100))
console.log(calc);

let ran = Math.floor(Math.random() * 100);
if (ran >= 50 && ran <= 100) {
    console.log(ran)
}

let numbs = Math.floor(Math.random() * 255);
console.log(numbs);

let randomNum = 'JavaScript'


console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t3\t25\t125');

console.log('You cannot end a sentence with because because because is a conjunction'.substr(30, 25));

// Exercise Level 3

let numLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
console.log(numLove.match(pattern));


console.log('You cannot end a sentence with because because because is a conjunction'.match('because'))


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// let work = sentence.replace('%tea@cher%', 'teacher');
let patternOne = /\W+/g;
let replaceChar = " ";
const char = sentence.replace(patternOne, replaceChar);
console.log(char)


const totalIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';
let regEx = /\d+/g;
const arr = totalIncome.match(regEx);
const totalAnnualIncome = (+arr[0] + +arr[2])* 12 + +arr[1];
console.log(totalAnnualIncome)




