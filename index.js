
// 變數前綴(var) 變數名稱(自定義) = 賦予的值
var a = 1
var name = "jack"

// 型別 ( 字串 String ) '' or "" 包住內容 ＝ 字串
'this is an apple'
'jack'
'123'

// 型別 ( 數字 Number ) 1 2 3 4 5 ....... 1000000 0.1 0.2 0.3
12345678
0.1
0.2
0.3

// 型別 ( 布林 boolean ) 只會有兩種形式 ( true(是對的), false(是錯的) )
// 判斷的時候 會比較常用到他們
true
false

// 運算邏輯 + - x /
// ( - x / ) 只能作用在 形態是 Number

// 特殊情況 + 可以作用在 String 和 Number
// 字串相加 就是會合併 相加的字串（常用到的技巧）用來用動態新增 html 標籤
var li_1 = '<li>123</li>'
var li_2 = '<li>456</li>'
var li_3 = '<li>456</li>'
var li_4 = '<li>456</li>'
var htmlString = li_1 + li_2 + li_3 + li_4

var first_name = 'jack'
var last_name = 'cheng'
var all_name = first_name + last_name

// Number 的加減乘除 ( + - * / )
var a = (1 + 2) * 6
var b = (1 + 2) / 3 * 6

// 當 Number + String
// JS 弱型別語言
var c = 'jack' +  123  // 在編譯的過程中 123 會被強制轉為字串
var d = 123 + 'jack'
var e = 123 + '123'

var f = '123456' // 一個帶數字的字串 前方加上 +（正整符號）-> 數字的字串就會強制轉為 Number
var g = 234567
var j = f + g

// true false
// and (而且) => &&
// or (或者) => ||

// 條件判斷的時候 需要使用 && (嚴苛) 還是 || (寬鬆)
// ＆＆ and
// True True ==> Ture
// True False ==> False
// False True ==> False
// False False ==> False

// || or
// True True ==> True
// False True ==> True
// True False ==> True
// False Fasle ==> False


// 型別 (object) 物件

// 陣列 [] array 是一個存放資料的空間
// 同性質的東西 通常就會放在同一個陣列 比如 姓名 性別 年齡

var array = [] // [] == 空陣列
var name_arr = ['Jack', 'Ann', 'Jessica']
var sex = ['男', '男', '女']
var age = [30, 26, 20]

// 讀取陣列的值 
// 陣列他的索引值是從 0 開始算
name_arr[0] // 'jack'
sex[2] // '女'


// Jessica 性別是: 女 年齡是: 20
console.log(name_arr[2]+'性別是:'+sex[2]+'年齡是:'+age[2])






// 定義三個陣列
// 第一個陣列 是 三個學號 001 , 002 , 003
// 第二個陣列 是 學生的姓名 '小明', '', ''
// 第三個陣列 是 學生的期中考平均成績 60, 90, 59

// 小明的學號是: '' 他的期中考成績為: ''
// 三個學生的敘述用 console.log


// 進階練習 
// 多加一個陣列 老師加分 10, 5, 15

// 用 console.log() 敘述出
// 小明的學號是: '' 他的期中考成績加分之後為: ''















