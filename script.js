document.addEventListener('DOMContentLoaded', function(){
    const temp = document.getElementById('temperature');
    const btn = document.getElementById('convert');
    const result = document.getElementById('result');
    
    btn.addEventListener('click', function(){
        const tempValue = parseFloat(temp.value);
        
        if (isNaN(tempValue)) {
            result.textContent = 'Invalid Input';
            return;
        }
        
        const tempUnit = temp.value.toLowerCase().includes('f') ? 'Fahrenheit' : 'Celsius';
        let res, target;
        
        if (tempUnit === 'Fahrenheit') {
            res = ((tempValue - 32) * 5 / 9).toFixed(2);
            target = '°C'; 
        } else {
            res = ((tempValue) * 9 / 5 + 32).toFixed(2);
            target = '°F'; 
        }
        
        result.textContent = `${res} ${target}`;
    });
});
