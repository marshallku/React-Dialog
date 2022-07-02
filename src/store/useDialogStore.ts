import create from "zustand";
import { DialogStore } from "../@types/useDialogStore";

export default create<DialogStore>((set) => ({
    text: "",
    setText: (text) => {
        set((prev) => ({ ...prev, text }));
    },
    type: "alert",
    setType: (type) => {
        set((prev) => ({ ...prev, type }));
    },
    revealed: false,
    setRevealed(revealed) {
        set((prev) => ({ ...prev, revealed }));
    },
    setResponseHandler(responseHandler) {
        set((prev) => ({ ...prev, responseHandler }));
    },
}));
