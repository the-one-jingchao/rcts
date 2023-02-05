import React from 'react';
import './index.less'

type HomePropsType = {};
const openUrl = (url:any):void => {
    if(url)
        window.open(url, '_blank');
}

// 头部导航
interface menuText {
    [key: string]: any,
    text: string,
    url: string,
    subText: string,
    ac: boolean
}
const menuLst: menuText[] = [
    {
        text: 'Marketplace',
        subText: 'COMING SOON',
        ac: false,
        url: '',
    },
    {
        text: 'Docs',
        subText: '',
        ac: false,
        url: 'https://docs.rentfun.io/',
    },
    {
        text: 'Forum',
        subText: '',
        ac: false,
        url: 'https://forum.rentfun.io/',
    },
    {
        text: 'Blog',
        subText: '',
        ac: false,
        url: 'https://mirror.xyz/rentfun.eth',
    },
    {
        text: 'Join Discord',
        subText: '',
        ac: true,
        url: 'https://discord.com/invite/P6gZVZByFG',
    }
];
const THead:React.FC<HomePropsType> = () => {
    const className = (menu: any) => {
        let className = 't-menu';
        if(menu.ac)
            className += ' ac';
        if(menu.url)
            className += ' cursor';
        return className;
    }
    return(
        <div className="t-head">
            <img className="t-logo" src={require('./images/logo.png')} alt=""/>
            {
                menuLst.map((menu: menuText, idx: number) => {
                    return <span onClick={openUrl.bind(this, menu.url)} className={className(menu)} key={`thead${idx}`}>
                        {menu.text}
                        <span className={['subText', menu.subText ? 'show' : ''].join(' ')}>{menu.subText}</span>
                    </span>
                })
            }
        </div>
    )
}


const TPublicBlock: React.FC<HomePropsType> = () => {
    return(
        <div className="t-block-tooter">
            <span className="t-block-rent">Early Birds Get The Worm ($RENT)</span>
            <img onClick={openUrl.bind(this, "https://discord.com/invite/P6gZVZByFG")} className="t-block-icon" src={require("./images/t1/t1-discord.png")} alt=""/>
            <span onClick={openUrl.bind(this, "https://discord.com/invite/P6gZVZByFG")} className="t-block-text">Discord</span>
            <span className="t-block-division">|</span>
            <img onClick={openUrl.bind(this, "https://twitter.com/rentfun_io")} className="t-block-icon" src={require("./images/t1/t1-twitter.png")} alt=""/>
            <span onClick={openUrl.bind(this, "https://twitter.com/rentfun_io")} className="t-block-text">Twitter</span>
            <img className="t-block-coin" src={require("./images/t1/t1-coin.png")} alt=""/>
        </div>
    )
}

// 内容1
const TSection1:React.FC<HomePropsType> = () => {
    return(
        <div className="t-block t1 flex between">
            <div className="t1-left">
                <div className="t1-title">Liquidity for <br/> NFT Utility</div>
                <div className="t1-sub-title">
                    Renting <span>Original</span> NFTs Through <span>Access</span> <br/>
                    <span>Delegation</span> on
                    <img className="t1-title-icon" src={require(("./images/t1/t1-title.png"))} alt=""/>
                    <label>ARBITRUM</label>
                </div>
            </div>
            <div className="t1-right">
                <img className="t1-point" src={require("./images/t1/t1-bg.png")} alt=""/>
                <img className="t1-r-1" src={require("./images/t1/t1-r-1.png")} alt=""/>
                <div className="t1-r-2">
                    <img src={require("./images/t1/t1-r-2-icon.png")} alt=""/>
                    <div className="t1-r-eth">0.004ETH</div>
                    <div className="t1-r-rent">RENT</div>
                </div>
                <div className="t1-r-3">
                    <div className="t1-r-3-bg">
                        <img className="t1-r-3-icon" src={require("./images/t1/t1-r-3-icon.png")} alt=""/>
                        <div className="t1-r-eth">0.006ETH</div>
                        <div className="t1-r-rent">RENT</div>
                    </div>
                    <span className="t1-3-line-1"></span>
                    <span className="t1-3-line-2"></span>
                    <span className="t1-3-line-3"></span>
                    <span className="t1-3-line-4"></span>
                    <span className="t1-3-line-5"></span>
                    <span className="t1-3-line-6"></span>
                    <span className="t1-3-line-7"></span>
                </div>
                <div className="t1-r-4-bg"></div>
                <img className="t1-r-4" src={require("./images/t1/t1-r-4.png")} alt=""/>
            </div>
            <TPublicBlock />
        </div>
    )
}


