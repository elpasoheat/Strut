###
@author Tantaman
###
define(["./Component", "common/FileUtils"],
(Component, FileUtils) ->
	Component.extend(
		initialize: () ->
			Component.prototype.initialize.apply(this, arguments)
			@set("type", "ImageModel")

			# We could do an HTTP request and get the content type
			# that'd be more foolproof.
			src = @get("src")
<<<<<<< HEAD:src/model/presentation/components/Image.coffee
			@set("imageType",  FileUtils.imageType(src))
=======
			idx = src.lastIndexOf(".")
			if idx isnt -1 and idx+1 < src.length
				extension = src.substring(idx+1, src.length)
				idx = extension.lastIndexOf("?")
				if idx isnt -1
					extension = extension.substring(0, idx)

			console.log extension

			@set("imageType",  extension.toUpperCase())
>>>>>>> parent of 4fef207... Font size readout in menu bar is updated as font is scaled.  GH-34.:client/src/model/presentation/components/Image.coffee
			@on("change:src", @_updateCache, @)
			@cachedImage = new Image()
			@_updateCache()

		_updateCache: () ->
			@cachedImage.src = @get("src")
			console.log @get("src")

		toBase64: () ->
			

		constructor: `function ImageModel() {
			Component.prototype.constructor.apply(this, arguments);
		}`
	)
)