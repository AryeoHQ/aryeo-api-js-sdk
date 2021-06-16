# Aryeo.VendorsApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVendors**](VendorsApi.md#getVendors) | **GET** /vendors | Get vendors available to a group.
[**getVendorsSearch**](VendorsApi.md#getVendorsSearch) | **GET** /vendors/search | Get vendors that can be added to the group&#39;s vendor list.



## getVendors

> GroupCollection getVendors()

Get vendors available to a group.

Get vendors available to a group.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.VendorsApi();
apiInstance.getVendors((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GroupCollection**](GroupCollection.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVendorsSearch

> GroupCollection getVendorsSearch(opts)

Get vendors that can be added to the group&#39;s vendor list.

Get vendors that can be added to the group&#39;s vendor list, excluding those already available to a group. 

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.VendorsApi();
let opts = {
  'query': Demo Photography Company, // String | A search query.
  'perPage': 25, // String | The number of items per page. Defaults to 25.
  'page': 2 // String | The requested page. Defaults to 1.
};
apiInstance.getVendorsSearch(opts, (error, data, response) => {
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

### Return type

[**GroupCollection**](GroupCollection.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
