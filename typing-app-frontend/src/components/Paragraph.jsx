import { useTyping } from "../context/TypingContext";

export default function Paragraph() {

    const { paragraph, typedText } = useTyping();

    return (

        <div
            style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                fontSize: "28px",
                lineHeight: "2",
                fontFamily: "monospace",
                userSelect: "none",
                textAlign: "left"
            }}
        >
            {paragraph.split("").map((char, index) => {

                let color = "#999";
                let background = "transparent";

                if (index < typedText.length) {

                    color =
                        typedText[index] === char
                            ? "#22c55e"
                            : "#ef4444";

                }

                if (index === typedText.length) {

                    background = "#fde68a";

                }

                return (

                    <span
                        key={index}
                        style={{
                            color,
                            backgroundColor: background,
                            borderRadius: "3px"
                        }}
                    >
                        {char}
                    </span>

                );

            })}
        </div>

    );

}