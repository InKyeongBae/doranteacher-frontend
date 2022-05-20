import React, { useReducer, createContext, useContext, useRef, useMemo } from 'react';

const initialWords = [];

function wordReducer(state, action) {
	switch (action.type) {
		case 'CREATE':
			return state.concat(action.word);
		case 'REMOVE':
			return state.filter((word) => word.id !== action.id);
		case 'UPDATE':
			return state.map((word) => (word.id === action.word.id ? { ...word, content: action.word.content } : word));
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const WordStateContext = createContext();
const WordDispatchContext = createContext();
const WordNextIdContext = createContext();

export function WordProvider({ children }) {
	const [state, dispatch] = useReducer(wordReducer, initialWords);
	const nextId = useRef(1);

	return (
		<WordStateContext.Provider value={state}>
			<WordDispatchContext.Provider value={dispatch}>
				<WordNextIdContext.Provider value={nextId}>{children}</WordNextIdContext.Provider>
			</WordDispatchContext.Provider>
		</WordStateContext.Provider>
	);
}

export function useWordState() {
	const context = useContext(WordStateContext);
	if (!context) {
		throw new Error('Cannot find WordProvider');
	}
	return context;
}

export function useWordDispatch() {
	const context = useContext(WordDispatchContext);
	if (!context) {
		throw new Error('Cannot find WordProvider');
	}
	return context;
}

export function useWordNextId() {
	const context = useContext(WordNextIdContext);
	if (!context) {
		throw new Error('Cannot find WordProvider');
	}
	return context;
}
