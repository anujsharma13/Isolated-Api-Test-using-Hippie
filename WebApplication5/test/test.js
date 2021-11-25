/*/*var assert = require('assert');*/
var hippie = require('hippie');
describe("Cars api test", function () {


    //Get and status test
    it(`Expected status code`, function () {
        hippie()
            .json()
            .get('http://localhost:35202/api/Cars')
            .expectStatus(200)
            .end(function (err, res, body) {
                if (err) throw err;
            });
    });




    //get and status and body test
    it(`Expected body test`, function () {
        hippie()
            .json()
            .get('http://localhost:35202/api/Cars')
            .expectStatus(200).expectBody([
                {
                    "name": "Audi",
                    "year": 2013
                },
                {
                    "name": "bmw",
                    "year": 2015
                }
            ]).end(function (err, res, body) {
                if (err) throw err;
            });
    });


    //using base and get
    it(`get request test`, function () {
        hippie()
            .json()
            .base('http://localhost:35202')
            .get('/api/Cars')
            .expectStatus(200)
            .expectBody([
                {
                    "name": "Audi",
                    "year": 2013
                },
                {
                    "name": "bmw",
                    "year": 2015
                }
            ])
            .end(function (err, res, body) {
                if (err) throw err;
            });
    });

    //post request
    it(`post request test`, function () {
        hippie()
            .json()
            .post('http://localhost:35202/api/Cars')
            .send({
                "name": "mercedes",
                "year": 2018
            })
            .end();
    });

    //put request
    it(`put request test`, function () {
        hippie()
            .json()
            .put('http://localhost:35202/api/Cars/2013')
            .send({
                "name": "mercedes",
                "year": 2018,
            })
            .end();
    });

    //delete request
    it(`delete request test`, function () {
        hippie()
            .json()
            .url('http://localhost:35202/api/Cars/2013')
            .method('DELETE')
            .end();
    });
    });

//    // ... more tests to follow here, both describe and it can be added
//});
//function maketest(x) {
//    let expected = x * x * x;
//    it(`${x} in the power 3 is ${expected}`, function () {
//        assert.equal(pow(x, 3), expected);
//    });
//}
//function pow(x, n) {
//    let result = 1;

//    for (let i = 0; i < n; i++) {
//        result *= x;
//    }

//    return result;
//}
