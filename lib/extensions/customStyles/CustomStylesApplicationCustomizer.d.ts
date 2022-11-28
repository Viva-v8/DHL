import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import "./index.scss";
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ICustomStylesApplicationCustomizerProperties {
    testMessage: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class CustomStylesApplicationCustomizer extends BaseApplicationCustomizer<ICustomStylesApplicationCustomizerProperties> {
    onInit(): Promise<void>;
}
//# sourceMappingURL=CustomStylesApplicationCustomizer.d.ts.map