const arg = process.argv.slice(2).map((a)=>Number(a)).sort((a,b)=>a-b)


const timer = (arg1)=>{
  for(let i of arg1){
    if(!isNaN(i)&& i>0){
      setTimeout(()=>{
        process.stdout.write('\x07');
       }, i * 1000)
    }
  }
}




//  const timer = (arg1)=>{
//  for(let i of arg1){
//  if(i <= 0){
//    continue
//  }  else if (isNaN(i)) {
//      continue
//  } else {
//    setTimeout(()=>{
//     process.stdout.write('\x07');
//    }, i * 1000)
//  }
// }
// }
  
 // if (timer = NaN){
//      return 'A number please'
//     } else if (timer <= 0 ){
//       return 'Postive number please'
//     } process.stdout.write(i)
//   } counter
// counter ++
// }
timer(arg)
