import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Redirect to the static HTML website
    window.location.href = "/index.html";
  }, []);

  return null;
}