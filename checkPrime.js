function checkPrime(max) {
  const prime = [];

  for (let num = 2; num < max; num++) {
    let isprime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) isprime = false;
    }
    if (isprime) prime.push(num);
  }
  return prime;
}

checkPrime(1000);
