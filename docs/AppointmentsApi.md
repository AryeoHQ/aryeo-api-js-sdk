# Aryeo.AppointmentsApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppointments**](AppointmentsApi.md#getAppointments) | **GET** /appointments | List all appointments.
[**getAvailableDates**](AppointmentsApi.md#getAvailableDates) | **GET** /scheduling/available-dates | Fetch available days for a user or group
[**getAvailableTimeslots**](AppointmentsApi.md#getAvailableTimeslots) | **GET** /scheduling/available-timeslots | Fetch available timeslots for a user or group
[**getUnconfirmedAppointments**](AppointmentsApi.md#getUnconfirmedAppointments) | **GET** /unconfirmed-appointments | List all unconfirmed appointments.
[**getUnconfirmedAppointmentsId**](AppointmentsApi.md#getUnconfirmedAppointmentsId) | **GET** /unconfirmed-appointments/{unconfirmed_appointment_id} | Retrieve an unconfirmed appointment.
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
  'filterUserIds': ["00000000-0000-4000-8000-000000000000"], // [String] | The IDs of users whose appointments will be retrieved. UUID Version 4.
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
 **filterUserIds** | [**[String]**](String.md)| The IDs of users whose appointments will be retrieved. UUID Version 4. | [optional] 
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


## getAvailableDates

> CalendarDayCollection getAvailableDates(opts)

Fetch available days for a user or group

Fetch available calendar days for scheduling or rescheduling an appointment. Availability can be retrieved using a specific start &amp; end date range, or using a timeframe. When using a timeframe, the page parameter can be used to flip through weeks, months, etc.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.AppointmentsApi();
let opts = {
  'filterUserIds': ["00000000-0000-4000-8000-000000000000"], // [String] | The IDs of users whose availability will be retrieved. UUID Version 4.
  'filterAppointmentId': 00000000-0000-4000-8000-000000000000, // String | Appointment ID used to fetch availability for an existing order
  'filterStartAt': 2021-01-01T13:00Z, // Date | Returns availability after start_at
  'filterEndAt': 2021-01-02T13:00Z, // Date | Returns availability before end_at
  'filterTimeframe': MONTH, // [String] | Returns availability for a specific timeframe. Used instead of start_at & end_at
  'duration': 60, // Number | Duration of the event to schedule. Required if appointment_id isn't specified
  'interval': 15, // Number | Interval of bookable timeslots starting at x minutes on the hour . Required if appointment_id isn't specified
  'timezone': 2, // String | Timezone of the client. Localizes the available days
  'page': 1, // Number | The requested page of results
  'perPage': 5 // Number | The number of results per page. Only applies when using a date range
};
apiInstance.getAvailableDates(opts, (error, data, response) => {
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
 **filterUserIds** | [**[String]**](String.md)| The IDs of users whose availability will be retrieved. UUID Version 4. | [optional] 
 **filterAppointmentId** | **String**| Appointment ID used to fetch availability for an existing order | [optional] 
 **filterStartAt** | **Date**| Returns availability after start_at | [optional] 
 **filterEndAt** | **Date**| Returns availability before end_at | [optional] 
 **filterTimeframe** | [**[String]**](String.md)| Returns availability for a specific timeframe. Used instead of start_at &amp; end_at | [optional] 
 **duration** | **Number**| Duration of the event to schedule. Required if appointment_id isn&#39;t specified | [optional] 
 **interval** | **Number**| Interval of bookable timeslots starting at x minutes on the hour . Required if appointment_id isn&#39;t specified | [optional] 
 **timezone** | **String**| Timezone of the client. Localizes the available days | [optional] 
 **page** | **Number**| The requested page of results | [optional] 
 **perPage** | **Number**| The number of results per page. Only applies when using a date range | [optional] 

### Return type

[**CalendarDayCollection**](CalendarDayCollection.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAvailableTimeslots

> TimeslotCollection getAvailableTimeslots(opts)

Fetch available timeslots for a user or group

Fetch available timeslots for scheduling or rescheduling an appointment. Timeslots can be retrieved using a specific start &amp; end date range, or using a timeframe. When using a timeframe, the page parameter can be used to flip through days or weeks.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.AppointmentsApi();
let opts = {
  'filterUserIds': ["00000000-0000-4000-8000-000000000000"], // [String] | The IDs of users whose appointments will be retrieved. UUID Version 4.
  'filterAppointmentId': 00000000-0000-4000-8000-000000000000, // String | Appointment ID used to fetch availability for an existing order
  'filterStartAt': 2021-01-01T13:00Z, // Date | Returns availability after start_at
  'filterEndAt': 2021-01-02T13:00Z, // Date | Returns availability before end_at
  'filterTimeframe': MONTH, // [String] | Returns availability for a specific timeframe. Used instead of start_at & end_at
  'duration': 60, // Number | Duration of the event to schedule. Required if appointment_id isn't specified
  'interval': 25, // Number | Interval of bookable timeslots starting at x minutes on the hour . Required if appointment_id isn't specified
  'page': 1, // Number | The requested page of results
  'perPage': 5 // Number | The number of results per page. Only applies when using a date range
};
apiInstance.getAvailableTimeslots(opts, (error, data, response) => {
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
 **filterUserIds** | [**[String]**](String.md)| The IDs of users whose appointments will be retrieved. UUID Version 4. | [optional] 
 **filterAppointmentId** | **String**| Appointment ID used to fetch availability for an existing order | [optional] 
 **filterStartAt** | **Date**| Returns availability after start_at | [optional] 
 **filterEndAt** | **Date**| Returns availability before end_at | [optional] 
 **filterTimeframe** | [**[String]**](String.md)| Returns availability for a specific timeframe. Used instead of start_at &amp; end_at | [optional] 
 **duration** | **Number**| Duration of the event to schedule. Required if appointment_id isn&#39;t specified | [optional] 
 **interval** | **Number**| Interval of bookable timeslots starting at x minutes on the hour . Required if appointment_id isn&#39;t specified | [optional] 
 **page** | **Number**| The requested page of results | [optional] 
 **perPage** | **Number**| The number of results per page. Only applies when using a date range | [optional] 

### Return type

[**TimeslotCollection**](TimeslotCollection.md)

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
  'filterUserIds': ["00000000-0000-4000-8000-000000000000"], // [String] | The IDs of users whose appointments will be retrieved. UUID Version 4.
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
 **filterUserIds** | [**[String]**](String.md)| The IDs of users whose appointments will be retrieved. UUID Version 4. | [optional] 
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


## getUnconfirmedAppointmentsId

> UnconfirmedAppointmentResource getUnconfirmedAppointmentsId(unconfirmedAppointmentId, opts)

Retrieve an unconfirmed appointment.

Retrieves the details of an unconfirmed appointment with the given ID.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.AppointmentsApi();
let unconfirmedAppointmentId = 00000000-0000-0000-0000-000000000000; // String | The ID of an appointment.
let opts = {
  'include': order,users // String | Comma separated list of optional data to include in the response.
};
apiInstance.getUnconfirmedAppointmentsId(unconfirmedAppointmentId, opts, (error, data, response) => {
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
 **unconfirmedAppointmentId** | [**String**](.md)| The ID of an appointment. | 
 **include** | **String**| Comma separated list of optional data to include in the response. | [optional] 

### Return type

[**UnconfirmedAppointmentResource**](UnconfirmedAppointmentResource.md)

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

