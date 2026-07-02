import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "17px",
        fontWeight: "500",
        transition: "0.3s"
    };

    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 50px",
                background: "#1e293b",
                borderBottom: "1px solid #334155",
                boxShadow: "0 8px 25px rgba(0,0,0,0.25)"
            }}
        >

            <h2
                style={{
                    color: "#3b82f6",
                    fontSize: "30px",
                    fontWeight: "700",
                    letterSpacing: "1px"
                }}
            >
                ⌨️ TypingPro
            </h2>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "28px"
                }}
            >

                <Link
                    to="/home"
                    style={linkStyle}
                >
                    Home
                </Link>

                <Link
                    to="/leaderboard"
                    style={linkStyle}
                >
                    Leaderboard
                </Link>

                <Link
                    to="/statistics"
                    style={linkStyle}
                >
                    Statistics
                </Link>

                <Link
                    to="/profile"
                    style={linkStyle}
                >
                    Profile
                </Link>

                <Link
                    to="/history"
                    style={linkStyle}
                >
                    History
                </Link>

                <button
                    onClick={logout}
                    style={{
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px 18px",
                        fontSize: "16px",
                        fontWeight: "600"
                    }}
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}