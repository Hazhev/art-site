import "../Styles/Filters.css";

const Filters = ({ closeFilters }) => {
  let colors = [
    "#282828",
    "#093AC9",
    "#964B00",
    "#6ACA25",
    "#DFDFDF",
    "#42AAFF",
    "#FFA500",
    "#FFC0CB",
    "#8B00FF",
    "#CA0813",
    "#FFFFFF",
    "#FFFF00",
  ];

  return (
    <div className="filters-wrapper" onClick={closeFilters}>
      <div
        className="filters-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="filters-title">Фильтры</div>
        <div className="filters-line">
          <select className="filters-select-box">
            <option selected disabled>
              Все оригиналы
            </option>
          </select>
          <select className="filters-select-box">
            <option selected disabled>
              Все виды искусства
            </option>
          </select>
          <select className="filters-select-box">
            <option selected disabled>
              Все темы
            </option>
          </select>
          <select className="filters-select-box">
            <option selected disabled>
              Все жанры
            </option>
          </select>
          <select className="filters-select-box">
            <option selected disabled>
              Все направления
            </option>
          </select>
          <select className="filters-select-box">
            <option selected disabled>
              Все техники
            </option>
          </select>
          <select className="filters-select-box">
            <option selected disabled>
              Все интерьеры
            </option>
          </select>
          <select className="filters-select-box">
            <option selected disabled>
              Все художники
            </option>
          </select>
        </div>
        <div className="filter-color-box">
          <div className="filter-color-title">Преобладающий цвет</div>
          <div className="filter-color-line">
            {colors.map((e, i) => (
              <button
                className="filter-color-el"
                key={i}
                style={{
                  backgroundColor: `${e}`,
                }}
              ></button>
            ))}
          </div>
        </div>
        <button className="filter-reset-btn">Сбросить</button>
      </div>
    </div>
  );
};

export default Filters;
