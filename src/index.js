import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class ApiExample extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            data: ''
        }
    }
    callApi = () => { // 서버에 접근해 데이터를 가져옴.
        fetch("http://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(json =>{
            this.setState({
                data: json.title
        });
    });
    }
    componentDidMount() {  // 실제로 받아온 API 함수를 출력
        this.callApi();
    }
    render() { 
        return( //데이터가 비었을 경우, 있을 경우 2가지를 고려해야 한다.
            <h3>
                {this.state.data? this.state.data: '데이터를 불러오는 중입니다.'}
            </h3>
        )
    }
}

ReactDOM.render(<ApiExample/>, document.getElementById('root'));

// fetch 함수를 통해 서버에서 데이터를 불러오는 예제

