const express = require('express');
const os = require('os');


const app = express();
const port = 3000;

app.get('/get-system-info', (req, res) => {
    // Obtener información del sistema
    const cpuUsage = os.loadavg()[0];
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;

    // Enviar la información como JSON
    res.json({
        cpuUsage: (cpuUsage / os.cpus().length) * 100,
        ramUsage: (usedMemory / 1024 / 1024)  // Convertir a megabytes
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
