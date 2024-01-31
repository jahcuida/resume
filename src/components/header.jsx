import "../styles/header.css";

export default function Header() {
  let leftCircles = [];

  for (let i = 0; i <= 7; i++) {
    leftCircles.push(i);
  }
  const generateRandomNum = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);

  console.log(leftCircles);
  return (
    <>
      <header className="container-fluid">
        <div>
          <h1>Miguel Pérez Pérez</h1>
          <h3>Desarrollador web</h3>
        </div>
        <div className="circles-container">
          <ul className="circles">
            {leftCircles.map((el, i) => {
  
              return (
                <>
                  <li
                    key={i}
                    id={"circle" + el}
                    style={{
                      top: `${generateRandomNum({ min: 0, max: 20 })}%`,
                      width: "50px",
                      height: "50px",
                      color: "red",
                    }}
                  ></li>
                </>
              );
            })}
          </ul>
          <ul className="circles">
            {leftCircles.map((el, i) => {
              return (
                <>
                  <li
                    key={i}
                    id={"circle" + el}
                    style={{
                      top: `${generateRandomNum({ min: 0, max: 20 })}%`,
                      float: "right",
                      width: "50px",
                      height: "50px",
                      color: "red",
                    }}
                  ></li>
                </>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
