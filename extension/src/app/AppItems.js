import React, { useState } from "react";

import cheerio from "cheerio";
import { MDBIcon } from "mdbreact";
import { Card } from "react-bootstrap";
import ScrollArea from "react-scrollbar";

import css from "./AppItems.module.css";
import appCss from "../index.module.css";

const AppItem = ({ img }) => (
  <Card.Header className={appCss["nubox-card-header"]}>
    {img ? (
      <img width="30" src={img} alt="" />
    ) : (
      <MDBIcon icon="shield-alt" style={{ fontSize: "30px" }} />
    )}
  </Card.Header>
);

const AppItems = props => {
  const [img, setImg] = useState("");

  if (window.chrome && window.chrome.tabs) {
    const modifyDOM = () => {
      return document.getElementsByTagName("head")[0].innerHTML;
    };

    window.chrome.tabs.executeScript(
      {
        code: `(${modifyDOM})();`
      },
      results => {
        try {
          const $ = cheerio.load(results[0]);
          const imgUrl = $("link[rel=icon]").attr("href");

          try {
            new URL(imgUrl);
            setImg(imgUrl);
          } catch (err) {
            // Host missing. Add it.
            window.chrome.tabs.query(
              {
                currentWindow: true,
                active: true
              },
              tabs => {
                try {
                  const _url = new URL(tabs[0].url);
                  setImg(
                    `${_url.origin}${
                      imgUrl.startsWith("/") ? "" : "/"
                    }${imgUrl}`
                  );
                } catch (err) {}
              }
            );
          }
        } catch (err) {}
      }
    );
  }

  return (
    <ScrollArea
      speed={0.8}
      className={css["nubox-scrollarea"]}
      smoothScrolling={true}
      horizontal={false}
      minScrollSize
    >
      <Card.Header
        className={appCss["nubox-card-header"]}
        style={{ padding: "0" }}
      >
        <AppItem img={img} />
        <AppItem img={img} />
        <AppItem img={img} />
        <AppItem img={img} />
      </Card.Header>
    </ScrollArea>
  );
};

export default AppItems;
