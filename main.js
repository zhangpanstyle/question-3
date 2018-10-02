function main(str) {
var sum = 0;
for(var i = 0; i < str.length; i++){
		var a = parseInt(str[i]);
		sum += a;
		}
return sum
}

var str = "123";
var str1="102"
console.log(main(str));
console.log(main(str1));