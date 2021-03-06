// Generated by CoffeeScript 1.3.3
/*
@author Tantaman
*/

define(["./Component", "common/FileUtils"], function(Component, FileUtils) {
  return Component.extend({
    initialize: function() {
      var src;
      Component.prototype.initialize.apply(this, arguments);
      this.set("type", "ImageModel");
      src = this.get("src");
<<<<<<< HEAD:web/scripts/model/presentation/components/Image.js
      this.set("imageType", FileUtils.imageType(src));
=======
      idx = src.lastIndexOf(".");
      if (idx !== -1 && idx + 1 < src.length) {
        extension = src.substring(idx + 1, src.length);
        idx = extension.lastIndexOf("?");
        if (idx !== -1) {
          extension = extension.substring(0, idx);
        }
      }
      console.log(extension);
      this.set("imageType", extension.toUpperCase());
>>>>>>> parent of 4fef207... Font size readout in menu bar is updated as font is scaled.  GH-34.:client/web/scripts/model/presentation/components/Image.js
      this.on("change:src", this._updateCache, this);
      this.cachedImage = new Image();
      return this._updateCache();
    },
    _updateCache: function() {
      this.cachedImage.src = this.get("src");
      return console.log(this.get("src"));
    },
    toBase64: function() {},
    constructor: function ImageModel() {
			Component.prototype.constructor.apply(this, arguments);
		}
  });
});
