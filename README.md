# nick-names &middot; [![Build Status](https://travis-ci.org/andersnylund/nick-names.svg?branch=master)](https://travis-ci.org/andersnylund/nick-names)

Create a nickname or user id with names.

Suggests a list of nicknames with some simple rules.

## Usage

```js
import nicknames from 'nick-names';

const nicks = nicknames('Matti Meikäläinen-Muukalainen');

console.log(nicks); // ['mmeika', 'meikam', 'matmei', 'meimat']
```
