# Cloudfront Security Headers

A quick [Lambda@Edge](https://aws.amazon.com/lambda/edge/) function to add security headers to AWS [CloudFront](https://aws.amazon.com/cloudfront/) responses.

At this stage, this function is entirely based off [this blog post](https://aws.amazon.com/blogs/networking-and-content-delivery/adding-http-security-headers-using-lambdaedge-and-amazon-cloudfront/) by AWS, with some additional logic for [automatic deployments via Travis CI](.travis.yml).

To check your security headers, visit [securityheaders.io](https://securityheaders.io) or [observatory.mozilla.org](https://observatory.mozilla.org).
