const _textEncoder = new TextEncoder()
const _textDecoder = new TextDecoder()

async function _writeToOutput(text : string) : Promise<void> {
    await Deno.stdout.write(_textEncoder.encode(text))
}

async function _readFromOutput(bufferSize : number) : Promise<string> {
    const buffer = new Uint8Array(bufferSize)
    await Deno.stdin.read(buffer)
    return _textDecoder.decode(buffer.copyWithin(0, 1))
}

export { _textEncoder, _textDecoder, _writeToOutput, _readFromOutput }
