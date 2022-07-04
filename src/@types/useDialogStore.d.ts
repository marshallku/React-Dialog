export type ResponseHandler = (value: boolean | PromiseLike<boolean>) => void;
export type DialogType = "alert" | "confirm";

export interface DialogStore {
    title: string;
    setTitle: (text: string) => void;
    description: string;
    setDescription: (description: string) => void;
    type: DialogType;
    setType: (state: DialogType) => void;
    revealed: boolean;
    setRevealed: (show: boolean) => void;
    responseHandler?: ResponseHandler;
    setResponseHandler: (responseHandler: ResponseHandler) => void;
}
