import Image from 'next/image'
import Link from 'next/link'

const SingleCreativeMind = ({
    creativemind,
}: {
    creativemind: any
}) => {
    const { image, name, position, linkedinLink, portfolioLink, mailLink } = creativemind

    return (
        <div
            className='group flex flex-col items-center gap-5 p-6 max-w-80 rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg'>
            <div className='relative h-36 w-36 overflow-hidden rounded-full border border-dark_black/5 dark:border-white/10 bg-white/80 dark:bg-white/5'>
                <Image
                    src={image}
                    alt={name}
                    width={625}
                    height={410}
                    className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]'
                />
            </div>
            <div className='flex flex-col gap-3 items-center text-center'>
                <div className='flex flex-col gap-1 items-center'>
                    <p className='font-medium text-lg'>{name}</p>
                    <p className='text-sm text-dark_black/60 dark:text-white/60'>
                        {position}
                    </p>
                </div>
                <div className='flex gap-3'>
                    <Link
                        href={linkedinLink}
                        className='flex items-center justify-center h-10 w-10 rounded-full border border-dark_black/10 dark:border-white/10 text-dark_black/60 dark:text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-purple_blue hover:border-purple_blue'
                        aria-label='LinkedIn'
                        target='_blank' rel='noopener noreferrer'>
                        <svg width='18' height='18' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                            <g clipPath='url(#clip0_1_675)'>
                                <path d='M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z' fill='currentColor'/>
                            </g>
                            <defs>
                                <clipPath id='clip0_1_675'>
                                    <rect width='20' height='20' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                    <Link
                        href={portfolioLink}
                        className='flex items-center justify-center h-10 w-10 rounded-full border border-dark_black/10 dark:border-white/10 text-dark_black/60 dark:text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-purple_blue hover:border-purple_blue'
                        aria-label='Portfolio'
                        target='_blank' rel='noopener noreferrer'>
                        <svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                            <path d='M4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                            <path d='M16 3H8C6.89543 3 6 3.89543 6 5V7H18V5C18 3.89543 17.1046 3 16 3Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg>
                    </Link>
                    <Link
                        href={`mailto:${mailLink}`}
                        className='flex items-center justify-center h-10 w-10 rounded-full border border-dark_black/10 dark:border-white/10 text-dark_black/60 dark:text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-purple_blue hover:border-purple_blue'
                        aria-label='Mail'
                        target='_blank' rel='noopener noreferrer'>
                        <svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                            <path d='M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                            <path d='M22 6L12 13L2 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCreativeMind
