import {document, define, html, render} from 'heresy-ssr';
import SpecialDIV from './components/div-log.js';

define('SpecialDIV', SpecialDIV);

// pre-rendered document
render(document, html`
  <html>
    <head>
      <title>An Isomorphic Heresy</title>
      <CustomElements/>
      <script type="module" src="js/bundle.js"></script>
      <script nomodule src="js/dumble.js"></script>
    </head>
    <body>
      <SpecialDIV/>
    </body>
  </html>
`);

// basic server example
import http from 'http';
import fs from 'fs';
http
  .createServer((req, res) => {
    if (/^\/js\//.test(req.url)) {
      res.writeHead(200, {
        'content-type': 'application/javascript'
      });
      res.end(fs.readFileSync('public/' + req.url));
    }
    else {
      res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
      });
      res.end(document.toString());
    }
  })
  .listen(8080, () => {
    console.log('http://localhost:8080/');
  });
