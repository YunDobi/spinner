let circle = 0;
const shape = ['|','/','-','\\', '|','/','-','\\']

for (let item of shape) {
  setTimeout(()=> {
    process.stdout.write(`\r${item}   `);
  }, circle + 100)
  circle += 200;
}
