import {IWindow} from "../models/window.interface";
import {Injectable} from "@angular/core";

function _window(): any {
  return window;
}

@Injectable()
export class WindowRef {
  public getNativeWindow(): IWindow {
    return _window();
  }
}