import { useTyping } from "../context/TypingContext";

export default function TypingParagraph() {

    const { paragraph, typedText } = useTyping();

    return (

        <div
            style={{
                fontSize: "28px",
                lineHeight: "2",
                textAlign: "left",
                maxWidth: "900px",
                margin: "0 auto",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                minHeight: "180px",
                userSelect: "none"
            }}
        >

            {paragraph.split("").map((char, index) => {

                let color = "#888";

                if (index < typedText.length) {

                    color =
                        typedText[index] === char
                            ? "#22c55e"
                            : "#ef4444";

                }

                return (

                    <span
                        key={index}
                        style={{
                            color,
                            backgroundColor:
                                index === typedText.length
                                    ? "#dbeafe"
                                    : "transparent"
                        }}
                    >
                        {char}
                    </span>

                );

            })}

        </div>

    );

}