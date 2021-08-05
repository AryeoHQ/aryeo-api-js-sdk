# Aryeo.ListingsApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getListings**](ListingsApi.md#getListings) | **GET** /listings | Get the listings available to a group.
[**getListingsId**](ListingsApi.md#getListingsId) | **GET** /listings/{listing_id} | Get information about a listing.



## getListings

> ListingCollection getListings(opts)

Get the listings available to a group.

Get the listings available to a group.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.ListingsApi();
let opts = {
  'include': images,videos,orders, // String | Comma separated list of optional data to include in the response.
  'filterSearch': 123 Main St, // String | Return listings that have fields matching this term.
  'filterAddress': 123 Main St, // String | Return listings that have an address matching this term.
  'filterListAgent': John Doe, // String | Return listings that have a listing agent or co-listing agent matching this term.
  'filterStatus': FOR_SALE, // String | Return listings that have a certain status.
  'filterActive': true, // Boolean | Set as true to return listings that have an active status (e.g. active statuses include `COMING_SOON`, `FOR_SALE`, `FOR_LEASE`, `PENDING_SALE`, `PENDING_LEASE`, `SOLD`, `LEASED`). 
  'filterPriceGte': 100000, // Number | Return listings where the price field is greater than or equal to this value.
  'filterPriceLte': 4000000, // Number | Return listings where the price field is less than or equal to this value.
  'filterSquareFeetGte': 1000, // Number | Return listings where the square feet field is greater than or equal to this value.
  'filterSquareFeetLte': 5000, // Number | Return listings where the square feet field is less than or equal to this value.
  'filterBedroomsGte': 2, // Number | Return listings where the bedrooms field is greater than or equal to this value.
  'filterBedroomsLte': 4, // Number | Return listings where the bedrooms field is less than or equal to this value.
  'filterBathroomsGte': 2.5, // Number | Return listings where the bathrooms field is greater than or equal to this value.
  'filterBathroomsLte': 5, // Number | Return listings where the bathrooms field is less than or equal to this value.
  'sort': -created_at, // String | Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `-created_at`.
  'perPage': 25, // String | The number of items per page. Defaults to 25.
  'page': 2 // String | The requested page. Defaults to 1.
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
 **include** | **String**| Comma separated list of optional data to include in the response. | [optional] 
 **filterSearch** | **String**| Return listings that have fields matching this term. | [optional] 
 **filterAddress** | **String**| Return listings that have an address matching this term. | [optional] 
 **filterListAgent** | **String**| Return listings that have a listing agent or co-listing agent matching this term. | [optional] 
 **filterStatus** | **String**| Return listings that have a certain status. | [optional] 
 **filterActive** | **Boolean**| Set as true to return listings that have an active status (e.g. active statuses include &#x60;COMING_SOON&#x60;, &#x60;FOR_SALE&#x60;, &#x60;FOR_LEASE&#x60;, &#x60;PENDING_SALE&#x60;, &#x60;PENDING_LEASE&#x60;, &#x60;SOLD&#x60;, &#x60;LEASED&#x60;).  | [optional] 
 **filterPriceGte** | **Number**| Return listings where the price field is greater than or equal to this value. | [optional] 
 **filterPriceLte** | **Number**| Return listings where the price field is less than or equal to this value. | [optional] 
 **filterSquareFeetGte** | **Number**| Return listings where the square feet field is greater than or equal to this value. | [optional] 
 **filterSquareFeetLte** | **Number**| Return listings where the square feet field is less than or equal to this value. | [optional] 
 **filterBedroomsGte** | **Number**| Return listings where the bedrooms field is greater than or equal to this value. | [optional] 
 **filterBedroomsLte** | **Number**| Return listings where the bedrooms field is less than or equal to this value. | [optional] 
 **filterBathroomsGte** | **Number**| Return listings where the bathrooms field is greater than or equal to this value. | [optional] 
 **filterBathroomsLte** | **Number**| Return listings where the bathrooms field is less than or equal to this value. | [optional] 
 **sort** | **String**| Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to &#x60;-created_at&#x60;. | [optional] 
 **perPage** | **String**| The number of items per page. Defaults to 25. | [optional] 
 **page** | **String**| The requested page. Defaults to 1. | [optional] 

### Return type

[**ListingCollection**](ListingCollection.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListingsId

> ListingResource getListingsId(listingId, opts)

Get information about a listing.

Get information about a listing.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.ListingsApi();
let listingId = 00000000-0000-4000-8000-000000000000; // String | The ID of a listing. UUID Version 4.
let opts = {
  'include': images,videos,orders // String | Comma separated list of optional data to include in the response.
};
apiInstance.getListingsId(listingId, opts, (error, data, response) => {
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
 **listingId** | [**String**](.md)| The ID of a listing. UUID Version 4. | 
 **include** | **String**| Comma separated list of optional data to include in the response. | [optional] 

### Return type

[**ListingResource**](ListingResource.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

