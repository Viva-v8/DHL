var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import "./index.scss";
/** A Custom Action which can be run during execution of a Client Side Application */
var CustomStylesApplicationCustomizer = /** @class */ (function (_super) {
    __extends(CustomStylesApplicationCustomizer, _super);
    function CustomStylesApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomStylesApplicationCustomizer.prototype.onInit = function () {
        document.body.classList.add("custom-styles");
        return Promise.resolve();
    };
    return CustomStylesApplicationCustomizer;
}(BaseApplicationCustomizer));
export default CustomStylesApplicationCustomizer;
//# sourceMappingURL=CustomStylesApplicationCustomizer.js.map