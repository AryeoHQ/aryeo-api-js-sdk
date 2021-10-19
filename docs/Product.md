# Aryeo.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the product. UUID Version 4. | 
**title** | **String** | The title of the product. | 
**description** | **String** | The description of the product. | [optional] 
**active** | **Boolean** | The active status of a product. | [optional] 
**type** | **String** | The type of product. | 
**variants** | [**[ProductVariant]**](ProductVariant.md) |  | [optional] 
**categories** | [**[ProductCategory]**](ProductCategory.md) |  | [optional] 



## Enum: TypeEnum


* `MAIN` (value: `"MAIN"`)

* `ADDON` (value: `"ADDON"`)




