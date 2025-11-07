export const age = () => {
	const birthDate = new Date(2000, 4, 22); // 22 avril 2000
	const today = new Date();
	let myAge = today.getFullYear() - birthDate.getFullYear();
	const monthDiff = today.getMonth() - birthDate.getMonth();

	if (
		monthDiff < 0 ||
		(monthDiff === 0 && today.getDate() < birthDate.getDate())
	) {
		myAge--;
	}

    return myAge;
};
