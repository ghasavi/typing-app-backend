import { useTyping } from "../context/TypingContext";
import { getParagraph } from "../services/typingService";

export default function RestartButton() {

    const {
        resetTest,
        setParagraph,
        difficulty
    } = useTyping();

    async function restart() {

        resetTest();

        try {

            const data = await getParagraph(difficulty);

            setParagraph(data.text);

        } catch (error) {

            console.error(error);

        }

    }

    return (

        <button
            onClick={restart}
            style={{
                background: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "16px 40px",
                fontSize: "18px",
                fontWeight: "600",
                boxShadow: "0 10px 25px rgba(59,130,246,.35)"
            }}
        >
            🔄 Restart Test
        </button>

    );

}