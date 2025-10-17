import React, { useEffect, useRef, useState } from "react";

const Checklist = ({ items = [], unit, storageKey }) => {
  const [list, setList] = useState(
    items.map((it, i) => ({ id: it.id ?? i, text: it.text ?? it, done: !!it.done }))
  );
  const selectAllRef = useRef(null);

  // load saved state if storageKey provided
  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setList(parsed);
      }
    } catch (e) {
      /* ignore parse errors */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  // persist on change
  useEffect(() => {
    if (!storageKey) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(list));
    } catch (e) {
      /* ignore storage errors */
    }
  }, [list, storageKey]);

  const allChecked = list.length > 0 && list.every((i) => i.done);
  const someChecked = list.some((i) => i.done) && !allChecked;

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someChecked;
    }
  }, [someChecked]);

  const toggleItem = (id, checked) => {
    setList((prev) => prev.map((it) => (it.id === id ? { ...it, done: checked } : it)));
  };

  const toggleAll = (checked) => {
    setList((prev) => prev.map((it) => ({ ...it, done: checked })));
  };

  return (
    <section className="unit-checklist">
      <header className="unit-header">
        <label style={{ userSelect: "none" }}>
          <input
            ref={selectAllRef}
            type="checkbox"
            checked={allChecked}
            onChange={(e) => toggleAll(e.target.checked)}
          />{" "}
          Select all
        </label>
        {unit ? <strong style={{ marginLeft: 12 }}>{unit}</strong> : null}
      </header>

      <ul className="task-list">
        {list.map((it) => (
          <li key={it.id}>
            <label style={{ userSelect: "none" }}>
              <input
                type="checkbox"
                checked={!!it.done}
                onChange={(e) => toggleItem(it.id, e.target.checked)}
              />{" "}
              {it.text}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Checklist;