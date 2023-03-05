export const formatInteger = (num: string): string => {
	if (num === '') return ''
	return Math.floor(Number(num)).toString()
}

export const formatMoney = (num: string | number): string => {
	if (num === '') return ''

	if (Number.isInteger(Number(num))) {
		return num.toString()
	} else {
		return parseFloat(num.toString()).toFixed(2)
	}
}
