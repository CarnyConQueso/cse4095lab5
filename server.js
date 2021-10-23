const body = require('body-parser');
const express = require('express');

const app1 = express();
const app2 = express();
const app3 = express();

app1.use(body.json());
app2.use(body.json());
app3.use(body.json());

const handler = serverNum => (req, res) => {
  console.log('server ${serverNum}', req.method, req.url, req.body);
  if (serverNum == 1) {
    console.log("This is Server 1!");
    var i, x; 
    for (i = 0; i < 25*200*1000*1000; i++) {
        x = x + 1;
    }
    console.log("Server 1 is done!");
  }
  if (serverNum == 2) {
    console.log("This is Server 2");
    console.log("         .:'");
    console.log("      __ :'__");
    console.log("   .'`__`-'__``.");
    console.log(" :__________.-'");
    console.log(" :_________:");
    console.log("   :_________`-;");
    console.log("    `.__.-.__.'");
    console.log("Server 2 is done!");
  }
  if (serverNum == 3) {
    console.log("This is Server 3");
    console.log(" +--------------+");
    console.log(" |.------------.|");
    console.log(" ||            ||");
    console.log(" ||            ||");
    console.log(" ||            ||");
    console.log(" ||            ||");
    console.log(" |+------------+|");
    console.log("Server 3 is finished");

  }
  res.send('Hello from server ${serverNum}!');
};

app1.get('*', handler(1)).post('*', handler(1));
app2.get('*', handler(2)).post('*', handler(2));
app3.get('*', handler(3)).post('*', handler(3));

app1.listen(3000);
app2.listen(3001);
app3.listen(3002);
