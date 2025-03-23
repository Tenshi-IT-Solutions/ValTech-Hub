import React from 'react'
import YouTube from 'react-youtube'
import ReactMarkdown from 'react-markdown'

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay:0,
    },
};

function ChapterContent({chapter,content}) {
    
    
  return (
    <div className='p-10 '>
        <h2 className='font-medium text-2xl'>{chapter?.ChapterName}</h2>
        <p className='text-gray-500'>{chapter?.About}</p>

        {/* Video */}
        <div className='flex justify-center my-6'>
            <YouTube videoId={content?.videoID} opts={opts} />
        </div>

        <div>
            {content?.content?.sections.map((item,index)=>(
                <div key={index} className='p-5 bg-slate-50 mb-3 rounded-lg whitespace-pre-wrap'>
                    <h2 className='font-medium text-lg'>{item?.title}</h2>
                    <ReactMarkdown>{item?.description}</ReactMarkdown>
                    
                    {item?.code_example&&<div className='p-4 mt-3 bg-slate-600 text-white rounded-md '>
                        <pre>
                            <code>
                                {item?.code_example?.code?item?.code_example?.code:item?.code_example}
                            </code>
                        </pre>
                    </div>}
                    
                </div>
            ))}
        </div>

        {/* content */}

    </div>
  )
}

export default ChapterContent
