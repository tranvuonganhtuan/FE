// console.log("Hello world!"); // in ra chữ trong console trong trình duyệt của mình
// // các kiểu dữ liệu
// // syntax: cú pháp (nhớ và lặp lại)
// // string trong js có thể sử dụng " ", ' ', ` `
// console.log("Hello world!");
// console.log('Hello world!');
// console.log(`Hello world!`);
// //number
// console.log(-232)
// console.log(11.11)
// console.log(231)
//đặt biến
// sử dụng từ khoá var(sử dụng tất cả tất cả các khai báo), (const, let)


// dynamic language - dynamuc type linh hoạt
// var a =10;
// a = "hello";
// console.log(a);

// TOÁN TỬ: +,-,*,/,%
// console.log (a + 10);

// if(10 > 5){
//     console.log("10 > 5")
// }else{
//     console.log("abc")
// }

//var a = 10

// kiểm tra a là số chẵn hay lẻ
// if(a % 2 === 0){
//     console.log(a + "la so chan")
// }else{
//     console.log(a + "la so le")
// }

// sử dụng template literal (``) để cộng chuỗi
// ${} biểu thị tên biến
// if(a % 2 === 0){
//     console.log(`${a} la so chan`)
// }else{
//     console.log(`${a} la so le`)
// }

// trong js khi thực hiện toán tử + , nếu trong biểu thức
// có 1 string --> chuyển phần còn lại sang string
// rồi thực hiện cộn chuỗi
// console.log(1 + '1' + 2) thành '112' là kiểu string
// console.log('1' + '1')

// các phép toán còn lại thì sẽ chuyển thành số rồi thực hiện phép tính
//console.log(1 + '1' - 1)

// vòng lặp - loop
// a = 10//mặc định là gán biến var
// console.log(a)
// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }

// var a = 10
// while(a > 10){
//     console.log(a)
//     a--
// }

// in ra string từ 1 -> 10 
// for (i = 1; i <= 10; i++){
//     console.log()
// }
// in ra string từ 1 -> 10 ==> "12345678910"


// var str = 'hello world!'
// var upperString = 'ABC'

// // lấy kí tự vị trí index thứ n => .charArt(n) hoặc sử dụng string[n]
// console.log(str.charAt(2))
// console.log(str[1])
// // tính độ dài chuỗi .length
// console.log('do dai chuoi: ',str.length)

// //in Hoa 1 String ==> .toUpperCase()
// console.log(str.toUpperCase())

// //in Thuong 1 String ==> .toLowerCase
// console.log(upperString.toLowerCase())

// // lấy chuỗi con từ vị trí index a đến b, . substring(a,b) không lấy vị trí b
// console.log(str.substring(1,4)) 

// // lấy chuỗi con từ vị trí chỉ định tới cuỗi chuỗi , .substr(a,b) b là số phần tử mà mình muốn lấy
// console.log(str.substr(1,3))

//var fakeString = 'The thick folliage and intertwined vines made the hike nearly impossible.'

// in ra số lượng chữ "a" có trong fakeString
//var count = 1
// for (i = 0; i < fakeString.length; i++){
//     if(fakeString[i] === 'a'){
//         count ++
//     }
// }
// console.log(count)

// // vị trí xuất hiện cuối cùng chữ "in"

// for(i = 0; i < fakeString.length; i++){
//     if(fakeString.substr(i,2) === 'in'){
//         count = i
//         i++ 
//     }
// }
// console.log(count)

// đếm số từ

// for(i = 0; i < fakeString.length; i++){
//     if(fakeString[i] === ' '){
//         count ++
         
//     }
// }
// console.log(count)
// var fakeString = '123 4123 giang'
// count = 0
// for(i = 0; i <= fakeString.length; i++){
//     if(fakeString[i] === ' '){
//         count ++
//     }
// }
// if(count != 0){
//     count ++
// }
// console.log(count)


// funtion trong js
// 3 cách định nghĩa funtion trong js
// cách 1 -  function declaration
// function print(msg) {
//     console.log(msg)
// }
// function add(a,b) {
//     return a + b
// }
// //  print("hello")
//  print(add(5,10))

//  // cách 2 - function expression
//  var sub = function(a,b){ // anomymous function
//     return a - b
//  }
//  print(sub(5,10))

// // cách 3 - arrow function (=>)
// var sub = (a,b) => { 
//     return a - b
// }
// console.log(sub(10,5))

// // cách viết gọn nếu 1 dòng code hay return
// var sub = (a,b) => a - b + 10
// console.log(sub(10,5))


// sự khác nhau function
// console.log(add(10,5))
// //  declaration : có thể gọi function này trước khi định nghĩa
// function add(a,b) {
//     return a + b
// }
// // expression
// var sub = function(a,b){ // anomymous function
//     return a - b
// }
// console.log(sub(10,5))

// indexOf
// function p(msg){
//     console.log(msg)
// }
// var numbers = [100,1,2,3,5,69,100]
// //tìm vị trí xuất hiện đầu tiên của số 100
// //indexOf trả về vị trí xuất hiện(index) đầu tiên
// p(numbers.indexOf(100))
// //indexOf(giá trị cần tìm, tìm từ vị trí index) 
// p(numbers.indexOf(100,2))

var numbers = ['samsung','vittel','apple','nokia']
//kiểm tra

var number = 10
function hello(a) {
    // block
    //var number = undefined
    //hoisting
    console.log(number)
    var number = 20
}

hello()
console.log(number)