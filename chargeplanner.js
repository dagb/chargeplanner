
function chargeTime(currentSOC, chargeLimit, power, unit, battery) {
	currentSOCkWh = 0;
	targetSOCKwH = 0;
	batteryAvailable = (battery - 5) - (battery - 5) * 0.0625;
	if (unit == "%") {
		currentSOCkWh = batteryAvailable * (currentSOC/100);
		targetSOCKwH = (chargeLimit/100) * batteryAvailable;
	} else {
		currentSOCkWh = batteryAvailable * (currentSOC/406);
		targetSOCKwH = batteryAvailable * (chargeLimit / 406);
	}

	remainingChargekWh = targetSOCKwH - currentSOCkWh;

	hours = remainingChargekWh / (power * 0.9);
	return hours;
}
