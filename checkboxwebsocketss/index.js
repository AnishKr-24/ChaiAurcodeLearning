import http from 'node:http';
import express from 'express';
import { Server } from 'socket.io';

async function main() {
    const app = express();
    const server = http.createServer(app);

    const PORT = process.env.PORT ?? 8000;

    app.get('/health', (req, res) => res.json({ healthy: true }));

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

main();