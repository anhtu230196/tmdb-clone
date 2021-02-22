import React, { useEffect, useState } from 'react'

function Tab({ label, activeTab, onClick }) {

    // const [className, setClassName] = useState('tab-list-item')

    // useEffect(() => {
    //     if (activeTab === label) {
    //         setClassName(prev => prev += ' tab-list-active')
    //     } else {
    //         setClassName('tab-list-item')
    //     }
    // }, [activeTab, label])

    const onTabClick = () => {
        onClick(label)
    }
    return (
        <>
            <li className={`${activeTab === label ? 'tab-list-active' : ''} tab-list-item`} onClick={onTabClick}>
                {label}
            </li>
        </>
    )
}

export default Tab
