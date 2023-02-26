export const formatDecimal = (num: string | number): string => {
	return parseFloat(num.toString()).toFixed(2)
}

export const formatInteger = (num: string | number): string => {
	return Math.floor(Number(num)).toString()
}

// const isNegative = (num: string | number): boolean => {
// 	return (Number(num) < 0)
// }
