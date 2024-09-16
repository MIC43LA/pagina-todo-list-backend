'use strict'

module.exports = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  headers: true,
  exposeHeaders: [],
  credentials: true,
  maxAge: 90
};

/*module.exports = {
  origin: false,
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  headers: true,
  exposeHeaders: false,
  credentials: false,
  maxAge: 90
}*/
