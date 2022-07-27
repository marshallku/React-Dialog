import { memo, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import useDialogStore from "../store/useDialogStore";
import useDialog from "../hooks/useDialog";
import "./Dialog.css";

export default function Dialog() {
    const dialogRoot = document.getElementById("dialog") as HTMLElement;
    const inputRef = useRef<HTMLInputElement>(null);
    const { revealed, title, description, type } = useDialogStore();
    const { onInteractionEnd } = useDialog();
    const handleConfirmClick = useCallback(() => {
        if (type === "prompt") {
            onInteractionEnd(inputRef.current?.value || "");
            return;
        }

        onInteractionEnd(true);
    }, [inputRef.current, type, onInteractionEnd]);
    const handleCancelClick = useCallback(() => {
        if (type === "prompt") {
            onInteractionEnd("");
            return;
        }

        onInteractionEnd(false);
    }, [type, onInteractionEnd]);
    const DialogComponent = memo(() => (
        <>
            <div className="dialog-backdrop" onClick={handleCancelClick} />
            <dialog className="dialog" open={revealed}>
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
            </dialog>
        </>
    ));

    return createPortal(revealed ? <DialogComponent /> : null, dialogRoot);
}
