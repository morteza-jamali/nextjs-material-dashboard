export default (name: any = '') =>
  name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v: any) => v && v[0].toUpperCase())
    .join('');
