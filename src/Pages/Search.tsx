import * as React from "react";
import TextInput from "../Components/TextInput";
import {
  IDropDownItem,
  DropDownList
} from "../Components/DropDownList/DropDownList";

const DropDownListMemo = React.memo(DropDownList);

export default function Search() {
  const searchDataDefault = {
    animalList: [
      { name: "dog", key: 1, selected: false },
      { name: "cat", key: 2, selected: false }
    ]
  };

  const [searchData, setSearchData] = React.useState(searchDataDefault);
  const [text, setText] = React.useState("");

  const onItemSelected = React.useCallback(
    (item: IDropDownItem) => {
      console.log(item);
      const animals = [...searchData.animalList];
      animals.forEach((animal) => {
        if (animal.key === item.key) {
          animal.selected = !animal.selected;
        }
      });

      setSearchData({ ...searchData, animalList: animals });
    },
    [searchData]
  );

  const onTextChanged = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <TextInput onChange={onTextChanged} text={text} placeholder={"search"} />
      <DropDownListMemo
        data={searchData.animalList}
        itemSelected={onItemSelected}
      />
    </div>
  );
}
