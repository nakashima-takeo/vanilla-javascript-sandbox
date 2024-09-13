import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const SamplePage = () => {
  const arr = [...Array(100).keys()]
  const navigate = useNavigate();

  const onClick1001 = () => {
    navigate("/sample/1001")
  }

  return (
    <div>
      <h1>Sample Page</h1>
      <Link to="/sample/url-parameter" state={{ array: arr }}>Url Parameter</Link>
      <br />
      <Link to="/sample/1">Url Parameter 1</Link>
      <br />
      <Link to="/sample/100">Url Parameter 100</Link>
      <br />
      <Link to="/sample/100/?name=takeo">Query Parameter</Link>
      <br />
      <button onClick={onClick1001}>Url Parameter 1001</button>
    </div>
  )
}
