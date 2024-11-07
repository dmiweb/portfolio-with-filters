const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const filterMenuItems = filters;
  const menuItemStyle = "filter-menu__item";
  const menuItemActiveStyle = "filter-menu__item filter-menu__item_active";

  const selectActiveMenuItem = (item) => {
    if(item === selected){
      return menuItemActiveStyle;
    } else {
      return menuItemStyle;
    }
  }

  return (
    <ul className="portfolio__filter-menu filter-menu">
      {filterMenuItems.map((item, index) => {
        return (
          <li key={index} className={selectActiveMenuItem(item)} onClick={(e) => onSelectFilter(e.currentTarget.textContent)}>
            {item}
          </li>
        );
      })}
    </ul>
  )
}

export default Toolbar;