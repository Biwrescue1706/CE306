function cricumference(readius){
    return 2 * Math.PI * readius ;
}
function cricumArea(readius){
    return Math.PI * readius * readius;
}
function rectangulrArea(width, height){
    return width * height;
}
function triangleArea(width, height){
    return rectangulrArea (width * height)/2;
}

const r1 =5 , r2 = 55 ;
const x = cricumference(5);
const y = cricumArea(55);
console.log('thr cricumference of circle with readius :  ' + r1 + ' is ' + x)
console.log('thr area of circle with readius :  ' +  r2 + ' is ' + y)

for (let i = 3 ; i < 6 ; i++){
    console.log('the area of circle with radius : '+ i + ' is ' + cricumArea(i));
}

function average(){
    // console.log(arguments);
    // console.log('The number is '+ arguments.length);
    let sum = 0 ;
    for (i = 0 ; i <arguments.length; i++){
        console.log('arguments at i : ' + i + ' is ' + arguments[i])
        sum += arguments[i];
    }
    return sum /arguments.length;
}


console.log(average(1));
console.log(average(2,3,4,5));
console.log(average(4,3432,23565,654646,232));