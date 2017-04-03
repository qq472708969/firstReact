/**
 * Created by zzq on 2017/3/26.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Two from "./components/Two.jsx";
import Test from './components/Test.jsx';

// ReactDom.render(
//     <Test />,
//     document.getElementById('head')
// );

ReactDom.render(
    <Test />,
    document.getElementById('content')
);

ReactDom.render(
    <Two msg="传入的值" />,
    document.getElementById('foot')
);

// ReactDom.render(
//     <Test />,
//     document.getElementById('foot')
// );