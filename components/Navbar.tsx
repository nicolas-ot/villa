'use client'

import * as React from 'react';
import {Tabs} from '@mui/base/Tabs';
import {TabsList} from '@mui/base/TabsList';
import {TabPanel} from '@mui/base/TabPanel';
import {Tab} from '@mui/base/Tab';
import Home from "@/components/Home";

export default function Navbar() {
    const navList = ["Home", "City", "Contact"];
    const panelList = [<Home key={0}/>, <div key={1}>Second page</div>, <div key={2}>Third page</div>];
    
    return (
        <Tabs defaultValue={1} className={"w-full"}>
            <TabsList className="w-[32rem] px-64 mx-auto gap-32 mb-4 rounded-xl flex font-sans items-center justify-center content-between min-w-tabs-list">
                {navList.map((label, index) => (
                    <Tab
                        key={label}
                        slotProps={{
                            root: ({selected}) => ({
                                className: `font-sans ${
                                    selected
                                        ? 'text-black'
                                        : 'text-white bg-transparent focus:text-white hover:text-black focus:text-black'
                                } text-base w-full p-2 m-1.5 border-0 rounded-md flex justify-center`,
                            }),
                        }}
                        value={index + 1}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsList>

            {panelList.map((panel, index) => (
                <TabPanel key={index} className="w-full font-sans text-sm" value={index + 1}>
                    {panel}
                </TabPanel>
            ))}
        </Tabs>
    );
}
