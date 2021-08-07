import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { __port__ } from "./lib/constants";
import { GameState } from "./lib/types";

const app = express();
const server = createServer(app);
const io = new Server(server);

let rooms: Record<string, GameState> = {};

server.listen(__port__, () =>
	console.log(`Server started at http://localhost:${__port__} !`)
);

io.sockets.on("connection", (socket) => {
	console.log(`Client [ ${socket.id} ] joined`);

	socket.on("disconnect", () =>
		console.log(`Client [ ${socket.id} ] disconnected`)
	);
});
