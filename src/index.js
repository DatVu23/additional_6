module.exports = function zeros(expression) {
  let statements = expression.split('*');
  let array = [];
  let fifth = 0, second = 0, tenth = 0;

  function isEven(n) {
    return !(n % 2);
  }

  for(let statement of statements) {
    if(statement.endsWith('!!')) array = calculate(statement, 2);
    else if(statement.endsWith('!')) array = calculate(statement, 1);

    fifth += count(array, 5);
    second += count(array, 2);
    tenth += count(array, 10);
  }
  return tenth + Math.min(second, fifth);
}

function count(array, n) {
  let count = 0;
  for(let number of array) {
    if(n!==10) {
      while(true) {
        if((number % n === 0) && (number % 10 !== 0)){
           count++;
           number = number / n;
           continue;
        }
        if(number == 50) {
           count++;
           number = number/n;
        }
        else break;
      }
    } else {
      while(true) {
        if(number % n === 0) {
           count++;
           number = number/n;
           continue;
        } else break;
      }
    }
  }
  return count;
}

function calculate(statement,pow) {
  let numb = statement.replace(new RegExp('!','g'),'');
  let array = [];
  for(let n = numb; n > 0; n -= pow) {
    array.push(n);
  }
  return array;
}
