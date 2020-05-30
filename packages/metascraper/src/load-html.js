'use strict'

const cheerio = require('cheerio-advanced-selectors').wrap(require('react-native-cheerio'));

module.exports = (html = '') =>
  cheerio.load(html, {
    lowerCaseTags: true,
    decodeEntities: true,
    lowerCaseAttributeNames: true
  });
