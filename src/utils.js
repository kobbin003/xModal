export const is10DigitNumber = (num) => {
	const regex = /^(\d){10}$/;

	return regex.test(num);
};

export const isFutureDate = (date) => {
	const now = new Date();
	const toCompareDate = new Date(date);

	return now < toCompareDate;
};
