const row = document.querySelector('.row');


for(i=1; i <= 100; i++){
    const box = document.createElement('div');
    box.className = 'box';
  if((i % 3 === 0) && (i % 5 === 0)){
    box.classList.add('fizzBuzz');
    box.innerHTML = "FIZZBUZZ";
    row.append(box);
    console.log("Fizz Buzz");
  } else if(i % 3 === 0){
    box.classList.add('fizz');
    box.innerHTML = "fizz";
    row.append(box);

    console.log("Fizz");
  } else if (i % 5 === 0){
    box.classList.add('buzz');
    box.innerHTML = "buzz";
    row.append(box);
    console.log("Buzz")
    
  } else{
    box.innerHTML = i;
    row.append(box);
    console.log(i);
  }
}