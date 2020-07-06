import Iframe from "react-iframe";
import React from "react";

export default function Metabase() {
  return (
    <Iframe
      url="http://livelotmetabase.herokuapp.com/public/dashboard/0c3ca9e4-e11f-4353-8df4-58d5896b16df"
      width={(window.innerWidth * 0.8).toString()}
      height={(window.innerHeight * 0.8).toString()}
      id="myId"
      className="myClassname"
      display="inline"
      position="relative"
    ></Iframe>
  );
}
