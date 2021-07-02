# Aryeo.ListingsApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getListings**](ListingsApi.md#getListings) | **GET** /listings | Get the listings available to a group.
[**getListingsId**](ListingsApi.md#getListingsId) | **GET** /listings/{uuid} | Get information about a listing.



## getListings

> PartialListingCollection getListings(opts)

Get the listings available to a group.

Get the listings available to a group.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.ListingsApi();
let opts = {
  'query': thoroughbred trail, // String | A search query.
  'perPage': 25, // String | The number of items per page. Defaults to 25.
  'page': 2, // String | The requested page. Defaults to 1.
  'status': coming_soon, // String | The status you want to scope down to, example sold,  coming_soon,  for_sale, sold
  'price': 100000, // Number | The price value and greater will be returned.
  'bathrooms': 3.5, // Number | Number of bathrooms minimum.
  'bedrooms': 4 // Number | Number of bedrooms minimum.
};
apiInstance.getListings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| A search query. | [optional] 
 **perPage** | **String**| The number of items per page. Defaults to 25. | [optional] 
 **page** | **String**| The requested page. Defaults to 1. | [optional] 
 **status** | **String**| The status you want to scope down to, example sold,  coming_soon,  for_sale, sold | [optional] 
 **price** | **Number**| The price value and greater will be returned. | [optional] 
 **bathrooms** | **Number**| Number of bathrooms minimum. | [optional] 
 **bedrooms** | **Number**| Number of bedrooms minimum. | [optional] 

### Return type

[**PartialListingCollection**](PartialListingCollection.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListingsId

> ListingResource getListingsId(uuid)

Get information about a listing.

Get information about a listing.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.ListingsApi();
let uuid = 05a1c594-f469-483c-b490-51d790090593; // String | The UUID of a listing.
apiInstance.getListingsId(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| The UUID of a listing. | 

### Return type

[**ListingResource**](ListingResource.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

