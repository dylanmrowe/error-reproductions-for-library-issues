import React from "react";
import {useEffect, useRef} from "react";
import { mount } from "enzyme";
import {jest} from '@jest/globals';
import 'regenerator-runtime/runtime'


const TestComponent = ({ paused }) => {
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      console.error("But it still got ran");
    }, 100);
  })

  useEffect(() => {
    if(paused) {
      clearTimeout(timerRef.current);
      console.log("I cancelled the timer");
    }
  }, [paused])

  return <div/>;
}

test("", async () => {
  jest.useFakeTimers();

  let wrapper = mount(<TestComponent paused={false}/>)

  wrapper.setProps({paused: true});
  wrapper = wrapper.update();

  // await act(async () => {
    jest.runOnlyPendingTimers();
  // });
})