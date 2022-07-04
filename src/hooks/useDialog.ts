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

    const onConfirm = () => {
        setRevealed(false);
        responseHandler?.(true);
        setTitle("");
        setDescription("");
    };

    const onCancel = () => {
        setRevealed(false);
        responseHandler?.(false);
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

    return {
        confirm,
        alert,
        onConfirm,
        onCancel,
    };
}
