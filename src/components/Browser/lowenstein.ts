export function lowensteinSort(arr: string[], str: string) {
  const map = new Map<string, number>();
  arr.forEach((el) => {
    map.set(
      el,
      lowensteinEqual(el.toLocaleLowerCase(), str.toLocaleLowerCase())
    );
  });
  return arr.sort((a, b) => map.get(b)! - map.get(a)!).map((el) => el);
}

export function lowensteinEqual(a: string, b: string) {
  let result = 0;
  if (a.length < b.length) {
    for (let i = 0; a.length < b.length; i++) {
      if (a[i] !== b[i]) {
        a = a.slice(0, i) + b[i] || " " + a.slice(i);
        result++;
      }
    }
  } else if (a.length > b.length) {
    for (let i = 0; a.length < b.length; i++) {
      if (a[i] !== b[i]) {
        b = b.slice(0, i) + b.slice(i + 1);
        result++;
      }
    }
  }
  return (result += a
    .split("")
    .reduce((acc, char, index) => (char !== b[index] ? acc + 1 : acc), 0));
}
