import express from "express";
import cors from "cors";
import ReactDOM from "react-dom/server";
import * as React from 'react';
import App from '../shared/App';

const app = express();

app.use(cors());
app.use(express.static("dist"));

app.get("*", (req, res, next) => {
    const markup = ReactDOM.renderToString(
        <App />
    )
    res.send(`
<!DOCTYPE html>
<html>
    <head>
        <title>base React + SSR shop</title>
            <script src="/bundle.js" defer></script>
            <link href="/main.css" rel="stylesheet">
    </head>
    <body>
        <div id="app">${markup}</div>
    </body>
</html>
`);
});

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});