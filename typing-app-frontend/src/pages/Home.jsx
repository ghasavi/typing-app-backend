import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Paragraph from "../components/Paragraph";
import StatsCard from "../components/StatsCard";
import TypingBox from "../components/TypingBox";
import Timer from "../components/Timer";
import { getParagraph } from "../services/typingService";
import { useTyping } from "../context/TypingContext";

export default function Home() {

    const {
        setParagraph,
        wpm,
        accuracy,
        timeLeft,
        resetTest
    } = useTyping();

    async function loadParagraph() {

        try {

            const data = await getParagraph();
            setParagraph(data.text);

        } catch (error) {

            console.error(error);

        }

    }

    useEffect(() => {

        loadParagraph();

    }, []);

    function handleRestart() {

        resetTest();
        loadParagraph();

    }

    return (

        <>
            <Navbar />

            <div
                style={{
                    padding: "40px",
                    textAlign: "center"
                }}
            >

                <h1>TypingPro</h1>

                <br />

                <Timer />

                <br />

                <Paragraph />

                <br />

                <TypingBox />

                <br />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px",
                        marginTop: "30px"
                    }}
                >

                    <StatsCard
                        title="WPM"
                        value={wpm}
                    />

                    <StatsCard
                        title="Accuracy"
                        value={`${accuracy}%`}
                    />

                    <StatsCard
                        title="Time"
                        value={timeLeft}
                    />

                </div>

                <br />

                <button
                    onClick={handleRestart}
                    style={{
                        padding: "12px 30px",
                        fontSize: "18px",
                        cursor: "pointer",
                        borderRadius: "8px"
                    }}
                >
                    Restart Test
                </button>

            </div>

        </>

    );

}