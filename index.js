/**
 * //confirm("bonjour")
console.log("string")
var variable1="fatimazahra"
console.log(variable1)
var person={
    name: "fatimazahra",
    age: "30",
    ID: "EE454487"
}
console.log(person.ID)
console.log(7**2)

var numero=0
console.log(++numero)

var a=5
var b=6
if (a==b){
    console.log("equale")
}
else{
    console.log("not equale")
}
function greet (a){
    console.log (a)
}
greet('fatimazahra')
greet('hello')

function sum (a,b){
   return a+b
}
var r= sum (10,5)
console.log (r)

function decodecolor (code){
    switch (code){
        case 1: 
        console.log ("red"); break;
        case 2:
            console.log("yellow"); break;
            case x:
                console.log('pink'); break;
                default:
                    console.log('unknown code');
    }
}
decodecolor(1)

var tab = [2, 4, 5, 8]
for (let index = 0; index < tab.length; index++) {
    tab[index]+=2;  
}
console.log (tab)
 */

/*const posts = [
    {
        title: 'post 1',
        img: 'image',
        owner: 'fatimazahra',
    },

    {
        title: 'post 2',
        img: 'image',
        owner: 'mouad',
    }

]
console.log(posts [1].owner)
*/

function el (){
    var b= document.getElementById('btn')
    console.log(b)
    b.style.backgroundColor= 'red'

    var email= document.getElementById('email')
   

    var number1= document.getElementById('un')
    var number2= document.getElementById('deux')

    var sum= Number(number1.value)+Number(number2.value)
   

    var password= document.getElementById('password')
    if(password.value.length >=6 && password.value.length <=12){
        alert('confirm')
    }
    else{
        alert('error')
    }
}

function test(){
    var container= document.getElementById('container')
    var task= document.getElementById('task')
    var para= document.createElement('p')
    para.innerText= task.value
    container.appendChild(para)
    task.value=''

    para.addEventListener('click', function() {
        para.style.textDecoration= 'line-through'
    })
    para.addEventListener('dblclick', function(){
    container.removeChild(para)
    })
}