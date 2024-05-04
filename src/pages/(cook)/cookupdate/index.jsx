import React from "react";
import CookBottomNav from "../../../layouts/(cook)/Cookbottom";
import Products from "./_components/Products";
export default function index(){
    return (
        <>
        <div className="flex w-full">
            <div className="w-full">
                <Products/>
            </div>
            
        </div>
        <CookBottomNav/>
        </>
    )
}