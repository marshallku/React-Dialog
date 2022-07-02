import useDialogStore from "../store/useDialogStore";

export default function useDialog() {
    const {
        setText,
        setRevealed,
        setType,
        responseHandler,
        setResponseHandler,
    } = useDialogStore();

    const onConfirm = () => {
        setRevealed(false);
        responseHandler?.(true);
        setText("");
    };

    const onCancel = () => {
        setRevealed(false);
        responseHandler?.(false);
        setText("");
    };

    const confirm = (text: string) => {
        setRevealed(true);
        setText(text);
        setType("confirm");

        return new Promise<boolean>((res) => {
            setResponseHandler(res);
        });
    };

    const alert = (text: string) => {
        setRevealed(true);
        setText(text);
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
