import { SlLayers } from "react-icons/sl";
import { PiCopySimpleThin } from "react-icons/pi";
import { PiShieldCheck } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import { TbGrid3X3 } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";

import JoinSvg from '../assets/illustrations/join.svg?react'
import CollectSvg from '../assets/illustrations/collect.svg?react'
import TradeSvg from '../assets/illustrations/trade.svg?react'
import CommunitySvg from '../assets/illustrations/community.svg?react'

export const styles = {
    paddingX: "px-5 md:px-10 lg:px-12 xl:px-[130px]",
    paddingY: 'py-14 md:py-20',
    maxWidth: 'max-w-7xl mx-auto relative',
    flex: 'flex flex-col md:flex-row  gap-y-8 items-center',
    img: 'w-[300px] mx-auto md:w-full md:h-full'
}

export const animationVariants = {
    fadeIn: {
        initial: {opacity: 0},
        animate: {opacity: 1, transition: { delay: 1, duration: 1}}
    },
    slideInLeft: {
        initial: {opacity: 0, x: -50},
        animate: {opacity: 1, x: 0, transition: { delay: 0.5}}
    },
    slideInRight: {
        initial: {opacity: 0, x: 50},
        animate: {opacity: 1, x: 0, transition: { delay: 0.5}}
    },
    slideDown: {
        initial: {opacity: 0, y: -100},
        animate: {opacity: 1, y: 0, transition: { delay: 0.5}}
    },
    slideUp: {
        initial: {opacity: 0, y: 100},
        animate: {opacity: 1, y: 0, transition: { delay: 0.5, duration: 1}}
    },
    slideUpList: {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5 * index
            }
        })
    },
    slideLeftList: {
        initial: {
            opacity: 0,
            x: 100
        },
        animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5 * index
            }
        })
    },
    zoomIn: {
        initial: {
            opacity: 0,
            transform: 'scale(0)'
        },
        animate: (index) => ({
            opacity: 1,
            transform: 'scale(100%)',
            transition: {
                delay: 0.25 * index
            }
        })
    }
}

export const navLinks = [
    {
        id: 'n001',
        title: 'Home',
        link: '/',
        subLinks: [
            {
                id: 'sn001',
                title: 'Main home',
                link: '/',
            },
            {
                id: 'sn002',
                title: 'Home article',
                link: '/',
            },
            {
                id: 'sn003',
                title: 'Home particle',
                link: '/',
            },
        ]
    },
    {
        id: 'n002',
        title: 'About',
        link: '/about'
    },
    {
        id: 'n003',
        title: 'Services',
        link: '/services'
    },
    {
        id: 'n006',
        title: 'Contact',
        link: '/contact'
    }
]

export const features = [
    {
        id: 'f001',
        icon: SlLayers,
        header: 'Transparency',
        text: 'Cryptography, encryption process of transforming information referred to as plain text.'
    },
    {
        id: 'f002',
        icon: PiCopySimpleThin,
        header: 'Transparency',
        text: 'Cryptography, encryption process of transforming information referred to as plain text.'
    },
    {
        id: 'f003',
        icon: PiShieldCheck,
        header: 'Transparency',
        text: 'Cryptography, encryption process of transforming information referred to as plain text.'
    },
]

export const works = [
    {
        id: 'w001',
        num: '01',
        svg: JoinSvg,
        header: 'Join Crypto',
        text: 'Lorem ipsum dolor sit amet consectetur consectetur adipisicing.'
    },
    {
        id: 'w002',
        num: '02',
        svg: CollectSvg,
        header: 'Join Crypto',
        text: 'Lorem ipsum dolor sit amet consectetur consectetur adipisicing.'
    },
    {
        id: 'w003',
        num: '03',
        svg: TradeSvg,
        header: 'Join Crypto',
        text: 'Lorem ipsum dolor sit amet consectetur consectetur adipisicing.'
    },
    {
        id: 'w004',
        num: '04',
        svg: CommunitySvg,
        header: 'Join Crypto',
        text: 'Lorem ipsum dolor sit amet consectetur consectetur adipisicing.'
    },
]

export const bestFeatures = [
    {
        id: 'fb001',
        icon: GoGift,
        iconCol: '#0ea5e9',
        header: 'early bonus cash',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, sint voluptas! Eligendi sit officia atque nemo hic! Voluptatibus, maxime officia! Nesciunt, iusto corporis! Ea hic quo libero blanditiis inventore voluptatem!'
    },
    {
        id: 'fb002',
        icon: GoShieldCheck,
        iconCol: '#4ade80',
        header: 'early bonus cash',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, sint voluptas! Eligendi sit officia atque nemo hic! Voluptatibus, maxime officia! Nesciunt, iusto corporis! Ea hic quo libero blanditiis inventore voluptatem!'
    },
    {
        id: 'fb003',
        icon: TbGrid3X3,
        iconCol: '#f59e0b',
        header: 'early bonus cash',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, sint voluptas! Eligendi sit officia atque nemo hic! Voluptatibus, maxime officia! Nesciunt, iusto corporis! Ea hic quo libero blanditiis inventore voluptatem!'
    },
]

export const skills = [
    {
        id: 's001',
        title: 'Digital art',
        percent: '90%'
    },
    {
        id: 's002',
        title: 'Support',
        percent: '80%'
    },
    {
        id: 's003',
        title: 'Marketing',
        percent: '85%'
    },
    {
        id: 's004',
        title: 'Blockchain',
        percent: '70%'
    },
]

export const stats = [
    {
        id: 'stat001',
        num: '$38.98 M+',
        suffix: '',
        preffix: '',
        title: 'Digital Products'
    },
    {
        id: 'stat002',
        num: '680 K+',
        suffix: '',
        preffix: '',
        title: 'Happy Active Users'
    },
    {
        id: 'stat03',
        num: '$380 M+',
        suffix: '',
        preffix: '',
        title: 'Transections Done'
    },
    {
        id: 'stat004',
        num: '150 K+',
        suffix: '',
        preffix: '',
        title: 'Community BTC'
    },
]

export const servList = [
    {
        id: 'sl001',
        header: 'NFT development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod quis temporibus in? Iure sunt quod officiis esse laborum, quidem magnam voluptatibus.'
    },
    {
        id: 'sl002',
        header: 'NFT development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod quis temporibus in? Iure sunt quod officiis esse laborum, quidem magnam voluptatibus.'
    },
    {
        id: 'sl003',
        header: 'NFT development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod quis temporibus in? Iure sunt quod officiis esse laborum, quidem magnam voluptatibus.'
    },
    {
        id: 'sl004',
        header: 'NFT development',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod quis temporibus in? Iure sunt quod officiis esse laborum, quidem magnam voluptatibus.'
    },
]