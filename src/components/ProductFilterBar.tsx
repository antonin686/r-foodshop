import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

interface Iprops {
  config?: any;
  setConfig?: any;
  renewData?: any;
}

function ProductFilterBar({ config, setConfig }: Iprops) {
  const checkHandler = (cindex: number, index: number) => {
    let newchecks = { ...config };
    let value = textEl.current.value;

    newchecks.filters[cindex].items[index].checked =
      !newchecks.filters[cindex].items[index].checked;
    newchecks.search = value;

    setConfig(newchecks);
  };

  const textEl = useRef<any>();

  const filterBtnHandler = () => {
    let value = textEl.current.value;
    let newchecks: any = { ...config };
    newchecks.search = value;
    setConfig(newchecks);
  };

  return (
    <div className="flex flex-col gap-2 p-4 border-2 rounded-lg">
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mb-2"
        placeholder="Search..."
        ref={textEl}
      />
      <div className="flex justify-center mb-2">
        <button className="c-primary-btn" onClick={filterBtnHandler}>
          Filter
        </button>
      </div>
      {config.filters &&
        config.filters.map((filter: any, cindex: number) => (
          <div key={cindex} className="capitalize">
            <hr />
            <div>
              <h1 className="text-center theme-text text-2xl py-2">{filter.title}</h1>
              <hr />
              {filter.items &&
                filter.items.map((item: any, index: number) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-2 my-2">
                      <div className="w-24">
                        <input
                          type="checkbox"
                          name={filter.title}
                          onChange={() => checkHandler(cindex, index)}
                        />
                        <label className="pl-2 text-xl">{item.title}</label>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductFilterBar;
