# Aryeo SDK

## Introduction

This is an auto-generated client SDK for interfacing with the Aryeo API. We support a variety of languages and frameworks that are a great starting point for experimenting with the API. If there is an additional language or framework that you want to see supported, then please reach out and make a contribution!

<p align="center"> <a href="https://github.com/AryeoHQ/aryeo-api-dart-sdk"><img src="https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/dart.svg" alt="Dart" width="44" style="padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;"/></a> <a href="https://github.com/AryeoHQ/aryeo-api-go-sdk"><img src="https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/go.svg" alt="Go" width="44" style="padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;"/></a> <a href="https://github.com/AryeoHQ/aryeo-api-js-sdk"><img src="https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/js.svg" alt="Node JS" width="44" style="padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;"/></a> <a href="https://github.com/AryeoHQ/aryeo-api-php-sdk"><img src="https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/php.svg" alt="PHP" width="44" style="padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;"/></a> <a href="https://github.com/AryeoHQ/aryeo-api-ruby-sdk"><img src="https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/ruby.svg" alt="Ruby" width="44" style="padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;"/></a> <a href="https://github.com/AryeoHQ/aryeo-api-rust-sdk"><img src="https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/rust.svg" alt="Rust" width="44" style="padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;"/></a> <a href="https://github.com/AryeoHQ/aryeo-api-swift-sdk"><img src="https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/swift.svg" alt="Swift" width="44" style="padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;"/></a> </p>

## Authentication

To start using the Aryeo API, you will need to generate an API key from your group's developer settings. Then, make sure to provide your API key as a bearer token. Requests made without an API key will result in a `401 Unauthorized` error.

Example: `Authorization: Bearer {API_KEY}`

## Installation

Add the following block to `package.json`:

```json
"dependencies": {
  "aryeo": "github:AryeoHQ/aryeo-api-js-sdk"
}
```

## Getting Started

```js
var Aryeo = require('aryeo');

var defaultClient = Aryeo.ApiClient.instance;

var JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "API_KEY"

var api = new Aryeo.ListingsApi()
api.getListingsId("UUID", (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`${data.data.address.address_line_1}`);
  }
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api.aryeo.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Aryeo.ListingsApi* | [**getListings**](docs/ListingsApi.md#getListings) | **GET** /listings | Get the listings available to a group.
*Aryeo.ListingsApi* | [**getListingsId**](docs/ListingsApi.md#getListingsId) | **GET** /listings/{listing_id} | Get information about a listing.
*Aryeo.OrdersApi* | [**getOrders**](docs/OrdersApi.md#getOrders) | **GET** /orders | Get orders available to a group.
*Aryeo.OrdersApi* | [**postOrders**](docs/OrdersApi.md#postOrders) | **POST** /orders | Create an order.
*Aryeo.VendorsApi* | [**getVendors**](docs/VendorsApi.md#getVendors) | **GET** /vendors | Get vendors available to a group.
*Aryeo.VendorsApi* | [**getVendorsId**](docs/VendorsApi.md#getVendorsId) | **GET** /vendors/{vendor_id} | Get vendors available to a group.


## Documentation for Models

 - [Aryeo.Address](docs/Address.md)
 - [Aryeo.ApiError](docs/ApiError.md)
 - [Aryeo.ApiFail](docs/ApiFail.md)
 - [Aryeo.FloorPlan](docs/FloorPlan.md)
 - [Aryeo.Group](docs/Group.md)
 - [Aryeo.GroupCollection](docs/GroupCollection.md)
 - [Aryeo.GroupResource](docs/GroupResource.md)
 - [Aryeo.Image](docs/Image.md)
 - [Aryeo.InteractiveContent](docs/InteractiveContent.md)
 - [Aryeo.Listing](docs/Listing.md)
 - [Aryeo.ListingBuilding](docs/ListingBuilding.md)
 - [Aryeo.ListingCollection](docs/ListingCollection.md)
 - [Aryeo.ListingLot](docs/ListingLot.md)
 - [Aryeo.ListingPrice](docs/ListingPrice.md)
 - [Aryeo.ListingResource](docs/ListingResource.md)
 - [Aryeo.Order](docs/Order.md)
 - [Aryeo.OrderCollection](docs/OrderCollection.md)
 - [Aryeo.OrderForm](docs/OrderForm.md)
 - [Aryeo.OrderPostPayload](docs/OrderPostPayload.md)
 - [Aryeo.OrderResource](docs/OrderResource.md)
 - [Aryeo.PaginationLinks](docs/PaginationLinks.md)
 - [Aryeo.PaginationMeta](docs/PaginationMeta.md)
 - [Aryeo.PropertyWebsite](docs/PropertyWebsite.md)
 - [Aryeo.SocialProfiles](docs/SocialProfiles.md)
 - [Aryeo.User](docs/User.md)
 - [Aryeo.Video](docs/Video.md)


## Documentation for Authorization



### Token

- **Type**: Bearer authentication


## Author

jarrod@aryeo.com
