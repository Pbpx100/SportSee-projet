export default function SessionToolType({ active, payload }) {
    if (active) {
        return (
            <div className="container">
                <div className="text">{payload[0].value} min</div>
            </div>
        )
    }
    return null;
}

