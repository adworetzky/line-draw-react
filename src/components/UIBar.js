import React from 'react';
import './UIBar.css';
import Slider from './Slider';
import Button from './Button';
import Input from './Input';
import FileUploader from './FileUploader';

export default function UIBar(props) {
  return (
    <>
      <div className="ui-bar">
        <FileUploader></FileUploader>
        <Button>Load Image</Button>
        <Button>Draw Canvas</Button>
        <Input
          id="search-term-input"
          placeholder="Unsplash search term"
          onChange={() =>
            console.log(document.querySelector('#search-term-input').value)
          }
        ></Input>
        <Slider value={10}></Slider>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
        <Slider></Slider>
      </div>
    </>
  );
}
