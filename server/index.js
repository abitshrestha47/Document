import { Server, Socket } from 'socket.io';
import 'dotenv/config.js';
import { connectDB } from './config/db.js';
import { getDocument,updateDocument } from './controller/documentController.js';

const io=new Server(9000,{
    cors:{
        origin:`http://localhost:5173`,
        methods:['GET','POST']
    }
});

connectDB();

io.on('connection',socket=>{
    socket.on('get-document',async documentId=>{
        const document=await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document',document.data);
        socket.on('send-changes',delta=>{
            socket.broadcast.to(documentId).emit('receive-changes',delta);
        });
        socket.on('save-document',async data=>{
            await updateDocument(documentId,data);
        })
    });
});