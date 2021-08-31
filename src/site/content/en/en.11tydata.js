const livePaths = require("../../_filters/live-paths");
const fast = require("./pages/fast/fast.11tydata.js").path;
const accessible = require("./pages/accessible/accessible.11tydata.js").path;
const reliable = require("./reliable/reliable.11tydata.js").path;
const discoverable = require("./pages/discoverable/discoverable.11tydata.js")
  .path;
const secure = require("./pages/secure/secure.11tydata.js").path;
const installable = require("./pages/installable/installable.11tydata.js").path;

// =============================================================================
// HOME OVERVIEW
//
// This is the context object for the homepage.
// It helps layout cards featured on the homepage, and their ordering.
//
// =============================================================================

module.exports = function() {
  const paths = [
    fast,
    accessible,
    reliable,
    secure,
    discoverable,
    installable,
  ].filter(livePaths);

  return {
    home: {
      paths,
    },
  };
};
