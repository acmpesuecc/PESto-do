import React, { useState, useEffect, useRef } from 'react';
import './Dsa.css';
import UnitDropdown from '../../UnitDropdown';

const Checklist = ({ items, unit, storageKey }) => {
    const [checkedItems, setCheckedItems] = useState(() => {
        const savedState = localStorage.getItem(storageKey);
        return savedState ? JSON.parse(savedState) : {};
    });

    const selectAllRef = useRef(null);

    const allChecked = items.length > 0 && items.every((_, i) => !!checkedItems[i]);
    const someChecked = items.some((_, i) => !!checkedItems[i]) && !allChecked;

    useEffect(() => {
        if (selectAllRef.current) selectAllRef.current.indeterminate = someChecked;
    }, [someChecked]);

    const handleCheckboxChange = (index) => {
        setCheckedItems((prevState) => {
            const updatedState = { ...prevState, [index]: !prevState[index] };
            localStorage.setItem(storageKey, JSON.stringify(updatedState));
            return updatedState;
        });
    };

    const handleSelectAllChange = (checked) => {
        const updated = {};
        items.forEach((_, i) => (updated[i] = checked));
        setCheckedItems(updated);
        localStorage.setItem(storageKey, JSON.stringify(updated));
    };

    return (
        <div className="checklist-container">
            <div className="checklist-header">
                <label style={{ userSelect: 'none' }}>
                    <input
                        ref={selectAllRef}
                        type="checkbox"
                        checked={allChecked}
                        onChange={(e) => handleSelectAllChange(e.target.checked)}
                    />{' '}
                    Select all
                </label>
                <h1 style={{ display: 'inline-block', marginLeft: '12px' }}>{unit}</h1>
            </div>

            {items.map((item, index) => (
                <div key={index} className="checkbox-item">
                    <input
                        type="checkbox"
                        id={`${unit}-item${index + 1}`}
                        checked={checkedItems[index] || false}
                        onChange={() => handleCheckboxChange(index)}
                    />
                    <label
                        htmlFor={`${unit}-item${index + 1}`}
                        className={checkedItems[index] ? 'checked' : ''}
                    >
                        {item}
                    </label>
                </div>
            ))}
        </div>
    );
};

const DSAChecklist = () => {
    const [currentUnit, setCurrentUnit] = useState("UNIT 1");
    const units = ["UNIT 1", "UNIT 2", "UNIT 3", "UNIT 4"];

    const unitItems = {
        "UNIT 1": [
            "Introduction to DSA",
            "Overview of Static and Dynamic Memory Allocation",
            "Singly Linked List",
            "Doubly Linked List",
            "Circular Singly Linked List",
            "Circular Doubly Linked List",
            "Multilist",
            "Intro to sparse matrix (structure)",
            "Skip List",
            "Skip List Operations",
            "Stack - Array Implementation",
            "Stack - Linked List Implementation",
            "Applications of Stacks - Recursion",
            "Applications of Stacks - Tower of Hanoi",
            "Infix to Prefix and Postfix Expression",
            "Postfix Evaluation",
            "Parenthesis Matching",
        ],
        "UNIT 2": [
            "Queue - Introduction",
            "Queue - Linked List Implementation",
            "Queue - Array Implementation",
            "Circular Queue - Linked List Implementation",
            "Circular Queue - Array Implementation",
            "Priority Queue",
            "Dequeue and its Applications using Linked Lists and Arrays",
            "Applications of Queue",
            "Case Study - Josephus Problem",
            "CPU Scheduling",
            "Binary Trees - Introduction",
            "Binary Trees - Traversal",
            "Binary Search Trees - Introduction",
            "n-Ary Trees and Forest",
            "Conversion of an N-ary tree and a forest to a binary tree",
        ],
        "UNIT 3": [
            "Binary Search Trees",
            "Binary Search Trees - Operations",
            "Threaded Binary Tree - Introduction",
            "Threaded Binary Tree - Implementation",
            "Heap Tree - Introduction",
            "Heap Tree - Implementation",
            "Implementation of Priority Queue using Min/Max Heap",
            "Balanced Trees",
            "AVL Trees",
            "AVL Rotation",
            "Splay Trees",
            "n-Ary Trees and Forest - Traversal",
            "Graphs - Introduction",
            "Representation of Graph - Adjacency Matrix",
            "Representation of Graph - Adjacency List",
            "Graphs - Implementation using Adjacency Matrix",
            "Graphs - Implementation using Adjacency List",
            "Graphs - Traversal using Depth First Search",
            "Graphs - Traversal using Breadth First Search",
            "Other Tree Operations"
        ],
        "UNIT 4": [
            "Hashing - Introduction",
            "Open Hashing",
            "Closed Hashing",
            "Collision Handling - Quadratic Probing and Double Hashing",
            "Applications of Hashing in Cryptography",
            "Trie Trees and Suffix Trees - Introduction",
            "Finding a Path in a Network using BFS/DFS",
            "Trie Trees - Implementation",
            "Checking Graph Connectivity using BFS/DFS",
            "Applications - URL Decoding",
            "Applications - Computer Network Topology",
            "Indexing in a Data Base"
        ]
    };

    return (
        <div>
            <div className="course-title">Data Structures and Algorithms</div>

            <UnitDropdown 
                units={units}
                currentUnit={currentUnit}
                onUnitChange={setCurrentUnit}
            />

            <Checklist
                items={unitItems[currentUnit]}
                unit={currentUnit}
                storageKey={`dsa-${currentUnit.toLowerCase().replace(" ", "-")}-checklist`}
            />
        </div>
    );
};

export default DSAChecklist;
