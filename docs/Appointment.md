# Aryeo.Appointment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the appointment. | 
**status** | **String** | The status of the appointment. | [optional] 
**title** | **String** | The title of the appointment. | [optional] 
**description** | **String** | The multi-line description of the appointment. | [optional] 
**startAt** | **Date** | The date and time (ISO 8601 format) when the appointment is set to start. | [optional] 
**endAt** | **Date** | The date and time (ISO 8601 format) when the appointment is set to end. | [optional] 
**duration** | **Number** | The length of the appointment in minutes. | [optional] 
**order** | [**Order**](Order.md) |  | [optional] 
**users** | [**[User]**](User.md) | Users attached to the appointment. | [optional] 



## Enum: StatusEnum


* `SCHEDULED` (value: `"SCHEDULED"`)

* `UNSCHEDULED` (value: `"UNSCHEDULED"`)

* `RESCHEDULED` (value: `"RESCHEDULED"`)

* `CANCELED` (value: `"CANCELED"`)




