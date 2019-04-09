import React, { Component } from 'react';
import { connect} from "react-redux";
import CounterHeader from '../../components/CounterHeader'; 
import CounterControls from '../../components/CounterControls';
import { onIncreamentAction, getData } from '../../store/actions/actions';
class counter extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const {counter, onIncreament, onDecreament, onStoreResult, results, onRemoveResult} = this.props;
        return (
            <div>
                <CounterHeader label={counter}/>
                <CounterControls label="Add" clicked = {()=>onIncreament(1)}/>
                <CounterControls label="Sub" clicked = {()=>onDecreament(1)}/>
                <CounterControls label="Add 10 " clicked = {()=>{onIncreament(10)}}/>
                <CounterControls label="Subtract 10" clicked = {()=>onDecreament(10)}/>
                <hr />
                <button onClick = {()=>onStoreResult(counter)} >Store Result</button>
                <ul>
                {
                    results.map(item=>{
                        return <li key={item.id} onClick= { ()=>onRemoveResult(item.id)}>{item.data}</li>
                    })
                }
                </ul>
                <button onClick = {getData()}>Get Data</button>
                <ul>
                {
                    this.props.posts.map((post)=>{
                        return <li>{post.title}</li>
                    })
                }

                </ul>

            </div>
           
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        counter : state.counterState.counter,
        results: state.resultsState.results,
        posts: state.resultsState.posts
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        onIncreament :(val)=>{dispatch(onIncreamentAction(val))},
        onDecreament :(val)=>{dispatch({type:'DECREAMENT', payload: val})},
        onStoreResult : (counter)=>{dispatch({type: 'STORE_RESULT', counter: counter})},
        onRemoveResult: (id)=>{dispatch({type:'REMOVE_RESULT', id:id })}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(counter);