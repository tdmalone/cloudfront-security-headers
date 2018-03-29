/**
 * Add security related headers in to a CloudFront response.
 *
 * At this stage, this function is pretty much entirely based off
 * https://aws.amazon.com/blogs/networking-and-content-delivery/adding-http-security-headers-using-lambdaedge-and-amazon-cloudfront/
 */

'use strict';

const FIRST_ITEM = 0;

exports.handler = ( event, context, callback ) => {

  // Get contents of response.
  const response = event.Records[ FIRST_ITEM ].cf.response;
  const headers = response.headers;

  // Set new headers.
  headers['strict-transport-security'] = [ {
    key:   'Strict-Transport-Security',
    value: (
      'max-age=63072000; ' +
      'includeSubdomains; ' +
      'preload'
    )
  } ];

  // TODO: Enable more once site is confirmed ready for it =]
  headers['content-security-policy'] = [ {
    key:   'Content-Security-Policy',
    value: (
      'default-src: https: \'unsafe-inline\'; ' +
      'object-src \'none\''
      /*
      'default-src \'none\'; ' +
      'img-src \'self\'; ' +
      'script-src \'self\'; ' +
      'style-src \'self\'; ' +
      */
    )
  } ];

  headers['x-content-type-options'] = [ {
    key:   'X-Content-Type-Options',
    value: 'nosniff'
  } ];

  headers['x-frame-options'] = [ {
    key:   'X-Frame-Options',
    value: 'DENY'
  } ];

  headers['x-xss-protection'] = [ {
    key:   'X-XSS-Protection',
    value: '1; mode=block'
  } ];

  headers['referrer-policy'] = [ {
    key:   'Referrer-Policy',
    value: 'same-origin'
  } ];

  // Return modified response.
  callback( null, response );

}; // Exports.handler.
