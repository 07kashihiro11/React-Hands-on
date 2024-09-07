import { MouseEvent } from "react";

export const Breadcrumb = () => {
  const items = ["Home", "Library", "Data"];

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    console.log(event)
  }

  return (
    <>
      <p>パンくずリスト</p>
      {items.length === 0 && <p>itemがありません。</p>}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item) => (
            <li key={item} className="breadcrumb-item">
              <a href="#" onClick={(event) => handleClick(event)}>{item}</a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
