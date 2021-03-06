import { useCallback, useState } from "react";
import useDialog from "./hooks/useDialog";

export default function App() {
    const { confirm, alert, prompt } = useDialog();
    const [message, setMessage] = useState("");

    const showConfirm = useCallback(async () => {
        const confirmed = await confirm(
            "Are you sure?",
            "This can't be undone."
        );

        setMessage(confirmed ? "Sure!" : "Nope.");
    }, []);

    const showAlert = useCallback(async () => {
        await alert("Hello there!");

        setMessage("Will update after alert");
    }, []);

    const showPrompt = useCallback(async () => {
        const inputted = await prompt("What's your name?");

        setMessage(`Your name is ${inputted}`);
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <button type="button" onClick={showConfirm}>
                Confirm
            </button>
            <button type="button" onClick={showAlert}>
                Alert
            </button>
            <button type="button" onClick={showPrompt}>
                Prompt
            </button>
            <h1>{message}</h1>
        </div>
    );
}
