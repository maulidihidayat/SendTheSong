import React from "react";

export default function Footer() {
  return (
    <div className="p-10 ">
      <ul className="flex  justify-center gap-4 font-inter text-sm ">
        <li>TikTok</li>
        <li>Feedback</li>
        <li>Support</li>
      </ul>
      <p className="flex items-center justify-center mt-2 text-sm text-gray-400  font-inter ">
        &copy; {new Date().getFullYear()}. Send The Songs. All rights reserved.
      </p>
    </div>
  );
}
