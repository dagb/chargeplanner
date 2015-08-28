
function chargeTime(currentSOC, chargeLimit, power, unit) {
	currentSOCkWh = 0;
	targetSOCKwH = 0;
	if (unit == "%") {
		currentSOCkWh = 74 * (currentSOC/100);
		targetSOCKwH = (chargeLimit/100) * 74;
	} else {
		currentSOCkWh = 74 * (currentSOC/406);
		targetSOCKwH = 74 * (chargeLimit / 406);
	}

	remainingChargekWh = targetSOCKwH - currentSOCkWh;

	hours = remainingChargekWh / (power * 0.9);
	return hours;
}
