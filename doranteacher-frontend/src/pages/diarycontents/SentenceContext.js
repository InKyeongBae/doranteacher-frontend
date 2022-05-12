import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialSentences = [];

function sentenceReducer(state, action) {
	switch (action.type) {
		case 'CREATE':
			return state.concat(action.sentence);
		case 'REMOVE':
			return state.filter((sentence) => sentence.id !== action.id);
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const SentenceStateContext = createContext();
const SentenceDispatchContext = createContext();
const SentenceNextIdContext = createContext();

export function SentenceProvider({ children }) {
	const [state, dispatch] = useReducer(sentenceReducer, initialSentences);
	const nextId = useRef(1);

	return (
		<SentenceStateContext.Provider value={state}>
			<SentenceDispatchContext.Provider value={dispatch}>
				<SentenceNextIdContext.Provider value={nextId}>{children}</SentenceNextIdContext.Provider>
			</SentenceDispatchContext.Provider>
		</SentenceStateContext.Provider>
	);
}

export function useSentenceState() {
	const context = useContext(SentenceStateContext);
	if (!context) {
		throw new Error('Cannot find SentenceProvider');
	}
	return context;
}

export function useSentenceDispatch() {
	const context = useContext(SentenceDispatchContext);
	if (!context) {
		throw new Error('Cannot find SentenceProvider');
	}
	return context;
}

export function useSentenceNextId() {
	const context = useContext(SentenceNextIdContext);
	if (!context) {
		throw new Error('Cannot find SentenceProvider');
	}
	return context;
}
