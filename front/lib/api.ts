export async function fetcher(url: string, options = {}): Promise<any> {
  let res: any;
  if (!options) {
    res = await fetch(url);
  } else {
    res = await fetch(url, options);
  }
  return res.json();
}