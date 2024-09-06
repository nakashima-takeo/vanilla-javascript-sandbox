import React from 'react'

export const StyledJsx = () => {
  return (
    <>
      <div className='container'>
        <p className='title'>- Styled JSX-</p>
        <button className='button'>Fight!!</button>
        <style>{`
          .container {
            border: solid 2px #392eff;
            border-radius: 20px;
            padding: 8px;
            margin: 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .title {
            margin: 0;
            color: #3d84a8;
            font-weight: bold;
          }

          .button {
            background-color: #abedd8;
            border: none;
            padding: 8px;
            border-radius: 8px;
            &:hover {
              background-color: #3d84a8;
              color: white;
              cursor: pointer;
            }
        `}</style>
      </div>
    </>
  )
}
