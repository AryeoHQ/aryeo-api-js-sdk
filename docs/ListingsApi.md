# Aryeo.ListingsApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getListings**](ListingsApi.md#getListings) | **GET** /listings | Get the listings available to a group.
[**getListingsId**](ListingsApi.md#getListingsId) | **GET** /listings/{id} | Get information about a listing.

<a name="getListings"></a>
# **getListings**
> PartialListingCollection getListings(opts)

Get the listings available to a group.

Get the listings available to a group.

### Example
```javascript
import {Aryeo} from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;


let apiInstance = new Aryeo.ListingsApi();
let opts = { 
  'query': "query_example", // String | A search query.
  'perPage': "perPage_example", // String | The number of items per page. Defaults to 25.
  'page': "page_example", // String | The requested page. Defaults to 1.
  'status': "status_example", // String | The status you want to scope down to, example sold,  coming_soon,  for_sale, sold
  'price': 56, // Number | The price value and greater will be returned.
  'bathrooms': 1.2, // Number | Number of bathrooms minimum.
  'bedrooms': 56 // Number | Number of bedrooms minimum.
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

<a name="getListingsId"></a>
# **getListingsId**
> ListingResource getListingsId(id)

Get information about a listing.

Get information about a listing.

### Example
```javascript
import {Aryeo} from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;


let apiInstance = new Aryeo.ListingsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | The UUID of a listing.

apiInstance.getListingsId(id, (error, data, response) => {
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
 **id** | [**String**](.md)| The UUID of a listing. | 

### Return type

[**ListingResource**](ListingResource.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

