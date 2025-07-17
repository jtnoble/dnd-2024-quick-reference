import { useState } from 'react';
import '../styles/DiceRoller.css';

interface DiceRollResult {
    die: number;
    result: number;
    rolling: boolean;
}

function DiceRoller() {
    const [rollResult, setRollResult] = useState<DiceRollResult>({ die: 20, result: 20, rolling: false });
    const dice = [2, 4, 6, 8, 10, 12, 20, 100];

    const rollDie = (sides: number) => {
        if (rollResult.rolling) return;

        setRollResult(prev => ({ ...prev, rolling: true }));

        let times = 0;
        const interval = setInterval(() => {
            setRollResult(prev => ({
                ...prev,
                result: Math.floor(Math.random() * sides) + 1
            }));
            times++;

            if (times > 10) {
                clearInterval(interval);
                // Final result
                const finalResult = Math.floor(Math.random() * sides) + 1;
                setRollResult({
                    die: sides,
                    result: finalResult,
                    rolling: false
                });
            }
        }, 50);
    };

    return (
        <div className="dice-roller">
            <div className="dice-buttons">
                {dice.map((sides) => (
                    <button
                        key={sides}
                        className={`dice-button ${rollResult.die === sides ? 'active' : ''}`}
                        onClick={() => rollDie(sides)}
                        disabled={rollResult.rolling}
                    >
                        d{sides}
                    </button>
                ))}
            </div>
            <div className={`dice-result ${rollResult.rolling ? 'rolling' : ''}`}>
                {rollResult.result}
            </div>
        </div>
    );
}

export default DiceRoller;