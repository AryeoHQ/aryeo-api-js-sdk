# Aryeo.Video

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the video. | 
**title** | **String** | The title of the video given by the uploading user. | [optional] 
**displayType** | **String** | The display type determines if the video is branded or unbranded (can also be none or both). This affects whether the video is displayed on branded or unbranded marketing materials such as the property website. | 
**sourceType** | **String** | The original upload source of the video, used to determine how to handle the playback_url of the video and other display properties.  | 
**thumbnailUrl** | **String** | Thumbnail URL for the video. | 
**playbackUrl** | **String** | A URL linking to the video. | 
**downloadUrl** | **String** | A URL for downloading the video. | [optional] 
**seconds** | **Number** | The video&#39;s runtime in seconds. | [optional] 
**shareUrl** | **String** | Aryeo iFrame player URL | [optional] 



## Enum: DisplayTypeEnum


* `branded` (value: `"branded"`)

* `unbranded` (value: `"unbranded"`)

* `both` (value: `"both"`)

* `none` (value: `"none"`)





## Enum: SourceTypeEnum


* `youtube` (value: `"youtube"`)

* `vimeo` (value: `"vimeo"`)

* `optimized` (value: `"optimized"`)

* `uploaded` (value: `"uploaded"`)

* `link` (value: `"link"`)



