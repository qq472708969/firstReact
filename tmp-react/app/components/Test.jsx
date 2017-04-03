/**
 * Created by zzq on 2017/3/27.
 */
import React from 'react';
import Two from "./Two.jsx";//这里注意引用路径，不要写错


class Test extends React.Component {
    //mixin() {
    //react是不提倡这样做的，因为它提倡单向数据流，而且更加清晰如使用onChange来调用setState()；不过当元素涉及过多时却十分麻烦，可以借用Mixin来搞定
    //React.addons.LinkedStateMixin
    //}

    constructor(props) {//es6中一般使用这个初始化状态
        super(props);
        this.state = {
            uu: 1111,
            msg1: "你好"
        };
        console.log("constructor")
    }

    getInitialState() {
        this.state.uu = 2222;
        console.log("getInitialState")
    }

    componentWillMount() {
        this.state.uu = 3333;
        console.log("componentWillMount")
    }

    getClick(e) {
        console.log(e.target.value);//取出当前触发控件的值（比如正在点击的按钮）

        alert(this.refs.getVal.value);

        alert(this.myInput.value);//直接获取ref回调函数
    }

    render() {
        console.log("render")
        return (
            <div>
                <h1>这里是h1{this.state.uu}</h1>
                {/*<input type="text" defaultValue="1" valueLink={this.linkState('uu')}/>*/}
                <input type="text" ref="getVal" defaultValue={this.state.uu}/>
                {/*直接把当前虚拟Dom控件本身对象传入，取值后赋值给组件中的属性  ***类似于lambda表达式***    */}
                <input type="text" ref={input => this.myInput = input} defaultValue="测试ref回掉函数"/>
                {/*es6中必须使用bind(this)*/}
                <input type="button" value="取值" onClick={this.getClick.bind(this)}/>
                <Two msg="由Test传的值"/>
                <hr/>
            </div>
        )
    }

    componentDidMount() {
        // this.setState({uu: 4444});//会再次调用render
        this.state.uu = 4444;//不会触发render，如果想要触发render必须调用forceUpdate
        this.forceUpdate();
        console.log("componentDidMount")
    }
}

class InnerEle extends React.Component {
    btnClick() {
        alert(1);
    }

    render() {
        return (
            <div>
                <input type="button" onClick={this.btnClick} defaultValue={this.props.name}/>
            </div>
        )
    }
}

//导出组件
export default Test;