//react 
import BannerHeadings from './bannerHeadings'

export default function Banner({bannerId, focused, date1, comments1, shares1, heading2, date2, comments2, shares2})    {

    return (
        <div 
            style={{

                display: focused ? 'block' : 'none'
            }}
            className='bg-white w-full flex flex-col rounded-xl'>
            <div className='pt-4 pb-4'>
                <BannerHeadings
                    date={date1}
                    comment={comments1}
                    shares={shares1}
                />
                <BannerHeadings 
                    date={date2}
                    comment={comments2}
                    shares={shares2}
                />
            </div>
        </div>
    );
}