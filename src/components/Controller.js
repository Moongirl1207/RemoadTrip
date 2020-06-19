import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import style from "./Controller.module.css";
import QRCode from "qrcode.react";
import BackLink from "./Backlink";
import socketIOClient from "socket.io-client";
import TopContainerStreamView from "./TopContainerStreamView/TopContainerStreamView";
import BottomContainerStreamView from "./BottomContainerStreamView/BottomContainerStreamView";

const Controller = () => {
  const ENDPOINT = "https://evening-caverns-60077.herokuapp.com/";
  const [today, setToday] = useState(new Date());
  const [connected, setConnected] = useState(false);
  let time = today.toLocaleTimeString("en-BE");

  const getTime = () => {
    setToday(new Date());
  };

  let socket = socketIOClient(ENDPOINT);

  const setTime = setInterval(getTime, 1 * 1000);
  useEffect(() => {
    // console.log(connected);
    socket.on("controllerConnected", () => {
      // console.log("controller connected");
      setConnected(true);
      // console.log(connected);
    });
    // setConnected(false)

    return () => {
      clearInterval(setTime);
    };
  }, [connected, setTime, socket]);
  return (
    <>
      <h1 className={style.hidden}>Connecting the devices</h1>
      <div className={style.container}>
        <TopContainerStreamView
          tokensFound={0}
          mtoToken={"-"}
        ></TopContainerStreamView>
        <div className={style.backlink}>
          <BackLink></BackLink>
        </div>
        <div className={style.controllerContainer}>
          <h2 className={style.title}>Connecting the devices</h2>
          <div className={style.qrcodes}>
            <QRCode value="https://int4controllers.herokuapp.com/" />
            <p className={style.link}>
              or surf to:&#8192;
              <a href="https://int4controllers.herokuapp.com/">
              https://int4controllers.herokuapp.com/
              </a>
            </p>
          </div>
          <div className={style.car}>
            <img
              src="./assets/car__3D.png"
              alt="car"
              width="148px"
              height="126px"
            ></img>
            <p>{connected ? "Connected" : "Connecting"}</p>
          </div>
          {connected ? (
            <Link className={style.start} to={ROUTES.stream}>
              <img alt="finsh flag" src="./assets/finish_flag_blue.png"></img>
              Go start driving
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className={`${style.Point} ${style.firstPoint}`}>
          <p className={style.redCircle}>1</p>
          <p className={style.pointTitle}>Get ready</p>
          <img
            className={style.pointImg}
            src="./assets/location_yellow.png"
            alt="yellow location marker"
            width="12px"
            height="16.72px"
          ></img>
        </div>
        <div className={`${style.Point} ${style.secondPoint}`}>
          <p className={style.redCircle}>2</p>
          <p className={style.pointTitle}>Set</p>
          <img
            className={style.pointImg}
            src="./assets/money.png"
            alt="yellow location marker"
            width="12px"
            height="16.72px"
          ></img>
        </div>
        <div className={`${style.Point} ${style.thirdPoint} ${style.bumpedUp}`}>
          <p className={style.redCircle}>3</p>
          <p className={style.pointTitle}>go!</p>
          <img
            className={style.pointImg}
            src="./assets/flag.png"
            alt="yellow location marker"
            width="19px"
            height="14px"
          ></img>
        </div>
        <img
          className={`${style.carRoad} ${style.roadandcar}`}
          src="./assets/driving_car.gif"
          alt="animation of car that is riding"
        ></img>
        <img
          className={`${style.road} ${style.roadandcar}`}
          src="./assets/road.png"
          alt="road to follow"
        ></img>
        <BottomContainerStreamView
          timeDriven={"00:00"}
          location={"Brugge, Belgium"}
          timeLocal={time}
          route={ROUTES.stream}
          textButton={"Go"}
        ></BottomContainerStreamView>
      </div>
    </>
  );
};

export default Controller;
