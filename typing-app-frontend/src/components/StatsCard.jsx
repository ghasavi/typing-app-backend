export default function StatsCard({ title, value }) {

    return (

        <div
            style={{
                border: "1px solid gray",
                padding: "20px",
                width: "150px",
                textAlign: "center",
                borderRadius: "10px"
            }}
        >

            <h3>{title}</h3>

            <h2>{value}</h2>

        </div>

    );

}