import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import TypingBox from "../components/TypingBox";
import Timer from "../components/Timer";

export default function Home() {

    return (

        <>

            <Navbar />

            <div
                style={{
                    padding: "40px",
                    textAlign: "center"
                }}
            >

                <h1>

                    Welcome to TypingPro

                </h1>

                <Timer />

                <br />

                <p>

                    The quick brown fox jumps over the lazy dog.

                </p>

                <br />

                <TypingBox />

                <br />
                <br />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px"
                    }}
                >

                    <StatsCard
                        title="WPM"
                        value="0"
                    />

                    <StatsCard
                        title="Accuracy"
                        value="100%"
                    />

                    <StatsCard
                        title="Time"
                        value="60"
                    />

                </div>

            </div>

        </>

    );

}