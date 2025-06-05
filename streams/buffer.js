// Buffer is a way to handle binary data in Node.js. It is defined as a space in the memory.
// 1024 bytes = 1kb
// 1024kb = 1mb
// 1024mb = 1gb
// 1024gb = 1tb
// 1024tb = 1pb
// 1024pb = 1eb
// 1024eb = 1zb
// 1024zb = 1yb

const buffer = Buffer.from("Hello");

console.log(buffer);
console.log(buffer.toJSON());
