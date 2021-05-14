import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Icon, Modal, Button } from "antd";
import SlickSlider from "./slickSlider";

const portfolio = [
  {
    name: "My best client",
    image: "sc1.png",
    category: ["all", "frontend", "ux-ui"]
  },
  {
    name: "My favorite case",
    image: "sc3.png",
    category: ["all", "mobile", "ux-ui"]
  },
  {
    name: "A old job",
    image: "sc2.png",
    category: ["all", "frontend", "others"]
  },
  {
    name: "It is a really cool website",
    image: "sc5.png",
    category: ["all", "frontend", "ux-ui"]
  },
  {
    name: "Website",
    image: "sc7.png",
    category: ["all", "others"]
  },
  {
    name: "Mobile UI",
    image: "sc6.png",
    category: ["all", "others", "mobile"]
  },
  {
    name: "Something more",
    image: "sc5.png",
    category: ["all", "mobile", "ux-ui"]
  },
  {
    name: "React",
    image: "sc5.png",
    category: ["all", "ux-ui"]
  },
  {
    name: "Something more",
    image: "sc5.png",
    category: ["all", "mobile"]
  }
];

export default function PortfolioGallary() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [modal2Visible, setModal2Visible] = useState(false);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <Layout>
      <div className="container">
        <Modal
          centered
          width="800px"
          visible={modal2Visible}
          onOk={() => setModal2Visible(false)}
          onCancel={() => setModal2Visible(false)}
          footer={null}
        >
          <SlickSlider />
        </Modal>

        <div className="portfolio__labels">
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                className={filter === "all" ? "active" : null}
                onClick={() => setFilter("all")}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={filter === "frontend" ? "active" : null}
                onClick={() => setFilter("frontend")}
              >
                Frontend
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={filter === "mobile" ? "active" : null}
                onClick={() => setFilter("mobile")}
              >
                Mobile
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={filter === "ux-ui" ? "active" : null}
                onClick={() => setFilter("ux-ui")}
              >
                UX/UI
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={filter === "others" ? "active" : null}
                onClick={() => setFilter("others")}
              >
                Others
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="portfolio__container">
          <div className="portfolio-row">
            {projects.map(item =>
              item.filtered === true ? (
                <div
                  className="portfolio-item"
                  onClick={() => setModal2Visible(true)}
                >
                  <div className="portfolio-content">
                    <p key={item.name}>{item.name}</p>
                    <p className="view-btn">View Project</p>
                  </div>
                  <div className="portfolio-image">
                    
                    <img src={`/static/images/portfolio/` + item.image} />

                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </Layout>
  );
}
