import * as React from "react";
import "./DropDownList.scss";

export interface IDropDownItem {
  name: string;
  selected: boolean;
  key?: any;
}

interface IDropDownList {
  data: Array<IDropDownItem>;
  itemSelected: (item: IDropDownItem) => void;
}

export function DropDownList({ data, itemSelected }: IDropDownList) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    console.log("dropdown rendered");
  });

  const onListClick = (e) => {
    e.stopPropagation();
    itemSelected(JSON.parse(e.target.getAttribute("data-item")));
  };

  return (
    <div className="drop-down" onClick={() => console.log("parent")}>
      <div className="main-selector" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "<" : "v"}
      </div>
      <ul className="drop-down-list" onClick={onListClick}>
        {isOpen &&
          data.map((item) => (
            <li
              className={item.selected ? "highlight" : ""}
              data-item={JSON.stringify(item)}
              key={item.key || item.name}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
