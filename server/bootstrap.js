#!/usr/bin/env nodejs
const register = require('ignore-styles').default;
const path = require('path');
const fs = require('fs');
const md5File = require('md5-file');

const mimeTypes = {
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.mp4': 'video/mp4',
};

register(undefined, (mod, filename) => {
  const ext = ['.png', '.jpg', '.mp4'].find(f => filename.endsWith(f));
  if (!ext) return;

  if (fs.statSync(filename).size < 10000) {
    const file = fs.readFileSync(filename).toString('base64');
    const mimeType = mimeTypes[ext] || 'image/jpg';
    mod.exports = `data:${mimeType};base64,${file}`; // eslint-disable-line no-param-reassign
  } else {
    const hash = md5File.sync(filename).slice(0, 8);
    const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);
    mod.exports = `/static/media/${bn}`; // eslint-disable-line no-param-reassign
  }
});

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties'],
});
require('./index');
