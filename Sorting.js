function sorting(arg) {
var rem = 0

function sort(index){
    oldarr=arg
    var firstnum = Number(arg[index])
    var secondnumplus = Number(arg[index+1])
    if(firstnum > secondnumplus) {
        arg[index] = secondnumplus
        arg[index+1] = firstnum
    } else {rem+=1;}
}

function sortprocess(){
	rem = 0
	for (i = 0;i<arg.length-1;i++) {
		   sort(i)
	}
}

var loop = setInterval(function(){
	if(rem==arg.length-1){
		return output
		clearInterval(loop)
	} else {
		sortprocess()
	}
})
}


// example: sorting([1, 5, 7, 9, 8, 4, 3, 10, 2, 6])
