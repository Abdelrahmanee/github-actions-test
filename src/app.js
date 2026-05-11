
function greet(name = "World") {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(greet());
  
}

module.exports = { greet };

