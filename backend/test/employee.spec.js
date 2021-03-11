let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
const app = require('../app.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Employees', () => {
    describe('/GET /employees', () => {
        it('it should GET all the employees', (done) => {
          chai.request(app)
            .get('/employees')
            .end((err, res) => {
                expect(res.body).to.eql([
                    {
                        "id": 2,
                        "first_name": "Jin",
                        "last_name": "Kazama"
                    },
                    {
                        "id": 3,
                        "first_name": "Chou",
                        "last_name": "Tzuyu"
                    },
                    {
                        "id": 4,
                        "first_name": "Im",
                        "last_name": "Nayeon"
                    },
                    {
                        "id": 5,
                        "first_name": "Kazuya",
                        "last_name": "Mishima"
                    }
                ]);
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(4);
                res.body[0].should.have.property('id').and.to.be.a('number');
                res.body[0].should.have.property('first_name').and.to.be.a('string');
                res.body[0].should.have.property('last_name').and.to.be.a('string');
            done();
          });
        })
    });

    describe('/GET /employees/<chosen-id>', () => {
        it('it should GET specific employee based from id', (done) => {
          chai.request(app)
            .get('/employees/2')
            .end((err, res) => {
                expect(res.body).to.eql({
                    "id": 2,
                    "first_name": "Jin",
                    "last_name": "Kazama"
                });
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id').and.to.be.a('number');
                res.body.should.have.property('first_name').and.to.be.a('string');
                res.body.should.have.property('last_name').and.to.be.a('string');
            done();
          });
        })
    });

    describe('/POST /employees', () => {
        it('it should GET specific employee based from id', (done) => {
          chai.request(app)
            .post('/employees')
            .send({
                "id": 1,
                "first_name": "Jojo",
                "last_name": "Ruiz"
            })
            .end((err, res) => {
                expect(res.body).to.eql({
                    "message": "Successfully added employee Jojo Ruiz"
                });
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('message').and.to.be.a('string');
            done();
          });
        })
    });

    describe('/PUT /employees/<chosen-id>', () => {
        it('it should GET specific employee based from id', (done) => {
          chai.request(app)
            .put('/employees/1')
            .send({
                "first_name": "Momo",
                "last_name": "Hirai"
            })
            .end((err, res) => {
                expect(res.body).to.eql({
                    "message": "Successfully updated employee Momo Hirai"
                });
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').and.to.be.a('string');
            done();
          });
        })
    });

    describe('/DELETE /employees/<chosen-id>', () => {
        it('it should GET specific employee based from id', (done) => {
          chai.request(app)
            .delete('/employees/1')
            .end((err, res) => {
                expect(res.body).to.eql({
                    "message": "Successfully deleted employee Momo Hirai"
                });
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').and.to.be.a('string');
            done();
          });
        })
    });
});

