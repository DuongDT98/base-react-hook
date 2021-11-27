import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { useScrollTracking } from "../../lib/useScrollTracking";

const { Header } = Layout;
const HEADER_TOP_BACKGROUND_WHITE = 80;

function HeaderPage({ showDrawer }) {
  const top = useScrollTracking(HEADER_TOP_BACKGROUND_WHITE);
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    setCollapsed(true);
  }, [setCollapsed]);
  return (
    <Header
      style={{
        backgroundColor: `rgba(255,255,255,${
          !collapsed ? 1 : top / HEADER_TOP_BACKGROUND_WHITE
        }`,
        height: top >= 80 ? "66px" : undefined,
        boxShadow: top >= 80 ? "0 2px 4px 0 rgba(182,182,182,0.12)" : undefined,
        color: top >= 80 ? "black" : "white",
      }}
      className="customHeader"
    >
      <div className="title-header">
        <div className="menu-left">
          <span className="title-logo">E T Q .</span>
          <span className="title-menu">Mini TOEIC</span>
          <span className="title-menu">Full TOEIC</span>
          <span className="title-menu">Blog</span>
        </div>
        <div className="menu-right">
          <span className="title-menu">Search</span>
          <span className="title-menu">Help</span>
          <span className="title-menu">My account</span>
          <span className="title-omount">0</span>
        </div>
      </div>
    </Header>
  );
}
export default React.memo(HeaderPage);
