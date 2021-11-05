'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./../app');

chai.use(chaiHttp);

describe('2. Test suit - Test end to end / Integration Test', () => {
  it("Should return 'Hello World!'", done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        chai.assert.equal(res.text, 'Hello World!');
        done();
      });
  });
});
