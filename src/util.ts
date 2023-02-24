export const formatDecimal = (num: string | number): number => {
	return Number(parseFloat(num.toString()).toFixed(2))
}
