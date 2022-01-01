import React from "react";
import { editMenu } from "../store/actions/menuActions";
import { useSelector, useDispatch } from "react-redux";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid";

function MainMenu() {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menuReducer.menus);
  const showMenu = (menu) => {
    const data = menus.indexOf(menu);
    dispatch(editMenu(data));
  };
  return (
    <div className="shadow-lg p-5 w-1/3">
      <h1 className="p-5 text-red-500 font-bold">MENU</h1>
      {menus.map((menu) => (
        <div key={menu.id} className=" bg-white">
          <button
            className="bg-white focus:bg-white p-5 my-2 w-full disabled:text-gray-300  focus:border-l-8 border-red-700 focus:shadow-lg z-10 focus:text-black text-red-500 capitalize"
            disabled={!menu.isAllowed}
            onClick={() => showMenu(menu)}
          >
            <h1 className="flex justify-between">
              {menu.id}
              {menu.childs && !menu.isShowed ? (
                <ChevronRightIcon className="w-8" />
              ) : menu.childs && menu.isShowed ? (
                <ChevronDownIcon className="w-8" />
              ) : (
                <></>
              )}
            </h1>
          </button>
          <div className="border w-full">
            {menu.isShowed &&
              menu.isAllowed &&
              menu.childs?.map((child) => (
                <button
                  disabled={!child.isAllowed}
                  className="flex flex-col bg-white focus:bg-white pl-8 my-2 w-full disabled:text-gray-300  focus:border-l-8 border-red-700 focus:shadow-lg z-10 focus:text-black text-red-500 capitalize"
                >
                  {child.id}
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainMenu;
