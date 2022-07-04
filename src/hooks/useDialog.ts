import useDialogStore from "../store/useDialogStore";

export default function useDialog() {
    const {
        setTitle,
        setDescription,
        setRevealed,
        setType,
        responseHandler,
        setResponseHandler,
    } = useDialogStore();

    const onConfirm = (value: string | boolean) => {
        setRevealed(false);
        responseHandler?.(value);
        setTitle("");
        setDescription("");
    };

    const onCancel = (value: string | boolean) => {
        setRevealed(false);
        responseHandler?.(value);
        setTitle("");
        setDescription("");
    };

    const confirm = (title: string, description = "") => {
        setRevealed(true);
        setTitle(title);
        setDescription(description);
        setType("confirm");

        return new Promise<boolean>((res) => {
            setResponseHandler(res);
        });
    };

    const alert = (title: string, description = "") => {
        setRevealed(true);
        setTitle(title);
        setDescription(description);
        setType("alert");

        return new Promise<boolean>((res) => {
            setResponseHandler(res);
        });
    };

    const prompt = (title: string, description = "") => {
        setRevealed(true);
        setTitle(title);
        setDescription(description);
        setType("prompt");

        return new Promise<string>((res) => {
            setResponseHandler(res);
        });
    };

    return {
        confirm,
        alert,
        prompt,
        onConfirm,
        onCancel,
    };
}
