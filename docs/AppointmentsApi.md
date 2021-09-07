# Aryeo.AppointmentsApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppointments**](AppointmentsApi.md#getAppointments) | **GET** /appointments | List all appointments.
[**getUnconfirmedAppointments**](AppointmentsApi.md#getUnconfirmedAppointments) | **GET** /unconfirmed-appointments | List all unconfirmed appointments.
[**putAppointmentsAppointmentIdCancel**](AppointmentsApi.md#putAppointmentsAppointmentIdCancel) | **PUT** /appointments/{appointment_id}/cancel | Cancel an appointment.
[**putAppointmentsAppointmentIdReschedule**](AppointmentsApi.md#putAppointmentsAppointmentIdReschedule) | **PUT** /appointments/{appointment_id}/reschedule | Reschedule an appointment.



## getAppointments

> AppointmentCollection getAppointments(opts)

List all appointments.

List all appointments. By default, returns a list of appointments that have been scheduled and have not been canceled

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.AppointmentsApi();
let opts = {
  'include': order,users, // String | Comma separated list of optional data to include in the response.
  'filterTense': UPCOMING, // String | Return appointments that are upcoming or in the past.
  'filterStartAtGte': 2021-01-01T13:00Z, // Date | Return appointments where the start_at field is greater than or equal to this value. Effectively, appointments that start after this date.
  'filterStartAtLte': 2021-01-02T13:00Z, // Date | Return appointments where the start_at field is less than or equal to this value. Effectively, appointments that start before this date.
  'filterUserIds': ["00000000-0000-4000-8000-000000000000"], // Array | The IDs of users whose appointments will be retrieved. UUID Version 4.
  'sort': -created_at, // String | Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `-start_at`.
  'perPage': 25, // String | The number of items per page. Defaults to 25.
  'page': 2 // String | The requested page. Defaults to 1.
};
apiInstance.getAppointments(opts, (error, data, response) => {
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
 **filterTense** | **String**| Return appointments that are upcoming or in the past. | [optional] 
 **filterStartAtGte** | **Date**| Return appointments where the start_at field is greater than or equal to this value. Effectively, appointments that start after this date. | [optional] 
 **filterStartAtLte** | **Date**| Return appointments where the start_at field is less than or equal to this value. Effectively, appointments that start before this date. | [optional] 
 **filterUserIds** | [**Array**](.md)| The IDs of users whose appointments will be retrieved. UUID Version 4. | [optional] 
 **sort** | **String**| Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to &#x60;-start_at&#x60;. | [optional] 
 **perPage** | **String**| The number of items per page. Defaults to 25. | [optional] 
 **page** | **String**| The requested page. Defaults to 1. | [optional] 

### Return type

[**AppointmentCollection**](AppointmentCollection.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnconfirmedAppointments

> UnconfirmedAppointmentCollection getUnconfirmedAppointments(opts)

List all unconfirmed appointments.

List all unconfirmed appointments. These are appointments that have not been scheduled. 

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.AppointmentsApi();
let opts = {
  'include': order,users, // String | Comma separated list of optional data to include in the response.
  'filterUserIds': ["00000000-0000-4000-8000-000000000000"], // Array | The IDs of users whose appointments will be retrieved. UUID Version 4.
  'sort': -created_at, // String | Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `-start_at`.
  'perPage': 25, // String | The number of items per page. Defaults to 25.
  'page': 2 // String | The requested page. Defaults to 1.
};
apiInstance.getUnconfirmedAppointments(opts, (error, data, response) => {
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
 **filterUserIds** | [**Array**](.md)| The IDs of users whose appointments will be retrieved. UUID Version 4. | [optional] 
 **sort** | **String**| Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to &#x60;-start_at&#x60;. | [optional] 
 **perPage** | **String**| The number of items per page. Defaults to 25. | [optional] 
 **page** | **String**| The requested page. Defaults to 1. | [optional] 

### Return type

[**UnconfirmedAppointmentCollection**](UnconfirmedAppointmentCollection.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putAppointmentsAppointmentIdCancel

> AppointmentResource putAppointmentsAppointmentIdCancel(appointmentId, opts)

Cancel an appointment.

Cancel an appointment. The appointments order&#39;s customer can be optionally notified of this change. 

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.AppointmentsApi();
let appointmentId = 00000000-0000-0000-0000-000000000000; // String | The ID of an appointment.
let opts = {
  'appointmentCancelPutPayload': new Aryeo.AppointmentCancelPutPayload() // AppointmentCancelPutPayload | 
};
apiInstance.putAppointmentsAppointmentIdCancel(appointmentId, opts, (error, data, response) => {
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
 **appointmentId** | [**String**](.md)| The ID of an appointment. | 
 **appointmentCancelPutPayload** | [**AppointmentCancelPutPayload**](AppointmentCancelPutPayload.md)|  | [optional] 

### Return type

[**AppointmentResource**](AppointmentResource.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putAppointmentsAppointmentIdReschedule

> AppointmentResource putAppointmentsAppointmentIdReschedule(appointmentId, opts)

Reschedule an appointment.

Reschedule an appointment. The appointments order&#39;s customer can be optionally notified of this change. 

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.AppointmentsApi();
let appointmentId = 00000000-0000-0000-0000-000000000000; // String | The ID of an appointment.
let opts = {
  'appointmentReschedulePutPayload': new Aryeo.AppointmentReschedulePutPayload() // AppointmentReschedulePutPayload | 
};
apiInstance.putAppointmentsAppointmentIdReschedule(appointmentId, opts, (error, data, response) => {
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
 **appointmentId** | [**String**](.md)| The ID of an appointment. | 
 **appointmentReschedulePutPayload** | [**AppointmentReschedulePutPayload**](AppointmentReschedulePutPayload.md)|  | [optional] 

### Return type

[**AppointmentResource**](AppointmentResource.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

