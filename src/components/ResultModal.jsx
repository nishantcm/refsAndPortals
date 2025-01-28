export default function ResultModal({result, targetTime}) {
    return (
        <dialog className="result-moldal" open>
            <h2>You {result} </h2>
            <p>The target time <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}