// 内容2
interface t2Block {
    [key: string]: any,
    title: string,
    url: string,
}
const t2Data: t2Block[] = [
    {
        title: "Play to earn in the Treasure Games?",
        url: require("./images/t2/t2-1.png"),
    },
    {
        title: "Have fun in the Arbitrum Games?",
        url: require("./images/t2/t2-2.png"),
    },
    {
        title: "Experience having a Smol with over 2500 IQ?",
        url: require("./images/t2/t2-3.png"),
    },
    {
        title: "Build metaverse on a virtual Land on Arbitrum?",
        url: require("./images/t2/t2-4.png"),
    }
];
const TSection2:React.FC<HomePropsType> = () => {
    return(
        <div className="t-block t-public-padding">
            <div className="t-public-title">Uncollateralized Marketplace</div>
            <div className="t-public-title sub">When you want to</div>
            <div className="t2-block">
                {
                    t2Data.map((item: t2Block, idx: number) => {
                       return  <div className="t2-content" key={`t2${idx}`}>
                           <div className="t2-bg">
                                <div className="t2-c-title">{item.title}</div>
                                <div className="t2-c-img"><img src={item.url} alt=""/></div>
                           </div>
                       </div>
                    })
                }
            </div>
            <div className="t2-footer">
                Don’t buy related NFTs first! <br/>
                Try <span>RentFun</span> to rent <span>Original</span> NFTs and experience it first!
            </div>
        </div>
    )
}


