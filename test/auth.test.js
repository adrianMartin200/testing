'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./../app');

chai.use(chaiHttp);

describe('3. Test Suite Auth - e2e', () => {
  it('should return 401 when no jwt available', done => {
    chai
      .request(app)
      .get('/team')
      .end((err, res) => {
        chai.assert.equal(res.status, 401);
        done();
      });
  });
  it('should return 200 when jwt is valid', done => {
    chai
      .request(app)
      .post('/login')
      .end((err, res) => {
        chai
          .request(app)
          .get('/team')
          .set('Authorization', `JWT ${res.body.token}`)
          .end((err, res) => {
            chai.assert.equal(res.status, 200);
            done();
          });
      });
  });
});
