import React, { useCallback, useMemo, useState } from 'react';
import ChildAreaMemo from './ChildAreaMemo';

const displayButtonStyle = {
  marginBottom: "20px"
}

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  // このままだと、毎回生成されるため、memo化していても再レンダリングが起こる
  // const onClickClose = () => {
  //   setOpen(false);
  // }
  
  // useCallbackで関数を再生成しなくなることで、再レンダリングを抑えられる
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  // 複雑な計算を行う場合は、useMemoでキャッシュして再計算を防ぐ
  // あまり使われるものではない
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div>
      <h3>再レンダリングが起こる条件</h3>
      <ul>
        <li>stateが変更された時</li>
        <li>propsが変更された時</li>
        <li>親コンポーネントが再レンダリングされた時</li>
      </ul>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button style={displayButtonStyle} onClick={onClickOpen}>表示</button>
      <ChildAreaMemo open={open} onClickClose={onClickClose} />
    </div>
  );
}
