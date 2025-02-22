import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Repay from '../components/Repay';
import ViewTransactions from '../components/ViewTransactions';
import ViewBalance from '../components/ViewBalance';
import LendMoney from '../components/LendMoney';
import BorrowMoney from '../components/BorrowMoney';
import Main from '../components/Main';
// sdvds
const DashBoard = () => {
    const location = useLocation();
    const [tag, setTag] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const currentTag = params.get('tag');
        setTag(currentTag || "");
    }, [location.search]);

    return (
        <div className='min-h-screen flex flex-col md:flex-row bg-slate-100'>
            <div className='w-full md:w-56'>
                <SideBar />
            </div>
            {/* {tag == 'transactions' && <ViewTransactions />} */}
            {tag == 'borrow' && <BorrowMoney />}
            {tag == "lend" && <LendMoney />}
            {tag == "repay" && <Repay />}
            {/* {tag == "balance" && <ViewBalance />} */}
            {tag == "home" && <Main />}

        </div>
    );
};

export default DashBoard;