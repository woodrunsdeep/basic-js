const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (position === undefined ||
        position <= 0 ||
        position > this.chain.length ||
        typeof position !== 'number') {
          this.chain = [];
          throw new Error('Invalid position');
        } else {
          this.chain.splice(position-1, 1);
          return this;
        }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain;
    this.chain = [];
    return result.join('~~');
  }
}

module.exports = chainMaker;
