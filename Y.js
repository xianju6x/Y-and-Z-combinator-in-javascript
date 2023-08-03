function fib(n) {
	if(n == 0 || n == 1) {
		return 1
	}
	return fib(n - 1) + fib(n - 2)
}

console.log(fib(8))

const Y = f => (x => f(x(x)))(x => f(x(x)))
const Y_ = f => (x => x(x))(x => f(y => x(x)(y)))
const Z = f => (x => f(y => x(x)(y)))(x => f(y => x(x)(y)))
const Z_ = f => (x => f(x(x)))(x => f(y => x(x)(y)))
const Z__ = f => (x => f(y => x(x)(y)))(x => f(x(x)))

//console.log(Y(fib => n => n == 0 || n == 1? 1: fib(n-1) + fib(n-2))(8))
console.log(Y_(fib => n => n == 0 || n == 1? 1: fib(n-1) + fib(n-2))(8))
console.log(Z(fib => n => n == 0 || n == 1? 1: fib(n-1) + fib(n-2))(8))
console.log(Z_(fib => n => n == 0 || n == 1? 1: fib(n-1) + fib(n-2))(8))
//console.log(Z__(fib => n => n == 0 || n == 1? 1: fib(n-1) + fib(n-2))(8))
