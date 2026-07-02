export default function StatsCard({ title, value }) {

    return (

        <div
            style={{
                background: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "18px",
                width: "180px",
                padding: "28px",
                textAlign: "center",
                boxShadow: "0 12px 30px rgba(0,0,0,.25)",
                transition: "0.3s"
            }}
        >

            <h3
                style={{
                    color: "#94a3b8",
                    fontWeight: "500",
                    marginBottom: "15px"
                }}
            >
                {title}
            </h3>

            <h1
                style={{
                    color: "#3b82f6",
                    fontSize: "42px"
                }}
            >
                {value}
            </h1>

        </div>

    );

}