import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import "./index.scss";


/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ICustomStylesApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class CustomStylesApplicationCustomizer
  extends BaseApplicationCustomizer<ICustomStylesApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    document.body.classList.add("custom-styles");
    return Promise.resolve();
  }
}
