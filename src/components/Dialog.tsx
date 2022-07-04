import { memo } from "react";
import { createPortal } from "react-dom";
import useDialogStore from "../store/useDialogStore";
import useDialog from "../hooks/useDialog";
import "./Dialog.css";

export default function Dialog() {
    const dialogRoot = document.getElementById("dialog") as HTMLElement;
    const { revealed, title, description, type } = useDialogStore();
    const { onConfirm, onCancel } = useDialog();
    const DialogComponent = memo(() => (
        <>
            <div className="dialog-backdrop" onClick={onCancel} />
            <section className="dialog">
                <h2 className="dialog__title">{title}</h2>
                {description && (
                    <p className="dialog__description">{description}</p>
                )}
                <div className="dialog__buttons">
                    <button
                        type="button"
                        className="dialog__button dialog__button--confirm"
                        onClick={onConfirm}
                    >
                        OK
                    </button>
                    {type === "confirm" && (
                        <button
                            type="button"
                            className="dialog__button dialog__button--cancel"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </section>
        </>
    ));

    return createPortal(revealed ? <DialogComponent /> : null, dialogRoot);
}
