/* eslint-disable linebreak-style */

const { string } = require('prop-types');

const notes = [
  {
    id: string,
    title: string,
    createdAt: string,
    updatedAt: string,
    tags: [string],
    body: string,
  },
];

module.exports = notes;
