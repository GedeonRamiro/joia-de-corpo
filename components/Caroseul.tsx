import Image from 'next/image';

type Slides = {
    id: string;
    url: string;
    description: string;
};

type ContentPros = {
    slides: Slides[];
};

const Caroseul = ({ slides }: ContentPros) => {
    return (
        <div className='carousel w-full'>
            {slides.map((slide, index) => (
                <>
                    <div
                        id={`slide${index + 1}`}
                        key={slide.id}
                        className='carousel-item relative w-full'
                    >
                        <Image
                            className='sm:rounded-b-lg'
                            src={slide.url}
                            alt={slide.description}
                            width='1550'
                            height='700'
                            objectFit='cover'
                            placeholder='blur'
                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8J1k1GwAFHAH+8T2VRwAAAABJRU5ErkJggg=='
                        ></Image>
                        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                            {index === 0 ? (
                                <a
                                    href={`#slide` + `${index}`}
                                    className='btn btn-sm btn-disabled sm:btn-md bg-pink-400 opacity-30 border-none btn-circle'
                                >
                                    ❮
                                </a>
                            ) : (
                                <a
                                    href={`#slide` + `${index}`}
                                    className='btn btn-sm sm:btn-md hover:bg-pink-500 bg-pink-400 opacity-90 border-none btn-circle'
                                >
                                    ❮
                                </a>
                            )}
                            {index === slides.length - 1 ? (
                                <a
                                    href={`#slide` + `${index + 2}`}
                                    className='btn btn-sm btn-disabled sm:btn-md bg-pink-400 opacity-30 border-none btn-circle'
                                >
                                    ❯
                                </a>
                            ) : (
                                <a
                                    href={`#slide` + `${index + 2}`}
                                    className='btn btn-sm sm:btn-md hover:bg-pink-500 bg-pink-400 opacity-90 border-none btn-circle'
                                >
                                    ❯
                                </a>
                            )}
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default Caroseul;
