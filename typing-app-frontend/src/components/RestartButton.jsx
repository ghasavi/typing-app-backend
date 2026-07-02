import { useTyping } from "../context/TypingContext";
import { getParagraph } from "../services/typingService";

export default function RestartButton() {

    const {
        resetTest,
        setParagraph
    } = useTyping();

    async function restart() {

        resetTest();

        try {

            const data = await getParagraph();

            setParagraph(data.text);

        } catch (error) {

            console.error(error);

        }

    }

    return (

        <button
            onClick={restart}
            style={{
                marginTop: "30px",
                padding: "12px 30px",
                fontSize: "18px",
                cursor: "pointer",
                borderRadius: "8px"
            }}
        >
            🔄 Restart Test
        </button>

    );

}