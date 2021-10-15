import React,{useState} from 'react';
import './Style.css';
import Menu from './MenuApi.js';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar.js';
const uniqueList =[...new Set(Menu.map((CurElem)=>{
    return CurElem.category;
})
),"All",
];

const Hotel = () => {
    const [menuData,setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList);
    //  setMenuList(uniqueList);
    console.log(menuData);
    const  filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        setMenuData(updatedList);

    };
    return (
        <>
         <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData}/>
        </>
    )
}

export default Hotel
