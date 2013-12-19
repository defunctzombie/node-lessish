var assert = require('assert')

var express = require('express')
var request = require('supertest')

var lessish = require('../')

var app = express()
var server

test('setup', function(done) {
    app.use(lessish({
        src:__dirname + '/assets',
        cache:true,
        compress:true
    }))
    server = app.listen(done)
})

test('basic', function(done) {
    request(app)
        .get('/test.css')
        .end(function(err, res) {
            assert.equal(res.statusCode, 200)
            assert.equal(res.headers['content-type'], 'text/css')
            assert.equal(res.text, '.foo{color:red}.foo .bar{border-radius:10px}')
            done()
        })
})

test('shutdown', function(done) {
    server.close(done)
})
