/*console.log("again")
jdks
*/

//template literals embedd expressions in a sring
// e hav to use `` {backticks}


/*alert("this is the last chance")
alert("this is the  chance")
let a={
    name:"kamal",
    age:21,
    1:23,
    marks:[32,23,3,3]
};

//console.warn("this is an error msg")
/*

let tic_tac_toe=[["x o"],[" x "],['o x']]


console.log(tic_tac_toe)


let arr=[1,2,3,3,4,5]
for (let a of arr){
    console.log(a)
}

aw={
    name:{

    }
}


while(2){
    let user=prompt("enter ur wanted max number")

    if(user=="quit"){
        break;
    }

    console.log("your guesssed number is : ",Math.floor(Math.random()*user)+1)
}


let calc={
    m:67,
    p:23,
    sum(m,p){
        console.log(this.m+p);
    }
}
calc.sum(7,8)
//
let hello=(a,b)=>(a+b);
*/

// console.log("HI there!!");

// let fun=()=>{
//     console.log("kaamal");
// }

// // setTimeout(fun, 2000); //2000 millisecond= 2sec
// // console.log("Welcome..")

// let id=setInterval(fun, 2000);

// let sq=()=>{console.log("Hello World!!")};


// let id=setInterval(sq,2000);
// //clearTimeout(id,10000)
// setTimeout(()=>{
//     clearInterval(id);
// } ,10000)

// let arr=[20,4,30,40]

// let ans=arr.reduce((res,el)=>{
//     if(el<res){
//         return el;
//     }
//     else{
//     return res;
//     }
//    // return res+el;
// })


// let fun=(a,b=20)=>{
//     return(a+b);
// }

// // SPREAD ... iterable
//  let arr=[20,4,30,40]
//  Math.min(...arr)



// in JS very fn will hav a in-built variable named arguments


// rest is opposite of spread 
// means tgis will add up argumnents into a single thing

// function sum(ms,...args){
//     return args.reduce((el,sum)=>sum+el)
// }


// //Destructuring
// let n=[1,2,3,4,"sksn","fdjhg"]
// let [f,s,...kam]=n;
// console.log("hi")

// let s={
//     name:"kamal",
//     age:32,
//     comp:"JPMC"
// };

// let {name,comp:future,city="Hyde" }=s

// let btn = document.querySelector("button")

// fn=()=>{
//    // alert("CLICKEEEEEEee")
//     console.log("CLICKed")
// }

// fn2=()=>{
//     console.log("Area")
// }
// fn3=()=>{
//     console.log("Area lef")
// }

// fn4=()=>{
//     alert("DOUb le")
// }

// // btn.onclick=fn;
// // btn.onmouseenter=fn2;
// // btn.onmousedown=fn2;

// // btn.addEventListener("click",fn);
// // btn.addEventListener("click",fn3);

// // btn.addEventListener("mouseenter",fn2);

// btn.addEventListener("dblclick",fn4)

let btn=document.querySelector("button")

fn1=()=>{
    console.log("color generator")
}

getRandomColor=()=>{
    // RGB values lies between 0 to 255
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let finalColor=`rgb(${r},${g},${b})`

    return finalColor
}



btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();
    h3.innerText=randomColor;
    let div=document.querySelector("div");
    div.innerText=""
    div.style.backgroundColor=randomColor;
})