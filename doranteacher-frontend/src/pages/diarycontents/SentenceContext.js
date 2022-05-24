import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialSentences = [
	{
		id: 1,
		question: 'Q1. 오늘 칭찬하고 싶은 사람은 누군가요?',
		answer: '1번 테스트 답변입니다.',
		active: true,
	},
	{
		id: 2,
		question: 'Q2. 왜 그 사람을 칭찬하고 싶나요?',
		answer: '2번 테스트 답변입니다. 길게 써서 테스트를 해 보겠습니다. 줄 바꿈 ',
		active: false,
	},
	{
		id: 3,
		question: 'Q3. 그 사람의 행동을 봤을 때 어떤 기분이 들었나요?',
		answer: '2번 테스트 답변입니다. 길게 써서 테스트를 해 보겠습니다. 줄 바꿈 ',
		active: false,
	},
	{
		id: 4,
		question: 'Q4. 그 사람에게 칭찬하는 말을 한 번 남겨볼까요?',
		answer: '2번 테스트 답변입니다. 길게 써서 테스트를 해 보겠습니다. 줄 바꿈 ',
		active: false,
	},
	{
		id: 5,
		question: 'Q5. 방금 칭찬을 하면서 어떤 기분이 들었나요?',
		answer: '2번 테스트 답변입니다. 길게 써서 테스트를 해 보겠습니다. 줄 바꿈 울라라라라라랄라랄',
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
			return state.map((sentence) => sentence.id === action.sentence.id ? { ...sentence, answer: action.sentence.answer} : sentence)
		case 'REMOVE_ANSWER':
			return state.map((sentence) => sentence.id === action.sentence.id ? { ...sentence, answer: ""} : sentence)
		case 'CHANGE_ACTIVE':
			return state.map((sentence) =>
				sentence.id === action.originId
					? { ...sentence, active: false }
					: sentence.id === action.nextId
					? { ...sentence, active: true }
					: sentence,
			)
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
