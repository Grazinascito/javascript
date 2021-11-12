// lexical scope é uma função que tem acesso ao pai do escopo
//closure tem acesso ao pai mesmo depois da função pai ter fechado
const parentFunction = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    console.log((myValue += 1));
  };

  return childFunction();
};

const result = parentFunction();
console.log(result)
