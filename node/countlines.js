import fs from 'node:fs/promises';

async function main() {
  const CHUNK_SIZE = 1048576;
  try {
    const filehandle = await fs.open('./data.txt', 'r');
    const newlineOffsets = [];
    let newlineCount = 0;
    {
      const buffer = new Uint8Array(CHUNK_SIZE);
      let byteOffset = 0;
      while (true) {
        const { bytesRead } = await filehandle.read(buffer, 0, CHUNK_SIZE, byteOffset);
        byteOffset += bytesRead;
        if (bytesRead === 0) {
          break;
        }
        for (let i = 0; i < buffer.length; ++i) {
          if (buffer[i] === 10) {
            ++newlineCount;
            newlineOffsets.push(i);
          }
        }
      }
    }
    console.log(newlineCount);
    console.log(newlineOffsets);
    {
      const buffer = new Uint8Array(CHUNK_SIZE);
      const startOffset = newlineOffsets[newlineCount - 15];
      console.log(startOffset);
      await filehandle.read(buffer, 0, CHUNK_SIZE, startOffset);
      console.log(new TextDecoder().decode(buffer));
    }
    filehandle.close();
  } catch (err) {
    console.log(err);
  }
}

main();
