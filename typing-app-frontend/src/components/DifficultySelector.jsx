import { useTyping } from "../context/TypingContext";

export default function DifficultySelector() {

    const {
        difficulty,
        setDifficulty
    } = useTyping();

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginBottom: "25px"
            }}
        >

            <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "8px"
                }}
            >

                <option value="easy">Easy</option>

                <option value="medium">Medium</option>

                <option value="hard">Hard</option>

                <option value="programming">Programming</option>

                <option value="quotes">Quotes</option>

            </select>

        </div>

    );

}