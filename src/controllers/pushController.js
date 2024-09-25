const WebSocket = require('ws');
const http = require('http');

const server = http.createServer(); // Crea un servidor HTTP
const wss = new WebSocket.Server({ server }); // Crea el servidor WebSocket

// Maneja conexiones WebSocket
wss.on('connection', (ws) => {
    console.log('Cliente WebSocket conectado');

    ws.on('message', (message) => {
        console.log('Mensaje recibido:', message);
    });
});


exports.sendWebSocketMessage = (req, res) => {
    console.log('wss:', wss); // Depuración para ver si wss está definido
    const { message } = req.body;

    if (!wss) {
        return res.status(500).send('WebSocket server no está disponible');
    }

    const payload = JSON.stringify({ title: 'Notificación', body: message });

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(payload);
        }
    });

    res.status(200).send('Mensaje enviado a través de WebSocket');
};

server.listen(3001, () => {
    console.log('Servidor WebSocket escuchando en el puerto 3000');
});