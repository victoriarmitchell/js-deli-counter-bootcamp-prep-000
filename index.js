function takeANumber(line,name) {
let katzDeliLine = [];
for (let i = 0; i < line; i++) {
  if (i === 0) {
  return `Welcome, ${name}. You are 1st in line.`;
  } else {
    return `Welcome, ${name}. You are ${i+1}th in line.`;
  }
}
}