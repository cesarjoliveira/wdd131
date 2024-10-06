function calculateWindChill(temperature, windSpeed, unit = 'F') {
    return unit === 'F' 
        ? (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16))
        : (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

// Function to check conditions and calculate wind chill
function checkAndCalculateWindChill(temperature, windSpeed, unit = 'F') {
    const conditionsMet = (unit === 'F' && temperature <= 50 && windSpeed > 3) || 
                          (unit === 'C' && temperature <= 10 && windSpeed > 4.8);
    
    if (conditionsMet) {
        return calculateWindChill(temperature, windSpeed, unit);
    } else {
        return "Conditions for wind chill calculation not met.";
    }
}

function calculateAndDisplay() {
    
    const temperature = 10; 
    const windSpeed = 5; 
    const unit = 'C'; 

    const result = checkAndCalculateWindChill(temperature, windSpeed, unit);
    
    
    document.getElementById('windChillDisplay').innerText = typeof result === 'number' ? `${result.toFixed(1)}º${unit}` : result;
    
    
    document.getElementById('temperatureDisplay').innerText = `${temperature}º${unit}`;
    document.getElementById('windSpeedDisplay').innerText = `${windSpeed} ${unit === 'C' ? 'km/h' : 'mph'}`;
}

window.onload = calculateAndDisplay;