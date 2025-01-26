import { basename } from "path";

export function similaeSort(arr: string[], str: string) {
  const map = new Map<string, number>();

  console.log(map);

  arr.forEach((el) => {
    map.set(
      el,
      similarEqual(basename(el.toLocaleLowerCase()), str.toLocaleLowerCase())
    );
  });
  console.log(map);

  return arr
    .filter((file) => {
      return map.get(file)! < 1000;
    })
    .sort((a, b) => map.get(a)! - map.get(b)!)
    .map((el) => el);
}

export function similarEqual(a: string, b: string) {
  let result = 0;
  try {
    const regex = new RegExp(b, "g");
    result += a.search(regex) >= 0 ? a.search(regex) : Number.MAX_SAFE_INTEGER;
    result -= a.match(regex)?.length || 0;
    console.log(a, b, result, a.match(regex));
  } catch {
  } finally {
  }

  return result;
}
