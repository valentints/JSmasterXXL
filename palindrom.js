const FizzBuzz = n => {
	for (let i = 0; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0 ) {
			console.log('FizzBuzz')
		}
		else if (i % 3 === 0) {
			console.log('Fizz')
		}
		else if (i % 5 === 0) {
			console.log('Buzz')
		}

		else  {
			console.log(n)
		}
	}
}

console.log(FizzBuzz(100));