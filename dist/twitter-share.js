System.register(["aurelia-templating"], function (_export) {
  var Behavior, _createClass, _classCallCheck, TwitterShare;

  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TwitterShare = _export("TwitterShare", (function () {
        function TwitterShare() {
          _classCallCheck(this, TwitterShare);
        }

        _createClass(TwitterShare, null, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("twitter-share").withProperty("dsize").withProperty("durl").withProperty("dtext").withProperty("dtags");
            }
          }
        });

        return TwitterShare;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3aXR0ZXItc2hhcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsaUNBRUgsWUFBWTs7OztBQUZqQixjQUFRLHNCQUFSLFFBQVE7Ozs7Ozs7OztBQUVILGtCQUFZO2lCQUFaLFlBQVk7Z0NBQVosWUFBWTs7O3FCQUFaLFlBQVk7QUFDaEIsa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUM5QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQ3JCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7YUFFMUI7Ozs7ZUFUVSxZQUFZIiwiZmlsZSI6InR3aXR0ZXItc2hhcmUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==