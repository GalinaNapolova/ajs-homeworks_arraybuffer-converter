import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test('должен корректно конвертировать ArrayBuffer в строку JSON', () => {
  const converter = new ArrayBufferConverter();
  const buffer = getBuffer();
  
  converter.load(buffer);
  const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  
  expect(converter.toString()).toBe(expectedString);
});

test('должен возвращать пустую строку, если буфер не был загружен', () => {
  const converter = new ArrayBufferConverter();
  expect(converter.toString()).toBe('');
});
