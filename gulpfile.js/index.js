const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

//Конфигурация
const path = require("./config/path");
const app = require("./config/app");

// Задачи

const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const font = require('./task/font.js');
const swiper = require('./task/swiper');


const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}


const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.font.watch, font).on('all', browserSync.reload);
}

const build = series(
    clear,
    parallel(html, scss, js, img, font, swiper)
);

const dev = series(
    build,
    parallel(watcher, server) 
);


exports.html = html;
exports.watch = watcher;
exports.clear = clear;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.swiper = swiper;

exports.default = app.isProd
    ? build
    : dev;