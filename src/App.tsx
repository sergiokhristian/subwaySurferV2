import { useMemo, useState } from 'react';

const lines = [
  '1', '2', '3', '4', '5', '6', '7',
  'A', 'C', 'E', 'B', 'D', 'F', 'M',
  'G', 'J', 'Z', 'L', 'N', 'Q', 'R', 'W',
];

function App() {
  const [fromLine, setFromLine] = useState<string | null>(null);
  const [toLine, setToLine] = useState<string | null>(null);

  const availableToLines = useMemo(
    () => lines.filter((line) => line !== fromLine),
    [fromLine]
  );

  const hasSelectedFrom = Boolean(fromLine);
  const hasSelectedTo = Boolean(toLine);

  const summaryText = hasSelectedFrom && hasSelectedTo
    ? `Selected route: FROM ${fromLine} → TO ${toLine}`
    : '';

  function handleFromSelect(line: string) {
    setFromLine(line);
    setToLine(null);
  }

  function handleToSelect(line: string) {
    setToLine(line);
  }

  function resetSelection() {
    setFromLine(null);
    setToLine(null);
  }

  return (
    <main className="app-card">
      <h1>NYC Subway Line Selector</h1>

      <div className="selection-group">
        <section>
          <p className="label">FROM:</p>
          <div className="button-grid">
            {lines.map((line) => (
              <button
                key={line}
                type="button"
                className={`line-button ${fromLine === line ? 'selected' : ''}`}
                onClick={() => handleFromSelect(line)}
              >
                {line}
              </button>
            ))}
          </div>
        </section>

        {hasSelectedFrom && (
          <section>
            <p className="label">TO:</p>
            <div className="button-grid">
              {availableToLines.map((line) => (
                <button
                  key={line}
                  type="button"
                  className={`line-button ${toLine === line ? 'selected' : ''}`}
                  onClick={() => handleToSelect(line)}
                >
                  {line}
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {summaryText && <div className="summary">{summaryText}</div>}
      {hasSelectedFrom && (
        <button type="button" className="reset-button" onClick={resetSelection}>
          Reset Selection
        </button>
      )}
    </main>
  );
}

export default App;
