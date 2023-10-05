'use client'

import * as React from 'react';
import {Tabs} from '@mui/base/Tabs';
import {TabsList} from '@mui/base/TabsList';
import {TabPanel} from '@mui/base/TabPanel';
import {Tab} from '@mui/base/Tab';

export default function Navbar() {
    return (
        <Tabs defaultValue={1}>
            <TabsList className="mb-4 rounded-xl flex font-sans items-center justify-center content-between min-w-tabs-list">
                {["Home", "City", "Contact"].map((label, index) => (
                    <Tab
                        key={label}
                        slotProps={{
                            root: ({selected,}) => ({
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
            <TabPanel className="w-full font-sans text-sm" value={1}>
                First page
            </TabPanel>
            <TabPanel className="w-full font-sans text-sm" value={2}>
                Second page
            </TabPanel>
            <TabPanel className="w-full font-sans text-sm" value={3}>
                Third page
            </TabPanel>
        </Tabs>
    );
}
