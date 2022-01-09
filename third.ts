function sortByHoles(toSort:number[]):number[]{
    var result:Map<number,number[]> = new Map<number,number[]>();
    const holesArray:number[] = [1,0,0,0,1,0,1,0,2,1];
    for (var index = 0; index < toSort.length; index++) {
        var element = toSort[index];
        var digitList:number[];
        var sum:number = 0;
        do {
            var zeroes:number = holesArray[element%10];
            sum += zeroes;
            element = Math.floor(element/10);
        } while ( element >= 1)
        if(result.has(sum)){
            digitList = result.get(sum);
        }else{
            digitList = [];
        }
        digitList.push(toSort[index]);
        result.set(sum,digitList);
    }
    result = new Map(Array.from(result).sort(([a],[b])=> {
        return a>b ? 1: (a<b ? -1 : 0);
    }));
    var sorted: number[] = [];
    result.forEach(element => {
        element.forEach(inner=>{
            sorted.push(inner);
        });
    });
    return sorted;
}

var array:number[] = [1,2,890,980,8];
console.log(sortByHoles(array));
