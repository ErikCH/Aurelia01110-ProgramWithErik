System.register(["aurelia-router"], function (_export) {
  var Router, _createClass, _classCallCheck, ChildRouter;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ChildRouter = _export("ChildRouter", (function () {
        function ChildRouter(router) {
          _classCallCheck(this, ChildRouter);

          this.heading = "Child Router";
          this.router = router;
          router.configure(function (config) {
            config.map([{ route: ["", "welcome"], moduleId: "./welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "./flickr", nav: true }, { route: "child-router", moduleId: "./child-router", nav: true, title: "Child Router" }]);
          });
        }

        _createClass(ChildRouter, null, {
          inject: {
            value: function inject() {
              return [Router];
            }
          }
        });

        return ChildRouter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC9jaGlsZC1yb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLE1BQU0saUNBRUQsV0FBVzs7OztBQUZoQixZQUFNLGtCQUFOLE1BQU07Ozs7Ozs7OztBQUVELGlCQUFXO0FBRVgsaUJBRkEsV0FBVyxDQUVWLE1BQU0sRUFBQztnQ0FGUixXQUFXOztBQUdwQixjQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztBQUM5QixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixnQkFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN6QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxFQUFHLFFBQVEsRUFBRSxXQUFXLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLEVBQ2xGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUyxRQUFRLEVBQUUsVUFBVSxFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDakUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsQ0FDeEYsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDO1NBQ0o7O3FCQVpVLFdBQVc7QUFDZixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7OztlQUR6QixXQUFXIiwiZmlsZSI6Im9sZC9jaGlsZC1yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==