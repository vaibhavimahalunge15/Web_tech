import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Editor = () => {
  const { documentId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    socket.emit("join-document", documentId);

    socket.on("document-data", (data) => setContent(data.content));

    return () => socket.emit("leave-document", documentId);
  }, [documentId]);

  const handleChange = (e) => {
    setContent(e.target.value);
    socket.emit("send-changes", { documentId, content: e.target.value });
  };

  return <textarea value={content} onChange={handleChange} rows="20" cols="80"></textarea>;
};

export default Editor;