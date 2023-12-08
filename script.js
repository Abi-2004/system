document.addEventListener('DOMContentLoaded', function () {
    // Función para obtener y mostrar la información del sistema
    function updateSystemInfo() {
        // Obtener información del sistema mediante una solicitud AJAX
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var systemInfo = JSON.parse(xhr.responseText);

                // Actualizar la información del CPU
                document.getElementById('cpu-info').innerText = 'Usage: ' + systemInfo.cpuUsage.toFixed(2) + '%';

                // Actualizar la información de la RAM
                document.getElementById('ram-info').innerText = 'Used: ' + systemInfo.ramUsage.toFixed(2) + ' MB';
            }
        };

        // Ruta del script del servidor que proporciona la información del sistema
        xhr.open('GET', '/get-system-info', true);
        xhr.send();
    }

    // Actualizar la información cada 5 segundos
    setInterval(updateSystemInfo, 5000);

    // Llamar a la función por primera vez
    updateSystemInfo();
});
