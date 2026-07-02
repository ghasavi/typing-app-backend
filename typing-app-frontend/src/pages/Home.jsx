import { useEffect } from "react";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import TypingBox from "../components/TypingBox";
import Timer from "../components/Timer";
import TypingParagraph from "../components/TypingParagraph";
import { useTyping } from "../context/TypingContext";
import { getParagraph } from "../services/typingService";
import RestartButton from "../components/RestartButton";

export default function Home() {

    const {
        setParagraph,
        wpm,
        accuracy,
        timeLeft
    } = useTyping();

    useEffect(() => {

        async function loadParagraph() {

            try {

                const data = await getParagraph();

                setParagraph(data.text);

            } catch (error) {

                console.error(error);

            }

        }

        loadParagraph();

    }, [setParagraph]);

    return (

        <>
            <Navbar />

            <div
                style={{
                    padding: "40px",
                    textAlign: "center"
                }}
            >

                <h1>Welcome to TypingPro</h1>

                <Timer />

                {timeLeft === 0 && (
                    <h2
                        style={{
                            color: "red",
                            marginTop: "20px"
                        }}
                    >
                        🎉 Test Finished! Click Restart to try again.
                    </h2>
                )}

                <br />

                <TypingParagraph />

                <br />

                <TypingBox />

                <br /><br />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px"
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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px"
                    }}
                >

                    <StatsCard title="WPM" value={wpm} />
                    <StatsCard title="Accuracy" value={`${accuracy}%`} />
                    <StatsCard title="Time" value={timeLeft} />

                </div>

                <br />

                <RestartButton />

            </div>

        </>

    );

}