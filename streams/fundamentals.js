// Netflix & SpotifyAdd commentMore actions

// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000
// POST /upload import.csv

// 10mb/s - 100s

// 100s -> Inserção no banco de dados

// 10mb/s -> 10.000

// Readable Streams (CSV) / Writable Streams (Netflix)

// Streams --> Fluxo de dados

// process.stdin.pipe(process.stdout);

import { Readable, Transform, Writable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    if (i > 100) {
      this.push(null);
    } else {
      setTimeout(() => {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }, 1000);
    }
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream().pipe(new InverseNumberStream()).pipe(new MultiplyByTenStream());
