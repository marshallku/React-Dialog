import { createPortal } from "react-dom";
import useDialogStore from "../store/useDialogStore";
import useDialog from "../hooks/useDialog";

export default function Dialog() {
    const dialogRoot = document.getElementById("dialog") as HTMLElement;
    const { revealed, text, type } = useDialogStore();
    const { onConfirm, onCancel } = useDialog();

    const DialogComponent = () => (
        <section className="dialog">
            <div className="dialog__backdrop" />
            <h2>{text}</h2>
            <div className="dialog__buttons">
                <button type="button" onClick={onConfirm}>
                    OK
                </button>
                {type === "confirm" && (
                    <button type="button" onClick={onCancel}>
                        Cancel
                    </button>
                )}
            </div>
        </section>
    );

    return createPortal(revealed ? <DialogComponent /> : null, dialogRoot);
}
