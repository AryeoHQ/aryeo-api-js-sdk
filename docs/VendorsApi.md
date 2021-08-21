# Aryeo.VendorsApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVendors**](VendorsApi.md#getVendors) | **GET** /vendors | List all vendors.
[**getVendorsId**](VendorsApi.md#getVendorsId) | **GET** /vendors/{vendor_id} | Retrieve a vendor.



## getVendors

> GroupCollection getVendors(opts)

List all vendors.

Lists all vendors available to a group.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.VendorsApi();
let opts = {
  'include': users // String | Comma separated list of optional data to include in the response.
};
apiInstance.getVendors(opts, (error, data, response) => {
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

### Return type

[**GroupCollection**](GroupCollection.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVendorsId

> GroupResource getVendorsId(vendorId, opts)

Retrieve a vendor.

Retrieves the details of a vendor with the given ID.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.VendorsApi();
let vendorId = 00000000-0000-4000-8000-000000000000; // String | The ID of the group that is associated as a vendor. UUID Version 4.
let opts = {
  'include': default_order_form // String | Comma separated list of optional data to include in the response.
};
apiInstance.getVendorsId(vendorId, opts, (error, data, response) => {
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
 **vendorId** | [**String**](.md)| The ID of the group that is associated as a vendor. UUID Version 4. | 
 **include** | **String**| Comma separated list of optional data to include in the response. | [optional] 

### Return type

[**GroupResource**](GroupResource.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

