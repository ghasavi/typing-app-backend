import { createContext, useContext, useEffect, useState } from "react";

const TypingContext = createContext();

export function TypingProvider({ children }) {

    const [paragraph, setParagraph] = useState("");
    const [typedText, setTypedText] = useState("");

    const [timeLeft, setTimeLeft] = useState(60);
    const [isTyping, setIsTyping] = useState(false);

    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);

    // Accuracy
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

    // WPM
    useEffect(() => {

        if (!isTyping) {

            setWpm(0);
            return;

        }

        const elapsedSeconds = 60 - timeLeft;

        if (elapsedSeconds <= 0) return;

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

    function resetTest() {

        setTypedText("");
        setTimeLeft(60);
        setIsTyping(false);
        setAccuracy(100);
        setWpm(0);

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