import request from '../util/request';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise
import { message } from 'antd';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};

export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 0,
    },
    effects: {
        * queryInitCards(_, sagaEffects) {
            let count = 1;
            let endPointURI = '';
            const { call, put } = sagaEffects;
            endPointURI = `/dev/cards`;
            // endPointURI = `/dev/cards/${count}`;
            try {
                const puzzle = yield call(request, endPointURI);
                yield put({ type: 'addNewCard', payload: puzzle });

                yield call(delay, 2000);

                // count += 1;
                // endPointURI = `/dev/cards/${count}`;
                // count = 1;
                const puzzle2 = yield call(request, endPointURI);
                yield put({ type: 'addNewCard', payload: puzzle2 });
            }
            catch (e) {
                message.error('数据获取失败');
            }
        }
    },
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    },
};

// export default {
//     namespace: 'puzzlecards',
//     state: {
//         data: [
//             {
//                 id: 1,
//                 setup: 'Did you hear about the two silk worms in a race?',
//                 punchline: 'It ended in a tie',
//             },
//             {
//                 id: 2,
//                 setup: 'What happens to a frog\'s car when it breaks down?',
//                 punchline: 'It gets toad away',
//             },
//         ],
//         counter: 100,
//     },
//     reducers: {
//         addNewCard(state, { payload: newCard }) {
//             const nextCounter = state.counter + 1;
//             const newCardWithId = { ...newCard, id: nextCounter };
//             const nextData = state.data.concat(newCardWithId);
//             return {
//                 data: nextData,
//                 counter: nextCounter,
//             };
//         }
//     },
// };