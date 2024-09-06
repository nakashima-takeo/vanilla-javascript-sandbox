import React, { memo } from "react";

const style = {
  backgroundColor: "lightblue",
  padding: "20px",
  borderRadius: "8px"
}


type Props = {
  open: boolean;
  onClickClose: () => void;
};

export const ChildAreaMemo = memo((props: Props) => {
  const data = [...Array(5000).keys()];
  data.forEach(() => {
    console.log("...");
  })
  return (
    <>
      {props.open ? (
        <div style={style}>
          <h1>ChildArea</h1>
          <p>レンダリングコストの高いコンポーネント（めちゃ重）</p>
          <p>コンソールで処理を確認できる</p>
          <p>memo化で最適化を行なった。</p>
          <br />
          <button onClick={ props.onClickClose }>閉じる</button>
        </div>
      ): null}
    </>
  );
});

export default ChildAreaMemo;
