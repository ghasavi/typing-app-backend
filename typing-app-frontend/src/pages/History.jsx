import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getHistory } from "../services/historyService";

export default function History() {

    const [results, setResults] = useState([]);

    useEffect(() => {

        async function loadHistory() {

            try {

                const data = await getHistory();

                setResults(data);

            } catch (error) {

                console.error(error);

            }

        }

        loadHistory();

    }, []);

    return (

        <>
            <Navbar />

            <div
                style={{
                    maxWidth: "1000px",
                    margin: "40px auto",
                    padding: "20px"
                }}
            >

                <h1
                    style={{
                        marginBottom: "30px",
                        textAlign: "center"
                    }}
                >
                    📜 Typing History
                </h1>

                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse"
                    }}
                >

                    <thead>

                    <tr>

                        <th style={headerStyle}>Date</th>

                        <th style={headerStyle}>WPM</th>

                        <th style={headerStyle}>Accuracy</th>

                        <th style={headerStyle}>Time</th>

                    </tr>

                    </thead>

                    <tbody>

                    {results.map((result) => (

                        <tr key={result.id}>

                            <td style={cellStyle}>
                                {new Date(result.createdAt).toLocaleString()}
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

const headerStyle = {

    borderBottom: "2px solid #3b82f6",
    padding: "15px",
    textAlign: "center"

};

const cellStyle = {

    padding: "15px",
    borderBottom: "1px solid #444",
    textAlign: "center"

};