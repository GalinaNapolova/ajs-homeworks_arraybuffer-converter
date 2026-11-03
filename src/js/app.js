import ArrayBufferConverter from './arrayBufferConverter';
import getBuffer from './getBuffer';

const converter = new ArrayBufferConverter();
const buffer = getBuffer();

converter.load(buffer);
console.log('Результат конвертации буфера:', converter.toString());
