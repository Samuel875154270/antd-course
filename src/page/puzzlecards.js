import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
        cardList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryInitCards`,
            });
        },
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onClickAdd: (newCard) => {
//             const action = {
//                 type: `${namespace}/addNewCard`,
//                 payload: newCard,
//             };
//             dispatch(action);
//         },
//     };
// };

// dva写法
@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        console.log(card.id);
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        );
                    })
                }
            </div>
        );
    }
}

// 没有dva写法
// export default class PuzzleCardsPage extends Component {
//     constructor(props) {
//         super(props);
//
//         this.counter = 100;
//         this.state = {
//             cardList: [
//                 {
//                     id: 1,
//                     setup: 'Did you hear about the two silk worms in a race?',
//                     punchline: 'It ended in a tie',
//                 },
//                 {
//                     id: 2,
//                     setup: 'What happens to a frog\'s car when it breaks down?',
//                     punchline: 'It gets toad away',
//                 },
//             ],
//         }
//     }
//
//     addNewCard = () => {
//         this.setState(prevState => {
//             const prevCardList = prevState.cardList;
//             this.counter += 1;
//             const card = {
//                 id: this.counter,
//                 setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
//                 punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             };
//             return {
//                 cardList: prevCardList.concat(card),
//             };
//         });
//     };
//
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.cardList.map(card => {
//                             return (
//                                 <Card key={card.id}>
//                                     <div>ID: {card.id}</div>
//                                     <div>Q: {card.setup}</div>
//                                     <div><strong>A: {card.punchline}</strong></div>
//                                 </Card>
//                             );
//                         }
//                     )
//                 }
//                 <div>
//                     <Button onClick={this.addNewCard}>添加卡片</Button>
//                 </div>
//             </div>
//         );
//     }
// }