/**
 * Created by zzq on 2017/3/27.
 */
import React from 'react';

class Two extends React.Component {
    render() {
        var a = 1;
        var b = 2;
        return (
            <div>
                <input type="text" defaultValue={a}/>
                <input type="text" defaultValue={b}/>
                <input type="text" defaultValue={this.props.msg}/>
            </div>
        )
    }
}

//es6 这两个属性不能写在class内。
Two.propTypes = {//属性校验器，表示改属性必须是数值，否则报错
    msg: React.PropTypes.string,
}

//导出组件
export default Two;