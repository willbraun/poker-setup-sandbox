export const formatDecimal = (num: string | number): string => {
	if (num === '') return ''
	return parseFloat(num.toString()).toFixed(2)
}

export const formatInteger = (num: string | number): string => {
	if (num === '') return ''
	return Math.floor(Number(num)).toString()
}
