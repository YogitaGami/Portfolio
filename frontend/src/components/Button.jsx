import React from 'react'

const Button = ({title,link}) => {
  return (
    <div>
      <button>
            <a
              href={link}
              className="max-sm:text-[10px] sm:text-xs md:text-sm text-base lg:text-base max-sm:mt-2 sm:mt-4 md:mt-6 lg:mt-8 px-1 sm:px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd] rounded-lg md:rounded-xl hover:border-[#0ffbfd] border-[1px] border-x-[#0ffbfd] border-y-[#00577e] cursor-pointer"
            >
              {title}
            </a>
          </button>
    </div>
  )
}

export default Button
