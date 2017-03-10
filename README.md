# Search UPC Cloud App

This Cloud App will call the SearchUPC MBaaS Service.

# Group Hello World API

# hello [/hello/recent]

'Hello world' endpoint.

## hello/recent [GET]

+ Request (application/json)

+ Response 200 (application/json)

+ Body
        [
          "Array of recent barcode searches"
        ]

# hello [/hello/search]

'Hello world' endpoint.

## hello/search [POST]

'Hello world' endpoint.

+ Request (application/json)
    + Body
            {
              "hello": "001000000502"
            }

+ Response 200 (application/json)
  + Body
        [
          "Some product data goes here"
        ]
