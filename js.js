//Write a function called repeatStr which repeats the given string string exactly n times.
function repeatStr(n, str){
var s = '';
for (var i = 0; i < n; i++){
s += str;
}
return s;
}
repeatStr(6, 'qwe')//"qweqweqweqweqweqwe"