//  内容3
interface t3Block {
    [key: string]: any,
    title: string,
    url: string,
    description: string,
}
const t3Data: t3Block[] = [
    {
        title: "No Collaterals Required",
        url: require("./images/t3/t3-1.png"),
        description: "RentFun will not require any kind of collateral from the renters, just the rental fees charged from lenders.",
    },
    {
        title: "Rent 100% Original NFTs",
        url: require("./images/t3/t3-2.png"),
        description: "RentFun will not issue any kind of wrapped NFTs to the renter. The renters may rent the 100% original NFTs on RentFun’s marketplace.",
    },
    {
        title: "Fully Secure for Lenders’ NFT",
        url: require("./images/t3/t3-3.png"),
        description: "RentFun creates an Access Delegation Protocol so that renters will only have the access rights of lender’s NFT to login and interact with the NFT issuers’ platform.",
    },
    {
        title: "Automatic Rewards Split",
        url: require("./images/t3/t3-4.png"),
        description: "RentFun could support lenders to set the reward sharing percentage from rewards earned by renters with the NFT rented, and automatically claim the accrued rewards.",
    }
];
const TSection3:React.FC<HomePropsType> = () => {
    return(
        <div className="t-block t-public-padding p">
            <div className="t-public-title">Features</div>
            <div className="t3-block">
                {
                    t3Data.map((item: t3Block, idx: number) => {
                        return <div className="t3-content" key={`t3${idx}`}>
                            <div className="t3-c-img"><img className={[idx === 0 ? 'i1' : '', idx === 2 ? 'i3' : ''].join(' ')} src={item.url} alt=""/></div>
                            <div className="t3-c-title">{item.title}</div>
                            <div className="t3-c-description">{item.description}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}


//  内容4
interface t4Block {
    [key: string]: any,
    url: string,
    description: string,
}
const t4Data: t4Block[] = [
    {
        url: require("./images/t4/t4-1.png"),
        description: "NFT Owner Alice creates a contract address which is 100% under her control on the RentFun Platform ",
    },
    {
        url: require("./images/t4/t4-2.png"),
        description: "Alice transfers the NFTs she want to lend out into this contract address;",
    },
    {
        url: require("./images/t4/t4-3.png"),
        description: "Alice delegates the access right of this contract address to Renter Bob. After that, Both Alice and Bob have no rights to transfer the NFTs within this contract address.",
    },
    {
        url: require("./images/t4/t4-4.png"),
        description: "Bob could login original NFT issued projects like games or metaverses which will identify Bob as a user of the rented NFT through RentFun’s SDK.",
    },
    {
        url: require("./images/t4/t4-5.png"),
        description: "When the renting period ends, the access delegation between Alice’s NFT and Bob will end automatically. Bob will have no access rights to Alice's NFT any more.",
    }
];
const TSection4:React.FC<HomePropsType> = () => {
    return(
        <div className="t-block t-public-padding p">
            <div className="t-public-title">How It Works</div>
            <div className="t-public-title sub">
                RentFun’s <span>Access Delegation Protocol</span> allows the NFT owners to easily and safely delegate the access rights of the NFTs to renters without losing their ownership.
            </div>
            <div className="t4-block">
                {
                    t4Data.map((item: t4Block, idx: number) => {
                        if(idx%2 === 0){
                            return <div className="t4-list" key={`t4${idx}`}>
                                <div className="t4-l-bg">
                                    <div className="t4-bg">
                                        <img src={item.url} alt=""/>
                                    </div>
                                </div>
                                <div className="t4-l-num">{idx + 1}</div>
                                <div className="t4-l-description">{item.description}</div>
                            </div>
                        } else {
                            return <div className="t4-list n" key={`t4${idx}`}>
                                <div className="t4-l-num">{idx + 1}</div>
                                <div className="t4-l-description">{item.description}</div>
                                <div className="t4-l-bg">
                                    <div className="t4-bg">
                                        <img src={item.url} alt=""/>
                                    </div>
                                </div>
                            </div>
                        }
                    })
                }
            </div>
            <div className="t4-read">
                <span onClick={openUrl.bind(this, "https://docs.rentfun.io/")}>READ MORE</span>
            </div>
        </div>
    )
}


//  内容5
interface t5Block {
    [key: string]: any,
    url: string,
    description: string,
    title: string,
}
const t5Data: t5Block[] = [
    {
        url: require("./images/t5/t5-1.png"),
        title: "2022 Q4",
        description: "Project Establishment",
    },
    {
        url: require("./images/t5/t5-2.png"),
        title: "2023 Q1",
        description: "Official Website Launch",
    },
    {
        url: require("./images/t5/t5-3.png"),
        title: "2023 Q1",
        description: "Development & Marketing Launch",
    },
    {
        url: require("./images/t5/t5-4.png"),
        title: "2023 Q2",
        description: "Access Delegation Protocol Testnet Launch",
    },
    {
        url: require("./images/t5/t5-5.png"),
        title: "2023 Q2",
        description: "Marketplace Testnet Release",
    },
    {
        url: require("./images/t5/t5-6.png"),
        title: "2023 Q3",
        description: "Security Audit",
    },
    {
        url: require("./images/t5/t5-7.png"),
        title: "2023 Q3",
        description: " Marketplace Mainnet Beta Launch",
    },
    {
        url: require("./images/t5/t5-8.png"),
        title: "2023 Q4",
        description: "Eureka Club for RentFun SBT Holders Release",
    }
];
const TSection5:React.FC<HomePropsType> = () => {
    const className = (idx: number) => {
        switch (idx) {
            case 0:
                return 'i1';
            case 1:
                return 'i2';
            case 3:
                return 'i4';
            case 5:
                return 'i6';
            case 6:
                return 'i7';
            case 7:
                return 'i8';
            default:
                return '';
        }
    }
    return (
        <div className="t-block t-public-padding p">
            <div className="t-public-title">Roadmap</div>
            <div className="t5-block">
                {
                    t5Data.map((item: t5Block, idx: number) => {
                        if(idx%2 === 0){
                            return <div className="t5-list" key={`t5${idx}`}>
                                <div className="t5-l-title">{item.title}</div>
                                <div className="t5-l-description">{item.description}</div>
                                <div className="t5-l-light">
                                    <img className={[ className(idx) ].join(' ')} src={item.url} alt=""/>
                                </div>
                                <div className="t5-l-bg"></div>
                                <div className="t5-line"></div>
                            </div>
                        } else {
                            return <div className="t5-list n" key={`t5${idx}`}>
                                <div className="t5-l-title">{item.title}</div>
                                <div className="t5-l-description">{item.description}</div>
                                <div className="t5-l-light">
                                    <img className={[ className(idx) ].join(' ')} src={item.url} alt=""/>
                                </div>
                                <div className="t5-l-bg"></div>
                                <div className={[ 't5-line', idx === 7 ? 'none' : '' ].join(' ')}></div>
                            </div>
                        }
                    })
                }
            </div>
            <TPublicBlock />
        </div>
    )
}


//  底部
const TFoot:React.FC<HomePropsType> = () => {
    return(
        <div className="t-block t-public-padding p center">
            <div className="t-f-icon">
                <img src={require("./images/foot/f1.png")} alt=""/>
                <img className="f2" src={require("./images/foot/f2.png")} alt=""/>
                <img src={require("./images/foot/f3.png")} alt=""/>
            </div>
            <div className="t-f-text">contact@rentfun.io</div>
            <div className="t-f-logo">
                <img src={require("./images/logo.png")} alt=""/>
            </div>
        </div>
    )
}

const Home:React.FC<HomePropsType> = () => {
    return (
        <div className="t-home-section">
            <div className="t-section h">
                <THead />
            </div>
            <div className="t-section s1">
                <TSection1 />
            </div>
            <div className="t-section s2">
                <TSection2 />
            </div>
            <div className="t-section s3">
                <TSection3 />
            </div>
            <div className="t-section s4">
                <TSection4 />
            </div>
            <div className="t-section s5">
                <TSection5 />
            </div>
            <div className="t-section f">
                <TFoot />
            </div>
        </div>
    );
}

export default Home;
