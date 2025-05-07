import {WebSocketServer} from "ws"
import {Client} from "@repo/db/client"

const wsServer = new WebSocketServer({
    port : 8001
})

wsServer.on("connection", async(socket) => {

    console.log("A socket connected!");
    
    try {
        socket.send("client connected!");
    
        await Client.user.create({
            data : {
                username : `username-${Math.random().toString()}`,
                password : `password-${Math.random().toString()}`,
            }
        })
    
        socket.send("client creds added to db!")
    } catch (error) {
        console.error("Error eshtablishing connection!", error);
        
    }

})