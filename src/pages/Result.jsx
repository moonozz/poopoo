import React from 'react'
import { useNavigate } from 'react-router-dom';
import usePooStore from '../store';

function Result() {
  const navi = useNavigate();
  const { headers, setHeaders, chooseStation } = usePooStore();
  
  return (
    <div>Result</div>
  )
}

export default Result