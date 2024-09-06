export const Breadcrumb = () => {
  const items = ["Home", "Library", "Data"];

  return (
    <>
      <p>パンくずリスト</p>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item) => {
            return (
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
            );
          })}
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Library</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href="#">Data</a>
          </li>
        </ol>
      </nav>
    </>
  );
};
