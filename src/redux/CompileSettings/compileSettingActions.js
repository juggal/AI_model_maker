import { SAVE_COMPILE_SETTINGS } from "./compileSettingTypes";

export const saveCompileSettings = (settings) => {
  return {
    type: SAVE_COMPILE_SETTINGS,
    payload: settings,
  };
};
