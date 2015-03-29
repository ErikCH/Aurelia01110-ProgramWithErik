System.register([], function (_export) {
  var _createClass, _classCallCheck, Start;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Start = _export("Start", (function () {
        function Start() {
          _classCallCheck(this, Start);

          this.heading = "Testing!!";
          this.firstName = "Erik";
          this.lastName = "Hanchett";
        }

        _createClass(Start, {
          fullName: {
            get: function () {
              return "" + this.firstName + " " + this.lastName;
            }
          },
          start: {
            value: function start() {
              alert("Hi, " + this.fullName + "!");
            }
          }
        });

        return Start;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBQWEsS0FBSzs7Ozs7Ozs7Ozs7QUFBTCxXQUFLO0FBQ0wsaUJBREEsS0FBSyxHQUNIO2dDQURGLEtBQUs7O0FBRWQsY0FBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7QUFDM0IsY0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDNUI7O3FCQUxVLEtBQUs7QUFPWixrQkFBUTtpQkFBQSxZQUFFO0FBQ1osMEJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO2FBQzdDOztBQUVELGVBQUs7bUJBQUEsaUJBQUU7QUFDTCxtQkFBSyxVQUFRLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQzthQUNoQzs7OztlQWJVLEtBQUsiLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==