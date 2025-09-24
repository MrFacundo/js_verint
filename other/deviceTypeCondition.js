// Display a message based on the device type
$(function () {
	const deviceType = "Desktop";
	const text = "Bitte scrollen Sie nach rechts um die gesamte Skala zu sehen.";
	const selector = ".txt1";


	if ("%DEVICE_TYPE%" == deviceType){$(selector).html(text)}
}); 