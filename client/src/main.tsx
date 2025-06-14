import { createRoot } from "react-dom/client";
import { Analytics } from '@vercel/analytics/react';
import App from "./App";
import "./index.css";

// Add Font Awesome CSS
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesome);

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);