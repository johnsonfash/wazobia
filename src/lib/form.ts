export const formHandler = <T extends string>(e: any, o: Array<T>): { [K in T]: K } => {
  e?.preventDefault();
  return o.reduce((res, k) => {
    res[k] = e?.target[k]?.attributes?.type?.value == 'checkbox' ? e?.target[k]?.checked : e?.target[k]?.value;
    return res;
  }, Object.create(null));
}