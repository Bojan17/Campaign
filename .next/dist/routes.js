'use strict';

var routes = require('next-routes')();

//new route mapping
routes
//.add('/home', '/campaigns/homepage')
.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBO0FBQ0ksQUFESjtDQUVLLEFBRkwsSUFFUyxBQUZULGtCQUUyQixBQUYzQixrQkFHSyxBQUhMLElBR1MsQUFIVCx1QkFHZ0MsQUFIaEMsbUJBSUssQUFKTCxJQUlTLEFBSlQsZ0NBSXlDLEFBSnpDLDZCQUtLLEFBTEwsSUFLUyxBQUxULG9DQUs2QyxBQUw3Qzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0JvamFuL3Byb2plY3RzL0V0aGVydW0vc21hcnRraWNrIn0=