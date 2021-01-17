import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="contact">
        <h3 style={{ margin: "10px" }}>Contact:</h3>
        <br />
        <div className="information">
          <h3>Mohammed Jeelan</h3>
          <h3>phone no : 9845467219</h3>

          <h3>Mohammed Irfan</h3>
          <h3>phone no : 8892441553</h3>
        </div>
      </div>
    </div>
  );
}
