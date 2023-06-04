"use client";

import React from "react";

function Resume() {
  return (
    <div>
      <button className="p-2 text-black bg-green-300 rounded-md">
        <a href="./resume.pdf" download>
          My Résumé
        </a>
      </button>
    </div>
  );
}

export default Resume;
