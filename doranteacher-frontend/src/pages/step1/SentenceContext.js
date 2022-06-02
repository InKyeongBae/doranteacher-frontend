import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialSentences = [
	{
		id: 1,
		question: 'Q1. 오늘 본 영상의 제목이 무엇인가요?',
		answer: '',
		active: true,
	},
	{
		id: 2,
		question: 'Q2. 영상을 보게 된 계기가 있나요?',
		answer: '',
		active: false,
	},
	{
		id: 3,
		question: 'Q3. 가장 기억에 남는 장면이 무엇인가요? 왜 기억이 남았나요?',
		answer: '',
		active: false,
	},
	{
		id: 4,
		question: 'Q4. 영상을 보고 어떤 생각이 들었나요?',
		answer: '',
		active: false,
	},
	{
		id: 5,
		question: 'Q5. 오늘 본 영상을 주변 사람들에게 소개한다면 어떻게 말할 수 있을까요?',
		answer: '',
		active: false,
	},
];

function sentenceReducer(state, action) {
	switch (action.type) {
		// case 'CREATE_QUESTION':
		// 	console.log('!!!');
		// 	return {
		// 		...state,
		// 		sentences: state.map((sentence) =>
		// 			sentence.id === action.id ? { ...sentence, question: action.sentence } : sentence,
		// 		),
		// 	};
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
