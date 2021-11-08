export default function csrToUpperCase(string) {
  if (!string.includes('csr')) {
    return string;
  }

  const words = string.split(' ');
  const csrIndex = words.indexOf('csr');
  words[csrIndex] = 'CSR';
  return words.join(' ');
}
