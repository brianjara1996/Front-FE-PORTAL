import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import SearchPresentedCoupons from './components/presentedCoupon/SearchPresentedCoupons'

const App = () => (
  <SearchPresentedCoupons></SearchPresentedCoupons>
)

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
