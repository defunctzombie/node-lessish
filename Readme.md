lessish [![build status](https://secure.travis-ci.org/shtylman/node-lessish.png)](http://travis-ci.org/shtylman/node-lessish)
============

Simple node.js [lesscss](stylus) middleware for 
[connect](https://github.com/senchalabs/connect) (or [express](http://expressjs.com/)) that doesn't write files to disk.

Install
------

```
npm install lessish
```

Examples
--------

```js
app.use(stylish({
    src: __dirname + '/public',
    compress: true,
}))
```

By default, lessish watches files (and dependencies) for changes. You can add a callback to learn when a file changes:

```js
app.use(lessish({
    src:__dirname + '/public',
    compress: true,
    watchCallback: function(error, filename) {
        // do something clever, like tell the client to reload css
    }
}))
```

For production use, turn caching on (this caches the computed css in memory and disables file watching):

```js
app.use(stylish({
    src:__dirname + '/public',
    compress: true,
    cache: true
}))
```

License
-------
zlib license [LICENSE](LICENSE).

Contributors
-------
Based on the work of [marcello3d](https://github.com/marcello3d) in [stylish](https://github.com/marcello3d/node-stylish)
