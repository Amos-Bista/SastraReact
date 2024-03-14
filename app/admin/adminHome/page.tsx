"use client";
import React, { useState } from "react";

import AdminNAV from "@/components/adminNAV";

const AdminHomePage = () => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("pageText", text);
    // router.push("/");
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminHomePage;
