import { useTyping } from "../context/TypingContext";

export default function TypingBox() {

    const {
        typedText,
        setTypedText,
        isTyping,
        setIsTyping,
        timeLeft
    } = useTyping();

    function handleChange(e) {

        if (timeLeft === 0) {
            return;
        }

        if (!isTyping) {
            setIsTyping(true);
        }

        setTypedText(e.target.value);

    }

    return (

        <textarea
            value={typedText}
            onChange={handleChange}
            disabled={timeLeft === 0}
            placeholder="Start typing here..."
            rows={8}
            style={{
                width: "900px",
                padding: "20px",
                fontSize: "20px",
                borderRadius: "10px",
                resize: "none"
            }}
        />

    );

}