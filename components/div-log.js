import SpecialP from './p-log.js';

export default {
  extends: 'div',
  includes: {SpecialP},
  render() {
    this.html`
      <SpecialP>1</SpecialP>
      <SpecialP>2</SpecialP>`;
  }
};
