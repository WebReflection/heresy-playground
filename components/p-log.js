export default {
  extends: 'p',
  style: p => `${p} { cursor: pointer; }`,
  oninit() {
    this.addEventListener('click', this);
  },
  onclick() {
    console.log(`${this.nodeName}: ${this.textContent}`);
  }
};
