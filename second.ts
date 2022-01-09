const fs = require('fs')
function permutations(n:number):number{
    const fileName: string = 'permutations.txt';
    fs.writeFile(fileName,'',err => {
        if(err){
            console.error(err); 
            return;
        }
    });
    var digits: Number[] = [];
    for (var i = 0; i< n; i++) {
        digits.push(0);
    }
    for (var i = 1; i<=n; i++) {
        digits.push(i);
    }
    var output: Set<string> = new Set<string>();
    var used:Number[] = [];
    function perm(innerDigits:Number[]){
    var temp:Number;
        for (var i = 0; i < innerDigits.length; i++) {
            temp = innerDigits.splice(i,1)[0];
            used.push(temp);
            if(innerDigits.length == 0){
                output.add(used.slice().toString());
            }
            perm(innerDigits);
            innerDigits.splice(i,0,temp);
            used.pop();
        }
        return output;
    }
    var toWrite:Set<string> = perm(digits);
    toWrite.forEach(element => {
        try{
            fs.appendFileSync(fileName,element.toString()+'\n');
        }
        catch(err){
            console.error(err);
            return;
        }
    });
    console.log(toWrite);
    var count: number = 0;
    fs.createReadStream(fileName).on('data', function(chunk) {
    for(var l=0; l < chunk.length; l++)
        if (chunk[l] == 10) count++;
    }).on('end', function(){
        console.log(count);
    });
    return count;
}

console.log('lines: '+permutations(5));
