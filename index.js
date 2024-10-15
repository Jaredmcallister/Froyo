//console.log ("hello")
// Do a prompt requiring the visitor to enter a list of comma-separated froyo flavors
//type in vanilla, vanilla, vanilla, strawberry, coffee, coffee
// make what was entered into an Array
// have it list what was given and the value of each key
// 
const froyo = prompt(`Give me some Froyo flavors separated by a comma`,`vanilla,vanilla,vanilla,strawberry,coffee,coffee`);
//console.log (froyo);
const froyoFlavor = froyo.split(`,`);
//console.log(froyoFlavor);
const flavors = {};

for (let i = 0; i < froyoFlavor.length; i++) {
  if (froyoFlavor[i] in flavors){
    flavors[froyoFlavor[i]] += 1;
    
  }else {
    flavors[froyoFlavor[i]] = 1;
  }
  
//console.log(froyoFlavor[i]);  


//console.log(froyoCount);
//if (froyoVariety[froyoFlavor]){
  //froyoVariety[froyoFlavor]++
  
//}
//else froyoFlavor[froyoFlavor] = 1;
}
console.log(flavors.coffee);
console.log (flavors);
//console.log(froyoFlavor);
//{
  //vanilla: 3, 
  //strawberry: 1,
  //coffee: 2
//}
