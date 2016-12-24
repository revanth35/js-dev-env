import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('First test using Mocha framework and chai assertion', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say JS Development Environment', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('JavaScript Development Environment');
      done();
      window.close();
    });
  });
});
