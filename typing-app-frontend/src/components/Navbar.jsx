import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                background: "#222",
                color: "white"
            }}
        >

            <h2>TypingPro</h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px"
                }}
            >

                <Link to="/home">Home</Link>

                <Link to="/leaderboard">Leaderboard</Link>

                <Link to="/profile">Profile</Link>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </nav>

    );

}