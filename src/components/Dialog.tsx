import { memo, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import useDialogStore from "../store/useDialogStore";
import useDialog from "../hooks/useDialog";
import "./Dialog.css";

export default function Dialog() {
    const dialogRoot = document.getElementById("dialog") as HTMLElement;
    const inputRef = useRef<HTMLInputElement>(null);
    const { revealed, title, description, type } = useDialogStore();
    const { onConfirm, onCancel } = useDialog();
    const handleConfirmClick = useCallback(() => {
        if (type === "prompt") {
            onConfirm(inputRef.current?.value || "");
            return;
        }

        onConfirm(true);
    }, [inputRef.current, type, onConfirm]);
    const handleCancelClick = useCallback(() => {
        if (type === "prompt") {
            onCancel("");
            return;
        }

        onCancel(false);
    }, [type, onConfirm]);
    const DialogComponent = memo(() => (
        <>
            <div className="dialog-backdrop" onClick={handleCancelClick} />
            <section className="dialog">
                <h2 className="dialog__title">{title}</h2>
                {description && (
                    <p className="dialog__description">{description}</p>
                )}
                {type === "prompt" && (
                    <form onSubmit={handleConfirmClick}>
                        <input
                            autoFocus
                            type="text"
                            className="dialog__input"
                            ref={inputRef}
                        />
                    </form>
                )}
                <div className="dialog__buttons">
                    <button
                        type="button"
                        className="dialog__button dialog__button--confirm"
                        onClick={handleConfirmClick}
                    >
                        OK
                    </button>
                    {type !== "alert" && (
                        <button
                            type="button"
                            className="dialog__button dialog__button--cancel"
                            onClick={handleCancelClick}
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
