import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getLeaderboard } from "../services/leaderboardService";

export default function Leaderboard() {

    const [results, setResults] = useState([]);

    useEffect(() => {

        async function loadLeaderboard() {

            try {

                const data = await getLeaderboard();
                setResults(data);

            } catch (error) {

                console.error(error);

            }

        }

        loadLeaderboard();

    }, []);

    return (

        <>
            <Navbar />

            <div
                style={{
                    maxWidth: "900px",
                    margin: "40px auto",
                    textAlign: "center"
                }}
            >

                <h1>🏆 Leaderboard</h1>

                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "30px"
                    }}
                >

                    <thead>

                    <tr>

                        <th style={cellStyle}>Rank</th>
                        <th style={cellStyle}>Username</th>
                        <th style={cellStyle}>WPM</th>
                        <th style={cellStyle}>Accuracy</th>
                        <th style={cellStyle}>Time</th>

                    </tr>

                    </thead>

                    <tbody>

                    {results.map((result, index) => (

                        <tr key={result.id}>

                            <td style={cellStyle}>
                                {index === 0
                                    ? "🥇"
                                    : index === 1
                                        ? "🥈"
                                        : index === 2
                                            ? "🥉"
                                            : index + 1}
                            </td>

                            <td style={cellStyle}>
                                {result.user.username}
                            </td>

                            <td style={cellStyle}>
                                {result.wpm}
                            </td>

                            <td style={cellStyle}>
                                {result.accuracy}%
                            </td>

                            <td style={cellStyle}>
                                {result.time}s
                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

        </>

    );

}

const cellStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    fontSize: "18px"
};