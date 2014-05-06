/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = function(cb) {
  return function(req, res) {
    console.log('dashboard says', req.session);
    if ( !! req.session.email) {
      cb(req, res);
    } else {
      // flash "You must sign in to use the dashboard
      res.redirect('/');
    }
  };
};