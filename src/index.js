import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// For parallax effect on home-hero bg...

const parallax = document.getElementsByClassName("parallax-effect");

window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    parallax.item(0).style.backgroundPositionY = offset * -0.2 + "px";
})