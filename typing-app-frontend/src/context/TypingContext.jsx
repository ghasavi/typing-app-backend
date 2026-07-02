import { createContext, useContext, useEffect, useRef, useState } from "react";
import { saveResult } from "../services/resultService";

const TypingContext = createContext();

export function TypingProvider({ children }) {

    const [paragraph, setParagraph] = useState("");
    const [typedText, setTypedText] = useState("");

    const [timeLeft, setTimeLeft] = useState(60);
    const [isTyping, setIsTyping] = useState(false);

    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);

    // Prevent saving multiple times
    const resultSaved = useRef(false);

    // Accuracy Calculation
    useEffect(() => {

        if (typedText.length === 0) {
            setAccuracy(100);
            return;
        }

        let correct = 0;

        for (let i = 0; i < typedText.length; i++) {

            if (typedText[i] === paragraph[i]) {
                correct++;
            }

        }

        setAccuracy(Math.round((correct / typedText.length) * 100));

    }, [typedText, paragraph]);

    // WPM Calculation
    useEffect(() => {

        if (!isTyping) {
            setWpm(0);
            return;
        }

        const elapsedSeconds = 60 - timeLeft;

        if (elapsedSeconds <= 0) {
            return;
        }

        let correct = 0;

        for (let i = 0; i < typedText.length; i++) {

            if (typedText[i] === paragraph[i]) {
                correct++;
            }

        }

        const words = correct / 5;
        const minutes = elapsedSeconds / 60;

        setWpm(Math.round(words / minutes));

    }, [typedText, paragraph, timeLeft, isTyping]);

    // Save Result Automatically
    useEffect(() => {

        async function uploadResult() {

            const userId = localStorage.getItem("userId");

            if (!userId) {
                return;
            }

            try {

                await saveResult(userId, {
                    wpm,
                    accuracy,
                    time: 60
                });

                console.log("Result saved!");

            } catch (error) {

                console.error("Failed to save result", error);

            }

        }

        if (
            timeLeft === 0 &&
            isTyping &&
            !resultSaved.current
        ) {

            resultSaved.current = true;
            uploadResult();

        }

    }, [timeLeft, isTyping, wpm, accuracy]);

    // Restart Test
    function resetTest() {

        setTypedText("");
        setTimeLeft(60);
        setIsTyping(false);
        setAccuracy(100);
        setWpm(0);

        resultSaved.current = false;

    }

    return (

        <TypingContext.Provider
            value={{
                paragraph,
                setParagraph,

                typedText,
                setTypedText,

                timeLeft,
                setTimeLeft,

                isTyping,
                setIsTyping,

                wpm,
                accuracy,

                resetTest
            }}
        >

            {children}

        </TypingContext.Provider>

    );

}

export function useTyping() {

    return useContext(TypingContext);

}