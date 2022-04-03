import React from 'react';
import './UIBar.css';
import Slider from './components/Slider';
import Button from './components/Button';
import Input from './components/Input';

export default function UIBar(props) {
  return (
    <>
      <div className="ui-bar">
        <Button
          onClick={function () {
            console.log('clicked!');
          }}
        >
          Test 1
        </Button>
        <Button
          onClick={function () {
            console.log('clicked!');
          }}
        >
          Test 2
        </Button>
        <Input
          id="search-term-input"
          placeholder="Unsplash search term"
          onChange={() =>
            console.log(document.querySelector('#search-term-input').value)
          }
        ></Input>
        <Slider id="range-slider" min={0} max={10}></Slider>
      </div>
    </>
  );
}
