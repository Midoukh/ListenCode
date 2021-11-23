class LocalStoring {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  set = () => {
    window.localStorage.setItem(this.key, this.value);
  };
  get = () => {
    return window.localStorage.getItem(this.key);
  };
  remove = () => {
    window.localStorage.removeItem(this.key);
  };
}

export default LocalStoring;
