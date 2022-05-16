const arr = [12, 6, 43, 5, 7, 2, 5];
const rotateByOne = arr => {
   for(let i = 0; i < arr.length-1; i++){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
   };
}
Array.prototype.rotateBy = function(n){
const { length: l } = this;
   if(n >= l){
       return;
   };
   for(let i = 0; i < n; i++){
       rotateByOne(this);
   };
};
const a = [1,2,3,4,5,6,7];
a.rotateBy(2);
console.log(a);