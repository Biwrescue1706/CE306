import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
import Mylab from './Mylab';
// import Phuwanat from './Phuwanat';
import reportWebVitals from './reportWebVitals';
// import MyApp from './MyApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mylab name="John" age={23} />
    <Mylab name="Jane" age={30} />
    <Mylab name="Doe" age={28} />
    <Mylab name="Guest" age={20} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
