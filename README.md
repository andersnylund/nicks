# nicks &middot; [![Build Status](https://travis-ci.org/andersnylund/nicks.svg?branch=master)](https://travis-ci.org/andersnylund/nicks)

Create a nickname or user id with names.

Suggests a list of nicknames with some simple rules.

## Install

`yarn add nicks` or `npm install nicks`

## Usage

```js
import nicks from 'nicks';

const nicknames = nicks('Matti Meikäläinen-Muukalainen');

console.log(nicknames); // ['mmeika', 'meikam', 'matmei', 'meimat']
```
