# Aryeo.MarketingMaterialsApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**putMarketingMaterialsUuidPublish**](MarketingMaterialsApi.md#putMarketingMaterialsUuidPublish) | **PUT** /marketing-materials/{uuid}/publish | Publish a marketing material.



## putMarketingMaterialsUuidPublish

> putMarketingMaterialsUuidPublish(uuid, opts)

Publish a marketing material.

Publish a marketing material.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.MarketingMaterialsApi();
let uuid = 05a1c594-f469-483c-b490-51d790090593; // String | UUID of the marketing material record.
let opts = {
  'marketingMaterialPublishPayload': new Aryeo.MarketingMaterialPublishPayload() // MarketingMaterialPublishPayload | 
};
apiInstance.putMarketingMaterialsUuidPublish(uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)| UUID of the marketing material record. | 
 **marketingMaterialPublishPayload** | [**MarketingMaterialPublishPayload**](MarketingMaterialPublishPayload.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

