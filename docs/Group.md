# Aryeo.Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the group. | 
**type** | **String** | The type of the group. Can be CREATOR, AGENT, or BROKERAGE, and may dictate the attributes of the group returned. | 
**name** | **String** | The name of the group. | 
**email** | **String** | The email address of a group. | [optional] 
**phone** | **String** | A phone number represented in whichever standards specified by the group, typically ###-###-#### (separated by hyphens). | [optional] 
**websiteUrl** | **String** | The website URL of a group. | [optional] 
**logoUrl** | **String** | The logo URL of a group. | [optional] 
**avatarUrl** | **String** | The profile image URL of a real estate agent. Only returned if group&#39;s type is AGENT. | [optional] 
**officeName** | **String** | The name of the brokerage or team of a real estate agent. Only returned if group&#39;s type is AGENT. | [optional] 
**licenseNumber** | **String** | The license number of a real estate agent. Only returned if group&#39;s type is AGENT. | [optional] 
**socialProfiles** | [**SocialProfiles**](SocialProfiles.md) |  | [optional] 
**defaultOrderForm** | [**OrderForm**](OrderForm.md) |  | [optional] 
**orderForms** | [**[OrderForm]**](OrderForm.md) | An array of order forms a vendor group provides for placing orders. Only returned if group&#39;s type is CREATOR.  | [optional] 
**owner** | [**User**](User.md) |  | [optional] 
**users** | [**[User]**](User.md) | The Aryeo users associated with this group. | [optional] 
**isBrokerageOrBrokerageAgent** | **Boolean** | Does this group represent a brokerage or an agent who belongs to a brokerage? | 



## Enum: TypeEnum


* `CREATOR` (value: `"CREATOR"`)

* `AGENT` (value: `"AGENT"`)

* `BROKERAGE` (value: `"BROKERAGE"`)




