# nick-name &middot; [![Build Status](https://travis-ci.org/andersnylund/nick-name.svg?branch=master)](https://travis-ci.org/andersnylund/nick-name)

Create a nickname or user id with names.

Suggests a list of nicknames with some simple rules.

## Usage

```js
import nickname from 'nick-name';

const nicknames = nickname('Matti Meikäläinen-Muukalainen');

console.log(nicknames); // ['mmeika', 'meikam', 'matmei', 'meimat']
```
