import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/AppContext';
import { MoralisProvider } from "react-moralis";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MoralisProvider
      serverUrl="https://9srnar891yfo.usemoralis.com:2053/server"
      appId="BJ2TKeyH7s7ywXf8ZGXwWxAhZkF9vV7mnlr5FW1o"
    >
    <AppProvider>
        <App />
    </AppProvider>
    </MoralisProvider>
);

// For parallax effect on home-hero bg...

const parallax = document.getElementsByClassName("parallax-effect");

window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    parallax.item(0).style.backgroundPositionY = offset * -0.2 + "px";
})