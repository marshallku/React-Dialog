import { useCallback, useState } from "react";
import useDialog from "./hooks/useDialog";

export default function App() {
    const { confirm, alert } = useDialog();
    const [message, setMessage] = useState("");

    const showConfirm = useCallback(async () => {
        const confirmed = await confirm(
            "Are you sure?",
            "This can't be undone"
        );

        if (confirmed) {
            setMessage("Sure!");
        } else {
            setMessage("Nope.");
        }
    }, []);

    const showAlert = useCallback(async () => {
        alert("Hello there!");
    }, []);

    return (
        <div>
            <div>
                <button type="button" onClick={showConfirm}>
                    Confirm
                </button>
                <button type="button" onClick={showAlert}>
                    Alert
                </button>
                <div>{message}</div>
            </div>
        </div>
    );
}
