export const LS_KEYS = {
  threat: "lotr_threat",
  coins: "lotr_coins",
};

export function getFromLS(key: string, defaultValue: string): string {
  let value: string;
  try {
    value = window.localStorage.getItem(key) ?? defaultValue;
  } catch (e) {
    console.error(e);

    value = defaultValue;
  }
  return value;
}
export function setToLS(key: string, value: any) {
  try {
    value = window.localStorage.setItem(key, value.toString());
  } catch (e) {
    console.error(e);
  }
}
