const arr = [1,2,3,4,5,6];

function customReduce(arr,reduceFn){
    let end = 0;
    for(var i=0;i<arr.length;i++){
        end = reduceFn(end,arr[i]);
    }
    return end;
}
console.log(customReduce(arr,(acc,curr)=>acc+curr));