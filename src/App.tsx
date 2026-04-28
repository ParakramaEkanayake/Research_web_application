import { useEffect } from "react";

export default function App() {
  useEffect(() => {
  // Only redirect if we aren't already there to prevent loops
  if (window.location.pathname !== "/index.html") {
    window.location.href = "/index.html";
  }
}, []);

  return null;
}