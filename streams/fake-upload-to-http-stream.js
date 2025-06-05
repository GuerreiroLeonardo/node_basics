import { Readable } from "node:stream";
export class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    if (i > 5) {
      this.push(null);
    } else {
      setTimeout(() => {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }, 1000);
    }
  }
}

fetch("http://localhost:3334", {
  method: "POST",
  body: new OneToHundredStream(),
  duplex: "half",
})
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    console.log("resposta:", text);
  })
  .catch((err) => {
    console.log(err);
  });
