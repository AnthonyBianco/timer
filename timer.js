const action = (data) => {
  const beepTime = [];
  if (typeof data !== "object") {
  return;
  }
  for (let i = 0; i <= data.length; i++){
    if(data[i] >= 0) {
    setTimeout(() => { 
    process.stdout.write('\x07');
    }, data[i] * 1000);
    }
  }
}
console.log(action([1,2,3,4]));
