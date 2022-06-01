import * as React from 'react';
import './style.css';
import PromiseQuene from './queue';
const asyncFunc = (time: number, finalState: boolean, mark?: string) => {
  console.log(`${mark || ''} - ${time}秒 - ${finalState.toString} start`);

  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`${mark || ''} - ${time}秒 - ${finalState.toString} end`);
      if (finalState) {
        res('');
      } else {
        rej();
      }
    }, time * 1000);
  });
};
export default function App() {
  const ref = React.useRef(new PromiseQuene());

  // React.useEffect(() => {
  //   asyncFunc(2.5, true, 'common');
  //   asyncFunc(1, true, 'common');
  //   asyncFunc(3, true, 'common');
  // }, []);
  React.useEffect(() => {
    ref.current.add(asyncFunc.bind(null, 2.5, true, 'async'));
    ref.current.add(asyncFunc.bind(null, 1, true, 'async'));
    ref.current.add(asyncFunc.bind(null, 3, true, 'async'));
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
