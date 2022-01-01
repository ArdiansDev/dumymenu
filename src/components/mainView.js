import React from "react";
import { editAllowMenu, editAllowSubMenu } from "../store/actions/menuActions";
import { useSelector, useDispatch } from "react-redux";

function MainView() {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menuReducer.menus);
  const allowMenu = (menu) => {
    const data = menus.indexOf(menu);
    dispatch(editAllowMenu(data));
  };
  const allowSubMenu = (menu, child) => {
    const data = { id: menus.indexOf(menu), subId: menu.childs.indexOf(child) };
    dispatch(editAllowSubMenu(data));
  };

  return (
    <div className="w-full">
      <h1 className="text-lg font-bold text-center mt-8 w-full text-red-700">
        Toggle Feature
      </h1>
      <div className="p-5 w-full max-h-screen flex flex-col flex-wrap gap-4 ">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className={
              "mb-4 overflow-hidden h-max rounded-lg border-red-700 flex flex-col justify-center" +
              (menu.isAllowed ? " bg-red-400 " : " bg-gray-300 ")
            }
          >
            <button
              onClick={() => allowMenu(menu)}
              className="p-5 font-bold  w-52 border-red-700 text-white capitalize"
            >
              <h1 className="flex justify-between">{menu.id}</h1>
            </button>
            <div>
              {menu.childs?.map((child) => (
                <button
                  onClick={() => allowSubMenu(menu, child)}
                  className={
                    "flex flex-col px-5 py-2 w-full border-red-700 text-white capitalize" +
                    (child.isAllowed ? " bg-red-400 " : " bg-gray-300 ")
                  }
                >
                  {child.id}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainView;
