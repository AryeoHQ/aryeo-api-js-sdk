# Aryeo.Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the group. | 
**groupType** | **String** | The type of group. | 
**name** | **String** | The name of the group. | 
**logo** | **String** | Group logo. | [optional] 
**email** | **String** | Email. | [optional] 
**phone** | **String** | Phone number. | [optional] 
**website** | **String** | Website. | [optional] 
**isBrokerageOrBrokerageAgent** | **Boolean** | Does this group represent a brokerage or an agent who belongs to a brokerage? | 
**socialProfiles** | [**SocialProfiles**](SocialProfiles.md) |  | [optional] 
**agentProperties** | [**GroupAgentProperties**](GroupAgentProperties.md) |  | [optional] 
**users** | [**[User]**](User.md) | users | [optional] 
**defaultOrderForm** | [**OrderForm**](OrderForm.md) |  | [optional] 
**orderForms** | [**[OrderForm]**](OrderForm.md) | An array of order forms. | [optional] 



## Enum: GroupTypeEnum


* `creator` (value: `"creator"`)

* `agent` (value: `"agent"`)

* `brokerage` (value: `"brokerage"`)




