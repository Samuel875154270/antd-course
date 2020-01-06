import React from 'React';

const MyInput = ({ value = '', onChange }) => (
    <input value={value} onChange={onChange}/>
);

class Demo extends React.Component {
    state = {
        msg: '',
    };

    onTextChange = (event) => {
        this.setState({
            msg: event.target.value
        });
        console.log(event.target.value);
    };
    onTextReset = () => {
        this.setState({
            msg: ''
        });
    };

    render() {
        return (
            <div>
                <MyInput value={this.state.msg} onChange={this.onTextChange}/>
                <button onClick={this.onTextReset}>Reset</button>
            </div>
        );
    }
}

export default Demo;