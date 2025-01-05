const Document = require("../models/Document");

const socketManager = (io) => {
  io.on("connection", (socket) => {
    console.log("New connection established:", socket.id);

    socket.on("join-document", async (documentId) => {
      socket.join(documentId);

      const document = await Document.findById(documentId);
      if (document) {
        socket.emit("document-data", document);
      }
    });

    socket.on("send-changes", async ({ documentId, content }) => {
      await Document.findByIdAndUpdate(documentId, { content });
      socket.to(documentId).emit("receive-changes", content);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

module.exports = socketManager;