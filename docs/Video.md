# Aryeo.Video

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the video. | 
**title** | **String** | The title of the video given by the uploading user. | [optional] 
**duration** | **Number** | The video&#39;s runtime in seconds. | [optional] 
**displayType** | **String** | The display type determines if the video is branded or unbranded (can also be none or both). This affects whether the video is displayed on branded or unbranded marketing materials such as the property website. | 
**sourceType** | **String** | The original upload source of the video, used to determine how to handle the playback_url of the video and other display properties.  | 
**thumbnailUrl** | **String** | A thumbnail image URL for the video. | 
**playbackUrl** | **String** | A URL linking to playback stream of the video. | 
**downloadUrl** | **String** | A URL for downloading the video. | [optional] 
**shareUrl** | **String** | A URL linking to a public viewing optimized webpage the video. | [optional] 



## Enum: DisplayTypeEnum


* `BRANDED` (value: `"BRANDED"`)

* `UNBRANDED` (value: `"UNBRANDED"`)

* `BOTH` (value: `"BOTH"`)

* `NONE` (value: `"NONE"`)





## Enum: SourceTypeEnum


* `YOUTUBE` (value: `"YOUTUBE"`)

* `VIMEO` (value: `"VIMEO"`)

* `OPTIMIZED` (value: `"OPTIMIZED"`)

* `UPLOADED` (value: `"UPLOADED"`)

* `LINK` (value: `"LINK"`)




