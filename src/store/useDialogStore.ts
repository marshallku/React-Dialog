import create from "zustand";
import { DialogStore } from "../@types/useDialogStore";

export default create<DialogStore>((set) => ({
    title: "",
    setTitle: (title) => {
        set((prev) => ({ ...prev, title }));
    },
    description: "",
    setDescription: (description) => {
        set((prev) => ({ ...prev, description }));
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
