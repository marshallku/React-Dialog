import useDialogStore from "../store/useDialogStore";
import { DialogType } from "../@types/useDialogStore";

export default function useDialog() {
    const {
        setTitle,
        setDescription,
        setRevealed,
        setType,
        responseHandler,
        setResponseHandler,
    } = useDialogStore();

    const onInteractionEnd = (value: string | boolean) => {
        setRevealed(false);
        responseHandler?.(value);
        setTitle("");
        setDescription("");
    };

    const setAttributes = (
        type: DialogType,
        title: string,
        description: string
    ) => {
        setRevealed(true);
        setTitle(title);
        setDescription(description);
        setType(type);
    };

    const confirm = (title: string, description = "") => {
        setAttributes("confirm", title, description);

        return new Promise<boolean>((res) => {
            setResponseHandler(res);
        });
    };

    const alert = (title: string, description = "") => {
        setAttributes("alert", title, description);

        return new Promise<boolean>((res) => {
            setResponseHandler(res);
        });
    };

    const prompt = (title: string, description = "") => {
        setAttributes("prompt", title, description);

        return new Promise<boolean>((res) => {
            setResponseHandler(res);
        });
    };

    return {
        confirm,
        alert,
        prompt,
        onInteractionEnd,
    };
}
