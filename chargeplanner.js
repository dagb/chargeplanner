
var batteryInfo = {};
batteryInfo["60"] = { tkm: "250", "available" : (55) - (55) * 0.0625};
batteryInfo["70"] = { tkm: "320", "available" : (65) - (65) * 0.0625};
batteryInfo["85"]	= { tkm: "410", "available" : (80) - (80) * 0.0625};
batteryInfo["90"]	= { tkm: "460", "available" : (85) - (85) * 0.0625};

function chargeTime(currentSOC, chargeLimit, power, unit, battery) {
	currentSOCkWh = 0;
	targetSOCKwH = 0;
	var batteryData = batteryInfo[battery];
	if (unit == "%") {
		currentSOCkWh = batteryData.available * (currentSOC/100);
		targetSOCKwH = (chargeLimit/100) * batteryData.available;
	} else {
		currentSOCkWh = batteryData.available * (currentSOC/batteryData.tkm);
		targetSOCKwH = batteryData.available * (chargeLimit / batteryData.tkm);
	}

	remainingChargekWh = targetSOCKwH - currentSOCkWh;

	hours = remainingChargekWh / (power * 0.9);
	return hours;
}
