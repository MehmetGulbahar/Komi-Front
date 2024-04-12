import React from "react";

import Orders from "./_components/Orders";
import Todo from "./_components/Todo";
import CookBottom from "../../../layouts/(cook)/Cookbottom";


export default function index(){

    return(
        <div>
        <div className="flex w-full">
        <Orders/>
        <div className="divider divider-horizontal"></div>
        <Todo/>
        </div>
        <CookBottom/>
        </div>
    )

}