import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialSentences = [
	{
		id: 1,
		question: 'Q1. ',
		answer: '',
		active: true,
	},
	{
		id: 2,
		question: 'Q2. ',
		answer: '',
		active: false,
	},
	{
		id: 3,
		question: 'Q3. ',
		answer: '',
		active: false,
	},
	{
		id: 4,
		question: 'Q4. ',
		answer: '',
		active: false,
	},
	{
		id: 5,
		question: 'Q5. ',
		answer: '',
		active: false,
	},
];

function sentenceReducer(state, action) {
	switch (action.type) {
		case 'CHANGE_ANSWER':
			return state.map((sentence) =>
				sentence.id === action.sentence.id ? { ...sentence, answer: action.sentence.answer } : sentence,
			);
		case 'REMOVE_ANSWER':
			return state.map((sentence) =>
				sentence.id === action.sentence.id ? { ...sentence, answer: '' } : sentence,
			);
		case 'CHANGE_ACTIVE':
			return state.map((sentence) =>
				sentence.id === action.originId
					? { ...sentence, active: false }
					: sentence.id === action.nextId
					? { ...sentence, active: true }
					: sentence,
			);
		case 'CHANGE_QUESTION':
			return state.map((sentence) =>
				sentence.id === action.sentence.id
					? { ...sentence, question: 'Q' + sentence.id + '. ' + action.sentence.question }
					: sentence,
			);
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
}

const SentenceStateContext = createContext();
const SentenceDispatchContext = createContext();
const SentenceNextIdContext = createContext();

export function Step1SentenceProvider({ children }) {
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
