export type ResponseHandler = (value: boolean | PromiseLike<boolean>) => void;
export type DialogType = "alert" | "confirm";

export interface DialogStore {
    text: string;
    setText: (text: string) => void;
    type: DialogType;
    setType: (state: DialogType) => void;
    revealed: boolean;
    setRevealed: (show: boolean) => void;
    responseHandler?: ResponseHandler;
    setResponseHandler: (responseHandler: ResponseHandler) => void;
}
